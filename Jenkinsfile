pipeline {
      agent none
    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Check Dependencies') {
            agent { label 'nodejs-agent'}
            steps {
                sh 'node -v'
                sh 'java -version'
                sh 'ls'
            }
        }
        stage('Build') {
            agent { label 'nodejs-agent'}
            steps {
                echo '📦 Building...'
                sh '''
                    npm install
                '''
            }
        }
        stage('Test') {
                        agent { label 'nodejs-agent' }
            steps {
                sh 'npm test -- --coverage'
            }
        }
        stage('Deliver') {
            agent{ label 'jenkins-blueocean-docker-access' }
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
