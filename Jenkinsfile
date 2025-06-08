pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }

    triggers {
        pollSCM('* * * * *')
    }

    stages {
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
