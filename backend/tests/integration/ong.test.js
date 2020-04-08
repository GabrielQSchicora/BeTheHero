const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('shold be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "APAD",
      email: "contato@apad.com",
      whatsapp: "41996513571",
      city: "Curitiba",
      uf: "PR"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});