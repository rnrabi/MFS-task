import { useState } from "react";
import useAxiosPublic from "../hook/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [errorPin, setErrorPin] = useState('')
    const [errorMobile, setErrorMobile] = useState('')
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const pin = form.pin.value;
        if (pin.length !== 5) {
            setErrorPin('pin must be 5 digit')
            return;
        }
        const mobile = form.mobile.value;
        if (mobile.length !== 11) {
            setErrorMobile('mobile number must be 11 digit')
            return;
        }
        const email = form.email.value;
        console.log(name, pin, mobile, email)
        const user = { name, pin, mobile, email, roll: "user", status: 'pending' }
        const { data } = await axiosPublic.post('/users', user);
        console.log(data)
        localStorage.setItem('token', data.token)

        navigate('/dashboard')


        setErrorPin('')
        setErrorMobile('')
    }


    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto text-center ">
                    <div className=" md:w-1/3 px-6 py-5 rounded-md sm:px-12 md:px-16  dark:bg-gray-50 shadow-lg mx-auto">

                        <h1 className="text-3xl font-extrabold dark:text-gray-900 my-5">Register Here</h1>

                        <form onSubmit={handleRegister} className="self-stretch space-y-3">
                            <div>
                                <label htmlFor="name" className="text-sm sr-only">Your name</label>
                                <input id="name" name='name' type="text" required placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div>
                                <label htmlFor="pin" className="text-sm sr-only">Five digit pin</label>
                                <input id="pin" name='pin' type="number" required placeholder="Five digit pin" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                                <span className="text-red-500 text-xs"> {errorPin}</span>
                            </div>

                            <div>
                                <label htmlFor="mobile" className="text-sm sr-only">Your mobile</label>
                                <input id="mobile" name='mobile' type="number" required placeholder="Your mobile" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                                <span className="text-red-500 text-xs"> {errorMobile}</span>
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm sr-only">Email address</label>
                                <input id="email" name='email' type="email" required placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Register</button>
                        </form>
                        <p className="text-center pb-3 mt-7">Are you new? <Link to='/login' className="text-blue-600">Login</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;