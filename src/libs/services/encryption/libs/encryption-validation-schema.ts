import * as z from "zod";

const encryption = z.object({
  mode: z.enum(["encrypt", "decrypt"]),
  secretKey: z.string().nonempty(),
  phrase: z.string().nonempty(),
});

export { encryption };
