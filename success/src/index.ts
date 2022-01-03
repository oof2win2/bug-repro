import { z } from "zod"
import { generateSchema } from "@anatine/zod-openapi"


const testSchema = z.object({
    shortdesc: z.string(),
    longdesc: z.string()
})

console.log(generateSchema(testSchema))
