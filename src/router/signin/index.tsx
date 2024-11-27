import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { signin } from "../../api/auth";
import { twMerge } from "tailwind-merge";
import { LoaderCircle } from "lucide-react";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * Interface representing the login form data structure
 * @interface LoginFormData
 * @property {string} email - User's email address
 * @property {string} password - User's password
 */
type LoginFormData = {
  email: string;
  password: string;
};

/**
 * Login component that handles user authentication
 * @returns {JSX.Element} The rendered login form
 */
export default function Login() {
  const navigate = useNavigate();

  // Initialize form handling with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  // Setup mutation for handling login API calls
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      return signin(data.email, data.password);
    },
    onError: (error) => {
      // Handle API errors and display them in the form
      if (isAxiosError(error)) {
        setError("root", { message: error.response?.data.message });
      }
    },
    onSuccess: (data) => {
      // Store authentication token and redirect on successful login
      Cookies.set("token", data.data.token);
      navigate("/", { replace: true });
    },
  });

  /**
   * Handle form submission
   * @param {LoginFormData} data - The form data containing email and password
   */
  const onSubmit = async (data: LoginFormData) => {
    await mutateAsync(data);
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col px-4 ">
      <div className="flex flex-col items-center justify-center w-full gap-2 font-geist-mono font-semibold mt-16">
        <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-md transition-colors">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Email input field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm dark:text-zinc-200 transition-colors">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white transition-colors"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1 transition-colors">
                  {errors.email.message}
                </p>
              )}
              {errors.root && (
                <p className="text-red-500 dark:text-red-400 text-sm transition-colors">
                  {errors.root.message}
                </p>
              )}
            </div>
            {/* Password input field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm dark:text-zinc-200 transition-colors"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white transition-colors"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1 transition-colors">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Submit button with loading state */}
            <button
              type="submit"
              className={twMerge(
                "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors",
                isLoading ? "animate-pulse" : ""
              )}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <LoaderCircle className="animate-spin" strokeWidth={2.6} size={30} />
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
