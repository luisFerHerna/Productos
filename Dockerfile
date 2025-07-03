FROM node:18-alpine

WORKDIR /app

# 1. Copiar solo lo necesario para instalar dependencias
COPY package*.json ./
RUN npm install

# 2. Copiar el resto de los archivos
COPY . .

# 3. Construir la aplicación
RUN npm run build

# 4. Comando de inicio
CMD ["npm", "start"]