require("dotenv").config();
const withOffline = require("next-offline");

module.exports = withOffline({
  serverRuntimeConfig: {
    redditClientId: process.env.REDDIT_CLIENT_ID,
    redditClientSecret: process.env.REDDIT_CLIENT_SECRET,
    redditCallbackUrl: process.env.REDDIT_CALLBACK_URL
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },
  generateInDevMode: true,
});
