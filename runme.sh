#!/bin/bash

docker build -t task01 .
docker run --publish 3000:3000
