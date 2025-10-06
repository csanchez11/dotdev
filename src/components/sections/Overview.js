import React from 'react';

const MetricCard = ({ title, value, change, icon, color }) => (
  <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        <p className={`text-sm mt-1 ${color}`}>{change}</p>
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color.includes('green') ? 'bg-green-100 dark:bg-green-900/20' : 'bg-blue-100 dark:bg-blue-900/20'}`}>
        <span className="text-xl">{icon}</span>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ time, action, status }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50">
    <div className={`w-2 h-2 rounded-full ${status === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
    <div className="flex-1">
      <p className="text-sm text-gray-900 dark:text-white">{action}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
    </div>
  </div>
);

const Overview = () => {
  const metrics = [
    // { title: 'Portfolio Value', value: '$127,549', change: '+12.3% this month', icon: '💰', color: 'text-green-600 dark:text-green-400' },
    { title: 'Active Projects', value: '5', change: '+1 this quarter', icon: '📈', color: 'text-blue-600 dark:text-blue-400' },
    { title: 'Skills Mastered', value: '24', change: '+3 recently', icon: '🎯', color: 'text-purple-600 dark:text-purple-400' },
    { title: 'Experience', value: '5+ Years', change: 'Front-End dev', icon: '⚡', color: 'text-orange-600 dark:text-orange-400' },
  ];

  const recentActivity = [
    { time: '2 hours ago', action: 'Completed React Portfolio Project', status: 'success' },
    { time: '1 day ago', action: 'Updated Node.js Backend Skills', status: 'success' },
    { time: '3 days ago', action: 'Deployed Trading Dashboard', status: 'success' },
    { time: '1 week ago', action: 'Added TypeScript Certification', status: 'success' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        <p className="text-blue-100">Welcome to my portfolio website built to look like a application dashboard.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills Growth Chart</h3>
          <div className="h-64 relative">
            <div className="h-64 absolute overflow-x-hidden bottom-2 left-0 right-0 flex items-end justify-center space-x-3">
              {[71, 89, 74, 90, 88, 95].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <div
                      className="w-10 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t transition-all duration-1000 ease-out"
                      style={{ height: `${Math.max(height * 2, 20)}px` }}
                    ></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {height}%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-medium">
                    {['CSS', 'HTML', 'Node', 'React', 'TS', 'JS'][index]}
                  </span>
                </div>
              ))}
            </div>

            {/* Chart grid lines */}
            {/* <div className="invisible sm:visible absolute inset-0 pointer-events-none">
              <div className="h-full flex flex-col justify-between py-8">
                {[100, 75, 50, 25, 0].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-xs text-gray-400 dark:text-gray-500 w-8">{value}%</span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2"></div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">150+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Availability</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;