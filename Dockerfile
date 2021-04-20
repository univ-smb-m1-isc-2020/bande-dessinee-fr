FROM nginx:alpine AS web
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY frontend/dist/frontend /usr/share/nginx/html
WORKDIR /app
COPY run.sh run.sh
EXPOSE 8080

#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["backend/backend.csproj", ""]
RUN dotnet restore "./backend.csproj"
COPY backend/. .
WORKDIR "/src/."
RUN dotnet build "backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=publish /app/publish .
COPY --from=web /etc/nginx/nginx.conf ../etc/nginx/nginx.conf
COPY --from=web /usr/share/nginx/html ../usr/share/nginx/html
COPY --from=web /app/run.sh /var/lib/run.sh
RUN chmod +x /var/lib/run.sh
ENTRYPOINT [ "/var/lib/run.sh"]
