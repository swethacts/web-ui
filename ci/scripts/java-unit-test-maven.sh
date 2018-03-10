#!/bin/bash

set -e -x

ls -ltr

cd web-ui

ls -ltr

mvn test

echo "Unit Tests Complete"