#!/bin/bash

set -e -x

ls -ltr

cd web-ui

ls -ltr

mvn install

echo "Unit Tests Complete"