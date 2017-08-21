function generateToken(req){
  var token = jwt.sign({
    auth:  'magic',
    agent: 'matic' // Note: in seconds!
  }, secret);  // secret is defined in the environment variable JWT_SECRET
  return token;
}

console.log(generateToken());
