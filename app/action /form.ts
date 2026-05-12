"use server";

import { FormState, SubmitFormSchema } from "@/lib/definition";



export async function SubmitForm( state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SubmitFormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      schoolId: formData.get("schoolId"),
      firstAnswer: formData.get("firstAnswer"),
      secondAnswer: formData.get("secondAnswer"),
      thirdAnswer: formData.get("thirdAnswer"),
  })
  
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
    const data = validatedFields.data;
    
    console.log(data)
}   