FROM nginx:alpine
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY frontend/dist/frontend /usr/share/nginx/html
EXPOSE 8080
