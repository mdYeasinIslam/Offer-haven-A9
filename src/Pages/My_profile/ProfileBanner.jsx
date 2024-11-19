import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";

// eslint-disable-next-line react/prop-types
const ProfileBanner = ({message}) => {
  const{userInfo} = useContext(AuthProvider)

    return (
        <div className="relative">
            <figure>
                <img src="/assets/Colored Patterns.svg"
                    className="w-full h-40 md:h-full rounded-xl"
                    alt="" />
            </figure>
            {
                message ?
                    <>
                    {message}
                    </>
                    :
            <div className="absolute top-3 md:top-10 lg:top-16 md:space-y-5 text-white md:w-[full] xl:left-[15%] text-center ">
                <h3 className="text-xl md:text-2xl lg:text-5xl font-semibold tracking-tighter "> Welcome to {userInfo?.displayName} Profile! 🎉</h3>
                <p className="md:w-[80%] mx-auto">Here’s where you can view and manage your personal details, preferences, and activity. Explore and make yourself at home!</p>

            </div>
            }
        </div>
    );
};

export default ProfileBanner;