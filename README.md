# Test tecnico Frontend - Next.js + GraphQL

1 Una pagina /countries che al build fa una query GraphQL per prendere la lista dei Paesi

2 Una pagina /blog con backend (Strapi) e frontend (Next.js)

# Come avviare il progetto

Per avviare il progetto:

modificare in /backend/config/server.js

module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
});

```bash
git clone https://github.com/Senomi91/test.git

cd test

cat > backend/.env.example <<EOL
HOST=0.0.0.0
PORT=1337
APP_KEYS=yourAppKey1,yourAppKey2
ADMIN_JWT_SECRET=yourAdminJwtSecret
JWT_SECRET=yourJwtSecret
API_TOKEN_SALT=yourApiTokenSalt
EOL

cp backend/.env.example backend/.env

# CREA CHIAVI
openssl rand -base64 32

npm install

npm install graphql-request

cd backend && npm install

cd ../frontend && npm install

cd ..

npm run dev