import z from "zod";
import { carImagesSchema } from "./car-images-schema";

export const createCarSchema = z.object({
  name: z.string().min(2),
  model: z.string(),
  brand: z.string(),
  year: z.number().int().min(1900),
  km: z.number().min(0),
  whatsapp: z.string(),
  city: z.string(),
  price: z.number().positive(),
  description: z.string().optional(),
  images: z.array(carImagesSchema),
})

export type createCarDTO = z.infer<typeof createCarSchema>
