pipeline {
      agent { label 'nodejs-agent' }
    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Check Dependencies') {
            steps {
                sh 'node -v'
                sh 'java -version'
                sh 'ls'
            }
        }
        stage('Build') {
            steps {
                echo '📦 Building...'
                sh '''
                    npm install
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --coverage'
            }
        }
        stage('Deliver') {
            steps {
                echo '🚚 Delivering (Docker build, ...)'
                sh '''
                docker build -t my-node-app .
                docker run -d --rm -p 8081:3000 --name nodejs-pipeline-server my-node-app
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build succeeded!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
