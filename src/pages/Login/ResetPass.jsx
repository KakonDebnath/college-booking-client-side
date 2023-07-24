import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navbar from '../../components/Shared/Navbar/Navbar';

const ResetPass = () => {
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('');
    const [isResetSent, setIsResetSent] = useState(false);

    const handleReset = async () => {
        try {
            await resetPassword(email)
            setIsResetSent(true);
        } catch (error) {
            // Handle error here (e.g., display error message)
            console.error('Error sending password reset email:', error);
        }
    };

    return (
        <>
            <Navbar />
            {isResetSent ? (
                <div className="alert alert-success mt-5 md:w-1/2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Reset email sent! Check your inbox for further instructions.</span>
                </div>
            ) : (
                <div className='flex justify-center md:items-center mt-10 md:mt-0 h-96'>
                    <div className='text-center space-y-4 md:w-1/2'>
                        <p className=''>
                            <input
                                className="input input-bordered input-warning w-full"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                        <button className='btn btn-error' onClick={handleReset}>Send Password Reset Email</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResetPass;
