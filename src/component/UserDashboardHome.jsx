import { Link } from "react-router-dom";
import sendMoney from "../assets/send-money.png"
import cashOut from "../assets/cashOut.png"
import cashIn from "../assets/cash-in.png"
import balanceInquiry from "../assets/balance-inquiry.png"
import transactionHistory from "../assets/transaction-history.png"

const UserDashboardHome = () => {

    return (
        <div className="md:grid md:grid-cols-3">
            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={sendMoney}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Send Money</h2>
                </div>
            </Link>

            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={cashOut}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cash Out</h2>
                </div>
            </Link>

            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={cashIn}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cash In</h2>
                </div>
            </Link>

            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={balanceInquiry}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Balance Inquiry</h2>
                </div>
            </Link>

            <Link className="card bg-base-100 w-52 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={transactionHistory}
                        alt="Send money"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Transaction History</h2>
                </div>
            </Link>
        </div>
    );
};

export default UserDashboardHome;