FROM nginx:alpine

# Copy the static export from the local dist folder
# This assumes 'npm run build' has been run locally or in a CI pipeline
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
