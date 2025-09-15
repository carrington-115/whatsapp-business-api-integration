const helloWorldTemplateTest = (phone) => {
  return {
    messaging_product: "whatsapp",
    to: phone,
    type: "template",
    template: {
      name: "hello_world",
      language: {
        code: "en_US",
      },
    },
  };
};

const receiptTemplatePayload = (phone, name, url, orderId) => {
  return {
    // this is a test payload
    messaging_product: "whatsapp",
    to: phone,
    type: "template",
    template: {
      name: "order_process",
      language: {
        code: "en",
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "text",
              text: name,
              parameter_name: "name",
            },
          ],
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: orderId,
              parameter_name: "id",
            },
          ],
        },
        {
          type: "button",
          sub_type: "url",
          index: "0",
          parameters: [
            {
              type: "text",
              text: url,
              parameter_name: "1",
            },
          ],
        },
      ],
    },
  };
};

const test_download_link =
  "https://storage.googleapis.com/books-and-docs/Invoice-1%2C756%2C462%2C039%2C713.pdf";

export { receiptTemplatePayload, test_download_link, helloWorldTemplateTest };
