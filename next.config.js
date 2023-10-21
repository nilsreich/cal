/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    sw: "service-worker.js",

});

module.exports = withPWA({
    experimental: {
        serverActions: true,
    },
});

