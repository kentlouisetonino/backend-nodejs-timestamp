import request from 'supertest';
import app from '../app';

describe('[ src/App ]', () => {
  // * If endpoint exist.
  test('a. It should response the status code 200 if endpoint exist.', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  // * If endpoint does not exist.
  test('b. It should response the status code 404 if endpoint does not exist.', (done) => {
    request(app)
      .get('/not-found')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});

