## Execute pipeline
```
fly -t $target login -c $url
fly -t $target set-pipeline -p $pipeline-name -c $pipelineymlpath

fly -t $target destroy-pipeline -p $pipeline-name
```