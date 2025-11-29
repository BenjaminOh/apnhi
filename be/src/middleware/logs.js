const parseurl = require('parseurl');
const { Op } = require('sequelize');
const { i_logs } = require('../models');
const { accessVerify } = require('../middleware/jwt');
const multer = require('multer');

exports.logs = async (req, res, next) => {
    const authHeader = req.get('Authorization') || ' ';

    let decodedTokenUser = null;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        let decodedToken = null;
        decodedToken = accessVerify(token);
        if (decodedToken.decoded !== null) {
            decodedTokenUser = decodedToken.decoded.user;
        }
    }

    //const previousUrl = req.headers.referer;
    const previousUrl = parseurl(req).path;
    const clientIp = req.clientIp;
    const userAgent = req.get('user-agent');

    //const normalizedClientIp = clientIp.substring(clientIp.lastIndexOf(':') + 1);
    const normalizedClientIp = clientIp.includes(':') ? clientIp.split(':').pop() : clientIp;

    try {
        if (!req.path.startsWith('/api-docs')) {
            // console.log('previousUrl:', previousUrl);
            // console.log('clientIp:', normalizedClientIp);
            //    console.log('userAgent:', userAgent);

            let bodyLog = null;
            const contentType = req.get('content-type') || '';

            if (contentType.includes('multipart/form-data')) {
                // 원본 req를 복사해서 multer 처리
                const tempReq = Object.create(req);
                const tempRes = Object.create(res);

                bodyLog = await new Promise(resolve => {
                    multer().any()(tempReq, tempRes, err => {
                        if (err) {
                            resolve(null);
                            return;
                        }

                        if (tempReq.body && Object.keys(tempReq.body).length > 0) {
                            resolve(JSON.stringify(tempReq.body));
                        } else {
                            resolve(null);
                        }
                    });
                });
            } else {
                bodyLog = req.body && Object.keys(req.body).length > 0 ? JSON.stringify(req.body) : null; // body입력값 확인 추가
            }

            // 4바이트 UTF-8 문자(이모지 등) 제거하여 데이터베이스 호환성 확보
            if (bodyLog) {
                // 4바이트 UTF-8 문자를 제거하는 함수
                bodyLog = bodyLog.replace(/[\u{10000}-\u{10FFFF}]/gu, '');
                // 또는 대체 문자로 변환: bodyLog = bodyLog.replace(/[\u{10000}-\u{10FFFF}]/gu, '?');
            }

            const log = await i_logs.create({
                user: decodedTokenUser,
                clientIp: normalizedClientIp,
                userAgent: userAgent,
                previousUrl: previousUrl,
                bodyLog: bodyLog,
            });
        }
    } catch (err) {
        // 로그 저장 실패는 애플리케이션 동작에 영향을 주지 않도록 에러를 무시
        // 응답이 이미 전송되었을 수 있으므로 next(err)를 호출하지 않음
        console.error('로그 저장 실패:', err.message);
        // next(err)를 호출하지 않아서 에러가 전파되지 않도록 함
    }
};
