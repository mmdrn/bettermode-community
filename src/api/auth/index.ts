import { AxiosResponse } from "axios";
import { ErrorResponse, SigninResponse } from "./types";

export const signin = async (
  email: string,
  password: string
): Promise<AxiosResponse<SigninResponse>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email !== import.meta.env.VITE_AUTH_EMAIL ||
        password !== import.meta.env.VITE_AUTH_PASSWORD
      ) {
        reject({
          response: {
            data: {
              message: "Invalid email address or passowrd.",
              code: "AUTH_INVALID_CREDENTIALS",
            } as ErrorResponse,
            status: 401,
            statusText: "Unauthorized",
            headers: {},
            config: {},
          },
          isAxiosError: true,
          name: "AxiosError",
          message: "Request failed with status code 401",
        });
      }

      resolve({
        data: {
          email: import.meta.env.VITE_AUTH_EMAIL,
          password: import.meta.env.VITE_AUTH_PASSWORD,
          token: import.meta.env.VITE_AUTH_TOKEN,
        } as SigninResponse,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      } as AxiosResponse<SigninResponse>);
    }, 3000);
  });
};
