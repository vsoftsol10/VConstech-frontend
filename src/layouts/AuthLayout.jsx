import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building, HardHat, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Add this import for routing
import MainLogo from '../assets/constech-logo.png';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('contractor');
  const [formData, setFormData] = useState({
    email: '',
    empId: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Dummy credentials
  const dummyCredentials = {
    contractor: {
      email: 'contractor@demo.com',
      password: 'demo123'
    },
    engineer: {
      empId: 'ENG001',
      password: 'demo123'
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (userType === 'contractor') {
      // Validate contractor credentials
      if (formData.email === dummyCredentials.contractor.email && 
          formData.password === dummyCredentials.contractor.password) {
        console.log('Contractor login successful');
        // Route to contractor dashboard
        navigate('/contractorDashboard');
      } else {
        setError('Invalid email or password for contractor');
      }
    } else {
      // Validate engineer credentials
      if (formData.empId === dummyCredentials.engineer.empId && 
          formData.password === dummyCredentials.engineer.password) {
        console.log('Engineer login successful');
        // You can add engineer dashboard route here if needed
        // navigate('/engineerDashboard');
        alert('Engineer dashboard not implemented yet');
      } else {
        setError('Invalid employee ID or password for engineer');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pb-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={MainLogo} alt='Logo' className="mx-auto h-32 w-auto" />
          <p className="text-center text-sm text-gray-600">
            Sign in to your construction management portal
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10">
            {/* User Type Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => {
                  setUserType('contractor');
                  setFormData({ email: '', empId: '', password: '' });
                  setError('');
                }}
                className={`p-4 rounded-xl border-2 transition-all ${userType === 'contractor'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <HardHat className={`w-8 h-8 mx-auto mb-2 ${userType === 'contractor' ? 'text-yellow-500' : 'text-gray-400'
                  }`} />
                <p className="text-sm font-medium">Contractor</p>
              </button>
              <button
                onClick={() => {
                  setUserType('engineer');
                  setFormData({ email: '', empId: '', password: '' });
                  setError('');
                }}
                className={`p-4 rounded-xl border-2 transition-all ${userType === 'engineer'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <User className={`w-8 h-8 mx-auto mb-2 ${userType === 'engineer' ? 'text-yellow-500' : 'text-gray-400'
                  }`} />
                <p className="text-sm font-medium">Site Engineer</p>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dynamic Input Field based on User Type */}
              <div className="relative">
                {userType === 'contractor' ? (
                  <>
                    <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      required
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
                    />
                  </>
                ) : (
                  <>
                    <CreditCard className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="empId"
                      value={formData.empId}
                      onChange={handleInputChange}
                      placeholder="Employee ID"
                      required
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
                    />
                  </>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  className="w-full pl-10 pr-12 py-3 border-0 border-b-2 border-gray-200 focus:border-yellow-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors font-medium transform hover:scale-105 active:scale-95"
              >
                Sign In as {userType === 'contractor' ? 'Contractor' : 'Site Engineer'}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-semibold text-blue-800 mb-2">Demo Credentials:</p>
              {userType === 'contractor' ? (
                <div className="text-xs text-blue-700">
                  <p><strong>Email:</strong> contractor@demo.com</p>
                  <p><strong>Password:</strong> demo123</p>
                </div>
              ) : (
                <div className="text-xs text-blue-700">
                  <p><strong>Employee ID:</strong> ENG001</p>
                  <p><strong>Password:</strong> demo123</p>
                </div>
              )}
            </div>

            {/* User Type Specific Message */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 text-center">
                {userType === 'contractor'
                  ? 'Civil Contractor - Use your registered email address'
                  : 'Site Engineer - Use your employee ID provided by the company'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer - Now properly positioned */}
      <footer className="w-full bg-white shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-gray-700">
            Created by{" "}
            <strong>
              <a
                href="https://thevsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 hover:underline transition-colors"
              >
                VSoft Solutions
              </a>
            </strong>
          </p>
          <span className="hidden sm:inline text-gray-400">|</span>
          <p className="text-gray-700">
            Powered by{" "}
            <strong>
              <a
                href="https://vconstech.thevsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 hover:underline transition-colors"
              >
                VConstech
              </a>
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;