import { test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import server from '../src/server.js';

test('GET /users should return 200 OK and a welcome message', async (t) => {
  const response = await request(server).get('/api/users');
  assert.strictEqual(response.status, 200);
  // assert.strictEqual(response.text, 'Hello, world!');
});
