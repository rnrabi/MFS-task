import useRoll from "../hook/useRoll";
import AdminDashboardHome from "./AdminDashboardHome";
import AgentDashboardHome from "./AgentDashboardHome";
import UserDashboardHome from "./UserDashboardHome";


const DashboardHome = () => {
    const { roll } = useRoll()
    console.log(roll?.roll)
    if (roll?.roll == 'user') {
        return <UserDashboardHome></UserDashboardHome>
    }
    if (roll?.roll == "agent") {
        return <AgentDashboardHome></AgentDashboardHome>
    }
    if (roll?.roll == "admin") {
        return <AdminDashboardHome></AdminDashboardHome>
    }

};

export default DashboardHome;