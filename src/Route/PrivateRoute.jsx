import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthProvider)
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-dots loading-lg  "></span></div>

    }
    if (userInfo?.email) {
        return children
    }
    else {
        return <Navigate to={'/signIn'} state={{from:location}} replace/>
    }
}

export default PrivateRoute