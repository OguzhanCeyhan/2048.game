# İçerik Şeması (Content Schema)

Her modül `modules/<id>.js` dosyasında yaşar ve kendini global bir diziye kaydeder.
Dosya düz JavaScript'tir (build yok), tarayıcıda `<script>` ile yüklenir.

```js
window.EA_MODULES = window.EA_MODULES || [];
window.EA_MODULES.push({
  id: "grammar",              // benzersiz, kısa, küçük harf
  title: "Gramer",            // Türkçe başlık
  icon: "📘",                 // tek emoji
  color: "#4f7cff",           // tema rengi
  description: "Kısa Türkçe açıklama",
  units: [
    {
      id: "grammar-01",       // modül içinde benzersiz, "<modülId>-NN"
      title: "Unit başlığı",
      level: "B1+",           // "B1+" | "B2" | "B2+" | "C1"
      week: 1,                // 1..8 — 8 haftalık planda hangi haftaya ait
      intro: {
        tr: "Konunun Türkçe kısa anlatımı (2-5 cümle).",
        points: ["Kural / ipucu 1", "Kural / ipucu 2"],          // 2-6 madde
        examples: [{ en: "English example.", tr: "Türkçe çevirisi." }] // 2-6 örnek
      },
      cards: [                // OPSİYONEL: tekrar kartları (aralıklı tekrar sistemi)
        { en: "laminated glass", tr: "lamine cam", ex: "Örnek İngilizce cümle." }
      ],
      exercises: [ /* 10-14 alıştırma, tiplerin karışımı */ ]
    }
  ]
});
```

## Alıştırma tipleri

Tüm `explain` alanları **Türkçe**, kısa (neden doğru?) açıklamadır. Sorular İngilizcedir.

### 1. `mcq` — çoktan seçmeli
```js
{ type: "mcq", q: "By the time the vessel arrives, we ___ the glass.",
  options: ["will have delivered", "delivered", "have delivered", "deliver"],
  answer: 0, explain: "By the time + gelecek → Future Perfect." }
```
- 3-4 seçenek, `answer` = doğru seçeneğin index'i (0 tabanlı). Doğru cevabın yerini çeşitlendir.

### 2. `fill` — boşluk doldurma (yazarak)
```js
{ type: "fill", q: "The glass ___ (test) to ISO 614 last month.",
  answers: ["was tested"], hint: "passive, past", explain: "..." }
```
- `q` içinde **tam olarak bir** `___` (üç alt çizgi) bulunur.
- `answers`: kabul edilen tüm doğru yazımlar (kısaltmalı / kısaltmasız gibi). Büyük-küçük harf ve sondaki noktalama önemsizdir.
- `hint` opsiyonel.

### 3. `order` — kelimeleri sıraya dizerek cümle kurma
```js
{ type: "order", answer: "Could you send us the technical drawings?",
  tr: "Bize teknik çizimleri gönderebilir misiniz?", explain: "..." }
```
- Motor `answer`'ı boşluklardan böler ve karıştırır. 5-12 kelime ideal.
- `extra` (opsiyonel): `["sending"]` gibi çeldirici kelimeler.
- `alts` (opsiyonel): aynı kelimelerle kurulabilen **başka doğru sıralamalar**
  (ör. `["Tomorrow we will ship the glass."]`). Kelimeler `answer` ile birebir aynı olmalı.

### 4. `match` — eşleştirme
```js
{ type: "match", pairs: [["tempered", "temperli"], ["laminated", "lamine"],
  ["toughened", "sertleştirilmiş"], ["pane", "cam levha"]], explain: "..." }
```
- 4-6 çift; sol taraf İngilizce. Aynı metin iki kez geçmemeli.

### 5. `listen` — dinle ve yaz (dikte, tarayıcının sesli okuma özelliği ile)
```js
{ type: "listen", text: "We can deliver within four weeks.",
  tr: "Dört hafta içinde teslim edebiliriz." }
```
- Kısa ve net cümle (4-12 kelime). Rakam yerine yazıyla yaz ("four" — "4" değil).
  Kontrol noktalama ve büyük/küçük harften bağımsız yapılır.

### 6. `combine` — kısa cümleleri tek uzun cümlede birleştirme (kelime kartlarıyla)
```js
{ type: "combine",
  parts: ["The glass arrived two weeks late.", "We missed the installation date."],
  answer: "Because the glass arrived two weeks late, we missed the installation date.",
  alts: ["We missed the installation date because the glass arrived two weeks late."],
  extra: ["although", "so"],          // yanlış bağlaç çeldiricileri (önerilir)
  tr: "Cam iki hafta geç geldiği için kurulum tarihini kaçırdık.",
  explain: "Sebep (because) + sonuç: 'because' cümlesi başa gelirse virgül konur." }
```
- `parts`: 2-3 kısa cümle; `answer`: hepsinin anlamını taşıyan tek doğru cümle (12-28 kelime).
- Motor `answer` (+ `extra`) kelimelerini karıştırıp kart olarak verir; `alts` kelimeleri `answer` ile birebir aynı olmalı.

## Konu anlatımı (`teach`) — ünitenin ilk ~6-7 dakikası

Her ünitenin bir `teach` dizisi vardır (5-6 adım). Ders, sorulardan **önce** bu adımları sırayla
slayt gibi gösterir; her adımdan sonra (varsa) tek bir `check` sorusu gelir. Amaç kuralı ezberletmek değil
**mantığını oturtmak** ve **kısa cümleleri uzun, doğru cümlelere birleştirmeyi** öğretmektir.

```js
teach: [
  { title: "Mantık: Neden present perfect?",            // kısa başlık
    tr: "Türkçe anlatım. Paragraflar \n\n ile ayrılır.",  // 2-5 cümlelik net anlatım
    pattern: "Özne + have/has + V3 (+ since/for ...)",   // opsiyonel: cümle kalıbı
    logic: "Türkçedeki '-dı' ile karşılaştırmalı mantık açıklaması.", // opsiyonel ama önerilir
    examples: [                                          // 3-5 örnek, 12-25 kelimelik UZUN cümleler
      { en: "We have tested every pane twice because the surveyor asked for extra documentation.",
        tr: "Sörveyör ek doküman istediği için her camı iki kez test ettik.",
        note: "have tested = sonuç şimdi önemli; because = sebep" } ],
    mistakes: [ { wrong: "I have seen him yesterday.", right: "I saw him yesterday.",
                  why: "Belirli geçmiş zaman (yesterday) → past simple." } ],   // opsiyonel
    check: { type: "mcq", q: "...", options: [...], answer: 0, explain: "..." } // opsiyonel, 1 alıştırma
  }
]
```
Önerilen adım sırası: (1) Mantık / ne zaman kullanılır, (2) Kalıp ve yapı, (3) İş bağlamında uzun örnekler
(müşteriye anlatır gibi; sebep → aksiyon → sonuç), (4) Günlük konuşmada uzun örnekler,
(5) Kısa cümlelerden uzun cümle kurma (birleştirme adım adım), (6) Sık yapılan hatalar + mini diyalog/e-posta.

Mevcut üniteler için `teach` ve ek alıştırmalar ayrı dosyalarda tutulur: `modules/teach/<modülId>.js`
```js
window.EA_TEACH = window.EA_TEACH || {};
Object.assign(window.EA_TEACH, {
  "tenses-01": { teach: [ /* 5-6 adım */ ], extra: [ /* 5-6 ek alıştırma, en az 2 combine */ ] },
});
```
Motor `extra` alıştırmalarını ünitenin `exercises` listesinin sonuna ekler. Yeni ünitelerde `teach`
doğrudan unit nesnesinin içine yazılır.

## Kurallar
- Her unit: 10-14 alıştırma (+ teach dosyasındaki 5-6 ek alıştırma); en az 3 farklı tip; en az 1 `order`, en az 1 `fill`.
- Ünite toplam ~15 dakika: ~6-7 dk konu anlatımı + ~8 dk alıştırma.
- Cümleler kısa kalmasın: örneklerin çoğu 12-25 kelime, bağlaçlarla birleşik, sebep-sonuç içeren cümleler olsun.
- Örnek cümleler mümkün olduğunca **iki bağlamdan** gelsin:
  1. Gemi camı üreten bir firmanın yabancı müşterilerle iletişimi
     (teklif, sipariş, teknik özellik, sertifika, sevkiyat, şikayet, toplantı).
  2. Günlük konuşma / yeni biriyle tanışma / sohbet.
- Doğal, gerçekçi İngilizce kullan. Seviye `level` alanına uygun olsun.
- `fill` cevaplarında tek bir doğru biçim belirsizse tüm makul alternatifleri `answers`'a ekle.
- Doğrulama: `node tools/validate.js` hatasız geçmeli.
