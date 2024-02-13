import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return(
    <div className="flex gap-4 items-center">
      <Input placeholder="Busque por uma barbearia" />
      <Button variant={"default"}>
        <SearchIcon />
      </Button>
    </div>
  )
}
