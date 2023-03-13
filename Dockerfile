# Build
FROM node:18.15.0 as build 
WORKDIR /app 
COPY . .
RUN npm install 
RUN ng build --prod

# Serve
FROM nginx:latest 
COPY --from=build /app/dist/client /usr/share/nginx/html 
EXPOSE 80