// pages/api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email } = req.body;

    // Configura el transportador SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail", // O el servicio que uses
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico
        pass: process.env.EMAIL_PASS, // Tu contraseña de correo electrónico
      },
    });

    try {
      // Envía el correo electrónico
      await transporter.sendMail({
        from: email, // Email del usuario que envía el formulario
        to: process.env.SHOP_EMAIL, // Tu correo electrónico de la tienda
        subject: `Nuevo mensaje de ${firstName} ${lastName}`,
        text: `Has recibido un nuevo mensaje de ${firstName} ${lastName} (${email})`,
      });

      res.status(200).json({ message: "Email enviado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Hubo un error al enviar el email" + error.message });
      console.log(error.message);
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
