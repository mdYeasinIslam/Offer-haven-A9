import { useNavigate, useParams } from "react-router-dom";
import ProfileBanner from "../My_profile/ProfileBanner";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const { email } = useParams()
    const { passwordResetAuth } =useContext(AuthProvider)
    const navigate =useNavigate()
    const resetPassword = (e) => {
        e.preventDefault()
        passwordResetAuth(email)
            .then(() => {
                toast('password reset email send successfully , Go to your gmail account')
                // window.location.href =("https://mail.google.com",'_blank')
                window.open("https://mail.google.com", "_blank");
                navigate('/signIn')
            })
            .catch(er => {
                console.log(er)
                toast.error(er.message)
        })
    }
    const message = <div className="absolute top-10 lg:top-20 lg:space-y-5 text-white left-[12%] md:left-[15%] lg:left-[25%] text-center ">
        <h3 className="text-2xl md:text-5xl font-semibold tracking-tighter">Want to Reset Password !!</h3>
    </div>
    return (
        <div>
            <ProfileBanner message={message } />
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content py-10 px-10 flex-col gap-10 border bg-gray-200 rounded-xl">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Upgrade User Information</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={resetPassword}  className="card-body bg-base-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" value={email} required readOnly />
                            </div>

                            <div className="form-control ">
                                {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">  <button className="btn btn-outline btn-success w-full">
                                 
                                    <span className="text-black">Reset Password</span></button>
                                </a> */}
                                    <button  className="btn btn-outline btn-success w-full">
                                    
                                    <span className="text-black">Reset Password</span></button>
                              
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;