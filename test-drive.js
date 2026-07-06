const https = require('https');
https.get('https://drive.google.com/uc?export=download&id=1Z6cs2LLF6IKzd_z-QorJ3r6mjaXOvsEq', (res) => {
  console.log(res.headers);
});
