import { useContext } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { HomeNavbar } from "../ui/Navbar";
import { CardContext } from "../../contexts/dashboardContext";
import { SettingsCard } from "../cards/Settings";
import { DefaultCard } from "./default";
import { CallCard } from "../cards/CallsCard";
import { FriendsSection } from "../cards/friendsSection";

export function HomepageComponent(){

    const Context  = useContext(CardContext)
    if(!Context){
      return <div>no context found</div>
    } 

        const {selected} = Context

    return <div className="min-h-screen relative overflow-hidden   bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
      <div className="z-10 h-screen flex relative">
             <Sidebar />
             <div className="flex-1 flex flex-col overflow-hidden">
              <HomeNavbar/>
             <main className="flex-1 overflow-y-auto p-10">
                {selected === "settings" ? (
                  <SettingsCard />
                ) : selected === "calls" ? (
                  <CallCard />
                ) : selected === "chats" ? (
                  ""
                ) : selected=== "friends"?
                  (<FriendsSection/>)
                :(
                  <FriendsSection />
                )}
            </main>
             </div>
        </div>
    </div>
}