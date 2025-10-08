import React, { useState } from 'react';
import { Building2, Plus, Edit2, Trash2, Save, X, MapPin, IndianRupee , Clock, Activity } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import SidePannel from '../../components/common/SidePannel';
const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      projectName: 'Residential Complex A',
      location: 'Chennai, Tamil Nadu',
      budget: '₹50,00,000',
      status: 'In Progress',
      estimatedTime: '6 months'
    },
    { 
      id: 2, 
      projectName: 'Commercial Tower B',
      location: 'Bangalore, Karnataka',
      budget: '₹1,20,00,000',
      status: 'Planning',
      estimatedTime: '12 months'
    },
    { 
      id: 3, 
      projectName: 'Industrial Park C',
      location: 'Mumbai, Maharashtra',
      budget: '₹2,00,00,000',
      status: 'Completed',
      estimatedTime: '18 months'
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    budget: '',
    status: 'Planning',
    estimatedTime: ''
  });

  const statusOptions = ['Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'];
  const statusColors = {
    'Planning': 'bg-blue-100 text-blue-800 border-blue-300',
    'In Progress': 'bg-green-100 text-green-800 border-green-300',
    'On Hold': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Completed': 'bg-purple-100 text-purple-800 border-purple-300',
    'Cancelled': 'bg-red-100 text-red-800 border-red-300'
  };

  const showMessage = (message) => {
    setSaveMessage(message);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!formData.projectName || !formData.location || !formData.budget || !formData.estimatedTime) {
      showMessage('Please fill all fields!');
      return;
    }
    
    const newProject = {
      id: Date.now(),
      projectName: formData.projectName,
      location: formData.location,
      budget: formData.budget,
      status: formData.status,
      estimatedTime: formData.estimatedTime
    };
    
    setProjects([...projects, newProject]);
    setFormData({ projectName: '', location: '', budget: '', status: 'Planning', estimatedTime: '' });
    setIsAdding(false);
    showMessage('Project added successfully!');
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      projectName: project.projectName,
      location: project.location,
      budget: project.budget,
      status: project.status,
      estimatedTime: project.estimatedTime
    });
  };

  const handleUpdate = () => {
    if (!formData.projectName || !formData.location || !formData.budget || !formData.estimatedTime) {
      showMessage('Please fill all fields!');
      return;
    }
    
    setProjects(projects.map(proj => 
      proj.id === editingId 
        ? { ...proj, ...formData }
        : proj
    ));
    setEditingId(null);
    setFormData({ projectName: '', location: '', budget: '', status: 'Planning', estimatedTime: '' });
    showMessage('Project updated successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(proj => proj.id !== id));
      showMessage('Project deleted successfully!');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ projectName: '', location: '', budget: '', status: 'Planning', estimatedTime: '' });
  };

  const renderForm = (isEdit = false) => (
    <div className="p-4 md:p-6 bg-white border-2 border-amber-400 rounded-lg space-y-4">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
          <Building2 size={32} className="md:w-10 md:h-10 text-amber-600" />
        </div>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Project Name</label>
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          placeholder="Enter project name"
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
        />
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Enter location"
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
        />
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Budget</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
          placeholder="Enter budget (e.g., ₹50,00,000)"
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
        />
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
        >
          {statusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Estimated Time</label>
        <input
          type="text"
          name="estimatedTime"
          value={formData.estimatedTime}
          onChange={handleInputChange}
          placeholder="Enter estimated time (e.g., 6 months)"
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={isEdit ? handleUpdate : handleAdd}
          className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Save size={16} className="md:w-5 md:h-5" />
          <span className="hidden sm:inline">{isEdit ? 'Update' : 'Add'} Project</span>
          <span className="sm:hidden">{isEdit ? 'Update' : 'Add'}</span>
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 md:py-3 px-3 md:px-6 rounded-lg border-2 border-black shadow-lg flex items-center justify-center transition-colors"
        >
          <X size={16} className="md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );

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
      <div className="ml-14 md:ml-64 mt-14 md:mt-18 p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-6 md:mb-8 text-center px-2 mt-6 sm:mt-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
              Project Management
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Manage your construction projects
            </p>
          </div>

          {saveMessage && (
            <div className="mb-4 p-3 md:p-4 bg-green-100 border-2 border-green-400 rounded-lg text-green-800 text-center font-medium text-xs sm:text-sm md:text-base mx-2">
              {saveMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2">
            {isAdding && (
              <div className="order-first">
                {renderForm(false)}
              </div>
            )}

            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg border-2 border-amber-400 overflow-hidden shadow-lg">
                {editingId === project.id ? (
                  renderForm(true)
                ) : (
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center mb-3">
                        <Building2 size={28} className="md:w-9 md:h-9 text-amber-600" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black text-center">{project.projectName}</h3>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4">
                      <div className="flex items-start gap-2 p-2 md:p-3 bg-amber-50 rounded-lg border border-amber-300">
                        <MapPin size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600">Location</p>
                          <p className="text-xs md:text-sm font-medium text-black break-words">{project.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2 p-2 md:p-3 bg-amber-50 rounded-lg border border-amber-300">
                        <IndianRupee size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600">Budget</p>
                          <p className="text-xs md:text-sm font-medium text-black break-words">{project.budget}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2 md:p-3 bg-amber-50 rounded-lg border border-amber-300">
                        <Clock size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-xs text-gray-600">Estimated Time</p>
                          <p className="text-xs md:text-sm font-medium text-black break-words">{project.estimatedTime}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2 md:p-3">
                        <Activity size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-gray-600 mb-1">Status</p>
                          <span className={`inline-block px-2 md:px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-3 md:px-4 text-xs md:text-sm rounded-lg shadow-lg flex items-center justify-center gap-1.5 md:gap-2 transition-colors"
                      >
                        <Edit2 size={14} className="md:w-4 md:h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-black font-bold py-2 px-3 md:px-4 rounded-lg border-2 border-black shadow-lg flex items-center justify-center transition-colors"
                      >
                        <Trash2 size={14} className="md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {projects.length === 0 && !isAdding && (
            <div className="text-center py-8 md:py-12 bg-white rounded-lg border-2 border-amber-400 mx-2">
              <Building2 size={40} className="md:w-12 md:h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm md:text-base text-gray-600 px-4">
                No projects added yet. Click "Add New Project" to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;