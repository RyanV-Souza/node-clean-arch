import request from 'supertest'
import app from '../config/app'

describe('Signup routes', () => {
  it('Should return an account on success', async () => {
    const response = await request(app).post('/api/signup').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
      passwordConfirmation: '123456',
    })

    expect(response.status).toBe(200)
  })
})
