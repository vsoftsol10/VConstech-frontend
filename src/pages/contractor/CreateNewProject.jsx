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
          <div className="rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Create New Project</h1>
              <p className="text-sm sm:text-base text-gray-700">Fill in the details below to create a new construction project</p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Project Details Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <Building2 className="mr-2 text-black flex-shrink-0" size={20} />
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                  {/* Project Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Project Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        placeholder="Enter project name"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.projectName ? 'border-red-500' : 'border-black'}`}
                      />
                    </div>
                    {errors.projectName && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.projectName}</p>}
                  </div>

                  {/* Client Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Client Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        placeholder="Enter client name"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.clientName ? 'border-red-500' : 'border-black'}`}
                      />
                    </div>
                    {errors.clientName && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.clientName}</p>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Budget (₹) *
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="Enter budget amount"
                        min="0"
                        step="0.01"
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.budget ? 'border-red-500' : 'border-black'}`}
                      />
                    </div>
                    {errors.budget && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.budget}</p>}
                  </div>
                </div>
              </div>

              {/* Dates Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <Calendar className="mr-2 text-black flex-shrink-0" size={20} />
                  Project Timeline
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Start Date */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Start Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.startDate ? 'border-red-500' : 'border-black'}`}
                      />
                    </div>
                    {errors.startDate && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.startDate}</p>}
                  </div>

                  {/* Due Date */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Due Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={18} />
                      <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black text-sm sm:text-base ${errors.dueDate ? 'border-red-500' : 'border-black'}`}
                      />
                    </div>
                    {errors.dueDate && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.dueDate}</p>}
                  </div>
                </div>
              </div>

              {/* Assignment Section */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border-2 border-amber-400">
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                  <UserCheck className="mr-2 text-black flex-shrink-0" size={20} />
                  Assignment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                  {/* Assign Site Engineer */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Assign Site Engineer *
                    </label>
                    <div className="relative">
                      <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10" size={18} />
                      <select
                        name="assignedEngineer"
                        value={formData.assignedEngineer}
                        onChange={handleInputChange}
                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black appearance-none bg-white text-black text-sm sm:text-base ${errors.assignedEngineer ? 'border-red-500' : 'border-black'}`}
                      >
                        <option value="">Select a site engineer</option>
                        {siteEngineers.map((engineer) => (
                          <option key={engineer.id} value={engineer.empId}>
                            {engineer.name} ({engineer.empId})
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.assignedEngineer && <p className="text-red-600 text-xs sm:text-sm mt-1 font-medium">{errors.assignedEngineer}</p>}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-auto text-center shadow-2xl">
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
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-2.5 sm:py-3 px-4 rounded-lg transition-colors border-2 border-black text-sm sm:text-base"
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