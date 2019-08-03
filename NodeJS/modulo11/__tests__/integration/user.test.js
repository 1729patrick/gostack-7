import request from 'supertest';
import app from '../../src/app';

import trancate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await trancate();
  });

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

  it('should not be able to register with duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Patrick Battisti',
        email: '1729patrick@gmail.com',
        password_hash: 123,
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Patrick Battisti',
        email: '1729patrick@gmail.com',
        password_hash: 123,
      });

    expect(response.status).toBe(400);
  });
});
