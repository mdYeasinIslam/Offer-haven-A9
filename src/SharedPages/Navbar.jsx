import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const { userInfo, signOutAuth } = useContext(AuthProvider)
   
    
    const signOut = () => {
        signOutAuth()
            .then(() => {
                toast.success('You are successfully loged out')
               
            })
            .catch(er => {
                console.error(er.message)
                toast.error(er.message)
        })
    }
    
    const navIcon = <>
        <li>  <NavLink className="" to={`/`}><FaHome /> Home</NavLink></li>
        <li> <NavLink to={`/brands`}><RiCoupon2Fill />Brands</NavLink></li>
        <li><NavLink to={'/myProfile'} >
            <CgProfile className="w-6 h-6" />my-Profile</NavLink></li>
        <li> <NavLink to={`/about`}><FcAbout />
            About Us</NavLink></li>
    </>

    const authIcon =
        <>
            {
            !userInfo?.email ?
                    <>
                        <li><NavLink to={`/signIn`}><FiLogIn />
                            Sign-In</NavLink></li>
                        <li>  <NavLink to={`/signUp`}><MdOutlineLogin />
                            Sign-Up</NavLink></li>
                    </>
                    :
                    <button onClick={signOut} className="btn btn-sm bg-gray-400 ">Log-Out</button>
            }
        </>

    return (
        <div className="navbar bg-base-100 font-family">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navIcon}
                        {authIcon}

                    {
                        userInfo?.email &&
                        <button className="btn btn-sm mt-1 xl:btn-md flex md:hidden bg-gray-300">
                            {
                                userInfo?.photoURL &&
                                <>
                                    <img src={userInfo?.photoURL} className="w-8 h-8 xl:w-10 xl:h-10 rounded-full" alt="" />
                                </>
                            }
                            {userInfo?.displayName && <span>{userInfo?.displayName}</span>
                            }
                        </button>
                    }
                    </ul>
                </div>
                <div className='flex  items-center'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/486/033/small_2x/paper-bags-with-big-percent-promo-code-concept-earn-point-and-get-reward-from-online-shopping-3d-rendering-illustration-png.png" alt="" className='w-16 md:w-20' />
                    <h1 className='md:text-xl font-semibold '>OfferHaven</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal   px-1 lg:gap-3 xl:gap-5 font-medium text-[1rem] ">
                    {navIcon}
                </ul>
            </div>
            <div className=" navbar-end font-medium list-none">

                <ul className="menu menu-horizontal  lg:gap-2 xl:gap-1 font-medium text-[1rem] hidden lg:flex ">
                    {authIcon}
                </ul>
                {
                    userInfo?.email &&
                <button className="btn btn-sm xl:btn-md hidden md:flex">
                    {
                        userInfo?.photoURL &&
                        <>
                            <img src={userInfo?.photoURL} className="w-8 h-8 xl:w-10 xl:h-10 rounded-full" alt="" />
                        </>
                    }
                        {userInfo?.displayName && <span>{userInfo?.displayName}</span> 
                        }
                    </button>
                }
            </div>
        </div>
    );
};

export default Navbar;