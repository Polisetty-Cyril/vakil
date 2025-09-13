export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* App Branding */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Vakil</h1>
        <p className="text-gray-600 mb-8">Create your account</p>

        {/* Google Signup Button */}
        <button className="flex items-center justify-center gap-3 w-full py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
