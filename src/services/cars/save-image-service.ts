import multer from "multer"
import { HttpResponseBadRequest, HttpResponseCreated, HttpResponseInternalError } from "../../utils/http-helper"
import { cloudinary } from "../../infra/cloudinary/cloudinary-config"

export const saveImageService = async (file?: any, userId?: string) => {
  if (!file) {
    return await HttpResponseBadRequest("Send a image to save")

  }

  let response

  try {
    const result = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      {
        folder: `prepcars/${userId}`,
        public_id: `image_${Date.now()}`,
        format: "webp",
      }
    )

    response = await HttpResponseCreated({
      url: result.secure_url,
      publicId: result.public_id
    })

  } catch (error) {
    return await HttpResponseInternalError("Erro ao fazer upload de imagem", {})
  }


  return response
}