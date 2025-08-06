import { useAuth0 } from "@auth0/auth0-react";
import {
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu";
import { Button } from "../Components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "../Components/ui/separator";
import { CircleUserRound } from "lucide-react";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="flex items-center px-3 py-6 font-bold hover:text-orange-500 gap-2 ">
                <CircleUserRound className="text-orange-500" />
                {user?.given_name}
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem className="py-3 px-6" >
                    <Link
                        to="/manage-restaurant"
                        className="font-bold   hover:text-orange-500 text-2xl"
                    >
                        Order Manage 
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 px-6">
                    <Link to="/user-profile" className="font-bold text-2xl hover:text-orange-500">
                        Order Status
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-orange-500"
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;