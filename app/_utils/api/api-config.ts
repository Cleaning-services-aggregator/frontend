interface ApiConfig {
  hostName: string;
  apiUrl: string;
}

export const apiConfig: ApiConfig = {
  hostName: process.env.NEXT_PUBLIC_HOST_NAME_DEV || "",
  apiUrl: process.env.NEXT_PUBLIC_API_URL_DEV || "",
};
