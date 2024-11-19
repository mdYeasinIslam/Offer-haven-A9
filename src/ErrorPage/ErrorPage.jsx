import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="text-center mt-20">
            <h1 className="font-semibold text-4xl">{error?.status}!!</h1>
            <p>{error?.statusText}</p>
            <p>{error?.data}</p>
        </div>
    );
};

export default ErrorPage;