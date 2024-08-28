import { Router } from 'express'

export default (router: Router) => {
  router.post('/signup', async (req, res) => {
    res.json({ message: 'signup' })
  })
}
