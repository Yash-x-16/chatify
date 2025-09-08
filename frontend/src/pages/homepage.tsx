import { UsersCard } from "../components/cards/usersCard";
import { Sidebar } from "../components/sidebar/sidebar";
import { HomeNavbar } from "../components/ui/Navbar";
import { DashBoardContext } from "../contexts/dashboardContext";
export function Homepage(){
    return <div className="min-h-screen overflow-hidden  w-full bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
        <DashBoardContext>
         <HomeNavbar/> 
         <div className="flex flex-row">
            <Sidebar/> 
         <UsersCard/>
         </div>

        </DashBoardContext>

    </div>
}