export target='myconcourse'
export url='http://ec2-52-41-118-133.us-west-2.compute.amazonaws.com:8080/'
export pipelineName='dev-pipeline'
export pipelineymlpath='ci/pipeline.yml'

fly -t $target login -c $url
fly -t $target set-pipeline -p $pipelineName -c $pipelineymlpath