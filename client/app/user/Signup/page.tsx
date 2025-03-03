export default function SignupPage() {
    return (
      <div className="flex h-screen">
        {/* Left Side - Image & Branding */}
        <div className="w-1/2 relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Watch Vault"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 text-white text-2xl font-bold">
            Watch<span className="text-green-500">Vault</span>
          </div>
        </div>
  
        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Account Signup</h2>
            <p className="text-gray-500 mb-6">
              Become a member and enjoy exclusive promotions.
            </p>
  
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Signup Button */}
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Create Account
            </button>
  
            {/* OR Divider */}
            <div className="text-center my-4 text-gray-500">OR</div>
  
            {/* Google Signup Button */}
            <button className="w-full flex items-center justify-center border rounded-md py-2 hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
              CONTINUE WITH <span className="font-bold text-red-500 ml-1">Google</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  