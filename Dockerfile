# FROM node:20.13.1-alpine

# # WORKDIR /app
# WORKDIR /app

# COPY package*.json ./

# RUN npm config set legacy-peer-deps true
# RUN npm install -g npm@10.7.0
# # RUN npm install -g npm@10.7.0 && \
# #     npm install --legacy-peer-deps && \
# #     npm install @types/react@^17.0.0

# RUN npm install 

# RUN npm run build

# COPY . .

# EXPOSE 3000

# # CMD ["next", "dev", "--host", "0.0.0.0"]
# # CMD ["npm", "run", "dev"]
# CMD ["npm", "start"]
# # CMD ["next", "start", "-p", "3000"]


# FROM node:20.13.1-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm config set legacy-peer-deps true
# RUN npm install -g npm@10.7.0

# RUN npm install 

# COPY . .

# # Build the Next.js app
# RUN npm next build

# EXPOSE 3000

# CMD ["next", "start", "-p", "3000", "--hostname", "0.0.0.0"]


FROM node:20.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set legacy-peer-deps true
RUN npm install -g npm@10.7.0

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

