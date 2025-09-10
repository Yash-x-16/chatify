import { UsersCard } from "../components/cards/usersCard";
import { Sidebar } from "../components/sidebar/sidebar";
import { HomeNavbar } from "../components/ui/Navbar";
import { DashBoardContext } from "../contexts/dashboardContext";
export function Homepage(){
    return <div className="min-h-screen relative overflow-hidden   bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
      <div className="z-10 h-screen flex relative">


        <DashBoardContext>
        
          <Sidebar />

          <UsersCard />
        
          
        </DashBoardContext>
        
        </div>
    </div>
}