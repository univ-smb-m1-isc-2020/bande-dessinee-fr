docker rm fullcontainer -f
docker rm frontcontainer -f
docker rm backcontainer -f
docker rmi fullstack
docker rmi backend
docker rmi frontend
docker build -t fullstack .
docker build -t frontend frontend/.
docker build -t backend backend/.
docker run --name fullcontainer -d -p 8080:8080 fullstack
docker run --name frontcontainer -d -p 8081:8080 frontend
docker run --name backcontainer -d -p 8082:80 backend