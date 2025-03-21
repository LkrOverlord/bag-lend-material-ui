// /** @type {import('next').NextConfig} */
// const nextConfig = {
   
// };
// module.exports = {
//     images: {
//       domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Dominios permitidos
//       remotePatterns: [
//         { protocol: 'https', hostname: '**' } // Permitir cualquier imagen remota
//       ]
//     }
//   }

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Dominios permitidos
        remotePatterns: [
            { protocol: 'https', hostname: '**' } // Permitir cualquier imagen remota
        ]
    }
};

export default nextConfig;