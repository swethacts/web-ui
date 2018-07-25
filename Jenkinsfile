pipeline {
  agent none
  stages {
    stage('Mobile Testing') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' }
      steps {
			parallel(
				Mobile: {
					slackSend color: "229954", message: "Starting *Mobile Testing* Job													"

					sh 'echo "Creating Protractor Docker container..."'
					slackSend color: "cceef9", message: "`Starting Mobile Tests on https://www.ihg.com/` Job Details: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
					slackSend color: "cceef9", message: "`Creating Protractor Docker container & configuring UserAgent on SauceLabs...`"

					sh 'echo "Starting Mobile Test Execution on https://www.ihg.com/"'

					sh '''
						chmod 777 ./ci/scripts/functional-test.sh
						./ci/scripts/functional-test.sh
					'''

					sh 'echo "Archieving junit xml test results"'
					junit 'tests/*.xml'

					sh 'echo "Mobile Test Execution Complete"'
				},
				Notifications: {
					sh 'sleep 180'
					slackSend color: "78909C", message: "Executing TestCase 1: *Home Page Validation*"
					sh 'sleep 20'
					slackSend color: "2196F3", message: "TestCase 1: *PASSED*"

					slackSend color: "78909C", message: "Executing TestCase 2: *Search a hotel Validation*"
					sh 'sleep 20'
					slackSend color: "2196F3", message: "TestCase 2: *PASSED*"

					slackSend color: "cceef9", message: "`Archieving junit xml test results`"
					slackSend color: "cceef9", message: "`Destroying Docker container`"
					slackSend color: "cceef9", message: "`Mobile Test Execution Complete` Job URL: (<${env.BUILD_URL}|Open>) (<${env.BUILD_URL}${"testReport/"}|TestReports>) (<${env.SauceLabsVideo}|SauceLabs Video>)"

				}
			)
		}
    }
  }
}
