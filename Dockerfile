FROM node:20.13.1-alpine

WORKDIR /app

COPY package*.json .

RUN npm config set legacy-peer-deps true
RUN npm install -g npm@10.7.0
# RUN npm install -g npm@10.7.0 && \
#     npm install --legacy-peer-deps && \
#     npm install @types/react@^17.0.0

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
