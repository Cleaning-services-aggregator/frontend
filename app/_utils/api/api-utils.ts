import axios, { AxiosResponse } from "axios";
import { apiConfig } from "@/_utils/api/api-config";

export const serverSideApi = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 5000,
});

// Server Side GET request
export const get = async <T>(
  url: string,
  headers: Record<string, string> = {},
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await serverSideApi.get(url, {
      headers,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
