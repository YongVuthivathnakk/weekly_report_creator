import { Form } from "@/types/form";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const formKey = "historyForm";

type HistoryStore = {
  history: Form[];
  actions: {
      addToHistory: (form: Form | undefined) => void;
      deleteHistory: (id: string) => void;
  };
};

export const useHistoryStore = create<HistoryStore>()(
  persist(
    immer((set, get: () => HistoryStore) => ({
      history: [] as Form[],
      actions: {
        addToHistory: (form: Form | undefined) => {
          set((state: HistoryStore) => {
            if (form === undefined) return;
            state.history.push(form);
          });
          },
          deleteHistory: (id: string) => {
              set((state: HistoryStore) => {
                  state.history = state.history.filter(h => h.id !== id)
              })
          }
      },
    })),
      {
          name: formKey,
        partialize: (state) => ({history: state.history})
     },
  ),
);
