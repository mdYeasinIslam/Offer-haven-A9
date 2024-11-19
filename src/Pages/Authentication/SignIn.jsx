import { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
    const { signInUserAuth, googleAuth } = useContext(AuthProvider)
    const [isrequired,setIsRequired] = useState(true)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate() 
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const formHandler = (event) => {
        event.preventDefault()
        const email = emailRef.current?.value
        const password = passRef.current?.value
        console.log({ email, password })
        if (password) {
            signInUserAuth(email, password)
                .then((result) => {
                    const user = result.user
                    console.log(user)
                    navigate(from, { replace: true })
                    toast.success('wow! your Sign-In successfull')
                    // navigate('/')
    
                }).catch(error => {
                    console.error(error)
                    toast.error(error.message)
                })
        }
        else {
            setIsRequired(true)
        }
    }
    const passwordReset = () => {
        // console.log( emailRef.current.value)
        const email = emailRef.current.value
        if (email) {
            console.log(email)
               return navigate(`/signIn/${email}`)
            // return <Navigate to={'/signIn/resetPassword'}/>
        }
        else {
            setIsRequired(false)
        }
    }
    const googleAuthUser = () => {
        googleAuth()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Successfully log in by google')
                navigate(from, { replace: true })
            }).catch(er => {
                console.log(er.message)
                toast.error(er.message)
        })
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content py-10 px-10 flex-col gap-10 border bg-gray-200 rounded-xl">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now your account</h1>
                </div>

                <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={formHandler} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span> 
                            </label>
                            <input ref={passRef} name="password" type="password" placeholder="password" className="input input-bordered" required={isrequired} />
                            <label className="label">
                                {/* <NavLink to={`/signIn/resetPassword`}> <button  className="label-text-alt link link-hover">Forgot password?</button></NavLink> */}
                               
                                <button  onClick={passwordReset}  className="label-text-alt link link-hover">Forgot password?</button>
                              
                            </label>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-outline btn-success text-black"><FiLogIn className="w-6 h-6 text-black" /><span className="text-black">Login</span></button>
                        </div>
                        <label className="label">
                            <NavLink to={'/signUp'}><button className="label-text-alt link link-hover font-medium ]">do not have any Account? Please Create a Account</button></NavLink>
                        </label>
                
                        <div onClick={googleAuthUser} className="w-full ">
                            <button className="btn btn-outline btn-success w-full"> <FaGoogle className="text-black w-7 h-7" /> <span className="text-black">Login with Google</span></button>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;