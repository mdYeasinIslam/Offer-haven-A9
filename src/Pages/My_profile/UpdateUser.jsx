import { useContext, useRef } from "react";
import ProfileBanner from "./ProfileBanner";
import { AuthProvider } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateUser = () => {
    const { updateUserInfo, userInfo, count, setCount } = useContext(AuthProvider)
    const nameRef = useRef(null)
    const photoRef = useRef(null)
    const formHandler = e => {
        e.preventDefault()
        const name = nameRef.current?.value
        const photoURL = photoRef.current?.value
        const profile = { displayName: name, photoURL }
        updateUserInfo(profile)
            .then(() => {
            setCount(count + 1)
            toast('Wow! User Info update successfully')
            })
            .catch(er => {
            toast.error(er.message)
        })
    }
    return (
        <div>
            <ProfileBanner/>
            <div className="hero bg-base-100 min-h-screen my-10">
                <div className="hero-content py-10 px-10 flex-col gap-10 border bg-gray-200 rounded-xl">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Upgrade User Information</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={formHandler} className="card-body bg-base-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name </span>
                                </label>
                                <input ref={nameRef} name="name" type="text" placeholder="name" defaultValue={userInfo?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input ref={photoRef} name="photo" type="url" placeholder="Only URL" defaultValue={userInfo?.photoURL} className="input input-bordered" required />
                            </div>
                           
                            <div className="form-control ">
                                <button className="btn btn-outline btn-success w-full">
                                    {/* <MdOutlineLogin className="text-black w-6 h-6" /> */}
                                    <span className="text-black">Upgrade</span></button>
                            </div>
                           
                           
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;