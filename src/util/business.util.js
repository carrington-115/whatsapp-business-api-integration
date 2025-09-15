import dotenv from "dotenv";
dotenv.config();

// endpoint configuration
const receipt_api_endpoint = `https://graph.facebook.com/v23.0/${process.env.PHONE_NUMBER_ID}/messages`;

// token configuration function
const configureAccessToken = () => {
  if (process.env.NODE_ENV !== "production") {
    return process.env.TEST_ACCESS_TOKEN;
  }
  return PRODUCTION_ACCESS_TOKEN;
};

export { receipt_api_endpoint, configureAccessToken };
