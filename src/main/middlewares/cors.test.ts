import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  it('Should add CORS headers to response', async () => {
    app.get('/test_cors', (req, res) => {
      res.status(200).json({ message: 'Hello World' })
    })

    const response = await request(app).get('/test_cors')

    expect(response.status).toBe(200)
    expect(response.headers['access-control-allow-origin']).toBe('*')
    expect(response.headers['access-control-allow-methods']).toBe(
      'GET,HEAD,PUT,PATCH,POST,DELETE',
    )
    expect(response.headers['access-control-allow-headers']).toBe(
      'Content-Type, Authorization, Content-Length, X-Requested-With',
    )
  })
})
