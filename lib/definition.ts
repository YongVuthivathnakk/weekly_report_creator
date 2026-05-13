import * as z from "zod";

export const SubmitFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: "First name must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { error: "Last name must be at least 2 characters long." })
    .trim(),
  schoolId: z
    .string()
    .min(10, { error: "School ID must be at least 10 characters long." })
    .trim(),
  firstAnswer: z
    .string()
    .min(10, { error: "Answer must be at least 10 characters long." })
    .trim(),

  secondAnswer: z
    .string()
    .min(10, { error: "Answer must be at least 10 characters long." })
    .trim(),

  thirdAnswer: z
    .string()
    .min(10, { error: "Answer must be at least 10 characters long." })
    .trim(),
  
  date: z.coerce.date({ error: "Date is required." }),

});

export type FormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        schoolId?: string[];
        firstAnswer?: string[];
        secondAnswer?: string[];
        thirdAnswer?: string[];
        date?: string[];
      };
      message?: string;
    }
  | undefined;
