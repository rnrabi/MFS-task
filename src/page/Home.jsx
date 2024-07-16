import AdminDashboard from "../component/AdminDashboard";
import AgentDashboard from "../component/AgentDashboard";
import UserDashboard from "../component/UserDashboard";
import useRoll from "../hook/useRoll";


const Home = () => {
    // let roll = 'user'
    const {roll} = useRoll()
    console.log(roll?.roll)
    if (roll?.roll == 'user') {
        return <UserDashboard></UserDashboard>
    }
    if (roll?.roll == "agent") {
        return <AgentDashboard></AgentDashboard>
    }
    if (roll?.roll == "admin") {
        return <AdminDashboard></AdminDashboard>
    }

};

export default Home;