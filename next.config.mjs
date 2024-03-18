/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn-eu.dynamicyield.com",
                pathname:"**"
            }
        ]
    }
};

export default nextConfig;
