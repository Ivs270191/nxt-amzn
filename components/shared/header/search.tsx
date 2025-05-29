import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";
const categories = ["men", "women", "kids", "accessories"];
export default async function Search() {
  return (
    <form action="/search" method="GET" className="flex items-stretch h-9">
      <Select name="category">
        <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem key={"All"} value={"all"}>
            All
          </SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        name="q"
        type="search"
        placeholder={`Search Site ${APP_NAME}`}
        className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
      />
      <Button type="submit" className="h-full rounded-l-none">
        <SearchIcon />
      </Button>
    </form>
  );
}
