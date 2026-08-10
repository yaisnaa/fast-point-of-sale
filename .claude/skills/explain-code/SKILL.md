---
name: explain-code
description: Use when the user asks a conceptual/learning question about programming in this codebase — "apa fungsi X", "bedanya A sama B", "kenapa error ini", "jelaskan kode ini", "kapan ini dijalankan", or similar. Not for implementation requests ("tambahkan fitur X", "perbaiki bug ini") — only for explain/teach questions.
---

# Explain Code

Tujuan skill ini: menjelaskan konsep pemrograman dengan cara yang nempel ke kode nyata milik user, bukan kuliah generik dari textbook. User skill ini kemungkinan masih belajar — jawaban harus akurat, konkret, dan efisien (tidak bertele-tele) dan menyesuaikan skill user, jika user pemula jawaban tidak boleh membuat pusing user dengan memberikan banyak konteks lain diluar dari pertanyaan user.

## Sebelum menjawab

1. **Baca file yang relevan dulu.** Kalau user bertanya soal potongan kode tertentu, buka file itu (dan file terkait — import, fungsi yang dipanggil, tipe yang dipakai) sebelum menjawab. Jangan menjawab dari asumsi soal apa isi filenya.
2. Kalau pertanyaan menyinggung baris/selection tertentu, jawab dengan mengacu ke baris itu persis, jangan generalisasi ke topik yang lebih luas dari yang ditanya.

## Cara menjawab

- **Jangkar ke kode asli mereka.** Contoh konkret dari file yang sedang mereka buka jauh lebih efektif daripada contoh generik (`foo`, `bar`). Kutip baris aslinya, rujuk dengan format `[file:baris](path#Lbaris)`.
- **Bongkar per elemen sintaks**, jangan cuma bilang "ini artinya X" — tunjukkan *kenapa* dia berbentuk begitu di kasus spesifik mereka. Kalau satu simbol (mis. `:`) punya beberapa arti tergantung posisi, pisahkan tiap arti dengan contoh baris berbeda dari kode yang sama kalau ada.
- **Kalau pertanyaan user mengandung miskonsepsi**, jangan cuma jawab pertanyaan literalnya — luruskan miskonsepsinya secara eksplisit dan jelaskan kenapa asumsi itu keliru. Contoh: kalau user mengira suatu blok kode "di luar" fungsi karena terpisah baris kosong, tunjukkan pasangan kurung kurawal yang sebenarnya membuktikan itu di dalam.
- **Jelaskan mekanisme, bukan cuma definisi.** Untuk pertanyaan "kapan ini jalan" / "urutannya gimana", telusuri alur eksekusi step-by-step (urutan baris, kapan `return`/`throw` memotong alur, kapan `await` menjeda, dst) — bukan cuma jawaban ya/tidak.
- **Kalau user tanya asal-usul suatu value/variable** ("dari mana", "kok bisa jadi gini", "itu hasil dari apa"), jangan cuma jelaskan isi/bentuknya — telusuri rantai sebab-akibatnya sebagai langkah bernomor: apa yang dikirim ke mana, siapa yang memproses, apa yang dihasilkan. Contoh: `rest` bukan "sisa dari `control`" — tapi `control` dikirim ke `Controller`, `Controller` yang **menghasilkan** objek `field`, baru `field` itu yang dibongkar jadi `rest`. Tunjukkan urutan produksinya, jangan cuma endpoint akhirnya.
- **Ringkas, bukan minimal.** Jawaban boleh panjang kalau memang perlu breakdown bertahap, tapi jangan menambahkan tangenital (konsep lain yang tidak ditanya) kecuali langsung relevan untuk meluruskan miskonsepsi.
- **Match bahasa user.** Kalau user menulis dalam Bahasa Indonesia, jawab dalam Bahasa Indonesia — istilah teknis (variable, function, scope, dst) boleh tetap Inggris karena itu istilah baku.
- **Kalau error runtime muncul**, jangan cuma jelaskan pesan errornya — telusuri akar penyebabnya di kode/konfigurasi mereka (baca file terkait: env config, import chain, dll) sebelum kasih solusi.

## Yang dihindari

- Jangan menjelaskan konsep yang tidak ditanya "untuk jaga-jaga".
- Jangan kasih contoh kode baru/terpisah kalau contoh dari file mereka sendiri sudah cukup untuk menjelaskan.
- Jangan ubah kode mereka sebagai bagian dari menjawab pertanyaan penjelasan — skill ini murni untuk menjelaskan, bukan mengimplementasi. Kalau user lalu minta perbaikan berdasarkan penjelasan itu, itu permintaan terpisah.
