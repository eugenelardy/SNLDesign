#!/bin/bash

START=$(date)

npm run build
firebase deploy

echo "build start: $START"
echo -n "build end  : "
date
