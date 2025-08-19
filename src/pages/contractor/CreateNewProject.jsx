import React, { useState } from 'react';
import { Calendar, IndianRupee, User, Building2, UserCheck, X, CheckCircle } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import SidePannel from '../../components/common/SidePannel';

const CreateNewProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    budget: '',
    startDate: '',
    dueDate: '',
    assignedEngineer: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Dummy site engineers data
  const siteEngineers = [
    { id: 1, name: 'John Smith', empId: 'ENG001' },
    { id: 2, name: 'Sarah Johnson', empId: 'ENG002' },
    { id: 3, name: 'Mike Davis', empId: 'ENG003' },
    { id: 4, name: 'Emily Wilson', empId: 'ENG004' },
    { id: 5, name: 'Robert Brown', empId: 'ENG005' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client name is required';
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget is required';
    } else if (isNaN(formData.budget) || parseFloat(formData.budget) <= 0) {
      newErrors.budget = 'Please enter a valid budget amount';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }

    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    } else if (formData.startDate && new Date(formData.dueDate) <= new Date(formData.startDate)) {
      newErrors.dueDate = 'Due date must be after start date';
    }

    if (!formData.assignedEngineer) {
      newErrors.assignedEngineer = 'Please assign a site engineer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Project Data:', formData);
      setShowSuccessModal(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          projectName: '',
          clientName: '',
          budget: '',
          startDate: '',
          dueDate: '',
          assignedEngineer: ''
        });
      }, 1000);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      
      {/* Sidebar */}
      <SidePannel />
      
      {/* Main Content */}
      <div className="pt-25  lg:pl-64 pl-0">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          {/* Page Title */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Project</h1>
            <p className="text-gray-600">Fill in the details below to create a new construction project</p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    placeholder="Enter project name"
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                      errors.projectName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-yellow-500'
                    }`}
                  />
                </div>
                {errors.projectName && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectName}</p>
                )}
              </div>

              {/* Client Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Client Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    placeholder="Enter client name"
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                      errors.clientName 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-yellow-500'
                    }`}
                  />
                </div>
                {errors.clientName && (
                  <p className="mt-1 text-sm text-red-500">{errors.clientName}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget (₹) *
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Enter budget amount"
                    min="0"
                    step="0.01"
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                      errors.budget 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-yellow-500'
                    }`}
                  />
                </div>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
                )}
              </div>

              {/* Date Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                        errors.startDate 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-yellow-500'
                      }`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>
                  )}
                </div>

                {/* Due Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Due Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                        errors.dueDate 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-300 focus:border-yellow-500'
                      }`}
                    />
                  </div>
                  {errors.dueDate && (
                    <p className="mt-1 text-sm text-red-500">{errors.dueDate}</p>
                  )}
                </div>
              </div>

              {/* Assign Site Engineer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Assign Site Engineer *
                </label>
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="assignedEngineer"
                    value={formData.assignedEngineer}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none transition-colors appearance-none bg-white ${
                      errors.assignedEngineer 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-yellow-500'
                    }`}
                  >
                    <option value="">Select a site engineer</option>
                    {siteEngineers.map(engineer => (
                      <option key={engineer.id} value={engineer.empId}>
                        {engineer.name} ({engineer.empId})
                      </option>
                    ))}
                  </select>
                </div>
                {errors.assignedEngineer && (
                  <p className="mt-1 text-sm text-red-500">{errors.assignedEngineer}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-4 px-6 rounded-xl hover:bg-yellow-600 transition-colors font-semibold text-lg transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Project Created Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Your new project "{formData.projectName}" has been created and assigned to the selected engineer.
              </p>
              <button
                onClick={closeSuccessModal}
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-xl hover:bg-yellow-600 transition-colors font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewProject;