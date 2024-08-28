import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  it('Should parse body as JSON', async () => {
    app.post('/test_body_parser', (req, res) => {
      console.log(req.body)
      res.status(200).json(req.body)
    })

    const response = await request(app).post('/test_body_parser').send({
      name: 'John Doe',
      age: 30,
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      name: 'John Doe',
      age: 30,
    })
  })
})
