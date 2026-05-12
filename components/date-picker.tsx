import { useState } from 'react'
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface DatePickerProps{
    date: Date;
    setDate: (date: Date | undefined) => void;
}

export default function DatePicker({date, setDate} : DatePickerProps) {

  return (
     <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="justify-between h-full text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={ setDate}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  )
}
