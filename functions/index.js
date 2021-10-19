const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe");
('sk_test_51JfohqSAnq3sH7Yw2ArHEGGcgvENLHmmZY6okMuChx4i63DA2RPyF4BcBxnOrhWpShwJRl3BGA00GjkBKoB9vVZY0017g6cNJ8')

const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello");
  });
  
  app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
  
    console.log(total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
  
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  //exports.api = functions.https.onRequest(app);
  app.listen(5000);
  

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
