import { v4 as uuidv4 } from "uuid";
import { Form } from "@/types/form";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { toast } from "sonner";


export const useFormStore = create<Form>()(
  immer(() => ({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    schoolId: "",
    answers: ["", "", ""],
    date: new Date
  })),
);

export function resetForm() {
  useFormStore.setState((s) => {
    (
      (s.id = ""),
      (s.firstName = ""),
      (s.lastName = ""),
      (s.schoolId = ""),
      (s.answers = ["", "", ""]));
      (s.date = new Date);
  });
}

export function copyForm(form: Form) {
  useFormStore.setState((s) => {
    (
      (s.firstName = form.firstName),
      (s.lastName = form.lastName),
      (s.schoolId = form.schoolId),
      (s.answers = [form.answers[0], form.answers[1], form.answers[2]]));
      (s.date = form.date);
    
  });
  toast.success("Form has been copied successfully")
}