import express from 'express';
import cors from 'cors'
import { NotFoundException } from './exceptions/NotFoundException.js';
import { getSummaryAI } from './services/reviewsSummaryService.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.get('/summary/:brand', async (req, res) => {
    try {
        res.status(200)
        res.json(await getSummaryAI(req.params.brand));
    } catch (error) {
        if (error instanceof NotFoundException) {
            res.status(404).send(error.message);
        } else {
            console.log(error)
            res.status(500).send(error.message);
        }
    }
});

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});