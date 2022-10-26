import { z, ZodSchema } from 'zod';

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type ILoginDTO = z.infer<typeof loginBodySchema>;

export default class ZodLoginValidator {
  private _schema: ZodSchema;

  constructor() {
    this._schema = loginBodySchema;
  }

  async validateBody(obj: unknown) {
    const data = await this._schema.parseAsync(obj);

    return data as ILoginDTO;
  }
}
