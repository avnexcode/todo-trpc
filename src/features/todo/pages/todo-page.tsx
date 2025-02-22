import { PageContainer, SectionContainer } from "@/components/layouts";
import { CreateTodoForm } from "../forms";
import { TodoTable } from "../tables";

export const TodoPage = () => {
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer padded container className="mt-10 min-h-screen gap-20">
        <section>
          <CreateTodoForm />
        </section>
        <section>
          <TodoTable />
        </section>
      </SectionContainer>
    </PageContainer>
  );
};
