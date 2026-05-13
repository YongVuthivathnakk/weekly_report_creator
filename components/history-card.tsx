import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarIcon, SchoolIcon, UserIcon } from "lucide-react";
import { Form } from "@/types/form";
import { Button } from "./ui/button";
import { CopyButton } from "./animate-ui/components/buttons/copy";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

interface HistoryCardProps {
    history: Form,
    handleCopy: () => void;
    handleDelete: () => void;
}


export function HistoryCard({ history, handleCopy, handleDelete}:  HistoryCardProps) {
  return (
    <Card className=" transition-all hover:shadow-md hover:border-gray-300 hover:scale-[1.02]">
      <CardHeader className="pb-2">
        {/* ✅ title row */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">
            Weekly Report
          </span>
          <Badge variant="outline" className="text-xs text-gray-500">
            <CalendarIcon className="w-3 h-3 mr-1" />
            {new Date(history.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Badge>
        </div>

        {/* name + school id */}
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-1">
            <UserIcon className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">
              {history.firstName} {history.lastName}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <SchoolIcon className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">{history.schoolId}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {[
          { label: "Completed", answer: history.answers[0] },
          { label: "Challenges", answer: history.answers[1] },
          { label: "Next week", answer: history.answers[2] },
        ].map(({ label, answer }) => (
          <div key={label}>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {label}
            </p>
            <p className="text-sm text-gray-700 line-clamp-2">{answer}</p>
          </div>
        ))}
          </CardContent>
          <CardFooter className="flex gap-4 justify-end ">

              <DeleteHistoryCardButton handleClick={handleDelete} />
                <Button onClick={handleCopy} className="cursor-pointer" variant={"outline"}>
                  Copy
              </Button>
          </CardFooter>
    </Card>
  );
}


function DeleteHistoryCardButton({handleClick}:{handleClick : () => void}) {
    return (
         <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}