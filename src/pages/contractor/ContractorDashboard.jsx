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

        {/* Main Content - Account for both fixed navbar and sidebar */}
        <div className="pt-16 pl-64"> {/* pt-16 for navbar, pl-64 for sidebar */}
          <div className="py-20 ">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Dashboard
              </h1>

              {/* Dashboard Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample Dashboard Cards */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Total Projects
                  </h3>
                  <p className="text-2xl font-bold text-indigo-600">24</p>
                  <p className="text-sm text-gray-500 mt-1">
                    +12% from last month
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Todo List
                  </h3>
                  <p className="text-2xl font-bold text-green-600">8</p>
                  <p className="text-sm text-gray-500 mt-1">2 new this week</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Material Status
                  </h3>
                  <p className="text-2xl font-bold text-red-600">1 inch pipes are in low count</p>
                  <p className="text-sm text-gray-500 mt-1">
                    and more...
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Live Projects
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">
                          New project "Hospital building" assigned
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        New
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">
                          Contract for "Apartment" completed
                        </p>
                        <p className="text-sm text-gray-500">1 day ago</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-gray-900">
                          Government Project
                        </p>
                        <p className="text-sm text-gray-500">3 days ago</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
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