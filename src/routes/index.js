const {Router} = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const {name, email, subject, message } = req.body;

    contentHTML = `
        <h1>Informacion de Usuario</h1>
        <ul>
            <li>Nombre del Usuario: ${name}</li>
            <li>Email del Usuario: ${email}</li>
            <li>Titulo del Mensaje: ${subject}</li>
        </ul>
        <br />
        <p>${message}</p>
    `;

    console.log(req.body);
    res.send('Recibido');
})

module.exports = router;