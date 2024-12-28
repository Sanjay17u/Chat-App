import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res) => {
  const jwtSecret = process.env.JWT_TOKEN;
  
  if (!jwtSecret) {
    throw new Error("JWT_SECRET environment variable is missing!");
  }

  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "10d", 
  });

  res.cookie("jwt", token, {
    httpOnly: true, 
    secure: false,  
    sameSite: "None",
    path: '/',
  });

};

export default createTokenAndSaveCookie;
