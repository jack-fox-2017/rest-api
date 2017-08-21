const crypto = require('crypto');

module.exports = (salt, password) =>{
  let hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return hash;
}
