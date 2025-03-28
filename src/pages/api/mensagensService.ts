import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const urlBackend = 'http://localhost:3005/dialogflow'
export default async function MensagemService(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { data } = await axios.post(urlBackend, req.body)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Erro na solicitação API' })
    }
  } else {
    res.status(405).end()
  }
}
