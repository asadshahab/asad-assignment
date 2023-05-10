import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
}

export const generateToken = (id: string): string => {
  console.log("in genrateToken",id);
  const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  console.log("in genrateToken",token);
  return token;
};

export const verifyToken = (token: string): DecodedToken => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
  return decoded;
};

