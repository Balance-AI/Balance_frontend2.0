import LoginForm from "../../components/LoginForm";
import Link from "next/link";



export default function Login() {
    return (

        <div className="min-h-screen flex items-center justify-center my-20 bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white mb-6">Welcome Back!</h2>
        
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your email"
          />
        </div>
        
        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-400 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-gray-400 hover:text-yellow-500">
            Forgot your password?
          </a>
        </div>

        <Link href= "/Profile"> 
        {/* Sign In Button */}
        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors mb-6">
          Sign In
        </button>
        </Link> 

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="h-px bg-gray-600 w-1/4"></span>
          <span className="px-2 text-gray-400">OR</span>
          <span className="h-px bg-gray-600 w-1/4"></span>
        </div>

        {/* Social Sign-In Buttons */}
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.496v-9.294H9.69V11.06h3.131V8.414c0-3.103 1.893-4.794 4.658-4.794 1.324 0 2.463.098 2.795.143v3.24l-1.92.001c-1.504 0-1.795.714-1.795 1.762v2.309h3.589l-.467 3.647h-3.122V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"
              clipRule="evenodd"
            />
          </svg>
          Continue with Facebook
        </button>

        <button className="w-full flex items-center justify-center bg-white text-black py-3 rounded-lg hover:bg-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4285F4"
              d="M46.615 24.553c0-1.545-.137-3.022-.393-4.42H24v8.362h12.757c-.548 2.842-2.142 5.244-4.514 6.852v5.677h7.274c4.26-3.92 6.695-9.695 6.695-16.471z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.066 0 11.154-2.014 14.872-5.457l-7.274-5.676c-2.02 1.362-4.58 2.172-7.598 2.172-5.845 0-10.8-3.947-12.558-9.262H2.042v5.807C5.755 43.672 14.173 48 24 48z"
            />
            <path
              fill="#FBBC05"
              d="M11.442 30.35A12.068 12.068 0 019.652 24c0-2.225.59-4.32 1.628-6.143V12.05H2.042A23.957 23.957 0 000 24c0 3.76.889 7.31 2.471 10.446l8.971-4.096z"
            />
            <path
              fill="#EA4335"
              d="M24 9.552c3.29 0 6.231 1.131 8.553 3.341l6.397-6.396C34.888 2.66 29.9 0 24 0 14.173 0 5.755 4.328 2.042 12.05l8.238 5.807C13.2 13.5 18.155 9.552 24 9.552z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
    )
}