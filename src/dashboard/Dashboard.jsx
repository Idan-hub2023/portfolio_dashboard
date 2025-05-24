  import React, { useState } from 'react';
  import { Plus,Edit3,Trash2,Upload,Eye,Users,MessageSquare,Star,Calendar,Search,Filter,Download,BarChart3, Globe, Camera,Code,Settings,Bell,TrendingUp,MapPin,Clock,Mail} from 'lucide-react';

  const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showAddProject, setShowAddProject] = useState(false);
    const [showAddPhoto, setShowAddPhoto] = useState(false);

    // Sample data - in real app this would come from backend
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack web application with React and Node.js",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
        tech: ["React", "Node.js", "MongoDB"],
        status: "Published",
        views: 1250,
        likes: 89,
        createdAt: "2024-01-15"
      },
      {
        id: 2,
        title: "Mobile Task Manager",
        description: "Cross-platform mobile app built with React Native",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
        tech: ["React Native", "Firebase"],
        status: "Draft",
        views: 0,
        likes: 0,
        createdAt: "2024-01-20"
      }
    ]);

    const [photos, setPhotos] = useState([
      {
        id: 1,
        title: "Team Meeting",
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
        category: "Work",
        uploadDate: "2024-01-10"
      },
      {
        id: 2,
        title: "Office Setup",
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
        category: "Workspace",
        uploadDate: "2024-01-12"
      }
    ]);

    const visitors = [
      {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        location: "New York, US",
        visitTime: "2 hours ago",
        pagesViewed: 5,
        timeSpent: "8 min"
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@company.com",
        location: "London, UK",
        visitTime: "5 hours ago",
        pagesViewed: 3,
        timeSpent: "12 min"
      },
      {
        id: 3,
        name: "Mike Chen",
        email: "mike@startup.io",
        location: "San Francisco, US",
        visitTime: "1 day ago",
        pagesViewed: 8,
        timeSpent: "15 min"
      }
    ];

    const messages = [
      {
        id: 1,
        name: "Alex Rodriguez",
        email: "alex@techcorp.com",
        subject: "Freelance Opportunity",
        message: "Hi, I saw your portfolio and I'm interested in discussing a project...",
        time: "1 hour ago",
        read: false
      },
      {
        id: 2,
        name: "Emma Wilson",
        email: "emma@design.co",
        subject: "Collaboration Proposal",
        message: "Love your work! Would you be interested in collaborating on...",
        time: "3 hours ago",
        read: true
      }
    ];

    const stats = [
      { label: "Total Visitors", value: "2,847", change: "+12%", icon: Users },
      { label: "Portfolio Views", value: "5,234", change: "+8%", icon: Eye },
      { label: "New Messages", value: "23", change: "+5", icon: MessageSquare },
      { label: "Project Likes", value: "892", change: "+18%", icon: Star }
    ];

    const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
      <button
        onClick={() => onClick(id)}
        className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-indigo-600 text-white shadow-lg' 
            : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </button>
    );

    const StatCard = ({ stat }) => (
      <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
          </div>
          <div className="p-3 bg-indigo-100 rounded-lg">
            <stat.icon className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>
    );

    const ProjectCard = ({ project, onEdit, onDelete }) => (
      <div className="bg-white rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Published' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{project.views} views</span>
            <span>{project.likes} likes</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => onEdit(project)}
              className="flex-1 flex items-center justify-center space-x-2 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>
            <button 
              onClick={() => onDelete(project.id)}
              className="flex-1 flex items-center justify-center space-x-2 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    );

    const PhotoCard = ({ photo, onDelete }) => (
      <div className="bg-white rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
        <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-gray-900">{photo.title}</h3>
          <p className="text-sm text-gray-600">{photo.category}</p>
          <p className="text-xs text-gray-500 mt-1">{photo.uploadDate}</p>
          <button 
            onClick={() => onDelete(photo.id)}
            className="mt-3 w-full flex items-center justify-center space-x-2 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    );

    const AddProjectModal = () => (
      showAddProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Project</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="3"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="React, Node.js, MongoDB" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={() => setShowAddProject(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddProject(false)}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )
    );

    const AddPhotoModal = () => (
      showAddPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Photo</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo Title</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Workspace</option>
                  <option>Events</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={() => setShowAddPhoto(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddPhoto(false)}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>
      )
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-indigo-100">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Portfolio Dashboard</h1>
                  <p className="text-sm text-gray-600">Manage your portfolio content</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-indigo-600 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  <Globe className="w-4 h-4" />
                  <span>View Live Site</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-sm border-r border-indigo-100 min-h-screen">
            <nav className="p-4 space-y-2">
              <TabButton id="dashboard" label="Dashboard" icon={BarChart3} isActive={activeTab === 'dashboard'} onClick={setActiveTab} />
              <TabButton id="projects" label="Projects" icon={Code} isActive={activeTab === 'projects'} onClick={setActiveTab} />
              <TabButton id="photos" label="Photos" icon={Camera} isActive={activeTab === 'photos'} onClick={setActiveTab} />
              <TabButton id="visitors" label="Visitors" icon={Users} isActive={activeTab === 'visitors'} onClick={setActiveTab} />
              <TabButton id="messages" label="Messages" icon={MessageSquare} isActive={activeTab === 'messages'} onClick={setActiveTab} />
              <TabButton id="analytics" label="Analytics" icon={TrendingUp} isActive={activeTab === 'analytics'} onClick={setActiveTab} />
              <TabButton id="settings" label="Settings" icon={Settings} isActive={activeTab === 'settings'} onClick={setActiveTab} />
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                  <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleString()}</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Visitors</h3>
                    <div className="space-y-4">
                      {visitors.slice(0, 3).map(visitor => (
                        <div key={visitor.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{visitor.name}</p>
                            <p className="text-sm text-gray-600">{visitor.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-900">{visitor.timeSpent}</p>
                            <p className="text-xs text-gray-500">{visitor.visitTime}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Messages</h3>
                    <div className="space-y-4">
                      {messages.slice(0, 3).map(message => (
                        <div key={message.id} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${message.read ? 'bg-gray-400' : 'bg-indigo-600'}`}></div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{message.name}</p>
                            <p className="text-sm text-gray-600 truncate">{message.subject}</p>
                            <p className="text-xs text-gray-500">{message.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Manage Projects</h2>
                  <button 
                    onClick={() => setShowAddProject(true)}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      onEdit={() => {}}
                      onDelete={() => setProjects(projects.filter(p => p.id !== project.id))}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Photo Gallery</h2>
                  <button 
                    onClick={() => setShowAddPhoto(true)}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {photos.map(photo => (
                    <PhotoCard 
                      key={photo.id} 
                      photo={photo}
                      onDelete={() => setPhotos(photos.filter(p => p.id !== photo.id))}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'visitors' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Website Visitors</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-1">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Search visitors..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visitor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pages Viewed</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time Spent</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visit Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {visitors.map(visitor => (
                          <tr key={visitor.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div>
                                <div className="font-medium text-gray-900">{visitor.name}</div>
                                <div className="text-sm text-gray-600">{visitor.email}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {visitor.location}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{visitor.pagesViewed}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{visitor.timeSpent}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {visitor.visitTime}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-indigo-100">
                  <div className="divide-y divide-gray-200">
                    {messages.map(message => (
                      <div key={message.id} className={`p-6 hover:bg-gray-50 ${!message.read ? 'bg-indigo-50' : ''}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">{message.name}</h3>
                              {!message.read && <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>}
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                            <p className="font-medium text-gray-900 mb-2">{message.subject}</p>
                            <p className="text-gray-600 mb-3">{message.message}</p>
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800">
                                <Mail className="w-4 h-4" />
                                <span>Reply</span>
                              </button>
                              <span className="text-sm text-gray-500">{message.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
                <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-8 text-center">
                  <BarChart3 className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">Detailed analytics and charts would be implemented here</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                      <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="John Doe - Portfolio" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="3" defaultValue="Full Stack Developer with 5+ years of experience..."></textarea>
                    </div>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

        <AddProjectModal />
        <AddPhotoModal />
      </div>
    );
  };

  export default Dashboard;