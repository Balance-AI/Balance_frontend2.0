export default function profile() {
    return ( 
        <div className="min-h-screen bg-gray-900 text-white">
        {/* Welcome Section */}
        <div className="py-8 px-4">
          <h1 className="text-4xl font-semibold">Welcome, Phoebe</h1>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-gray-400">Today, January 3rd</span>
            <div className="flex space-x-4">
              <div className="px-4 py-2 bg-gray-800 rounded-lg shadow-md">
                <p className="font-semibold text-xl">$1,937</p>
                <p className="text-gray-400">Cash Flow</p>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg shadow-md">
                <p className="font-semibold text-xl">183</p>
                <p className="text-gray-400">Followers</p>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-lg shadow-md">
                <p className="font-semibold text-xl">1</p>
                <p className="text-gray-400">Upcoming Event</p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Finances Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Finances</h2>
            <a href="#" className="text-yellow-500">View Financial Metrics</a>
          </div>
          <div className="mt-6">
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">All</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">TikTok</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">Facebook</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">Insta</button>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold">$10,307</h3>
              <p className="text-green-500">+8% 1W</p>
            </div>
            <div className="mt-6">
              {/* Placeholder for chart */}
              <div className="bg-gray-700 h-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      
        {/* Engagement Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Engagement</h2>
            <a href="#" className="text-yellow-500">View Marketing Metrics</a>
          </div>
          <div className="mt-6">
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">TikTok</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">Facebook</button>
              <button className="bg-gray-700 px-4 py-2 rounded-lg">Insta</button>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold">413</h3>
              <p className="text-red-500">-8% 1W</p>
            </div>
            <div className="mt-6">
              {/* Placeholder for chart */}
              <div className="bg-gray-700 h-40 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl">Followers</h3>
              <p className="text-3xl font-bold">309</p>
              <p className="text-red-500">-12 TODAY</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl">Likes</h3>
              <p className="text-3xl font-bold">25,391</p>
              <p className="text-green-500">+2,301 TODAY</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl">Shares</h3>
              <p className="text-3xl font-bold">732</p>
              <p className="text-green-500">+12 TODAY</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl">Comments</h3>
              <p className="text-3xl font-bold">732</p>
              <p className="text-green-500">+321 TODAY</p>
            </div>
          </div>
        </div>
      
        {/* Budgeting Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
          <h2 className="text-2xl font-semibold">Budgeting</h2>
          <div className="mt-6 flex justify-between">
            {/* Placeholder for pie chart */}
            <div className="bg-gray-700 h-40 w-40 rounded-full"></div>
            <div className="text-right">
              <h3 className="text-xl">Top 3 Expenses</h3>
              <p className="text-yellow-500">AdSense: 37%</p>
              <p className="text-blue-500">Payroll: 33%</p>
              <p className="text-purple-500">Rent: 30%</p>
            </div>
          </div>
        </div>
      
        {/* Business Timeline Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Business Timeline</h2>
            <a href="#" className="text-yellow-500">View roadmap</a>
          </div>
          <div className="mt-6">
            {/* Timeline Items */}
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="text-lg">Creating a Healthy Lifestyle with Hello Fresh!</h3>
              <p className="text-sm text-gray-400">Nov 16 - Nov 22</p>
              <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs">HIGH</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="text-lg">Finalize Brand Deal</h3>
              <p className="text-sm text-gray-400">Dec 2</p>
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs">MEDIUM</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg">Release Marketing Campaign</h3>
              <p className="text-sm text-gray-400">Dec 3 - Dec 5</p>
              <span className="bg-yellow-200 text-gray-800 px-2 py-1 rounded-lg text-xs">LOW</span>
            </div>
          </div>
        </div>
      </div>
      

    )
}