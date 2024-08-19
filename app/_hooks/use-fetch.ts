import { useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface UseFetchOptions<T> {
  method: string;
  body?: T;
  headers?: Record<string, string>;
}

interface UseFetchResult<T, B> {
  data: T | null;
  error: AxiosError<ErrorResponse> | null;
  isLoading: boolean;
  executeRequest: (body?: B) => void;
  isSuccess: boolean;
}

interface ErrorResponse {
  message: string[];
  errorCode: string;
}

export function useFetch<T, B>(
  url: string,
  options: UseFetchOptions<B> = { method: "GET" }
): UseFetchResult<T, B> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const executeRequest = async (body?: B) => {
    setLoading(true);

    try {
      const axiosOptions: AxiosRequestConfig = {
        method: options.method,
        headers: {
          ...options.headers,
        },
        data: body || options.body,
        withCredentials: true,
      };

      const response: AxiosResponse<T> = await axios({
        url,
        ...axiosOptions,
      });

      setData(response.data);
      setSuccess(true);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, isLoading, executeRequest, isSuccess };
}
