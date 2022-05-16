const nodemailer = require('nodemailer');
const controller = {
    index: (req, res) => {
        res.render('../views/index.ejs')
    },
    emailSent: (req, res) => {
        res.render('../views/emailSent.ejs')
    },
    sendEmail: async (req, res) => {
        try {
            const { name, email, telephone, message } = req.body;
            const contentHTML = `
                <h1>User Information</h1>
                <ul>
                    <li>Nombre: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Telefono: ${telephone}</li>
                </ul>
                <p>${message}</p>
            `    
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'lusilva.dev@gmail.com',
                    pass: 'Enero2324'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
    
            let info = await transporter.sendMail({
                from: '"Julio Silva Web" <lusilva.dev@gmail.com>',
                to: 'l.silva8692@gmail.com',
                subject: 'Website Contact Form',
                html: contentHTML
            })
            return res.redirect('/email-sent')
        } catch (error){
            console.log(error)
        }
    }
};

module.exports = controller;