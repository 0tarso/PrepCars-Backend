import { cloudinary } from "../../infra/cloudinary/cloudinary-config"
import { HttpResponseBadRequest, HttpResponseInternalError, HttpResponseOK } from "../../utils/http-helper"

export const deleteImageService = async (publicId?: string) => {
  if (!publicId) {
    return await HttpResponseBadRequest("Send a publicId image")
  }

  try {
    const result = await cloudinary.uploader.destroy(publicId)

    if (result.result !== "ok") {
      return await HttpResponseBadRequest("Image not found or already deleted")
    }

    return await HttpResponseOK({
      message: "Image deleted successfully",
      publicId
    })

  }
  catch (error) {
    return await HttpResponseInternalError("Error deleting image", {})
  }

}
