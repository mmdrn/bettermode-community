import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import { isAxiosError } from "axios";
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

export default function useSignin() {
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

  return {
    variables: {
      isLoading,
      errors,
    },
    methods: {
      handleSubmit,
      register,
      onSubmit,
    },
  };
}
