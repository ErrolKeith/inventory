import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  COGNITO_CLIENT_ID: z.string(),
  COGNITO_CLIENT_SECRET: z.string(),
});

export const config = {
  init() {
    try {
      return envSchema.parse(process.env);
    } catch (e) {
      throw new Error(`Failed to parse environment.`);
    }
  },
};
