import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com", "141.8.195.214", "api.jashishker.kg"],
  },
};

export default withNextIntl(nextConfig);
