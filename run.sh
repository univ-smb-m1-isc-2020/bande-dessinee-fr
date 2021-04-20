#!/bin/bash
sleep 10s
nginx
sleep 10s
dotnet backend.dll
sleep 10s
nginx
exec "$@"