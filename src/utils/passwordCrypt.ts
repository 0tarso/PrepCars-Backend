import { compare, hash } from 'bcrypt'

export const encryptData = async (data: string) => {
  const hashedData = await hash(data, 10)

  return hashedData
}

export const decryptData = async (data: string, encryptedData: string) => {

  const isValidData = await compare(data, encryptedData)

  if (!isValidData) return false

  return true
}