/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const config = dotenv.config();

dotenvExpand.expand(config);

const nextConfig = {
  output: "export",
};

export default nextConfig;
