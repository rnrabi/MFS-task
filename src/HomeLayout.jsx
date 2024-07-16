import { Link } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl mb-12 font-bold leading-none sm:text-5xl">Welcome To Our MFS 
                    </h1>
                 
                    <div className="flex flex-wrap justify-center">
                        <Link to="/register" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get started</Link>

                        <Link to="/login" className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Log In</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;