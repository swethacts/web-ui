pipeline {
  agent none
  stages {
    stage('Version') {
	  agent { docker 'weremsoft/gulp-xvfb-headless-chrome-protractor' } 
      steps {
        sh 'echo "hello-world"'
        sh './ci/scripts/functional-test.sh'
		sh 'echo "bye-world"'
      }
    }
  }
}
