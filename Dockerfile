FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build


FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["yarn", "start"]