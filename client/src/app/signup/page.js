"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await dispatch(signupUser(form));
    setLoading(false);
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Signup successful! Please login.");
      router.push("/login");
    } else {
      toast.error(result.payload || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          suppressHydrationWarning
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          suppressHydrationWarning
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          suppressHydrationWarning
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          suppressHydrationWarning
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
