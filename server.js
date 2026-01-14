const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

let savedCode = "";

/* Код илгээх API */
app.post("/send-code", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ msg: "Имэйл байхгүй" });

  savedCode = Math.floor(100000 + Math.random() * 900000).toString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Компьютер Засвар" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Нууц үг сэргээх код",
    html: `<h2>Таны баталгаажуулах код:</h2>
           <h1 style="color:#2563eb">${savedCode}</h1>
           <p>3 минутын дотор ашиглана уу</p>`
  });

  res.json({ msg: "Код илгээгдлээ" });
});

/* Код шалгах */
app.post("/verify-code", (req, res) => {
  if (req.body.code === savedCode) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

app.listen(3000, () =>
  console.log("✅ Server running http://localhost:3000")
);
