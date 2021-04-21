#!/bin/bash
n=1

echo "Starting....."

while (( $n <= 5 ))
do
	echo $(date -u)  "Login to github"
	docker login -u gjambet -p 2dd8e030339c7cb2caedbd57fbf3a130e6a3e001 docker.pkg.github.com

	echo $(date -u) "Pull image"
	docker pull docker.pkg.github.com/univ-smb-m1-isc-2020/bande-dessinee-fr/bande-dessinee-fr-backend:latest

	echo $(date -u) "Docker down"
	docker-compose -f moncontainer.yml down

	echo $(date -u) "Remove bande-dessinee-fr-backend"
	docker rmi docker.pkg.github.com/univ-smb-m1-isc-2020/bande-dessinee-fr/bande-dessinee-fr-backend:latest -f
	
	echo $(date -u) "Docker down"
	docker-compose -f moncontainer.yml up --build -d

	sleep 20m
done
