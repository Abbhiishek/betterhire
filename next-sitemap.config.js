/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api',
            },
        ],
    },
    sitemapOptions: {
        changefreq: 'hourly',
        priority: 0.8,
    },
    outDir: 'public',
    exclude: ['/api/*', '/_next/*', '/favicon.ico'],
};

module.exports = config;