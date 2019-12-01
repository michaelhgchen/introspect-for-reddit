require("dotenv").config();

module.exports = {
  serverRuntimeConfig: {
    redditClientId: process.env.REDDIT_CLIENT_ID,
    redditClientSecret: process.env.REDDIT_CLIENT_SECRET,
    redditCallbackUrl: process.env.REDDIT_CALLBACK_URL
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  }
};
