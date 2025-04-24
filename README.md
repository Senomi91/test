# Test tecnico Frontend - Next.js + GraphQL

1 Una pagina /countries che al build fa una query GraphQL per prendere la lista dei Paesi

2 Una pagina /blog con backend (Strapi) e frontend (Next.js)

# Come avviare il progetto

Per avviare il progetto:

```bash
git clone https://github.com/Senomi91/test.git

cd test

# CREA .env.example
cat > backend/.env.example <<EOL
HOST=0.0.0.0
PORT=1337
APP_KEYS=yourAppKey1,yourAppKey2
ADMIN_JWT_SECRET=yourAdminJwtSecret
JWT_SECRET=yourJwtSecret
API_TOKEN_SALT=yourApiTokenSalt
EOL

cp backend/.env.example backend/.env

# CREA CHIAVI: ADMIN_JWT_SECRET, JWT_SECRET, API_TOKEN_SALT DA SOSTITUIRE IN backend/.env
openssl rand -base64 32

npm install

npm install graphql-request

cd backend && npm install

cd ../frontend && npm install

cd ..

npm run dev

# http://localhost:3000/