"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus, Loader2, SquarePen } from "lucide-react";
import { useForm } from "react-hook-form";
import { updateTodoFormSchema } from "../schemas";
import type { UpdateTodoFormSchema } from "../types";
import { EditTodoFormInner } from "./EditTodoFormInner";

type EditTodoFormProps = {
  todoId: string;
};

export const EditTodoForm = ({ todoId }: EditTodoFormProps) => {
  const form = useForm<UpdateTodoFormSchema>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(updateTodoFormSchema),
  });

  const onSubmit = (values: UpdateTodoFormSchema) => console.log(values);

  const isUpdateTodoPending = false;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>Plan Your Day</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <EditTodoFormInner formId="update-todo-form" onSubmit={onSubmit} />
        </Form>
        <DialogFooter className="place-content-end">
          <Button form="update-todo-form" disabled={isUpdateTodoPending}>
            {!isUpdateTodoPending ? (
              <>
                <CirclePlus />
                Update
              </>
            ) : (
              <>
                <Loader2 className="animate-spin" />
                Updating...
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
