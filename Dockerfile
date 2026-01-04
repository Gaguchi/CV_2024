# Serve the static website from dist folder with Nginx
FROM nginx:1.26.2-alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
