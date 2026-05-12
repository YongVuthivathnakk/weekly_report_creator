"use client";

import { Preview, usePreviewStore } from "@/store/usePreviewStore";

export default function Header() {
  return (
    <nav className="text-center flex items-center justify-evently bg-gray-50 py-4 drop-shadow-sm">
      <div className="flex-1">
        <h1 className="text-xl font-bold">Weekly Report Writer</h1>
      </div>
      <PreviewButtons />
      <div className="flex-1" />
    </nav>
  );
}

function PreviewButtons() {
  const view = usePreviewStore((state) => state);

  return (
    <div className="flex gap-4 py-2 px-4 mt-4 rounded-xl bg-gray-200 border-2 border-gray-300">
      <button
        onClick={() => view.setPreview(Preview.form)}
        disabled={view.preview === Preview.form}
        className={`rounded-lg py-1 px-4 capitalize transition-all ${
          view.preview === Preview.form
            ? "bg-black text-white"
            : "text-gray-500 hover:text-black"
        }`}
      >
        Form
      </button>
      <button
        onClick={() => view.setPreview(Preview.document)}
        disabled={view.preview === Preview.document}
        className={`rounded-lg py-1 px-4 capitalize transition-all ${
          view.preview === Preview.document
            ? "bg-black text-white"
            : "text-gray-500 hover:text-black"
        }`}
      >
        Document
      </button>
    </div>
  );
}
