const nodemailer = require("nodemailer");
require("dotenv").config();
const serverEmail = process.env.serverEmail;
const serverPassword = process.env.serverPassword;

module.exports = {
  nodemailer: async (params) => {
   
    const { email, subject, html } = params;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: serverEmail,
        pass: serverPassword, 
      },
    });
    try {
      let info = await transporter.sendMail({
        from: serverEmail,
        to: email, 
        subject: subject, 
        html: html, 
      });
    } catch (error) {
      console.error(error)
    }
  },
};