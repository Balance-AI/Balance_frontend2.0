import Link from "next/link";

export default function signup() {
    return ( 
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  {/* Heading */}
  <h1 className="mt-20 mb-8 text-3xl font-semibold text-gray-800">
    Sign Up
  </h1>

  {/* Signup Form */}
  <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
    <form>
      {/* Full Name Input */}
      <div className="mb-6">
        <label
          htmlFor="fullname"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:ring-gray-300"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:ring-gray-300"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:ring-gray-300"
          placeholder="Enter your password"
        />
      </div>

      {/* Re-enter Password Input */}
      <div className="mb-6">
        <label
          htmlFor="repassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Re-enter Password
        </label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:ring-gray-300"
          placeholder="Re-enter your password"
        />
      </div>

      {/* Signup Button */}
      <button
        type="submit"
        className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>


        </> 
    )
}