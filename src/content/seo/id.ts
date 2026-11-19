import type { SeoContent } from "./types";

/* Teks SEO bahasa Indonesia. Isi sama dengan versi Inggris, nama nada huruf (C D E). */
export const id: SeoContent = {
  labels: { faq: "Pertanyaan umum", string: "Senar", note: "Nada", frequency: "Frekuensi", tuning: "Stem", notes: "Senar (6 → 1)" },
  pages: {
    home: {
      title: "Tuner Online, Metronom & Kunci Akor Gratis – Music Tools",
      description: "Alat musik gratis yang langsung jalan: tuner gitar, ukulele, biola, cello, dan bass, metronom online dengan tap tempo, serta kunci akor gitar dan piano.",
      blocks: [
        {
          h2: "Alat musik online gratis, tanpa aplikasi dan tanpa daftar",
          p: [
            "Music Tools adalah kumpulan alat musik sederhana dan gratis yang berjalan langsung di browser. Buka halamannya dan langsung siap: tanpa unduhan, tanpa akun. Setiap layar hanya punya satu fungsi, dengan tombol besar yang mudah ditekan sambil memegang alat musik.",
            "Suara mikrofon dianalisis di perangkat kamu sendiri dan tidak pernah diunggah ke internet. Setelah kunjungan pertama, semua alat tetap bisa dipakai offline, jadi tuner dan metronom selalu siap di studio latihan tanpa sinyal.",
          ],
        },
        {
          h2: "Yang bisa kamu lakukan di sini",
          list: [
            "**Stem alat musik** dengan [tuner gitar](guitar), [tuner ukulele](ukulele), [tuner biola](violin), [tuner cello](cello), dan [tuner bass](bass) – atau alat musik lain dengan [tuner kromatik](chromatic).",
            "**Jaga tempo** dengan [metronom online](metronome): 30–300 BPM, tap tempo, aksen, birama, dan subdivisi.",
            "**Cari kunci akor** di [kunci akor gitar dan piano](chords): posisi jari, suara, dan transpose.",
          ],
        },
      ],
      faq: [
        { q: "Apakah alat ini benar-benar gratis?", a: "Ya. Semua alat gratis, tanpa daftar dan tanpa unduhan. Semuanya berjalan di browser." },
        { q: "Perlu aplikasi untuk stem gitar?", a: "Tidak. Buka tuner gitar, ketuk “Ketuk untuk stem”, lalu izinkan mikrofon. Bisa di HP, tablet, dan komputer." },
        { q: "Apakah suara mikrofon direkam atau dikirim?", a: "Tidak. Tuner menganalisis suara di perangkat kamu secara real-time dan tidak mengirim apa pun ke server." },
      ],
    },

    guitar: {
      title: "Tuner Gitar Online Gratis – Stem Gitar Pakai Mikrofon",
      description: "Tuner gitar online gratis pakai mikrofon. Stem gitar akustik atau elektrik ke stem standar, Drop D, Open G, DADGAD, atau turun setengah. Tanpa aplikasi.",
      blocks: [
        {
          h2: "Tuner gitar online gratis",
          p: [
            "**Tuner gitar** ini berjalan langsung di browser – tanpa aplikasi, tanpa akun. Ketuk **Ketuk untuk stem**, izinkan mikrofon, lalu petik satu senar. Tuner mengenali nadanya, memilih senar terdekat, dan menunjukkan berapa cent terlalu rendah atau tinggi. Saat batang di tengah berwarna hijau, selisihnya di bawah 5 cent – sudah pas di telinga.",
            "Bisa dipakai sebagai **tuner gitar akustik** lewat mikrofon HP atau laptop, juga untuk **gitar elektrik**: mainkan tanpa ampli di dekat mikrofon, atau dekatkan perangkat ke ampli dengan suara clean. Suaranya tidak keluar dari perangkat kamu.",
          ],
        },
        {
          h2: "Stem standar gitar: nada dan frekuensi tiap senar",
          p: ["Stem standar gitar adalah **E A D G B E**, dari senar paling tebal (6) ke paling tipis (1)."],
          autoTable: "tuning",
          after: ["Frekuensi untuk A4 = 440 Hz, nada standar."],
        },
        {
          h2: "Cara stem gitar langkah demi langkah",
          ordered: true,
          list: [
            "Mulai dari senar 6 (E rendah). Petik senar terbuka dan biarkan berbunyi.",
            "Jika muncul **Kencangkan**, senar terlalu rendah: putar dryer pelan-pelan. Jika muncul **Kendurkan**, kendurkan.",
            "Stem dari sedikit di bawah nada lalu naik – senar lebih tahan stem-nya.",
            "Saat batang hijau dan senar dapat tanda ✓, lanjut ke senar berikutnya. Ulangi untuk keenam senar.",
            "Cek sekali lagi: mengencangkan satu senar mengubah tegangan leher gitar.",
          ],
        },
        {
          h2: "Stem alternatif: Drop D, Open G, DADGAD, dan turun setengah",
          p: ["Pilih stem di menu **Stem** dan tombol senar ikut berubah."],
          autoTable: "alternates",
          after: ["**Drop D** hanya menurunkan senar 6 satu nada penuh – pas untuk riff berat dan power chord satu jari. **Open G** menghasilkan akor G mayor dari senar terbuka, populer untuk slide dan blues. **DADGAD** terdengar terbuka dan modal, khas musik folk dan Celtic. **Turun setengah** menurunkan semua senar setengah nada agar bending lebih mudah."],
        },
        {
          h2: "Stem dengan telinga pakai nada referensi",
          p: [
            "Tidak ada mikrofon atau tempatnya bising? Ketuk tombol senar untuk mendengar nada referensinya dan stem dengan telinga. Di **Lainnya** kamu bisa mengubah referensi A4 (bawaan 440 Hz) – berguna saat main bareng piano atau band yang distem di 442 atau 432 Hz.",
            "Setelah pas, latihan sesuai tempo dengan [metronom online](metronome) atau cari posisi jari di [kunci akor](chords).",
          ],
        },
      ],
      faq: [
        { q: "Apakah tuner gitar online akurat?", a: "Ya. Tuner ini memakai metode deteksi nada McLeod dengan ketelitian sekitar satu cent, dan berwarna hijau dalam ±5 cent – lebih halus dari yang bisa dibedakan telinga. Stem di tempat tenang, satu senar sekali." },
        { q: "Bisa stem gitar tanpa tuner jepit?", a: "Bisa. HP atau komputer apa pun yang punya mikrofon sudah cukup: buka halaman ini, ketuk “Ketuk untuk stem”, lalu petik tiap senar. Tanpa mikrofon, ketuk tombol senar dan stem dengan telinga." },
        { q: "Apa nada tiap senar gitar?", a: "Dalam stem standar dari senar 6 ke senar 1: E2, A2, D3, G3, B3, dan E4." },
        { q: "Bisa untuk gitar elektrik?", a: "Bisa. Mainkan tanpa ampli di dekat mikrofon, atau dekatkan perangkat ke ampli dengan suara clean. Distorsi membuat nada sulit terbaca." },
        { q: "Kenapa gitar cepat fals?", a: "Senar baru masih melar beberapa hari pertama, dan perubahan suhu serta kelembapan membuat kayu bergerak. Stem sebelum main cuma butuh kurang dari semenit." },
      ],
    },

    ukulele: {
      title: "Tuner Ukulele Online Gratis – GCEA",
      description: "Stem ukulele online pakai mikrofon atau telinga. Stem standar G C E A untuk ukulele sopran, konser, dan tenor. Gratis, tanpa aplikasi.",
      blocks: [
        {
          h2: "Tuner ukulele online gratis",
          p: [
            "Stem ukulele dalam hitungan detik dengan **tuner ukulele** ini. Ketuk **Ketuk untuk stem**, izinkan mikrofon, lalu petik satu senar: tuner mencari senar terdekat dan menunjukkan apakah terlalu rendah atau tinggi. Hijau berarti sudah pas.",
            "Cocok untuk ukulele **sopran, konser, dan tenor** yang memakai stem yang sama. Mau pakai telinga? Ketuk tombol tiap senar untuk mendengar nadanya.",
          ],
        },
        {
          h2: "Stem standar ukulele: G C E A",
          p: ["Stem standar ukulele adalah **G C E A**, dari senar 4 (paling dekat dagu) ke senar 1. Kebanyakan ukulele memakai **G tinggi**: senar 4 berbunyi lebih tinggi dari senar 3, itulah yang membuat suaranya cerah."],
          autoTable: "tuning",
        },
        {
          h2: "Cara stem ukulele",
          ordered: true,
          list: [
            "Ketuk **Ketuk untuk stem** dan izinkan mikrofon.",
            "Petik senar 4 (G) dan biarkan berbunyi.",
            "Putar dryer sampai batang hijau: kencangkan saat muncul “Kencangkan”, kendurkan saat muncul “Kendurkan”.",
            "Ulangi untuk C, E, dan A. Senar yang pas dapat tanda ✓.",
          ],
          after: ["Senar nilon baru masih banyak melar: beberapa hari pertama wajar kalau harus stem ulang setiap kali main."],
        },
        {
          h2: "G tinggi atau G rendah?",
          p: ["Sebagian pemain memasang senar 4 dengan **G rendah** (satu oktaf lebih rendah) agar suaranya lebih penuh. Tuner ini disetel untuk G tinggi; kalau pakai G rendah, gunakan [tuner kromatik](chromatic)."],
        },
      ],
      faq: [
        { q: "Apa nada tiap senar ukulele?", a: "Dalam stem standar dari senar 4 ke senar 1: G4, C4, E4, dan A4." },
        { q: "Bisa stem ukulele pakai HP?", a: "Bisa. Buka halaman ini di HP, ketuk “Ketuk untuk stem”, izinkan mikrofon, lalu petik tiap senar." },
        { q: "Bisa untuk ukulele bariton?", a: "Ukulele bariton distem D G B E, sama seperti empat senar tinggi gitar. Gunakan tuner kromatik atau empat senar tinggi di tuner gitar." },
        { q: "Kenapa ukulele baru cepat fals?", a: "Senar nilon terus melar sekitar seminggu. Rajin stem, nanti senarnya akan stabil." },
      ],
    },

    violin: {
      title: "Tuner Biola Online Gratis – G D A E",
      description: "Tuner biola online gratis. Stem G D A E pakai mikrofon atau telinga dengan nada referensi, dan atur A4 ke 440 atau 442 Hz. Tanpa aplikasi.",
      blocks: [
        {
          h2: "Tuner biola online gratis",
          p: [
            "**Tuner biola** ini mendengarkan lewat mikrofon dan menampilkan nada serta selisihnya dari nada yang tepat. Ketuk **Ketuk untuk stem**, gesek (atau petik) satu senar, lalu atur sampai batang di tengah berwarna hijau.",
            "Setiap tombol senar juga memutar **nada referensi** yang jelas, jadi kamu bisa stem biola dengan telinga saat mikrofon tidak tersedia.",
          ],
        },
        {
          h2: "Nada senar biola: G D A E",
          p: ["Biola distem dengan interval kuint: **G D A E**, dari senar terendah (4) ke tertinggi (1)."],
          autoTable: "tuning",
        },
        {
          h2: "Cara stem biola",
          ordered: true,
          list: [
            "Mulai dari senar **A** – nada acuan orkestra.",
            "Gesek dengan stabil di dekat mikrofon dan perhatikan indikatornya.",
            "Gunakan **fine tuner** di tailpiece untuk koreksi kecil, dan **pasak** hanya untuk koreksi besar sambil sedikit ditekan agar tidak lepas.",
            "Stem D, G, dan E dengan cara yang sama, lalu cek A sekali lagi.",
          ],
        },
        {
          h2: "440 Hz atau 442 Hz",
          p: ["Kebanyakan musik memakai A4 = 440 Hz, tapi banyak orkestra menyetel sedikit lebih tinggi, 442 Hz. Buka **Lainnya** dan atur referensi A4 antara 430 dan 450 Hz."],
        },
      ],
      faq: [
        { q: "Bisa stem biola pakai HP?", a: "Bisa. Mikrofon HP sudah cukup: buka halaman ini, ketuk “Ketuk untuk stem”, lalu mainkan tiap senar. Kamu juga bisa memutar nada referensi lewat speaker dan stem dengan telinga." },
        { q: "Senar biola mana yang distem duluan?", a: "Senar A dulu, lalu D, G, dan E." },
        { q: "Bisa dipakai sebagai tuner viola?", a: "Viola distem C G D A. Gunakan tuner kromatik yang bisa membaca nada apa pun." },
        { q: "Kenapa biola cepat fals?", a: "Pasak bisa melorot, dan kelembapan serta suhu membuat senar dan kayu bergerak. Cek stem setiap kali bermain." },
      ],
    },

    cello: {
      title: "Tuner Cello Online Gratis – C G D A",
      description: "Tuner cello online gratis. Stem C G D A pakai mikrofon atau telinga dengan nada referensi. Berjalan di browser, tanpa aplikasi.",
      blocks: [
        {
          h2: "Tuner cello online gratis",
          p: ["Stem cello dengan **tuner cello** gratis ini, tanpa aplikasi. Ketuk **Ketuk untuk stem**, gesek satu senar dengan stabil, lalu atur sampai batang hijau. Setiap tombol juga memutar nada referensi untuk stem dengan telinga."],
        },
        {
          h2: "Nada senar cello: C G D A",
          p: ["Cello distem dengan interval kuint, satu oktaf di bawah viola: **C G D A**, dari senar terendah ke tertinggi."],
          autoTable: "tuning",
        },
        {
          h2: "Cara stem cello",
          ordered: true,
          list: [
            "Mulai dari senar **A**, lalu D, G, dan C.",
            "Gesek panjang dan rata: suara yang stabil memberi bacaan yang stabil, terutama di C rendah.",
            "Fine tuner untuk koreksi kecil, pasak untuk koreksi besar.",
            "Cek A sekali lagi di akhir: mengencangkan senar lain bisa menggesernya.",
          ],
          after: ["Mikrofon HP kurang peka terhadap nada rendah – dekatkan perangkat ke instrumen."],
        },
      ],
      faq: [
        { q: "Apa nada tiap senar cello?", a: "C2, G2, D3, dan A3, dari yang terendah ke tertinggi." },
        { q: "Bisa stem cello pakai HP?", a: "Bisa. Izinkan mikrofon dan mainkan tiap senar di dekat HP." },
        { q: "A distem ke 440 atau 442 Hz?", a: "Pakai 440 Hz kecuali orkestra atau guru meminta lain. Referensi A4 bisa diubah di Lainnya." },
      ],
    },

    bass: {
      title: "Tuner Bass Online Gratis – E A D G",
      description: "Tuner bass online gratis untuk bass 4 senar. Stem E A D G pakai mikrofon atau telinga. Berjalan di browser, tanpa aplikasi.",
      blocks: [
        {
          h2: "Tuner bass online gratis",
          p: ["**Tuner bass** ini menyetem bass 4 senar ke stem standar. Ketuk **Ketuk untuk stem**, petik satu senar, lalu putar dryer sampai batang hijau. Cocok untuk bass elektrik dan akustik."],
        },
        {
          h2: "Stem standar bass: E A D G",
          p: ["Bass 4 senar distem **E A D G** – nada yang sama dengan empat senar terendah gitar, satu oktaf lebih rendah."],
          autoTable: "tuning",
        },
        {
          h2: "Cara stem bass",
          ordered: true,
          list: [
            "Mulai dari senar 4 (E rendah).",
            "Petik dengan mantap dan biarkan nadanya berbunyi – nada rendah butuh waktu sebentar untuk stabil.",
            "Kencangkan saat muncul “Kencangkan”, kendurkan saat muncul “Kendurkan”, sampai hijau.",
            "Ulangi untuk A, D, dan G, lalu cek E sekali lagi.",
          ],
          after: ["Mikrofon HP dan laptop kurang menangkap nada bass. Dekatkan perangkat ke bass atau speaker ampli, dengan suara clean."],
        },
      ],
      faq: [
        { q: "Apa nada tiap senar bass?", a: "Dalam stem standar dari senar 4 ke senar 1: E1, A1, D2, dan G2." },
        { q: "Bisa stem bass pakai tuner gitar?", a: "Bass punya nama nada yang sama dengan empat senar terendah gitar, hanya satu oktaf lebih rendah. Tuner bass ini sudah disetel untuk nada itu, dan tuner kromatik juga bisa." },
        { q: "Kenapa E rendah sulit terbaca?", a: "Mikrofon kecil kurang menangkap frekuensi yang sangat rendah. Petik dengan mantap, dekatkan perangkat, dan biarkan nadanya berbunyi." },
      ],
    },

    chromatic: {
      title: "Tuner Kromatik Online Gratis – Untuk Semua Alat Musik",
      description: "Tuner kromatik online gratis: membaca semua 12 nada dan menunjukkan selisih dalam cent. Untuk alat musik apa pun dan vokal. A4 bisa diatur 430–450 Hz.",
      blocks: [
        {
          h2: "Apa itu tuner kromatik?",
          p: [
            "**Tuner kromatik** mengenali semua 12 nada tangga nada, bukan hanya senar satu alat musik. Mainkan nada apa saja dan tuner menampilkan nama nada terdekat, oktafnya, dan selisihnya dalam cent.",
            "Karena itu cocok untuk alat musik apa pun: mandolin, banjo, viola, kalimba, alat tiup, ukulele G rendah, bahkan vokal.",
          ],
        },
        {
          h2: "Frekuensi nada (oktaf 4)",
          p: ["Frekuensi referensi 12 nada di sekitar C tengah, dengan A4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cent, A4, dan 432 Hz",
          p: [
            "Satu **cent** adalah 1/100 semitone. Dalam ±5 cent tuner berwarna hijau – selisih yang lebih kecil hampir tidak terdengar.",
            "Referensi A4 menentukan tinggi semua nada. Bawaannya 440 Hz; di **Lainnya** kamu bisa memilih 430 sampai 450 Hz, termasuk 432 Hz atau 442 Hz yang dipakai banyak orkestra.",
          ],
        },
      ],
      faq: [
        { q: "Apa beda tuner kromatik dan tuner gitar?", a: "Tuner gitar hanya mencari enam senar gitar. Tuner kromatik membaca semua 12 nada, jadi cocok untuk alat musik dan stem apa pun." },
        { q: "Bisa dipakai untuk mengecek vokal?", a: "Bisa. Nyanyikan satu nada yang stabil dan tuner menunjukkan nada apa itu dan seberapa dekat kamu." },
        { q: "Bagaimana stem ke 432 Hz?", a: "Buka Lainnya dan turunkan referensi A4 ke 432 Hz. Semua nada mengikuti referensi itu." },
      ],
    },

    metronome: {
      title: "Metronom Online Gratis – BPM, Tap Tempo & Birama",
      description: "Metronom online gratis 30–300 BPM dengan tap tempo, aksen, birama (4/4, 3/4, 6/8), dan subdivisi. Berjalan di browser, tanpa aplikasi.",
      blocks: [
        {
          h2: "Metronom online gratis",
          p: [
            "**Metronom online** ini memberi ketukan stabil 30–300 BPM langsung di browser – tanpa unduhan. Atur tempo dengan slider atau tombol − / +, tekan **Play**, lalu ikuti bunyi klik, bandul, dan lampu tiap ketukan.",
            "Nyalakan **kilatan layar** di Lainnya dan layar berkedip setiap ketukan, jadi kamu tetap bisa ikut tempo tanpa suara atau di tempat bising. Klik dijadwalkan di jam audio perangkat, jadi tempo tidak goyang.",
          ],
        },
        {
          h2: "Tap tempo: cari BPM lagu",
          p: ["Tidak tahu tempo lagunya? Ketuk tombol **Tap tempo** beberapa kali mengikuti lagu, dan metronom menghitung BPM dari ketukanmu. Ia merata-ratakan lima ketukan terakhir dan mulai ulang kalau kamu berhenti dua detik."],
        },
        {
          h2: "Birama dan aksen",
          p: [
            "Pilih 2/4, 3/4, 4/4, 5/4, 6/8, atau 7/8. Ketukan pertama tiap birama diberi **aksen** agar kamu selalu tahu letak “satu” – berguna untuk latihan waltz 3/4. Di **6/8**, ketukan 1 dan 4 diberi aksen secara bawaan.",
            "Ketuk kotak ketukan mana saja untuk menambah atau menghapus aksen dan membuat pola sendiri.",
          ],
        },
        {
          h2: "Istilah tempo dan BPM",
          p: ["Metronom menampilkan istilah tempo klasik untuk tempo saat ini:"],
          table: {
            head: ["Istilah tempo", "BPM", "Karakter"],
            rows: [
              ["Largo", "di bawah 60", "sangat lambat, lebar"],
              ["Adagio", "60–75", "lambat"],
              ["Andante", "76–107", "seperti berjalan"],
              ["Moderato", "108–119", "sedang"],
              ["Allegro", "120–167", "cepat, riang"],
              ["Presto", "168–199", "sangat cepat"],
              ["Prestissimo", "200 ke atas", "secepat mungkin"],
            ],
          },
        },
        {
          h2: "Cara latihan dengan metronom",
          list: [
            "Mulai pelan, sekitar **60–80 BPM**, untuk tangga nada dan lagu baru.",
            "Kalau satu bagian sudah bersih tiga kali berturut-turut, naikkan 4–5 BPM.",
            "Pakai **subdivisi** (1/8, triol, 1/16) di Lainnya untuk menempatkan not cepat di antara ketukan.",
            "Sebelum mulai, cek stem dengan [tuner gitar](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Bisa pakai metronom di browser tanpa aplikasi?", a: "Bisa. Metronom ini sepenuhnya berjalan di browser, di HP, tablet, dan komputer." },
        { q: "Bagaimana mengatur metronom ke 6/8?", a: "Pilih 6/8 di atas. Ketukan 1 dan 4 diberi aksen, menghasilkan dua pulsa utama 6/8. Ketuk kotaknya untuk mengubah aksen." },
        { q: "Pemula latihan tangga nada di berapa BPM?", a: "Mulai di 60–80 BPM, mainkan dengan bersih, lalu naikkan sedikit demi sedikit." },
        { q: "Apakah metronom online akurat?", a: "Ya. Klik dijadwalkan lebih dulu di jam audio perangkat, bukan dengan timer biasa, jadi tempo tidak bergeser." },
      ],
    },

    chords: {
      title: "Kunci Gitar dan Piano – Kunci Akor Lengkap dengan Suara",
      description: "Kunci akor gitar dan piano gratis. Pilih nada dasar dan jenis akor untuk melihat posisi jari, mendengarnya, mencoba bentuk lain, dan transpose.",
      blocks: [
        {
          h2: "Kunci gitar lengkap dengan posisi jari",
          p: ["Pilih **nada dasar** dan **jenis akor**, lalu **kunci gitar** ini menggambar posisi jari di fretboard: ✕ berarti senar tidak dibunyikan, ○ senar terbuka, dan tiap titik menunjukkan nada di bawah jari (nada dasar berwarna putih). Gunakan panah untuk bentuk lain, termasuk **kunci barre** di fret yang lebih tinggi, dan tekan **Mainkan** untuk mendengarnya."],
        },
        {
          h2: "Kunci piano di keyboard",
          p: ["Pindah ke **Piano** untuk melihat akor di tuts, dengan semua nadanya disorot dan diberi nama. Panah menggeser **pembalikan** – nada yang sama dengan urutan berbeda, agar perpindahan akor lebih mulus."],
        },
        {
          h2: "Jenis-jenis akor",
          table: {
            head: ["Jenis akor", "Nada (dari nada dasar)", "Contoh di C"],
            rows: [
              ["Mayor", "1 – 3 – 5", "C E G"],
              ["Minor", "1 – ♭3 – 5", "C E♭ G"],
              ["7 (dominan septim)", "1 – 3 – 5 – ♭7", "C E G B♭"],
              ["maj7", "1 – 3 – 5 – 7", "C E G B"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C E♭ G B♭"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim", "1 – ♭3 – ♭5", "C E♭ G♭"],
              ["aug", "1 – 3 – ♯5", "C E G♯"],
            ],
          },
        },
        {
          h2: "Kunci gitar dasar untuk pemula",
          p: ["Kebanyakan lagu cukup dimainkan dengan beberapa **kunci gitar dasar**: C, G, D, A, E, Am, Em, dan Dm. Kuasai dulu kunci terbuka ini, lalu lanjut ke kunci barre seperti F dan Bm. Latih perpindahan akor dengan [metronom](metronome) dan jaga stem gitar dengan [tuner gitar](guitar)."],
        },
        {
          h2: "Transpose akor",
          p: ["Gunakan **−1** dan **+1** untuk menurunkan atau menaikkan akor setengah nada – cara cepat **transpose akor** ke kunci yang pas untuk suaramu. Di Lainnya kamu bisa mengganti nama nada antara C D E, Do Re Mi, dan notasi Jerman (H)."],
        },
      ],
      faq: [
        { q: "Bagaimana membaca diagram kunci gitar?", a: "Garis vertikal adalah senar (E rendah di kiri), garis horizontal adalah fret. Titik menunjukkan tempat menekan, ✕ berarti senar tidak dibunyikan, ○ berarti senar terbuka. Label seperti “5fr” menunjukkan fret awal diagram." },
        { q: "Bagaimana kunci Bm di gitar?", a: "Bm yang paling umum adalah barre di fret 2: jangan bunyikan senar E rendah dan tekan x-2-4-4-3-2. Pilih B dan Minor di sini untuk melihatnya, dan panah untuk bentuk lain." },
        { q: "Apa itu kunci barre?", a: "Kunci di mana satu jari menekan beberapa senar di fret yang sama, seperti nut yang bisa dipindah. Dengan begitu bentuk yang sama bisa dimainkan di kunci apa pun." },
        { q: "Nada apa saja dalam akor C mayor?", a: "C, E, dan G – nada dasar, terts mayor, dan kuint murni." },
      ],
    },
  },
};
