FROM nginx:1.18.0-alpine
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY /frontend/dist/frontend /usr/share/nginx/html
EXPOSE 8080
