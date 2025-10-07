import React, { useState } from 'react';
import { Calendar, IndianRupee, User, Building2, UserCheck, CheckCircle } from 'lucide-react';
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

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
    if (!formData.clientName.trim()) newErrors.clientName = 'Client name is required';
    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget is required';
    } else if (isNaN(formData.budget) || parseFloat(formData.budget) <= 0) {
      newErrors.budget = 'Please enter a valid budget amount';
    }
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    } else if (formData.startDate && new Date(formData.dueDate) <= new Date(formData.startDate)) {
      newErrors.dueDate = 'Due date must be after start date';
    }
    if (!formData.assignedEngineer) newErrors.assignedEngineer = 'Please assign a site engineer';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Project Data:', formData);
      setShowSuccessModal(true);

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

  const closeSuccessModal = () => setShowSuccessModal(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SidePannel />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="w-full flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          <div className="max-w-3xl mx-auto w-full">
            {/* Page Title */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                Create New Project
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Fill in the details below to create a new construction project
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="space-y-4 sm:space-y-5">
                  {/* Project Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Project Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        placeholder="Enter project name"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors ${
                          errors.projectName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                        }`}
                      />
                    </div>
                    {errors.projectName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.projectName}</p>}
                  </div>

                  {/* Client Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Client Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        placeholder="Enter client name"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors ${
                          errors.clientName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                        }`}
                      />
                    </div>
                    {errors.clientName && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.clientName}</p>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Budget (₹) *
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="Enter budget amount"
                        min="0"
                        step="0.01"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors ${
                          errors.budget ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                        }`}
                      />
                    </div>
                    {errors.budget && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.budget}</p>}
                  </div>

                  {/* Dates Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Start Date */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Start Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors ${
                            errors.startDate ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                          }`}
                        />
                      </div>
                      {errors.startDate && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.startDate}</p>}
                    </div>

                    {/* Due Date */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Due Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="date"
                          name="dueDate"
                          value={formData.dueDate}
                          onChange={handleInputChange}
                          className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors ${
                            errors.dueDate ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                          }`}
                        />
                      </div>
                      {errors.dueDate && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.dueDate}</p>}
                    </div>
                  </div>

                  {/* Assign Site Engineer */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Assign Site Engineer *
                    </label>
                    <div className="relative">
                      <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                      <select
                        name="assignedEngineer"
                        value={formData.assignedEngineer}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl focus:outline-none transition-colors appearance-none bg-white ${
                          errors.assignedEngineer ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-yellow-500"
                        }`}
                      >
                        <option value="">Select a site engineer</option>
                        {siteEngineers.map((engineer) => (
                          <option key={engineer.id} value={engineer.empId}>
                            {engineer.name} ({engineer.empId})
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.assignedEngineer && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.assignedEngineer}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-yellow-500 text-white py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-yellow-600 transition-all font-semibold text-sm sm:text-base md:text-lg transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                      Create Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-auto text-center shadow-2xl animate-in">
            <div className="mx-auto flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-100 mb-3 sm:mb-4">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Project Created Successfully!
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
              Your new project "{formData.projectName}" has been created and assigned to the selected engineer.
            </p>
            <button
              onClick={closeSuccessModal}
              className="w-full bg-yellow-500 text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl hover:bg-yellow-600 transition-colors font-semibold text-sm sm:text-base"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewProject;
