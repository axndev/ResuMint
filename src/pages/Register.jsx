import React from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, X } from "lucide-react";

export default function Register() {
  const { signUp, isLoaded } = useSignUp();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(null);

  const handleGoogleRegister = async () => {
    if (!isLoaded || loading) return;

    try {
      setLoading(true);
      setAlert(null);

      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/app",
      });
    } catch (err) {
      setAlert({
        type: "error",
        title: "Signup failed",
        message: "Google signup failed. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen bg-zinc-50 items-center justify-center px-4">
      <div className="sm:w-[350px] w-full text-sm text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          Sign up
        </h1>
        <p className="text-gray-500 mt-2">
          Create your account with Google
        </p>

        {/* Google Signup */}
        <button
          onClick={handleGoogleRegister}
          disabled={loading}
          type="button"
          className="w-full flex items-center gap-2 justify-center my-6 cursor-pointer hover:bg-gray-100/70 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 disabled:opacity-60"
        >
          <img
            className="h-4 w-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="google"
          />
          {loading ? "Creating account..." : "Sign up with Google"}
        </button>

        <p className="text-gray-500 mb-10">
          Already have an account?
          <Link to="/login" className="text-(--primary) hover:underline">
            {" "}Log in
          </Link>
        </p>
      </div>

      {/* Alert */}
      {alert && (
        <div className="fixed bottom-6 right-6 bg-white inline-flex space-x-3 p-3 text-sm rounded border border-gray-200 shadow">
          {alert.type === "success" ? (
            <CheckCircle className="w-5 text-green-500" />
          ) : (
            <X className="w-5 text-red-500" />
          )}

          <div>
            <h3 className="text-slate-700 font-medium">
              {alert.title}
            </h3>
            <p className="text-slate-500">
              {alert.message}
            </p>
          </div>

          <button
            type="button"
            aria-label="close"
            onClick={() => setAlert(null)}
            className="cursor-pointer mb-auto text-slate-400 hover:text-slate-600 active:scale-95 transition"
          >
            <X className="w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
