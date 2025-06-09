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
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npx jest --coverage'
            }
        }
        stage('Deliver') {
            agent any
            steps {
                echo '🚚 Delivering (Docker build, ...)'
               sh '''
                    # disable the old TLS settings
                    unset DOCKER_HOST DOCKER_CERT_PATH DOCKER_TLS_VERIFY

                    # confirm we see the socket
                    ls -l /var/run/docker.sock

                    # build & run
                    docker build -t my-node-app .
                    docker stop nodejs-pipeline-server || true
                    sleep 2
                    docker rm nodejs-pipeline-server || true
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
