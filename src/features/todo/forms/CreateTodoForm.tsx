"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoFormSchema } from "../schemas";
import type { CreateTodoFormSchema } from "../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { CreateTodoFormInner } from "./CreateTodoFormInner";
import { Button } from "@/components/ui/button";
import { CirclePlus, Loader2 } from "lucide-react";

export const CreateTodoForm = () => {
  const form = useForm<CreateTodoFormSchema>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(createTodoFormSchema),
  });

  const onSubmit = (values: CreateTodoFormSchema) => console.log(values);

  const isCreateTodoPending = false;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo</CardTitle>
        <CardDescription>Plan your day</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <CreateTodoFormInner formId="create-todo-form" onSubmit={onSubmit} />
        </Form>
      </CardContent>
      <CardFooter className="place-content-end">
        <Button form="create-todo-form" disabled={isCreateTodoPending}>
          {!isCreateTodoPending ? (
            <>
              <CirclePlus />
              Add
            </>
          ) : (
            <>
              <Loader2 className="animate-spin" />
              Adding...
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
