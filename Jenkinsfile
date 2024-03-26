pipeline {
    agent any
    tools { nodejs "node" }
    stages {
        stage('Download repository from GitHub'){
            steps{
                git 'https://github.com/yohovani/React-Task-Manager.git'
                sh 'rm -R dist'
            }
        }
        stage('Build React APP'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Copy files to local machine') {
            steps {
                sh 'whoami'
                script {
                    sh 'cp -r dist/* /var/www/html/React-Task-Manager/'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline successfully executed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
