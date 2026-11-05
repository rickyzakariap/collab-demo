# Collab Demo

Demo kolaborasi kecil untuk menghitung perkiraan biaya kirim dan margin bersih penjual marketplace Indonesia.

## Rencana

- `index.html`: kalkulator biaya kirim dan margin.
- `test.js`: uji perhitungan dasar.

## Menjalankan

Buka `index.html` di browser, lalu isi harga jual, HPP, ongkir, kemasan, dan komisi marketplace. Hasil menampilkan komisi, total biaya, margin, dan persentase margin.

Atau panggil fungsi `estimate` langsung dari Node:

```bash
node -e "console.log(require('./estimator').estimate({ price: 100000, hpp: 60000, shipping: 10000, packaging: 2000, feePct: 8 }))"
```

## Test

```bash
node --test
```
