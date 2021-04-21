#!/bin/bash
echo "Starting....."

echo $(date -u)  "Login to github"
docker login -u visarsylejmani -p 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 docker.pkg.github.com

echo $(date -u) "Docker down"
docker-compose -f moncontainer.yml down

echo $(date -u) "Remove bande-dessinee-fr-backend"
docker rmi docker.pkg.github.com/univ-smb-m1-isc-2020/bande-dessinee-fr/bande-dessinee-fr-backend:latest -f

echo $(date -u) "Docker up"
docker-compose -f moncontainer.yml up --build -d
