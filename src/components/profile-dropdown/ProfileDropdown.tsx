import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LayoutDashboard, LogIn, Package2, UserRoundPen } from "lucide-react";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <LayoutDashboard className="size-4" />
              Dashboard
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <UserRoundPen className="size-4" />
              Profile
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <Package2 className="size-4" />
              My Orders
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-3">
            <LogIn className="size-4" />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
