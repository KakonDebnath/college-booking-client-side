import { Link } from "react-router-dom";

const Button = ({children, path, handleClick}) => {
    return (
        <div>
            <Link onClick={handleClick} to={path} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition-all">{children}</Link>
        </div>
    );
};

export default Button;