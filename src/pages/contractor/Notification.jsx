import React, { useState } from 'react';
import { X, Search, ThumbsUp, MessageSquare, MoreHorizontal, ExternalLink, Filter, SlidersHorizontal } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import SidePannel from '../../components/common/SidePannel';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'setup',
      title: 'Mediabookit notification',
      description: 'Media monitoring setup. We made mediamonitoring easy. Set up your feed by clicking x',
      time: '2min ago',
      avatar: null,
      dismissible: true
    },
    {
      id: 2,
      type: 'post',
      author: 'DIMIS',
      handle: '@imis_belgrade',
      content: 'I posted 5 photos on Facebook in the album "Dizajn brend identiteta i aplikacije za Crveni krst Švajcarske" http://t.co/paJkofzR7b',
      time: '2min ago',
      platform: 'twitter',
      likes: 325,
      comments: 358,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      dismissible: true
    },
    {
      id: 3,
      type: 'post',
      author: 'Poslovni.hr',
      handle: '@poslovni',
      title: 'Focus on: Roko Ursić & Jasmin Repesa, Codevita Zagreb',
      content: 'Troškašu 6-sedot stari u Vrnjački, 135m2, 90€/m2 ! VRN/ČE idovne projsije ZAGREB - najavi rane, stanova, kuća, operneje, pozivni prostor Prodaje se 6-sobni stan koji se prostire ni m etaže. Prva stala se sastoji od dnevnog boravka...',
      time: '22min ago',
      platform: 'article',
      likes: 24,
      comments: 8,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      dismissible: false,
      hasLink: true
    },
    {
      id: 4,
      type: 'post',
      author: 'Happydiem fait',
      handle: '@happydiem',
      content: 'Hajina Fly | – Croatian Fashion brand, Ðurđica Vorkaplć, moda, modní brend. Hajina Fly | – Hvary Garden - Croatian Fashion brand, Ðurđica Vorkaplć, moda, modní brend. Štýrán, návštel I revije ostalových modnih događanja, kolekcije, opticilnie, krmčou, ópoda i lakiše. Croatian fashion brand, lifestyle, make...',
      time: '2h',
      platform: 'article',
      likes: 66,
      comments: 46,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      dismissible: false
    },
    {
      id: 5,
      type: 'post',
      author: 'DIMIS',
      handle: '@imis_belgrade',
      content: 'I posted 5 photos on Facebook in the album "Dizajn brend identiteta i aplikacije za Crveni krst Švajcarske" http://t.co/paJkofzR7b',
      time: '22min ago',
      platform: 'twitter',
      likes: 325,
      comments: 358,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      dismissible: true
    },
    {
      id: 6,
      type: 'post',
      author: 'Poslovni.hr',
      handle: '@poslovni',
      title: 'Focus on: Roko Ursić & Jasmin Repesa, Codevita Zagreb',
      content: 'Troškašu 6-sedot stari u Vrnjački, 135m2, 90€/m2 ! VRN/ČE idovne projsije ZAGREB - najavi rane, stanova, kuća, operneje, pozivni prostor Prodaje se 6-sobni stan koji se prostire ni m etaže. Prva stala se sastoji od dnevnog boravka...',
      time: '22min ago',
      platform: 'article',
      likes: 24,
      comments: 8,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      dismissible: false,
      hasLink: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const highlightText = (text) => {
    const keywords = ['Facebook', 'operneje', 'ostalových'];
    let result = text;
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, '<span class="bg-yellow-200 px-1 rounded">$1</span>');
    });
    
    return result;
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
      {/* Main Content Wrapper with proper spacing */}
      <main className="pt-16 pl-16 md:pl-64 min-h-screen">

      <div className="mx-14 pt-16 rounded-sm">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Title and Search */}
            <div className="flex-1 p-5 space-y-4">
              
              <div className="relative  max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center p-5 gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              
              <select className="px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors">
                <option>Sort by: Latest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Most Engaged</option>
              </select>
            </div>
          </div>

          {/* Filter Tags */}
          {showFilters && (
            <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-gray-700">Active Filters:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-gray-700">
                    <span className="font-medium">Keyword:</span> Mediabookit
                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" />
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-gray-700">
                    <span className="font-medium">Language:</span> ANY
                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" />
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-gray-700">
                    <span className="font-medium">Blocked:</span> index.hr
                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" />
                  </span>
                </div>
                <button className="ml-auto text-yellow-600 hover:text-yellow-700 font-medium">
                  Edit Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notifications Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-yellow-200 transition-all duration-200"
            >
              <div className="p-5 sm:p-6">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {notif.avatar ? (
                      <img
                        src={notif.avatar}
                        alt={notif.author}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Platform Icon */}
                        {notif.platform === 'twitter' && (
                          <div className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded mb-2">
                            <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Author Info */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900 text-base">
                            {notif.author || notif.title}
                          </span>
                          {notif.handle && (
                            <span className="text-gray-500 text-sm">{notif.handle}</span>
                          )}
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-500 text-sm font-medium">{notif.time}</span>
                        </div>

                        {/* Title */}
                        {notif.title && notif.type === 'post' && (
                          <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center gap-2 group-hover:text-yellow-600 transition-colors">
                            {notif.title}
                            {notif.hasLink && (
                              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            )}
                          </h3>
                        )}

                        {/* Content */}
                        <p 
                          className="text-gray-700 text-sm leading-relaxed break-words"
                          dangerouslySetInnerHTML={{ __html: highlightText(notif.content || notif.description) }}
                        />
                      </div>

                      {/* Dismiss Button */}
                      {notif.dismissible && (
                        <button 
                          onClick={() => dismissNotification(notif.id)}
                          className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Engagement Metrics */}
                    {(notif.likes || notif.comments) && (
                      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-yellow-600 transition-colors group/btn">
                          <div className="p-1.5 rounded-lg group-hover/btn:bg-yellow-50 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">{notif.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-yellow-600 transition-colors group/btn">
                          <div className="p-1.5 rounded-lg group-hover/btn:bg-yellow-50 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">{notif.comments}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-gray-500">When you get notifications, they'll show up here.</p>
          </div>
        )}
      </div>
      </main>
    </div>
  );
};

export default Notification;