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
                script{
                    try{
                        sh 'npm test'
                    }
                    catch(err){
                        echo "Test failed: ${err}, but continuing ..."
                        junit '**/test-results.xml'
                    }
    
            }
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
