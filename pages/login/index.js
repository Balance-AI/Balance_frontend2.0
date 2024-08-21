import LoginForm from "../../components/LoginForm";


export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* Heading */}
        <h1 className="mt-20 mb-8 text-3xl font-semibold text-gray-800">
          Login as a User
        </h1>
      
        {/* Login Form */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
          <form>
            {/* Username/Email Input */}
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username / Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Enter your username or email"
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
      
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
}