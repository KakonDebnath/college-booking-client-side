import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-5 py-20">
                <h4 className="text-orange-400 text-7xl"> 404 </h4> |
                <h4 className="text-3xl">Page not found</h4>
            </div>
            <div className="flex justify-center">
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded transition-all">Back To Home</Link>
            </div>
        </>
    );
};

export default ErrorPage;