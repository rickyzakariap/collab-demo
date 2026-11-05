'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { estimate } = require('./estimator');

test('menghitung komisi dan margin dari input dasar', () => {
  const result = estimate({ price: 100000, hpp: 60000, shipping: 10000, packaging: 2000, feePct: 8 });
  assert.equal(result.fee, 8000);
  assert.equal(result.cost, 80000);
  assert.equal(result.margin, 20000);
  assert.equal(result.marginPct, 20);
});

test('margin negatif saat biaya melebihi harga jual', () => {
  const result = estimate({ price: 50000, hpp: 40000, shipping: 10000, packaging: 5000, feePct: 10 });
  assert.equal(result.margin, -10000);
  assert.equal(result.marginPct, -20);
});

test('input kosong tidak menghasilkan NaN', () => {
  const result = estimate({ price: 0 });
  assert.equal(result.fee, 0);
  assert.equal(result.cost, 0);
  assert.equal(result.margin, 0);
  assert.equal(result.marginPct, 0);
});
