'use server'

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  console.log(values);
};
