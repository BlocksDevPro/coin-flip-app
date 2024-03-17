import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Coin from "./components/Coin";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <div className="container flex justify-between items-center mx-auto py-6 sticky top-0 z-10 shadow-md md:shadow-none">
        <h1 className="text-4xl font-bold">Shitcoin</h1>
        <div className="justify-center items-center gap-x-4 hidden md:flex">
          <Button variant={"secondary"}>Shit</Button>
          <Button variant={"default"}>Coin-Flip</Button>
        </div>
        <div className="md:hidden flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <MenuIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Shit</DropdownMenuItem>
              <DropdownMenuItem>Coin-Flip</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="container max-w-7xl flex justify-center items-center h-[70vh] ">
        <Coin />
      </div>
    </div>
  );
}
