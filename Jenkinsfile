pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    def remote = [:]
                    remote.name = 'Production Server'
                    remote.host = '172.17.0.1' // Docker 호스트 IP
                    remote.user = 'root'
                    remote.allowAnyHosts = true

                    withCredentials([sshUserPrivateKey(credentialsId: 'deploy-key', keyFileVariable: 'IDENTITY_FILE', usernameVariable: 'USER')]) {
                        remote.identityFile = IDENTITY_FILE

                        if (env.BRANCH_NAME == 'main') {
                            echo "🚀 Deploying apnhi to Production (main branch)..."
                            sshCommand remote: remote, command: """
                                cd /home/apnhi
                                git fetch --all
                                git reset --hard origin/main
                                chmod +x deploy.sh
                                ./deploy.sh
                            """
                        }
                        else {
                            echo "Skipping deployment for branch: ${env.BRANCH_NAME}"
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
            mail to: 'ohsjwe@gmail.com',
                 from: 'Apnhi <noreply@tmanager.kr>',
                 subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """
Build Successful!
Project: ${env.JOB_NAME}
Build Number: #${env.BUILD_NUMBER}
Branch: ${env.BRANCH_NAME}
Build URL: ${env.BUILD_URL}
"""
        }
        failure {
            echo "❌ Deployment Failed!"
            mail to: 'ohsjwe@gmail.com',
                 from: 'Apnhi <noreply@tmanager.kr>',
                 subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """
Build Failed!
Project: ${env.JOB_NAME}
Build Number: #${env.BUILD_NUMBER}
Branch: ${env.BRANCH_NAME}
Build URL: ${env.BUILD_URL}
Check console output for details.
"""
        }
    }
}
