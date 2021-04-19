#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/runtime:3.1 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["bande-dessinee-fr/bande-dessinee-fr.csproj", "bande-dessinee-fr/"]
RUN dotnet restore "bande-dessinee-fr/bande-dessinee-fr.csproj"
COPY . .
WORKDIR "/src/bande-dessinee-fr"
RUN dotnet build "bande-dessinee-fr.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "bande-dessinee-fr.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "bande-dessinee-fr.dll"]