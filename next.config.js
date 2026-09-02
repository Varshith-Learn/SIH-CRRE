/** @type {import('next').NextConfig} */

const isExport = process.env.IS_STATIC_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: isExport ? 'export' : undefined,
  images: {
    unoptimized: isExport ? true : undefined,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

if (!isExport) {
  nextConfig.headers = async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  };

  nextConfig.redirects = async () => {
    return [
      {
        source: '/problems',
        destination: 'https://sih.gov.in/sih2026PS',
        permanent: false,
      },
      {
        source: '/problem-statements',
        destination: 'https://sih.gov.in/sih2026PS',
        permanent: false,
      },
    ];
  };
}

module.exports = nextConfig;
