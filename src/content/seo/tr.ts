import type { SeoContent } from "./types";

/* Türkçe SEO metinleri. İngilizce sürümle aynı içerik, nota adları harfle (C D E). */
export const tr: SeoContent = {
  labels: { faq: "Sık sorulan sorular", string: "Tel", note: "Nota", frequency: "Frekans", tuning: "Akort düzeni", notes: "Teller (6 → 1)" },
  pages: {
    home: {
      title: "Online Akort Aleti, Metronom ve Akorlar Ücretsiz – Music Tools",
      description: "Hemen çalışan ücretsiz müzik araçları: gitar, ukulele, keman, viyolonsel ve bas gitar akort aleti, tap tempo özellikli online metronom, gitar ve piyano akorları.",
      blocks: [
        {
          h2: "Uygulama ve üyelik gerektirmeyen ücretsiz online müzik araçları",
          p: [
            "Music Tools, doğrudan tarayıcıda çalışan basit ve ücretsiz müzik araçlarından oluşur. Sayfayı açın, hazır: indirme yok, hesap yok. Her ekran tek bir iş yapar; büyük düğmeler enstrüman elinizdeyken bile rahatça kullanılır.",
            "Mikrofon sesi kendi cihazınızda analiz edilir ve asla internete gönderilmez. İlk ziyaretten sonra araçlar çevrimdışı da çalışır; çekmeyen bir prova odasında bile akort aleti ve metronom yanınızda.",
          ],
        },
        {
          h2: "Burada neler yapabilirsiniz",
          list: [
            "**Enstrümanınızı akort edin**: [gitar akort](guitar), [ukulele akort](ukulele), [keman akort](violin), [viyolonsel akort](cello) ve [bas gitar akort](bass); diğer her şey için [kromatik akort cihazı](chromatic).",
            "**Tempoyu tutun**: [online metronom](metronome) ile 30–300 BPM, tap tempo, vurgular, ölçüler ve bölünmeler.",
            "**Akor bakın**: [gitar ve piyano akorları](chords) ile basışlar, ses ve transpoze.",
          ],
        },
      ],
      faq: [
        { q: "Bu araçlar gerçekten ücretsiz mi?", a: "Evet. Tüm araçlar ücretsizdir; üyelik ve indirme gerekmez. Her şey tarayıcıda çalışır." },
        { q: "Gitarımı akort etmek için uygulama gerekir mi?", a: "Hayır. Gitar akort sayfasını açın, “Akort için dokun”a basın ve mikrofona izin verin. Telefon, tablet ve bilgisayarda çalışır." },
        { q: "Mikrofon sesi kaydediliyor ya da gönderiliyor mu?", a: "Hayır. Akort aleti sesi cihazınızda gerçek zamanlı analiz eder ve hiçbir sunucuya bir şey göndermez." },
      ],
    },

    guitar: {
      title: "Gitar Akort Online Ücretsiz – Mikrofonla Akort Aleti",
      description: "Mikrofonla ücretsiz online gitar akort aleti. Akustik veya elektro gitarı standart, Drop D, Open G, DADGAD ya da yarım ses düşük akort edin. Uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online gitar akort aleti",
          p: [
            "Bu **gitar akort aleti** doğrudan tarayıcıda çalışır; uygulama ve hesap gerekmez. **Akort için dokun**a basın, mikrofona izin verin ve bir tel çalın. Akort aleti notayı tanır, en yakın teli seçer ve kaç cent pes ya da tiz olduğunu gösterir. Ortadaki çubuklar yeşile döndüğünde 5 centin içindesiniz: kulağa akortlu gelir.",
            "Telefon veya dizüstü mikrofonuyla **akustik gitar akort aleti** olarak, ayrıca **elektro gitar** için de çalışır: amfiye bağlamadan mikrofona yakın çalın ya da temiz bir tonla cihazı amfiye yaklaştırın. Ses cihazınızdan çıkmaz.",
          ],
        },
        {
          h2: "Gitarın standart akordu: teller, notalar ve frekanslar",
          p: ["Gitarın standart akordu en kalın telden (6.) en inceye (1.) **E A D G B E (Mi La Re Sol Si Mi)** şeklindedir."],
          autoTable: "tuning",
          after: ["Frekanslar standart diyapazon A4 = 440 Hz içindir."],
        },
        {
          h2: "Adım adım gitar nasıl akort edilir",
          ordered: true,
          list: [
            "6. telden (kalın E) başlayın. Teli boş çalın ve tınlamasına izin verin.",
            "**Sıkın** yazıyorsa tel pes: burguyu yavaşça sıkın. **Gevşetin** yazıyorsa gevşetin.",
            "Notanın biraz altından başlayıp yukarı doğru akort edin; tel akordu daha iyi tutar.",
            "Çubuklar yeşile dönüp tele ✓ gelince sonraki tele geçin. Altı tel için tekrarlayın.",
            "Hızlıca bir tur daha kontrol edin: bir telin gerginliği sapın dengesini değiştirir.",
          ],
        },
        {
          h2: "Alternatif akortlar: Drop D, Open G, DADGAD ve yarım ses düşük",
          p: ["**Akort düzeni** menüsünden seçin; tel düğmeleri de değişir."],
          autoTable: "alternates",
          after: ["**Drop D** yalnızca 6. teli bir tam ses düşürür; ağır riffler ve tek parmak power chord için idealdir. **Open G** boş tellerle Sol majör akoru verir, slide ve blues’ta sevilir. **DADGAD** folk ve Kelt müziğinde sık duyulan açık, modal bir tınıya sahiptir. **Yarım ses düşük** tüm telleri yarım ses indirir, bend yapmak kolaylaşır."],
        },
        {
          h2: "Referans seslerle kulaktan akort",
          p: [
            "Mikrofon yok ya da ortam gürültülü mü? Bir tel düğmesine dokunarak referans notayı dinleyin ve kulaktan akort edin. **Daha fazla** bölümünden A4 referansını (varsayılan 440 Hz) değiştirebilirsiniz; 442 veya 432 Hz’e akortlu bir piyano ya da grupla çalarken işe yarar.",
            "Akort ettikten sonra [online metronom](metronome) ile tempoda çalışın ya da [akorlar](chords) sayfasında basışlara bakın.",
          ],
        },
      ],
      faq: [
        { q: "Online gitar akort aleti doğru mu?", a: "Evet. Yaklaşık bir cent hassasiyetle ölçen McLeod perde algılama yöntemini kullanır ve ±5 cent içinde yeşile döner; bu, kulağın ayırt edebileceğinden daha incedir. Sessiz bir yerde tek tek tel çalarak akort edin." },
        { q: "Mandal akort aleti olmadan gitar akort edebilir miyim?", a: "Evet. Mikrofonlu herhangi bir telefon ya da bilgisayar yeter: bu sayfayı açın, “Akort için dokun”a basın ve her teli çalın. Mikrofon yoksa tel düğmesine dokunup kulaktan akort edin." },
        { q: "Gitar tellerinin notaları nelerdir?", a: "Standart akortta 6. telden 1. tele: E2, A2, D3, G3, B3 ve E4 (Mi, La, Re, Sol, Si, Mi)." },
        { q: "Elektro gitarda da çalışır mı?", a: "Evet. Amfiye bağlamadan mikrofona yakın çalın ya da temiz tonla cihazı amfiye yaklaştırın. Distorsiyon algılamayı zorlaştırır." },
        { q: "Gitarım neden sürekli akordu kaçırıyor?", a: "Yeni teller ilk günlerde esner, sıcaklık ve nem değişimleri de ahşabı oynatır. Çalmadan önce akort etmek bir dakikadan kısa sürer." },
      ],
    },

    ukulele: {
      title: "Ukulele Akort Online Ücretsiz – GCEA",
      description: "Ukuleleyi mikrofonla veya kulaktan online akort edin. Soprano, konser ve tenor ukulele için standart G C E A akordu. Ücretsiz, uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online ukulele akort aleti",
          p: [
            "Bu **ukulele akort aleti** ile birkaç saniyede akort edin. **Akort için dokun**a basın, mikrofona izin verin ve bir teli çekin: akort aleti en yakın teli bulur ve pes mi tiz mi olduğunu gösterir. Yeşil, akortlu demektir.",
            "Aynı akordu kullanan **soprano, konser ve tenor** ukulelelerin hepsine uygundur. Kulaktan mı tercih edersiniz? Her notayı duymak için tel düğmelerine dokunun.",
          ],
        },
        {
          h2: "Ukulelenin standart akordu: G C E A",
          p: ["Ukulelenin standart akordu 4. telden (çeneye en yakın) 1. tele **G C E A (Sol Do Mi La)** şeklindedir. Çoğu ukulelede Sol **tiz**dir: 4. tel 3. telden daha yüksek çalar, parlak ses buradan gelir."],
          autoTable: "tuning",
        },
        {
          h2: "Ukulele nasıl akort edilir",
          ordered: true,
          list: [
            "**Akort için dokun**a basın ve mikrofona izin verin.",
            "4. teli (G) çekin ve tınlamasına izin verin.",
            "Çubuklar yeşile dönene kadar burguyu çevirin: “Sıkın” görürseniz sıkın, “Gevşetin” görürseniz gevşetin.",
            "C, E ve A için tekrarlayın. Akortlu tel ✓ alır.",
          ],
          after: ["Yeni naylon teller çok esner; ilk günlerde her çalışta yeniden akort etmek normaldir."],
        },
        {
          h2: "Tiz Sol mu, pes Sol mu?",
          p: ["Bazı müzisyenler daha dolgun bir ses için 4. teli bir oktav **pes Sol** yapar. Bu akort aleti tiz Sol’a göre ayarlıdır; pes Sol için [kromatik akort cihazını](chromatic) kullanın."],
        },
      ],
      faq: [
        { q: "Ukulele tellerinin notaları nelerdir?", a: "Standart akortta 4. telden 1. tele: G4, C4, E4 ve A4." },
        { q: "Ukulelemi telefonla akort edebilir miyim?", a: "Evet. Bu sayfayı telefonda açın, “Akort için dokun”a basın, mikrofona izin verin ve her teli çekin." },
        { q: "Bariton ukulelede çalışır mı?", a: "Bariton ukulele, gitarın ince dört teli gibi D G B E akort edilir. Kromatik akort cihazını ya da gitar akort aletinin ince dört telini kullanın." },
        { q: "Yeni ukulelem neden bu kadar çabuk akordu kaçırıyor?", a: "Naylon teller yaklaşık bir hafta boyunca esnemeye devam eder. Sık akort edin, oturacaktır." },
      ],
    },

    violin: {
      title: "Keman Akort Online Ücretsiz – G D A E",
      description: "Ücretsiz online keman akort aleti. G D A E’yi mikrofonla ya da referans seslerle kulaktan akort edin, A4’ü 440 veya 442 Hz’e ayarlayın. Uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online keman akort aleti",
          p: [
            "Bu **keman akort aleti** mikrofondan dinler, notayı ve doğru perdeden sapmayı gösterir. **Akort için dokun**a basın, bir teli yayla çalın (ya da pizzicato) ve ortadaki çubuklar yeşile dönene kadar ayarlayın.",
            "Her tel düğmesi ayrıca net bir **referans ses** çalar; mikrofon yokken kemanı kulaktan akort edebilirsiniz.",
          ],
        },
        {
          h2: "Keman tellerinin notaları: G D A E",
          p: ["Keman beşli aralıklarla akort edilir: en pes telden (4.) en tize (1.) **G D A E (Sol Re La Mi)**."],
          autoTable: "tuning",
        },
        {
          h2: "Keman nasıl akort edilir",
          ordered: true,
          list: [
            "**La (A)** telinden başlayın; orkestra bu notaya göre akort eder.",
            "Mikrofona yakın, düzgün bir yayla çalın ve göstergeyi izleyin.",
            "Küçük düzeltmeler için kuyruktaki **ince akort vidalarını**, büyükler için yalnızca **burguları** kullanın; burguyu tutması için hafifçe içeri bastırarak çevirin.",
            "D, G ve E’yi aynı şekilde akort edin, sonra A’yı tekrar kontrol edin.",
          ],
        },
        {
          h2: "440 Hz mi, 442 Hz mi?",
          p: ["Çoğu müzik A4 = 440 Hz kullanır, ama birçok orkestra biraz daha yüksek, 442 Hz’e akort eder. **Daha fazla** bölümünü açıp A4’ü 430–450 Hz arasında ayarlayın."],
        },
      ],
      faq: [
        { q: "Kemanı telefonla akort edebilir miyim?", a: "Evet. Telefon mikrofonu yeterlidir: bu sayfayı açın, “Akort için dokun”a basın ve her teli çalın. Referans sesleri hoparlörden çalıp kulaktan da akort edebilirsiniz." },
        { q: "Kemanda önce hangi tel akort edilir?", a: "Önce La teli, ardından Re, Sol ve Mi." },
        { q: "Viyola akort aleti olarak kullanılabilir mi?", a: "Viyola C G D A akort edilir. Her notayı okuyan kromatik akort cihazını kullanın." },
        { q: "Kemanım neden akordu kaçırıyor?", a: "Burgular kayabilir; nem ve sıcaklık da telleri ve ahşabı oynatır. Her çalıştan önce akordu kontrol edin." },
      ],
    },

    cello: {
      title: "Viyolonsel Akort Online Ücretsiz – C G D A",
      description: "Ücretsiz online viyolonsel akort aleti. C G D A’yı mikrofonla ya da referans seslerle kulaktan akort edin. Tarayıcıda çalışır, uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online viyolonsel akort aleti",
          p: ["Uygulamasız, ücretsiz bu **viyolonsel akort aleti** ile çellonuzu akort edin. **Akort için dokun**a basın, bir teli düzgün bir yayla çalın ve çubuklar yeşile dönene kadar ayarlayın. Her düğme kulaktan akort için referans sesi de çalar."],
        },
        {
          h2: "Viyolonsel tellerinin notaları: C G D A",
          p: ["Viyolonsel, viyoladan bir oktav pes olarak beşli aralıklarla akort edilir: pesten tize **C G D A (Do Sol Re La)**."],
          autoTable: "tuning",
        },
        {
          h2: "Viyolonsel nasıl akort edilir",
          ordered: true,
          list: [
            "**La (A)** telinden başlayın, ardından D, G ve C’yi akort edin.",
            "Uzun ve düzgün yay çekin: sabit ses sabit okuma verir, özellikle pes C’de.",
            "Küçük düzeltmeler ince akort vidasıyla, büyükler burguyla.",
            "Sonda A’yı tekrar kontrol edin: diğer telleri germek onu kaydırabilir.",
          ],
          after: ["Telefon mikrofonları pes sesleri daha zayıf alır; cihazı enstrümana yakın tutun."],
        },
      ],
      faq: [
        { q: "Viyolonsel tellerinin notaları nelerdir?", a: "Pesten tize C2, G2, D3 ve A3." },
        { q: "Viyolonseli telefonla akort edebilir miyim?", a: "Evet. Mikrofona izin verin ve her teli telefona yakın çalın." },
        { q: "La’yı 440 Hz’e mi, 442 Hz’e mi akort etmeliyim?", a: "Orkestranız ya da öğretmeniniz başka bir şey istemedikçe 440 Hz kullanın. A4’ü Daha fazla bölümünden değiştirebilirsiniz." },
      ],
    },

    bass: {
      title: "Bas Gitar Akort Online Ücretsiz – E A D G",
      description: "4 telli bas gitar için ücretsiz online akort aleti. E A D G’yi mikrofonla ya da kulaktan akort edin. Tarayıcıda çalışır, uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online bas gitar akort aleti",
          p: ["Bu **bas gitar akort aleti** 4 telli bası standart akorda getirir. **Akort için dokun**a basın, bir tel çalın ve çubuklar yeşile dönene kadar burguyu çevirin. Elektro ve akustik bas için uygundur."],
        },
        {
          h2: "Bas gitarın standart akordu: E A D G",
          p: ["4 telli bas **E A D G** akort edilir; gitarın en kalın dört teliyle aynı notalar, bir oktav pes."],
          autoTable: "tuning",
        },
        {
          h2: "Bas gitar nasıl akort edilir",
          ordered: true,
          list: [
            "4. telden (pes E) başlayın.",
            "Teli sağlamca çekin ve tınlamasına izin verin; pes notaların oturması biraz zaman alır.",
            "“Sıkın” görürseniz sıkın, “Gevşetin” görürseniz gevşetin; yeşil olana kadar.",
            "A, D ve G için tekrarlayın, sonra E’yi tekrar kontrol edin.",
          ],
          after: ["Telefon ve dizüstü mikrofonları basları zayıf alır. Cihazı basa ya da amfi hoparlörüne yaklaştırın ve temiz ton kullanın."],
        },
      ],
      faq: [
        { q: "Bas tellerinin notaları nelerdir?", a: "Standart akortta 4. telden 1. tele: E1, A1, D2 ve G2." },
        { q: "Bas gitarı gitar akort aletiyle akort edebilir miyim?", a: "Bas, gitarın en kalın dört teliyle aynı nota adlarına sahiptir, yalnızca bir oktav pestir. Bu bas akort aleti tam olarak bu notalara ayarlıdır; kromatik akort cihazı da çalışır." },
        { q: "Pes E neden zor algılanıyor?", a: "Küçük mikrofonlar çok düşük frekansları zayıf alır. Sağlam çekin, cihazı yaklaştırın ve notanın tınlamasına izin verin." },
      ],
    },

    chromatic: {
      title: "Kromatik Akort Cihazı Online – Her Enstrüman İçin",
      description: "Ücretsiz online kromatik akort cihazı: 12 notanın hepsini okur ve kaç cent saptığını gösterir. Her enstrüman ve ses için. A4 430–450 Hz ayarlanabilir.",
      blocks: [
        {
          h2: "Kromatik akort cihazı nedir?",
          p: [
            "**Kromatik akort cihazı** yalnızca tek bir enstrümanın tellerini değil, gamdaki 12 notanın hepsini tanır. Herhangi bir nota çalın; en yakın nota adını, oktavını ve kaç cent saptığını gösterir.",
            "Bu yüzden her enstrümana uyar: mandolin, banjo, viyola, kalimba, nefesliler, pes Sol’lu ukulele ve hatta sesiniz.",
          ],
        },
        {
          h2: "Notaların frekansları (4. oktav)",
          p: ["A4 = 440 Hz iken orta Do çevresindeki 12 notanın referans frekansları:"],
          autoTable: "notes",
        },
        {
          h2: "Cent, A4 ve 432 Hz",
          p: [
            "Bir **cent**, yarım sesin 1/100’üdür. ±5 cent içinde akort cihazı yeşile döner; daha küçük farkı neredeyse kimse duymaz.",
            "A4 referansı tüm notaların yüksekliğini belirler. Varsayılan 440 Hz’dir; **Daha fazla** bölümünden 430–450 Hz arasına, 432 Hz’e ya da birçok orkestranın kullandığı 442 Hz’e ayarlayabilirsiniz.",
          ],
        },
      ],
      faq: [
        { q: "Kromatik akort cihazı ile gitar akort aleti arasındaki fark nedir?", a: "Gitar akort aleti yalnızca gitarın altı telini arar. Kromatik cihaz 12 notanın her birini okur; bu yüzden her enstrüman ve her akort için uygundur." },
        { q: "Sesimi kontrol etmek için kullanabilir miyim?", a: "Evet. Düz bir nota söyleyin; akort cihazı hangi nota olduğunu ve ne kadar yakın olduğunuzu gösterir." },
        { q: "432 Hz’e nasıl akort ederim?", a: "Daha fazla bölümünü açın ve A4 referansını 432 Hz’e indirin. Tüm notalar bu referansı izler." },
      ],
    },

    metronome: {
      title: "Online Metronom Ücretsiz – BPM, Tap Tempo ve Ölçüler",
      description: "30–300 BPM ücretsiz online metronom: tap tempo, vurgular, ölçüler (4/4, 3/4, 6/8) ve bölünmeler. Tarayıcıda çalışır, uygulama gerekmez.",
      blocks: [
        {
          h2: "Ücretsiz online metronom",
          p: [
            "Bu **online metronom**, doğrudan tarayıcıda 30–300 BPM arası sabit bir vuruş verir; indirme gerekmez. Tempoyu kaydırıcıyla ya da − / + düğmeleriyle ayarlayın, **Play**’e basın ve tık sesini, sarkacı ve her vuruşun ışığını takip edin.",
            "Daha fazla bölümünde **görsel flaşı** açarsanız ekran her vuruşta yanıp söner; sessizde ya da gürültülü ortamda tempoyu kaçırmazsınız. Tıklar cihazın ses saatine planlanır, bu yüzden tempo kaymaz.",
          ],
        },
        {
          h2: "Tap tempo: bir şarkının BPM’ini bulun",
          p: ["Tempoyu bilmiyor musunuz? Şarkıyla birlikte **Tap tempo** düğmesine birkaç kez dokunun; metronom dokunuşlarınızdan BPM’i hesaplar. Son beş dokunuşun ortalamasını alır ve iki saniye durursanız yeniden başlar."],
        },
        {
          h2: "Ölçüler ve vurgular",
          p: [
            "2/4, 3/4, 4/4, 5/4, 6/8 veya 7/8 seçin. Her ölçünün ilk vuruşu **vurgulu**dur, böylece “bir”in nerede olduğunu hep bilirsiniz; 3/4 vals çalışmasında çok işe yarar. **6/8**’de varsayılan olarak 1. ve 4. vuruşlar vurgulanır.",
            "Vurgu eklemek ya da kaldırmak için herhangi bir vuruş kutusuna dokunarak kendi kalıbınızı oluşturun.",
          ],
        },
        {
          h2: "Tempo terimleri ve BPM",
          p: ["Metronom, geçerli tempoya karşılık gelen klasik tempo terimini gösterir:"],
          table: {
            head: ["Tempo terimi", "BPM", "Karakter"],
            rows: [
              ["Largo", "60’ın altı", "çok ağır, geniş"],
              ["Adagio", "60–75", "ağır"],
              ["Andante", "76–107", "yürür gibi"],
              ["Moderato", "108–119", "orta"],
              ["Allegro", "120–167", "hızlı, canlı"],
              ["Presto", "168–199", "çok hızlı"],
              ["Prestissimo", "200 ve üzeri", "olabildiğince hızlı"],
            ],
          },
        },
        {
          h2: "Metronomla nasıl çalışılır",
          list: [
            "Gamlar ve yeni parçalar için **60–80 BPM** civarında yavaş başlayın.",
            "Bir bölümü üst üste üç kez temiz çaldığınızda 4–5 BPM artırın.",
            "Vuruşlar arasındaki hızlı notaları oturtmak için Daha fazla bölümündeki **bölünmeleri** (1/8, triole, 1/16) kullanın.",
            "Başlamadan önce akordu [gitar akort aleti](guitar) ile kontrol edin.",
          ],
        },
      ],
      faq: [
        { q: "Uygulama olmadan tarayıcıda metronom kullanabilir miyim?", a: "Evet. Bu metronom tamamen tarayıcıda; telefon, tablet ve bilgisayarda çalışır." },
        { q: "Metronomu 6/8’e nasıl ayarlarım?", a: "Üstten 6/8’i seçin. 1. ve 4. vuruşlar vurgulanır, 6/8’in iki ana vuruşunu verir. Vurguları değiştirmek için kutulara dokunun." },
        { q: "Yeni başlayan biri gamları kaç BPM’de çalışmalı?", a: "60–80 BPM’de başlayın, temiz çalın, sonra birkaç BPM’lik adımlarla hızlanın." },
        { q: "Online metronom doğru mu?", a: "Evet. Tıklar sıradan zamanlayıcılarla değil, cihazın ses saatine önceden planlanır; bu yüzden tempo kaymaz." },
      ],
    },

    chords: {
      title: "Gitar ve Piyano Akorları – Sesli Akor Tablosu",
      description: "Ücretsiz gitar ve piyano akor tablosu. Kök notayı ve akor türünü seçerek basışı görün, dinleyin, başka basışları deneyin ve transpoze edin.",
      blocks: [
        {
          h2: "Basışlarıyla gitar akor tablosu",
          p: ["Bir **kök nota** ve **akor türü** seçin; bu **gitar akor tablosu** basışı sapın üzerine çizer: ✕ çalınmayan tel, ○ boş tel, her nokta ise parmağınızın altındaki notayı gösterir (kök nota beyaz). Oklarla sapın üst taraflarındaki **barre akorlar** dahil başka basışları görün; **Çal** ile akoru dinleyin."],
        },
        {
          h2: "Klavyede piyano akorları",
          p: ["**Piyano**ya geçerek akoru tuşlarda görün; tüm akor notaları vurgulanır ve adlandırılır. Oklar **çevrimler** arasında geçiş yapar: aynı notalar farklı sırayla, akor geçişlerini yumuşatır."],
        },
        {
          h2: "Akor türleri",
          table: {
            head: ["Akor türü", "Notalar (kökten)", "Do (C) örneği"],
            rows: [
              ["Majör", "1 – 3 – 5", "C E G"],
              ["Minör", "1 – ♭3 – 5", "C E♭ G"],
              ["7 (dominant yedili)", "1 – 3 – 5 – ♭7", "C E G B♭"],
              ["maj7", "1 – 3 – 5 – 7", "C E G B"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C E♭ G B♭"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim (eksik)", "1 – ♭3 – ♭5", "C E♭ G♭"],
              ["aug (artık)", "1 – 3 – ♯5", "C E G♯"],
            ],
          },
        },
        {
          h2: "Yeni başlayanlar için gitar akorları",
          p: ["Çoğu şarkı birkaç **temel gitar akoru** ile çalınır: C, G, D, A, E, Am, Em ve Dm. Önce bu açık akorları öğrenin, sonra F ve Bm gibi barre akorlara geçin. Akor geçişlerini [metronom](metronome) ile tempoda çalışın ve gitarınızı [gitar akort aleti](guitar) ile akortlu tutun."],
        },
        {
          h2: "Akorları transpoze etmek",
          p: ["**−1** ve **+1** ile akoru yarım ses aşağı ya da yukarı kaydırın; sesinize uygun bir tona **akorları transpoze etmenin** hızlı yolu. Daha fazla bölümünden nota adlarını C D E, Do Re Mi ve Alman yazımı (H) arasında değiştirebilirsiniz."],
        },
      ],
      faq: [
        { q: "Gitar akor şeması nasıl okunur?", a: "Dikey çizgiler teller (soldaki pes E), yatay çizgiler perdelerdir. Noktalar basılacak yerleri, ✕ çalınmayan teli, ○ boş teli gösterir. “5fr” gibi bir etiket şemanın hangi perdeden başladığını belirtir." },
        { q: "Gitarda Bm (Si minör) akoru nasıl basılır?", a: "En yaygın Bm, 2. perdede barredir: pes E telini çalmayın ve x-2-4-4-3-2 basın. Görmek için burada B ve Minör’ü seçin, başka bir basış için okları kullanın." },
        { q: "Barre akor nedir?", a: "Bir parmağın aynı perdede birden fazla teli birlikte bastığı akordur; hareketli bir eşik gibi çalışır. Böylece aynı şekli her tonda çalabilirsiniz." },
        { q: "Do majör (C) akorunda hangi notalar var?", a: "C, E ve G (Do, Mi, Sol): kök, büyük üçlü ve tam beşli." },
      ],
    },
  },
};
