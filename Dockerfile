FROM node:18-alpine
COPY . .
RUN yarn install && yarn build
EXPOSE 3000
CMD ["yarn", "start"]
