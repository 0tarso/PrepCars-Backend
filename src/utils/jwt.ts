import * as jwt from 'jsonwebtoken'

export const jwtTokenGen = async (user_id: string, email: string) => {

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  const token = jwt.sign(
    { user_id, email },
    secret,
    { expiresIn: '1h' }
  );

  return token
}


export const decodeJwtToken = async (token: string) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  const decodedJwt = jwt.verify(token, secret)

  return decodedJwt
}