module.exports = {
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: "/admin",
    httpNodeRoot: "/",
    functionGlobalContext: {},
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
