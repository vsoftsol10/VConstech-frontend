import logo from "../../assets/constech-logo.png" 
import Navbar from "../../components/common/Navbar";
import SidePannel from "../../components/common/SidePannel";

const ContractorDashboard = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar/>

        {/* Sidebar */}
        <SidePannel/>

        {/* Main Content - Responsive layout */}
        <div className="pt-20 lg:ml-64 md: ml-16"> {/* Only add left margin on large screens when sidebar is visible */}
          <div className="py-6 px-4 sm:px-6 lg:py-20 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Dashboard
              </h1>

              {/* Dashboard Content Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Sample Dashboard Cards */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                    Total Projects
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-indigo-600">24</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    +12% from last month
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                    Todo List
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">8</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">2 new this week</p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                    Material Status
                  </h3>
                  <p className="text-lg sm:text-2xl font-bold text-red-600">1 inch pipes are in low count</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    and more...
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Live Projects
                  </h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0 space-y-2 sm:space-y-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          New project "Hospital building" assigned
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">2 hours ago</p>
                      </div>
                      <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full self-start sm:self-center">
                        New
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-100 last:border-0 space-y-2 sm:space-y-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          Contract for "Apartment" completed
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">1 day ago</p>
                      </div>
                      <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full self-start sm:self-center">
                        Completed
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 space-y-2 sm:space-y-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          Government Project
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">3 days ago</p>
                      </div>
                      <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full self-start sm:self-center">
                        On Process
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContractorDashboard;