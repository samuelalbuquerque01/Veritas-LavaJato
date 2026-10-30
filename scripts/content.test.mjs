import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { business, delivery, promotion, services, whatsapp, money } from '../src/data/business.ts';
import { gallery, categories } from '../src/data/gallery.ts';
import { siteUrl, localBusinessSchema } from '../src/data/business.ts';
import { catalog } from '../src/data/catalog.ts';

test('catalogue prices match the supplied PDF and remain separate from delivery', () => {
  assert.deepEqual(catalog.carWashes.map(item => item.prices), [
    [49.99, 59.99, 69.99], [69.99, 79.99, 89.99], [89.99, 99.99, 109.99],
  ]);
  assert.equal(catalog.motorcycle.price, 29.99);
  assert.equal(delivery.prices.find(item => item.label === 'Moto').price, 34.99);
  assert.deepEqual(catalog.additionalCars.map(item => item.price), [null, 79.99, 99.99, 179.99, 24.99]);
  assert.deepEqual(catalog.additionalMotorcycles.map(item => item.price), [14.99, 14.99]);
  assert.equal(catalog.commonItems.length, 5);
  assert.equal(catalog.carWashes[2].additionalItems.length, 2);
  assert.ok(existsSync(`public${catalog.pdfUrl}`));
});

test('SEO uses the official domain and only confirmed local business facts', () => {
  assert.equal(siteUrl, 'https://veritaslavajato.com.br');
  assert.equal(localBusinessSchema.url, `${siteUrl}/`);
  assert.equal(localBusinessSchema.name, business.name);
  assert.equal(localBusinessSchema.email, business.email);
  assert.equal(localBusinessSchema.address.addressLocality, 'Fortaleza');
  assert.equal(localBusinessSchema.openingHoursSpecification.length, 2);
  assert.ok(!JSON.stringify(localBusinessSchema).includes('Sunday'));
  assert.ok(!('aggregateRating' in localBusinessSchema));
  assert.ok(!('geo' in localBusinessSchema));
});

test('links preserve the exact delivery and promotion messages', () => {
  for (const offer of [delivery, promotion]) {
    const url = new URL(whatsapp(offer.message));
    assert.equal(url.hostname, 'wa.me');
    assert.equal(url.pathname, '/5585992510180');
    assert.equal(url.searchParams.get('text'), offer.message);
  }
});
test('commercial data remains scoped to the correct offer', () => {
  assert.equal(services.length, 6);
  assert.deepEqual(delivery.prices.map(p => p.price), [59.99, 69.99, 79.99, 34.99]);
  assert.equal(promotion.pix, 349.99);
  assert.equal(promotion.card, 380);
  assert.equal(promotion.installments, 5);
  assert.equal(typeof promotion.enabled, 'boolean');
  assert.equal(business.hours.length, 2);
  assert.match(money(59.99), /59,99/);
});
test('all gallery images and video covers exist and have useful captions', () => {
  assert.ok(gallery.length > 6);
  for (const item of gallery) {
    assert.ok(categories.includes(item.category));
    assert.ok(item.caption.length > 10);
    assert.ok(existsSync(`public${item.src}`), item.src);
    if (item.type === 'video') assert.ok(existsSync(`public${item.poster}`));
  }
});

test('gallery dimensions match the actual photographs and video covers', async () => {
  for (const item of gallery) {
    const path = item.type === 'image' ? item.src : item.poster;
    const metadata = await sharp(`public${path}`).metadata();
    assert.equal(item.width, metadata.width, item.id);
    assert.equal(item.height, metadata.height, item.id);
  }
});
