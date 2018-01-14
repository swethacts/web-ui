pipeline {
  agent none
  stages {
    stage('Version') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
        sh 'echo "hello-world"'
		sh 'chmod 777 ./ci/scripts/functional-test.sh'
        sh './ci/scripts/functional-test.sh'
		sh 'echo "bye-world"'
	  }
    }
  }
}
