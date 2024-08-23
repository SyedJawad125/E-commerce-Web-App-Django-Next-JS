'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
// import { AuthContext } from '@/components/AuthContext';

const TopNavbarCom = () => {
    // const { logout } = useContext(AuthContext);
    const router = useRouter();
 

    const logout = () => {
      localStorage.removeItem('token');
      router.push('/')
    };
    return (
        <div className="bg-black text-white p-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} className="h-3 w-3" />
                    <span>(+92) 333 1906382</span>
                </div>
                <div className="flex items-center space-x-4 mr-20">
                    {typeof window !== 'undefined' && localStorage.getItem('token') ? (
                        <button onClick={logout} className="text-white hover:text-gray-300">
                            Logout
                        </button>
                    ) : (
                        <Link href="/Login">
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <span>Login</span>
                            </div>
                        </Link>
                    )}
                    <Link href="/signup">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>SignUp</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopNavbarCom;
