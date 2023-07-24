import { useState } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import useAuth from '../../../hooks/useAuth';
import { FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Colleges", path: "/colleges" },
        { id: 3, title: "Admission", path: "/admission" },
        { id: 4, title: "My college", path: "/my-college" },
    ]

    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="text-white font-bold text-xl">Kabbo EduCare</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    {
                        navLinks.map(navlink =>
                            <NavLink
                                key={navlink.id}
                                to={navlink.path}
                                className={({ isActive }) =>
                                    isActive ? "text-white border-b-2 px-5 text-lg transition-all duration-300" : "text-white px-3 border-0"
                                }
                            >
                                {navlink.title}
                            </NavLink>)

                    }

                    {
                        user &&
                        <div>
                            <h3 className='text-white'>Welcome <Link to="/profile" className='underline cursor-pointer hover:font-bold transition-all'>{user?.displayName}</Link></h3>
                        </div>
                    }
                    {
                        user ? 
                        <div className="tooltip hover:tooltip-open tooltip-bottom mx-2" data-tip={"Sign Out"}>
                            <button onClick={() => {
                                logOut().then(() => {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Logout Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    Navigate("/");
                                })
                            }}> <FaSignOutAlt></FaSignOutAlt> </button>
                        </div>

                            : <Link to="/login">Login</Link>
                    }
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2">
                    {
                        navLinks.map(navlink =>
                            <NavLink
                                key={navlink.id}
                                to={navlink.path}
                                className={({ isActive }) =>
                                    isActive ? "bg-white text-black block py-2 px-4 transition-all rounded-lg" : "py-1 px-4 text-white block"
                                }
                            >
                                {navlink.title}
                            </NavLink>)
                    }
                    {
                        user &&
                        <div>
                            <h3 className='text-white'><Link to="/profile" className='underline cursor-pointer hover:font-bold transition-all'>{user?.displayName}</Link></h3>
                        </div>
                    }
                    {
                        user ? 
                        <div className="tooltip hover:tooltip-open tooltip-bottom mx-2" data-tip={"Sign Out"}>
                            <button onClick={() => {
                                logOut().then(() => {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Logout Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    Navigate("/");
                                })
                            }}> <FaSignOutAlt></FaSignOutAlt> </button>
                        </div>

                            : <Link to="/login">Login</Link>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
