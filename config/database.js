const crypto = require('crypto').randomBytes(256).toString('hex'); //ver: https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback

//Exporto el objeto:
module.exports = {
    uri: "mongodb://localhost:27017/" + this.db,
    secret: crypto,
    db: "db-mean3"
}