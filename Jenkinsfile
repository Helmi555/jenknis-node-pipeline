pipeline {
    agent { 
        label 'nodejs-agent'
    }
    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'java -version'
            }
        }
        stage('Build') {
            steps {
                echo '📦 Building...'
                sh '''
                    cd jenkins-nodejs
                    npm install
                '''
            }
        }
        stage('Test') {
            steps {
                echo '🧪 Testing...'
                sh 'npm test'
            }
        }
        stage('Deliver') {
            steps {
                echo '🚚 Delivering (Docker build, deploy, etc.)'
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
