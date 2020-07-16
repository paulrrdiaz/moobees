# build environment
FROM node:13.7.0-alpine as build
RUN mkdir -p /home/temp
WORKDIR /home/temp
COPY ./package-lock.json ./package.json ./
RUN npm ci
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /home/temp/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
