import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { LangToggle } from "./LangToggle";

export const Navbar = () => {
  return (
    <div className="flex p-2 border-b justify-between items-center gap-2">
      <Button variant={"ghost"}>
        <MenuIcon className="h-6 w-6" />
      </Button>
      <div className="font-medium grow">Calendar</div>
      <ModeToggle />
      <LangToggle />
    </div>
  );
};
