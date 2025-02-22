import { Heading } from "@/components/ui/heading";
import { api, HydrateClient } from "@/trpc/server";
import { renderElements } from "@/utils";
import Link from "next/link";

export const HomePage = async () => {
  const todos = await api.todo.getAll();
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <Link
            href={"/todo"}
            className="text-5xl font-extrabold tracking-tight sm:text-[5rem]"
          >
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </Link>
          <div className="flex flex-col items-center gap-2">
            <Heading>List Of My Todos</Heading>
            {renderElements({
              of: todos,
              keyExtractor: (todo) => todo.id,
              render: (todo) => (
                <p className="text-xl capitalize text-white">{todo.text}</p>
              ),
            })}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
};
