import { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { AuthProvider } from "../../Context/AuthContext";

const SignUp = () => {
    const { createUserAuth, updateUser } = useContext(AuthProvider)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const photoRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate()

    const formHandler = (event) => {
        event.preventDefault()
        const name = nameRef.current?.value 
        const photoURL = photoRef.current?.value 
        const email = emailRef.current?.value 
        const password = passRef.current?.value 
        // const profile = { displayName: name, photoURL }
        console.log({ name, photoURL, email, password})
        createUserAuth(email, password)
            .then((result) => {
                const userInfo = result.user
                console.log(userInfo)
                // updateUser(profile)
                //     .then(() => {

                //     })
                //     .catch(er => {
                //         console.log(er)
                //         toast.error(`${er.message}`)
                //     })
                toast.success('your account create successfully')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                toast.error(`${error.message}`)
            })
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content py-10 px-10 flex-col gap-10 border bg-gray-200 rounded-xl">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Create your account</h1>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={formHandler} className="card-body bg-base-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name </span>
                            </label>
                            <input ref={nameRef} name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input ref={photoRef} name="photo" type="url" placeholder="Only URL" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-outline btn-success w-full"> <MdOutlineLogin className="text-black w-6 h-6" /><span className="text-black">Register</span></button>
                        </div>
                        <label className="label">
                            <NavLink to={'/signIn'}><button className="label-text-alt link link-hover font-medium">Already have an Account? Please Sign-In</button></NavLink>
                        </label>
                    <div className="w-full">
                            <button className="btn btn-outline btn-success w-full"> <FaGoogle className="text-black w-7 h-7" /> <span className="text-black">Login with Google</span></button>
                    </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp;