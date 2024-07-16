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
        return <h2>This is agent</h2>
    }
    if (roll?.roll == "admin") {
        return <h2>This is admin</h2>
    }

};

export default Home;