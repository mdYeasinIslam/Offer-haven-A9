import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";
import ProfileBanner from "./ProfileBanner";

const MyProfile = () => {
    const { userInfo } = useContext(AuthProvider)
    return (
        <div>
            <ProfileBanner />
            <div className=" md:grid  md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 border-2 max-w-5xl mx-5 xl:mx-auto rounded-xl ">
                <figure className="w-full md:col-span-1">
 
                <img src={userInfo?.photoURL}
                    className="w-full h-full p-5 lg:p-1 "
                    alt="" />
                </figure>
                <div className="font-medium p-2 md:p-0 md:col-span-1 lg:col-span-2 mt-3 mb-2 space-y-4" >
                    <h1 className="text-3xl font-semibold tracking-tight ">{userInfo?.displayName}</h1>
                    <p className="">
                        <span className="text-xl">Email: </span><br /> <span className="badge badge-ghost mt-3">{userInfo?.email}</span>
                    </p>
                    <div>
                    <label >Photo URL :</label><br />
                    <input
                        type="text"
                        placeholder="Type here"
                        defaultValue={userInfo?.photoURL}
                        className="input input-bordered input-accent w-full max-w-xs" readOnly />
                    </div>
                    <p className="">
                        <span className="text-xl">Is Varified: </span><br /> <span className="badge badge-ghost mt-1">{userInfo?.emailVarified ? <>Yes</>:<>No</>}</span>
                
                    </p>
                    
                    <NavLink to={`/myProfile/updateUser`}>   <button className="btn btn-success hover:text-black text-white btn-sm mt-8">Upgrade User</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;