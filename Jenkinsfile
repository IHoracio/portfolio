pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Pull latest changes from the branch configured in Jenkins
                checkout scm
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    echo "Building and updating frontend container..."
                    
                    # Force rebuild to ensure latest changes are applied
                    docker compose up -d --build portfolio-frontend
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Deployed successfully to port 8082.'
        }
        failure {
            echo 'Pipeline failed. Check docker logs.'
        }
    }
}
