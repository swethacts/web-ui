pipeline {
  agent none
  stages {
    stage('Version') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
        sh 'echo "hello-world"'
		sh 'chmod 777 ./ci/scripts/functional-test.sh'
        sh './ci/scripts/functional-test.sh'
		junit '../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/testresults/*.xml'
		sh 'echo "bye-world"'
	  }
    }
  }
}
