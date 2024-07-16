


import { Link } from "react-router-dom";
import usersManagement from "../assets/users-management.png"
import systemMonitoring from "../assets/system-monitoring.png"

const AdminDashboardHome = () => {

    return (
        <div className="md:grid md:grid-cols-3">
          
            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={usersManagement}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Users Management</h2>
                </div>
            </Link>

            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={systemMonitoring}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">System Monitoring</h2>
                </div>
            </Link>

        </div>
    );
};

export default AdminDashboardHome;
