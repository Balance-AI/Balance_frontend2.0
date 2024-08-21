import Link from "next/link";

export default function Budgeting() {
    return(
        <div className="min-h-screen bg-gray-900 my-20 text-white">
  {/* Finances Section - Expenses Breakdown */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
    <h2 className="text-2xl font-semibold">Expenses Breakdown</h2>
    <div className="mt-6 text-center">
      <h3 className="text-4xl font-bold">$5,370</h3>
      <p className="text-red-500">-8% 1M</p>
    </div>
    <div className="mt-6 bg-gray-700 p-6 rounded-lg">
      {/* Placeholder for Line Chart */}
      <div className="bg-gray-800 h-40 rounded-lg mb-6"></div>
      <div className="text-center">
        <p className="inline-block text-purple-500">Payroll</p>
        <p className="inline-block mx-4 text-yellow-500">Adspend</p>
        <p className="inline-block text-gray-400">Rent</p>
      </div>
      <div className="mt-4 text-center">
        <span className="text-yellow-500">WEEK</span>
        <span className="mx-4 text-gray-400">MONTH</span>
        <span className="text-gray-400">YEAR</span>
        <span className="ml-4 text-gray-400">5 YEAR</span>
      </div>
    </div>
  </div>

  {/* November Spendings Section */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-md mx-4 my-8">
    <h2 className="text-2xl font-semibold">November Spendings</h2>
    <div className="mt-6">
      {/* Total Expenses */}
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold">$2,630 left</h3>
        <div className="relative h-4 bg-gray-500 rounded-full mt-2">
          <div className="absolute top-0 left-0 h-4 bg-yellow-500 rounded-full" style={{ width: '67%' }}></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">$5,370 spent of $8,000</p>
      </div>
      {/* Breakdown */}
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">Payroll</h3>
        <p className="text-lg font-semibold text-purple-500">$1,500.55 left</p>
        <div className="relative h-4 bg-gray-500 rounded-full mt-2">
          <div className="absolute top-0 left-0 h-4 bg-purple-500 rounded-full" style={{ width: '41%' }}></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">$1,030.45 spent of $2,500</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">Rent</h3>
        <p className="text-lg font-semibold text-gray-400">$400 left</p>
        <div className="relative h-4 bg-gray-500 rounded-full mt-2">
          <div className="absolute top-0 left-0 h-4 bg-gray-400 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">$1,600 spent of $2,000</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">Adspend</h3>
        <p className="text-lg font-semibold text-yellow-500">$0 left</p>
        <div className="relative h-4 bg-gray-500 rounded-full mt-2">
          <div className="absolute top-0 left-0 h-4 bg-yellow-500 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">$4,203 spent of $4,000</p>
        <p className="text-red-500 mt-2">-$203 over</p>
        <p className="text-red-500 mt-1">⚠️ You've exceeded your monthly budget!</p>
      </div>
    </div>
  </div>
</div>

    )
}