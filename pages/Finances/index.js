import Link from "next/link";


export default function Finances() {
    return (
        <div className="my-20 min-h-screen bg-gray-900 text-white">
  {/* Finances Section */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-semibold">Finances</h2>
    </div>
    <div className="flex justify-center space-x-4">
      <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg">Overview</button>
      <Link href= "/Budgeting"> 
      <button className="bg-gray-700 text-gray-400 px-6 py-2 rounded-lg">Budgeting</button>
      </Link> 
      
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-4xl font-bold text-yellow-400">$7,528.59</h3>
      <p className="text-green-500">+8% LAST MONTH</p>
    </div>
    <div className="flex justify-between mt-8">
      <div className="bg-gray-700 px-4 py-2 rounded-lg text-center w-1/3">
        <p className="text-xl font-semibold text-white">+$1,937</p>
        <p className="text-gray-400">Cash Flow</p>
      </div>
      <div className="bg-gray-700 px-4 py-2 rounded-lg text-center w-1/3">
        <p className="text-xl font-semibold text-white">-$5,937</p>
        <p className="text-gray-400">Expenses</p>
      </div>
      <div className="bg-gray-700 px-4 py-2 rounded-lg text-center w-1/3">
        <p className="text-xl font-semibold text-green-500">+8%</p>
        <p className="text-gray-400">Growth</p>
      </div>
    </div>

    {/* Chart Section */}
    <div className="mt-6 bg-gray-700 p-6 rounded-lg">
      <div className="flex justify-around space-x-4">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">Total Revenue</button>
        <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg">Cash Flow</button>
        <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg">Expenses</button>
      </div>
      <div className="mt-6">
        <h3 className="text-3xl font-bold">$986.94</h3>
        <p className="text-green-500">+8% 1W</p>
      </div>
      <div className="mt-6">
        {/* Placeholder for Line Chart */}
        <div className="bg-gray-800 h-40 rounded-lg"></div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-yellow-500">WEEK</span>
        <span className="mx-4 text-gray-400">MONTH</span>
        <span className="text-gray-400">YEAR</span>
        <span className="ml-4 text-gray-400">5 YEAR</span>
      </div>
    </div>
  </div>

  {/* Recent Transactions Section */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
    <div className="flex justify-between">
      <h2 className="text-2xl font-semibold">Recent Transactions</h2>
      <a href="#" className="text-yellow-500">View Details</a>
    </div>
    <div className="mt-6">
      <div className="bg-gray-700 px-4 py-4 rounded-lg mb-4">
        <p className="text-xl">IG COMMISSION</p>
        <p className="text-sm text-gray-400">Nov 21st</p>
        <p className="text-green-500">+$100</p>
      </div>
      <div className="bg-gray-700 px-4 py-4 rounded-lg mb-4">
        <p className="text-xl">TikTok COMMISSION</p>
        <p className="text-sm text-gray-400">Nov 7th</p>
        <p className="text-green-500">+$100</p>
      </div>
      <div className="bg-gray-700 px-4 py-4 rounded-lg">
        <p className="text-xl">AdSense Fee</p>
        <p className="text-sm text-gray-400">Nov 6th</p>
        <p className="text-red-500">-$895</p>
      </div>
    </div>
  </div>

  {/* Conversion Section */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
    <h2 className="text-2xl font-semibold">Conversion</h2>
    <div className="mt-6">
      <div className="flex space-x-4">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">Customer Lifetime Value</button>
        <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg">Conversion</button>
        <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg">Expenses</button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-400">26 Months</p>
        <h3 className="text-3xl font-bold">$2,575.02</h3>
        <p className="text-gray-400">AVG CUSTOMER LIFETIME</p>
      </div>
      <div className="mt-6">
        {/* Placeholder for Bar Chart */}
        <div className="bg-gray-800 h-40 rounded-lg"></div>
      </div>
    </div>
  </div>
</div>

    )
}