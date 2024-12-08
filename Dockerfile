FROM node:20-alpine as builder

ARG HOST
ARG SUPERTOKENS_API_URL
ARG SUPERTOKENS_API_KEY
ARG API_URL

ENV HOST=$HOST
ENV SUPERTOKENS_API_URL=$SUPERTOKENS_API_URL
ENV SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY
ENV API_URL=$SUPERTOKENS_API_URL

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