import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";


const Login = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const mobEmail = e.target.mobEmail.value;
        const pin = e.target.pin.value;
        console.log(mobEmail, pin)
        const logUser = { mobEmail, pin }
        const { data } = await axiosPublic.post('/login', logUser);
        console.log(data)
        localStorage.setItem('token', data.token)
        const token = localStorage.getItem('token')
        if (!token) {
            return <span className="loading loading-bars loading-lg"></span>
        }
        if (data.message == 'success' && token) {
            navigate('/dashboard')
        }
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email/mobile</span>
                                </label>
                                <input type="text" name="mobEmail" placeholder="mobile/email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">pin</span>
                                </label>
                                <input type="password" name='pin' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot pin?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;