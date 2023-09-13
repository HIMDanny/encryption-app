import { type z } from "zod";
import { type encryption } from "./encryption-validation-schema";

type EncryptionSchema = z.infer<typeof encryption>;

export { type EncryptionSchema };
