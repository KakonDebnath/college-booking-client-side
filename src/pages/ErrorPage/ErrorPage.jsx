import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Link to='/' className="flex justify-center">
                <button>Back To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;