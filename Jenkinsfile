pipeline {
  agent none
  stages {
    stage('Version') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
		slackSend color: "67bc73", message: "`Creating Protractor Docker container...`"
		slackSend color: "67bc73", message: "`Starting Functional Test Execution. Job Details: ${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>)"
				
        sh '''
			echo "hello-world"
			chmod 777 ./ci/scripts/functional-test.sh
			./ci/scripts/functional-test.sh
		'''
		junit 'tests/*.xml'		
		sh 'echo "bye-world"'
		slackSend color: "67bc73", message: "`Destroying Docker container`"
		slackSend color: "67bc73", message: "`Functional Test Execution Complete. Job URL:` (<${env.BUILD_URL}|Open>)"
	  }
    }
  }
}
