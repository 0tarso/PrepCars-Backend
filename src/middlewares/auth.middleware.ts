import { Request, Response, NextFunction } from "express"
import { firebaseAuth } from "../infra/firebase/firebase"

export interface AuthRequest extends Request {
  user?: {
    uid: string
    email?: string
    name?: string
  }
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  console.log(authHeader && "Token válido")

  if (!authHeader) {
    return res.status(401).json({ message: "Token não informado" })
  }

  const [, token] = authHeader.split(" ")

  if (!token) {
    return res.status(401).json({ message: "Token inválido" })
  }

  try {
    const decodedToken = await firebaseAuth.verifyIdToken(token)

    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name
    }

    return next()
  } catch (error) {
    req.user = {
      uid: "",
      email: "",
      name: ""
    }

    return res.status(401).json({ message: "Token expirado ou inválido" })
  }
}
