import { PostgrestError } from "@supabase/supabase-js"

type HandledSupabaseError = {
  code: string | null
  message: string
  details: string | null
}

export const handleSupabaseError = (error: PostgrestError | unknown): HandledSupabaseError | null => {
  if (!error) return null

  // Caso seja um erro do Supabase (PostgrestError)
  if (typeof error === "object" && error !== null && "code" in error && "message" in error) {
    const pgError = error as PostgrestError

    return {
      code: pgError.code ?? null,
      message: pgError.message ?? "Ocorreu um erro no Supabase",
      details: pgError.details ?? null
    }
  }

  // Caso seja um erro genérico (unknown)
  let message = "Erro desconhecido"

  if (error instanceof Error) {
    message = error.message
  } else if (typeof error === "string") {
    message = error
  }

  return {
    code: null,
    message,
    details: null
  }
}