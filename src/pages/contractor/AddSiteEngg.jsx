import React, { useState } from 'react';
import { User, Phone, Mail, Building, Hash, Lock, CreditCard, MapPin } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import SidePannel from '../../components/common/SidePannel';

const AddSiteEngg = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    assignedProject: '',
    employeeId: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    ifscCode: '',
    customerCode: '',
    bank: ''
  });

  const [errors, setErrors] = useState({});

  const projects = [
    'Hospital Building',
    'Apartment Complex',
    'Government Project',
    'Commercial Plaza',
    'Residential Villa',
    'School Building',
    'Shopping Mall',
    'Office Complex'
  ];

  const banksInTirunelveli = [
    'State Bank of India',
    'Indian Bank',
    'Canara Bank',
    'Bank of Baroda',
    'Punjab National Bank',
    'Union Bank of India',
    'Indian Overseas Bank',
    'Central Bank of India',
    'Bank of India',
    'UCO Bank',
    'ICICI Bank',
    'HDFC Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Federal Bank',
    'South Indian Bank',
    'Karur Vysya Bank',
    'City Union Bank',
    'Lakshmi Vilas Bank',
    'Tamilnad Mercantile Bank'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number must be 10 digits';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.assignedProject) newErrors.assignedProject = 'Project assignment is required';
    if (!formData.employeeId.trim()) newErrors.employeeId = 'Employee ID is required';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required';
    if (!formData.customerCode.trim()) newErrors.customerCode = 'Customer code is required';
    if (!formData.bank) newErrors.bank = 'Bank selection is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Site Engineer added successfully!');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      assignedProject: '',
      employeeId: '',
      password: '',
      confirmPassword: '',
      accountNumber: '',
      ifscCode: '',
      customerCode: '',
      bank: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-amber-400 border-b-4 border-black fixed top-0 left-0 right-0 z-50 h-16">
        <Navbar/>
      </nav>

      {/* Side Panel */}
      <aside className="bg-amber-100 border-r-4 border-black fixed left-0 top-0 bottom-0 w-16 md:w-64 z-40 overflow-y-auto">
        <SidePannel/>
      </aside>

      {/* Main Content */}
      <main className="pt-16 pl-16 md:pl-64 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className=" rounded-lg  p-4 sm:p-6 lg:p-8 ">
            <div className="mb-6 sm:mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Add Site Engineer</h1>
              <p className="text-sm sm:text-base text-gray-700">Fill in the details to add a new site engineer to the system</p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Personal Information Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <User className="mr-2 text-black flex-shrink-0" size={20} />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-black'}`}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.phoneNumber ? 'border-red-500' : 'border-black'}`}
                        placeholder="Enter 10-digit phone number"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.phoneNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email ID *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-black'}`}
                        placeholder="Enter email address"
                      />
                    </div>
                    {errors.email && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Assign to Project *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10" size={18} />
                      <select
                        name="assignedProject"
                        value={formData.assignedProject}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-black focus:border-black appearance-none bg-white text-black text-sm sm:text-base ${errors.assignedProject ? 'border-red-500' : 'border-black'}`}
                      >
                        <option value="">Select a project</option>
                        {projects.map((project, index) => (
                          <option key={index} value={project}>{project}</option>
                        ))}
                      </select>
                    </div>
                    {errors.assignedProject && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.assignedProject}</p>}
                  </div>
                </div>
              </div>

              {/* Login Credentials Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <Lock className="mr-2 text-amber-600 flex-shrink-0" size={20} />
                  Login Credentials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Employee ID *
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.employeeId ? 'border-red-500' : 'border-black'}`}
                        placeholder="Enter employee ID"
                      />
                    </div>
                    {errors.employeeId && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.employeeId}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.password ? 'border-red-500' : 'border-black'}`}
                      placeholder="Enter password"
                    />
                    {errors.password && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.confirmPassword ? 'border-red-500' : 'border-black'}`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Bank Details Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <CreditCard className="mr-2 text-amber-600 flex-shrink-0" size={20} />
                  Bank Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Account Number *
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.accountNumber ? 'border-red-500' : 'border-black'}`}
                      placeholder="Enter account number"
                    />
                    {errors.accountNumber && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.accountNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      IFSC Code *
                    </label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.ifscCode ? 'border-red-500' : 'border-black'}`}
                      placeholder="Enter IFSC code"
                    />
                    {errors.ifscCode && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.ifscCode}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Customer Code *
                    </label>
                    <input
                      type="text"
                      name="customerCode"
                      value={formData.customerCode}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white text-black text-sm sm:text-base ${errors.customerCode ? 'border-red-500' : 'border-black'}`}
                      placeholder="Enter customer code"
                    />
                    {errors.customerCode && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.customerCode}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Bank *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10" size={18} />
                      <select
                        name="bank"
                        value={formData.bank}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 appearance-none bg-white text-black text-sm sm:text-base ${errors.bank ? 'border-red-500' : 'border-black'}`}
                      >
                        <option value="">Select a bank</option>
                        {banksInTirunelveli.map((bank, index) => (
                          <option key={index} value={bank}>{bank}</option>
                        ))}
                      </select>
                    </div>
                    {errors.bank && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.bank}</p>}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full sm:flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center border-2 border-black shadow-lg text-sm sm:text-base"
                >
                  <User className="mr-2 flex-shrink-0" size={20} />
                  Add Site Engineer
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 border-2 border-amber-400 shadow-lg text-sm sm:text-base"
                >
                  Reset Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddSiteEngg;