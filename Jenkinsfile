pipeline {
  agent none
  stages {
    stage('Version') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
		slackSend "Creating Docker Container for Protractor..."
		slackSend color: "ff0000", message: "Starting Functional Test Execution - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
				
        sh '''
			echo "hello-world"
			chmod 777 ./ci/scripts/functional-test.sh
			./ci/scripts/functional-test.sh
		'''
		junit 'tests/*.xml'		
		sh 'echo "bye-world"'
		slackSend "Docker Container Destroyed"
		slackSend "Functional Test Execution Completed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
	  }
    }
  }
}
