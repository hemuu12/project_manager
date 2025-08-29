export default function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Project Manager 🚀</h1>
      <p className="mt-4 text-lg text-gray-600">
        Organize your projects, assign tasks, and boost team productivity.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
        >
          Login
        </a>
      </div>
    </div>
  );
}
