"use client";

import DocumentPreview from "@/components/document/document-preview";
import Form from "@/components/form";
import { Preview, usePreviewStore } from "@/store/usePreviewStore";
import { useState } from "react";

export default function Home() {
  const currentView = usePreviewStore((s) => s.preview);

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-center bg-white dark:bg-black">
        {currentView === Preview.form && <Form />}
        {currentView === Preview.document && <DocumentPreview />}
      </main>
    </div>
  );
}
