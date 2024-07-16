

import { Link, Outlet } from "react-router-dom";


const AgentDashboard = () => {
    return (
        <div className="md:flex justify-between items-start md:w-11/12 mx-auto">
            <div className="border-r-2 md:h-screen md:w-1/4 py-8">
                <ul className="space-y-12">
                    {/* <li className="shadow-lg text-center"><Link>Send Money</Link></li> */}
                    <li className="shadow-lg text-center"><Link>CashOut Request</Link></li>
                    <li className="shadow-lg text-center"><Link>CashIn Request</Link></li>
                    <li className="shadow-lg text-center"><Link>Balance Inquiry</Link></li>
                    <li className="shadow-lg text-center"><Link>Transaction Management</Link></li>
                    <li className="shadow-lg text-center"><Link>Transaction History</Link></li>
                </ul>
            </div>

            <section className=" dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">name</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">email</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">01774720271</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">

                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">Balance</p>
                            <p className="capitalize">100tk</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );
};

export default AgentDashboard;