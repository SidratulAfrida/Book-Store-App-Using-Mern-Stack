import React, { useContext, useState } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        setLoading(true);
        logOut()
            .then(() => {
                alert('Sign-out successfully!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('Error signing out:', error);
                // Optionally, set an error state here to display an error message
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button
                className='bg-blue-600 px-8 py-2 text-white rounded'
                onClick={handleLogout}
                disabled={loading}
            >
                {loading ? 'Logging out...' : 'Logout'}
            </button>
        </div>
    );
};

export default Logout;
