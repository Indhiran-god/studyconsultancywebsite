import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUserDetails(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        window.location.reload();
        navigate('/login');
      } else {
        toast.error(data.message || 'Logout failed');
      }
    } catch (error) {
      toast.error('Error logging out. Please try again.');
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="h-16 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        <div className="text-xl font-bold">Restaurant Booker</div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/menu" className="text-white hover:text-gray-400">Menu</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </nav>
        <div className="ml-4">
          {user?._id ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

