import { Sidebar } from "../components/sidebar/sidebar";
import { HomeNavbar } from "../components/ui/Navbar";

export function Homepage(){
    return <div className="h-screen  w-full bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
       <HomeNavbar/>
       <Sidebar/>
    </div>
}