import {
  receipt_api_endpoint,
  configureAccessToken,
} from "../util/business.util.js";
import axios from "axios";
import {
  helloWorldTemplateTest,
  receiptTemplatePayload,
} from "../util/whatsapp_payloads.util.js";

const token = configureAccessToken(); // get the token

const sendTestMessageController = async (req, res) => {
  const template = helloWorldTemplateTest(req.body.phone);
  try {
    const response = await axios.post(receipt_api_endpoint, template, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response) {
      throw new Error("Invalid request");
    }

    res.status(200).json({
      status: response.statusText,
      code: response.status,
    });
  } catch (error) {
    if (error) {
      res.status(error.response.status).json({
        message: error.message,
      });
    }
  }
};

const handleSendReceipt = async (req, res) => {
  try {
    const requestBody = receiptTemplatePayload(
      req.body.phone,
      req.body.name,
      req.body.url,
      req.body.ticketId
    );

    const processRequest = await axios.post(receipt_api_endpoint, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    res.status(200).json({
      test: true,
      message: processRequest.statusText,
      status: processRequest.status,
      statusText: processRequest.statusText,
      date: processRequest.headers,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
      status: err.response.status,
      statusText: err.response.statusText,
      date: err.response.date,
    });
  }
};

export { handleSendReceipt, sendTestMessageController };
