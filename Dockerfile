FROM nginx
#COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 80

# docker build -t my-angular-app .
# docker run -p 80:80 --rm my-angular-app
