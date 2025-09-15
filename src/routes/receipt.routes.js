import express from "express";
import {
  handleSendReceipt,
  sendTestMessageController,
} from "../controllers/receipt.controller.js";

const Router = express.Router();

Router.get("/", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

Router.get("/whatsapp", (req, res) => {
  res.status(200).json({
    message: "This is the whatsapp service route",
    status: "ok",
  });
});

Router.post("/whatsapp/test", sendTestMessageController);
Router.post("/whatsapp/send-receipt", handleSendReceipt);

export default Router;
