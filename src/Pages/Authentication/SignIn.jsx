import { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
    const { signInUserAuth } = useContext(AuthProvider)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    const formHandler = (event) => {
        event.preventDefault()

        const email = emailRef.current?.value
        const password = passRef.current?.value
        console.log({ email, password })
        signInUserAuth(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                // navigate(from, { replace: true })
                toast.success('wow! your Sign-In successfull')
                navigate('/')

            }).catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content py-10 px-10 flex-col gap-10 border bg-gray-200 rounded-xl">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now your account</h1>
                </div>

                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={formHandler} className="card-body bg-base-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passRef} name="password" type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-outline btn-success text-black"><FiLogIn className="w-6 h-6 text-black" /><span className="text-black">Login</span></button>
                        </div>
                        <label className="label">
                            <NavLink to={'/signUp'}><button className="label-text-alt link link-hover font-medium ]">do not have any Account? Please Create a Account</button></NavLink>
                        </label>
                    <div className="w-full ">
                            <button className="btn btn-outline btn-success w-full"> <FaGoogle className="text-black w-7 h-7" /> <span className="text-black">Login with Google</span></button>
                    </div>
                
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;