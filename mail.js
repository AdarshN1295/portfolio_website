const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adarshnigam.ev1295@gmail.com',
    pass: 'fvpo aesr rnte cbbn',
  },
});

const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: 'adarshnigam.ev1295@gmail.com',
    to: email, // Send email to the provided recipient
    subject: `Message from ${name}`,
    text: `NAME : ${name},  EMAIL: ${email}, MESSAGE : ${message}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
