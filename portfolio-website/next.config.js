/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
       USERNAME:process.env.NEXT_PUBLIC_USERNAME,
       PASSWORD:process.env.NEXT_PUBLIC_PASSWORD 
    }
}

module.exports = nextConfig
