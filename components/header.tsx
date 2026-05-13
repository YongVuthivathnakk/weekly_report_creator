"use client";

import { Preview, usePreviewStore } from "@/store/usePreviewStore";
import { CalendarIcon, FileTextIcon, SchoolIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useHistoryStore } from "@/store/useHistoryStore";
import { HistoryCard } from "./history-card";
import { copyForm } from "@/store/useFormStore";
import { hi } from "date-fns/locale";
import Devider from "./devider";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 text-center flex items-center justify-between bg-gray-50 py-4 drop-shadow-sm px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-xl text-center font-bold">Weekly Report Writer</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <PreviewButtons />
        <HistorySheetButton />
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
      <div className="hidden md:flex gap-4 rounded-lg bg-gray-200 border-1 border-gray-300">
        <Button
          onClick={() => view.setPreview(Preview.form)}
          variant={view.preview === Preview.form ? "default" : "ghost"}
        >
          Form
        </Button>
        <Button
          onClick={() => view.setPreview(Preview.document)}
          variant={view.preview === Preview.document ? "default" : "ghost"}
        >
          Documents
        </Button>
      </div>
    </>
  );
}

function HistorySheetButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
          <FileTextIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto ">
        <SheetHeader>
          <SheetTitle>History</SheetTitle>
          <SheetDescription>
            Click any saved report below to instantly load it into the form.
          </SheetDescription>
        </SheetHeader>
        <Devider />
        <Content />
      </SheetContent>
    </Sheet>
  );
}

function Content() {
  const histories = useHistoryStore((state) => state.history);
  const deleteHistoryById = useHistoryStore(
    (state) => state.actions.deleteHistory,
  );
  if (histories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
          <FileTextIcon className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-900">No reports yet</p>
          <p className="text-xs text-gray-400 max-w-[180px]">
            Saved reports will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 h-full">
      {histories.map((history) => (
        <HistoryCard
          key={history.id}
          handleDelete={() => deleteHistoryById(history.id)}
          handleCopy={() => copyForm}
          history={history}
        />
      ))}
      <div className="h-4"></div>
    </div>
  );
}
