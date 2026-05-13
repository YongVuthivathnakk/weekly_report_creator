"use client";

import { SubmitForm } from "@/app/action /form";
import { resetForm, useFormStore } from "@/store/useFormStore";
import React, { useActionState, useEffect } from "react";

import { Button } from "./ui/button";
import DatePicker from "./date-picker";
import { useHistoryStore } from "@/store/useHistoryStore";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";

export default function Form() {
  const formData = useFormStore((state) => state);
  const historyStore = useHistoryStore((state) => state);
  const [state, action, isPending] = useActionState(SubmitForm, undefined);

  useEffect(() => {
    if (state === undefined) return;

    if (state.errors) {
      toast.error("Please fix the errors in the form!");
      return;
    }

    if (state.data) {
      historyStore.actions.addToHistory(state.data);
      toast.success("Report saved!");
    }
  }, [state]);

  return (
    <div className="flex flex-col items-center m-8 justify-center">
      <form
        action={action}
        className="bg-white mt-4 rounded-2xl border border-gray-200 p-8 w-full max-w-xl shadow-sm"
      >
        <h2 className="text-submitContact2xl font-semibold text-gray-900 mb-1">
          Fill in you Information
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Please fill in the form below.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* First Name */}
          <input
            type="text"
            value={formData.firstName.trim()}
            onChange={(e) =>
              useFormStore.setState({
                firstName: e.target.value,
              })
            }
            name="firstName"
            required
            placeholder="First name"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            value={formData.lastName.trim()}
            onChange={(e) =>
              useFormStore.setState({
                lastName: e.target.value,
              })
            }
            placeholder="Last name"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          {state?.errors?.firstName && (
            <p className="text-red-500 text-xs">{state.errors.firstName}</p>
          )}{" "}
          {state?.errors?.lastName && (
            <p className="text-red-500 text-xs">{state.errors.lastName}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* School Id */}
          <input
            required
            value={formData.schoolId.trim()}
            onChange={(e) =>
              useFormStore.setState({
                schoolId: e.target.value,
              })
            }
            type="text"
            name="schoolId"
            placeholder="School ID"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <DatePicker
            date={formData.date}
            setDate={(date) => useFormStore.setState({ date })}
          />
          <input
            type="hidden"
            name="date"
            value={
              formData.date instanceof Date ? formData.date.toISOString() : ""
            }
          />
        </div>
        {state?.errors?.date && (
          <p className="text-red-500 text-xs">{state.errors.date}</p>
        )}
        {state?.errors?.schoolId && (
          <p className="text-red-500 text-xs">{state.errors.schoolId}</p>
        )}
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <label htmlFor="q1">1. What have you complete this week?</label>
            {state?.errors?.firstAnswer && (
              <p className="text-red-500 text-xs">{state.errors.firstAnswer}</p>
            )}
          </div>

          <textarea
            id="q1"
            required
            placeholder="Answer"
            name="firstAnswer"
            onChange={(e) => {
              useFormStore.setState((s) => {
                s.answers[0] = e.target.value;
              });
            }}
            value={formData.answers[0]}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y mb-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="q2">2. What are your challenges?</label>
            {state?.errors?.secondAnswer && (
              <p className="text-red-500 text-xs">
                {state.errors.secondAnswer}
              </p>
            )}
          </div>

          <textarea
            id="q2"
            required
            onChange={(e) => {
              useFormStore.setState((s) => {
                s.answers[1] = e.target.value;
              });
            }}
            value={formData.answers[1]}
            placeholder="Answer"
            name="secondAnswer"
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y mb-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="q3">
              3. What are you planning to do next week?
            </label>
            {state?.errors?.thirdAnswer && (
              <p className="text-red-500 text-xs">{state.errors.thirdAnswer}</p>
            )}
          </div>

          <textarea
            id="q3"
            onChange={(e) => {
              useFormStore.setState((s) => {
                s.answers[2] = e.target.value;
              });
            }}
            value={formData.answers[2]}
            required
            placeholder="Answer"
            name="thirdAnswer"
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y mb-4"
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={resetForm} type="button" variant={"outline"}>
            Reset
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              "Save Form"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
