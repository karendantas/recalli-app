import z from "zod";
export const taskSchema = z.object({
  title: z.string().min(2, "Preencha o campo!"),
  time: z.string().min(2, "Preencha o campo!"),
});
export type taskFormSchema = z.infer<typeof taskSchema>;
