import { HomepageComponent } from "../components/dashboard/homeComponent";
import { DashBoardContext } from "../contexts/dashboardContext";

export function Homepage(){
    return <DashBoardContext>
        <HomepageComponent/>
    </DashBoardContext>
}