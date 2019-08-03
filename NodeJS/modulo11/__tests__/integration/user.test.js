import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Patrick Battisti',
        email: '1729patrick@gmail.com',
        password_hash: 123,
      });

    expect(response.body).toHaveProperty('id');
  });
});
