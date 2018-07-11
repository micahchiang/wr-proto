FROM node:9.11.1-alpine as builder
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --prod

FROM nginx:1.13.12-alpine as production-builder
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/wildrook-proto /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
