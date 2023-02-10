import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai'

dotenv.config();
const router = express.Router();

const confugurations = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,

})

const openai = new OpenAIApi(confugurations);

router.route('/').get((req, res) => {
  res.send('hello from DALL-E!')
})

export default router;