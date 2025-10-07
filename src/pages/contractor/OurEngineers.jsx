  import React, { useState } from 'react';
  import { User, Plus, Edit2, Trash2, Save, X, Camera, Building2, CreditCard } from 'lucide-react';
  import Navbar from '../../components/common/Navbar';
  import SidePannel from '../../components/common/SidePannel';
  const OurEngineers = () => {
    const [engineers, setEngineers] = useState([
      { 
        id: 1, 
        name: 'Sankar', 
        projectName: 'Residential Complex A',
        accountNumber: 'ACC-2024-001',
        profilePic: null
      },
      { 
        id: 2, 
        name: 'Sorna', 
        projectName: 'Commercial Tower B',
        accountNumber: 'ACC-2024-002',
        profilePic: null
      },
      { 
        id: 3, 
        name: 'Karthik', 
        projectName: 'Industrial Park C',
        accountNumber: 'ACC-2024-003',
        profilePic: null
      },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [saveMessage, setSaveMessage] = useState('');
    
    const [formData, setFormData] = useState({
      name: '',
      projectName: '',
      accountNumber: '',
      profilePic: null
    });

    const showMessage = (message) => {
      setSaveMessage(message);
      setTimeout(() => setSaveMessage(''), 3000);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, profilePic: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    };

    const handleAdd = () => {
      if (!formData.name || !formData.projectName || !formData.accountNumber) {
        showMessage('Please fill all fields!');
        return;
      }
      
      const newEngineer = {
        id: Date.now(),
        name: formData.name,
        projectName: formData.projectName,
        accountNumber: formData.accountNumber,
        profilePic: formData.profilePic
      };
      
      setEngineers([...engineers, newEngineer]);
      setFormData({ name: '', projectName: '', accountNumber: '', profilePic: null });
  
      showMessage('Engineer added successfully!');
    };

    const handleEdit = (engineer) => {
      setEditingId(engineer.id);
      setFormData({
        name: engineer.name,
        projectName: engineer.projectName,
        accountNumber: engineer.accountNumber,
        profilePic: engineer.profilePic
      });
    };

    const handleUpdate = () => {
      if (!formData.name || !formData.projectName || !formData.accountNumber) {
        showMessage('Please fill all fields!');
        return;
      }
      
      setEngineers(engineers.map(eng => 
        eng.id === editingId 
          ? { ...eng, ...formData }
          : eng
      ));
      setEditingId(null);
      setFormData({ name: '', projectName: '', accountNumber: '', profilePic: null });
      showMessage('Engineer updated successfully!');
    };

    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to remove this engineer?')) {
        setEngineers(engineers.filter(eng => eng.id !== id));
        showMessage('Engineer removed successfully!');
      }
    };
  const handleCancel = () => {
      setEditingId(null);
      setIsAdding(false);
      setFormData({ name: '', projectName: '', accountNumber: '', profilePic: null });
    };
    const renderForm = (isEdit = false) => (
      <div className="p-4 md:p-6 bg-white border-2 border-amber-400 rounded-lg space-y-4">
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center overflow-hidden">
              {formData.profilePic ? (
                <img src={formData.profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={40} className="text-amber-600" />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-amber-400 hover:bg-amber-500 p-1.5 md:p-2 rounded-full cursor-pointer border-2 border-black shadow-lg transition-colors">
              <Camera size={14} className="md:w-4 md:h-4" />
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter engineer name"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
          />
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
          <label className="block text-xs md:text-sm font-medium text-black mb-1.5 md:mb-2">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="Enter account number"
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-black rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-black"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={isEdit ? handleUpdate : handleAdd}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Save size={16} className="md:w-5 md:h-5" />
            <span className="hidden sm:inline">{isEdit ? 'Update' : 'Add'} Engineer</span>
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
            <div className="mb-6 md:mb-8 text-center px-2 mt-6 sm:mt-10">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
      Site Engineers Management
    </h1>
    <p className="text-xs sm:text-sm md:text-base text-gray-700">
      Manage your site engineers, projects, and accounts
    </p>
  </div>

            {saveMessage && (
              <div className="mb-4 p-3 md:p-4 bg-green-100 border-2 border-green-400 rounded-lg text-green-800 text-center font-medium text-xs sm:text-sm md:text-base mx-2">
                {saveMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2">
              {engineers.map(engineer => (
                <div key={engineer.id} className="bg-white rounded-lg border-2 border-amber-400 overflow-hidden shadow-lg">
                  {editingId === engineer.id ? (
                    renderForm(true)
                  ) : (
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center overflow-hidden mb-3">
                          {engineer.profilePic ? (
                            <img src={engineer.profilePic} alt={engineer.name} className="w-full h-full object-cover" />
                          ) : (
                            <User size={36} className="md:w-10 md:h-10 text-amber-600" />
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-black text-center">{engineer.name}</h3>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4">
                        <div className="flex items-start gap-2 p-2 md:p-3 bg-amber-50 rounded-lg border border-amber-300">
                          <Building2 size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-xs text-gray-600">Project</p>
                            <p className="text-xs md:text-sm font-medium text-black break-words">{engineer.projectName}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 p-2 md:p-3 bg-amber-50 rounded-lg border border-amber-300">
                          <CreditCard size={18} className="md:w-5 md:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-xs text-gray-600">Account Number</p>
                            <p className="text-xs md:text-sm font-medium text-black break-words">{engineer.accountNumber}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(engineer)}
                          className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-3 md:px-4 text-xs md:text-sm rounded-lg shadow-lg flex items-center justify-center gap-1.5 md:gap-2 transition-colors"
                        >
                          <Edit2 size={14} className="md:w-4 md:h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(engineer.id)}
                          className="hover:bg-red-500 text-black font-bold py-2 px-3 md:px-4 rounded-lg border-2 border-black shadow-lg flex items-center justify-center transition-colors"
                        >
                          <Trash2 size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {engineers.length === 0 && (
              <div className="text-center py-8 md:py-12 bg-white rounded-lg border-2 border-amber-400 mx-2">
                <User size={40} className="md:w-12 md:h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-sm md:text-base text-gray-600 px-4">
                  No engineers added yet. Click "Add New Engineer" to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default OurEngineers;