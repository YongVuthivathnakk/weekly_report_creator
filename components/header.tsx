"use client";

import { Preview, usePreviewStore } from "@/store/usePreviewStore";
import { FileTextIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 text-center flex items-center justify-between bg-gray-50 py-4 drop-shadow-sm px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-xl text-center font-bold">Weekly Report Writer</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <PreviewButtons />
        <Button variant={"outline"}>
          <FileTextIcon  />
        </Button>
      </div>
    </nav>
  );
}

function PreviewButtons() {
  const view = usePreviewStore((state) => state);

  return (
    <>
      {/* small screens — select dropdown */}
      <select
        className="md:hidden bg-gray-200 border-2 border-gray-300 rounded-lg py-2 px-4 text-sm font-medium"
        value={view.preview}
        onChange={(e) => view.setPreview(e.target.value as Preview)}
      >
        <option value={Preview.form}>Form</option>
        <option value={Preview.document}>Document</option>
      </select>

      {/* large screens — buttons */}
      <div className="hidden md:flex gap-4 p-1 rounded-lg bg-gray-200 border-2 border-gray-300">

        <Button onClick={() => view.setPreview(Preview.form)} variant={view.preview === Preview.form ? "default" : "ghost"} >
          Form
        </Button>
      <Button onClick={() => view.setPreview(Preview.document)} variant={view.preview === Preview.document ? "default" : "ghost"}>
          Documents
        </Button>


      </div>
    </>
  );
}
