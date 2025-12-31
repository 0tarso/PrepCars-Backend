import { z } from "zod";

export const formatZodErrors = (errors: z.core.$ZodIssue[]) => {

  return errors.reduce((acc: Record<string, string[]>, err) => {

    const field = err.path[0] as string;

    if (!acc[field]) {
      acc[field] = [];
    }

    acc[field].push(err.message);

    return acc;
  }, {});
};