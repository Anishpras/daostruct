/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API: `https://api.nasa.gov/planetary/apod?api_key=2e0sZQAn8OPvjmQdHagqQZJDhNPUy5dTS1N2qWnA`,
  },
  experimental: {
    appDir: true,
  },
};
