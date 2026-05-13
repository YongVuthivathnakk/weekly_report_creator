"use server";

import { FormState, SubmitFormSchema } from "@/lib/definition";
import { Form } from "@/types/form";
import { v4 as uuidv4 } from "uuid";

export async function SubmitForm(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SubmitFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    schoolId: formData.get("schoolId"),
    firstAnswer: formData.get("firstAnswer"),
    secondAnswer: formData.get("secondAnswer"),
    thirdAnswer: formData.get("thirdAnswer"),
    date: formData.get("date"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const form = validatedFields.data;

  return {
    data: {
      id: uuidv4(),
      firstName: form.firstName,
      lastName: form.lastName,
      schoolId: form.schoolId,
      answers: [form.firstAnswer, form.secondAnswer, form.thirdAnswer],
      date: form.date,
    } as Form,
  };
}
