import z from "zod";

export const carImagesSchema = z.object({
  uid: z.string(),
  name: z.string(),
  url: z.url(),
  publicId: z.string()
})
