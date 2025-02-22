import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteTodoDialog } from "../components/action/DeleteTodoDialog";
import { EditTodoForm } from "../forms";

export const TodoTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">No</TableHead>
          <TableHead>Text</TableHead>
          <TableHead className="w-[50px]">Status</TableHead>
          <TableHead className="w-[150px]">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Hello World</TableCell>
          <TableCell>True</TableCell>
          <TableCell className="flex gap-2">
            <EditTodoForm todoId="" />
            <DeleteTodoDialog todoId="" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
