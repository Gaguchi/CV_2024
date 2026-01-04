# Serve the static website with Nginx
FROM nginx:1.26.2-alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
