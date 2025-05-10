const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWOCLNbAZpDp30M1GvxdXVDU4FOylkxAI4L0XsC62_jjFF3KQSftgSzfAF-BFy5e7wa_i4ISICGcGVYn",
  client_secret: "EOp8KArUZXGartQOp657btj09PZveJZN5pY7c9UGyLdno55BqsXt1irDO5fsnDfcgvTYOxDodTx-nKx-",
});

module.exports = paypal;
