import { Form } from "@/types/form";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


export const useFormStore = create<Form>()(
  immer(() => ({
    firstName: "",
    lastName: "",
    schoolId: "",
    answers: ["", "", ""],
  })),
);

export function resetForm() {
  useFormStore.setState((s) => {
    ((s.firstName = ""),
      (s.lastName = ""),
      (s.schoolId = ""),
      (s.answers = ["", "", ""]));
  });
}
