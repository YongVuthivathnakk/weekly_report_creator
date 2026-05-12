import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


export enum Preview {
    form = 'form',
    document = 'document'
}

interface PreviewState {
    preview: Preview;
    setPreview: (state: Preview) => void;
}

export const usePreviewStore = create<PreviewState>()((set) => ({
    preview: Preview.form,
    setPreview: (preview) => set({ preview })
}))

