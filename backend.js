const express = require('express');
require('dotenv').config();
const app = express();
const port = 3010;

const truliooMiddleware = require('trulioo-embedid-middleware')({
  // NOTE: Commiting this key for example-purposes only. You should never commit this key; instead load it as a secret.
  apiKey: '' // <-- put your API KEY here (ideally this value is added through as an environment variable i.e.: process.env.TRULIOO_API_KEY)
});

app.use(truliooMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
