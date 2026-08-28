FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM build AS start
EXPOSE 12000
CMD ["npm", "run", "dev", "--", "-p", "12000", "-H", "0.0.0.0"]
