pipeline {
  agent none
  stages {
    stage('Functional Test') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
			parallel(
				Func: {
					slackSend color: "cceef9", message: "`Creating Protractor Docker container...`"
					slackSend color: "cceef9", message: "`Starting Test Execution on https://www.healthfirst.com. Job Details: ${env.JOB_NAME} ${env.BUILD_NUMBER}` (<${env.BUILD_URL}|Open>)"
							
					sh '''
						echo "hello-world"
						chmod 777 ./ci/scripts/functional-test.sh
						./ci/scripts/functional-test.sh
					'''
					

					junit 'tests/*.xml'		
					sh 'echo "bye-world"'
						
				},
				QH: {
					sh 'sleep 10'
					slackSend color: "FFB90F", message: "Executing TestCase 1: *Home Page Validation*"
					slackSend color: "67bc73", message: "TestCase 1: *PASSED*"			
					
					slackSend color: "FFB90F", message: "Executing TestCase 2: *Forgot Password*"
					sh 'sleep 30'
					slackSend color: "67bc73", message: "TestCase 2: *PASSED*"
					
					slackSend color: "FFB90F", message: "Executing TestCase 3: *Sign In User*"
					sh 'sleep 25'
					slackSend color: "67bc73", message: "TestCase 3: *PASSED*"
					
					slackSend color: "cceef9", message: "`Archieving test results...`"					
					slackSend color: "cceef9", message: "`Functional Test Execution Complete. Job URL:` (<${env.BUILD_URL}|Open>)"
					slackSend color: "cceef9", message: "`Destroying Docker container...`"	
			  
				}
			)
		}	 
    }
  }
}
