pipeline {
    agent{
        node{
            label 'docker-agent-nodejs'
        }
    }

    triggers{
        pollSCM '* * * * *'
    }
    stages{
        stage('Build'){
            steps{
                echo 'Building...'
                sh '''
                cd jenkins-nodejs
                npm install
                '''
            }
        }
        stage('Test'){
            steps{
                echo 'Testing...'
                sh 'npm test'
            }
        }
        stage('Deliver'){
            steps{
                echo 'Delivery step (could be Docker build, deploy, etc.)'

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


}