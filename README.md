# ⚓ English Voyage — B1 → C1

Günde 15–30 dakikada İngilizceyi B1'den C1'e taşımak için tasarlanmış, oyunlaştırılmış (Duolingo tarzı) bir web uygulaması.
Örnekler iki dünyadan gelir: **gemi camı üreten bir firmanın yabancı müşterilerle iletişimi** ve **günlük konuşma / yeni insanlarla tanışma**.

Kurulum gerektirmez: saf HTML/CSS/JavaScript, build yok, internet bağlantısı olmadan da çalışır (yazı tipleri hariç).

## Nasıl açılır?

- **En kolayı:** `index.html` dosyasını tarayıcıda aç.
- **Telefonda kullanmak için:** repo ayarlarından GitHub Pages'i aç (Settings → Pages → bu dal, `/ (root)`), sonra verilen adresi telefonda açıp "Ana ekrana ekle" de.
- **Yerel sunucu:** `python3 -m http.server` → <http://localhost:8000>

## Modüller (5 modül · 80 ünite · ~1000 alıştırma · ~700 tekrar kartı)

| Modül | İçerik |
|---|---|
| ⏳ **Zamanlar (Tenses)** | Present/past/perfect/continuous farkları, gelecek biçimleri, narrative tenses, kibarlık için geçmiş zaman, C1 nüansları |
| 📘 **Gramer** | Article'lar, modal'lar, gerund/infinitive, tüm conditional'lar, passive, relative clauses, reported speech, inversion, cleft sentences, hedging |
| 🚢 **Gemi Camı – İş İngilizcesi** | Cam türleri, pencere parçaları, ölçüler/toleranslar, teklif–sipariş, ISO 614/1095/3903/21005, SOLAS, klas kuruluşları, testler, üretim, Incoterms, şikâyet yönetimi, pazarlık, fuarlar |
| 💬 **Günlük Konuşma** | Tanışma, small talk konuları, sohbeti sürdürme, fikir belirtme, müşteriyle sosyal sohbet, phrasal verbs, deyimler, telefon/video görüşmeleri |
| 🔗 **Bağlaçlar & Akıcılık** | Ekleme, zıtlık, sebep–sonuç, amaç, koşul, konuşma dolguları (well, actually, anyway…), resmi e-posta bağlaçları, C1 concession (albeit, notwithstanding…) |

Zamanlar, Gramer ve Bağlaçlar 16'şar, Gemi Camı ve Günlük Konuşma 19'ar üniteden oluşur. Her ünite ~15 dakikadır.

## 8 haftalık plan

| Hafta | Seviye | Odak |
|---|---|---|
| 1–2 | B1+ | Temelleri sağlamlaştır, akıcı anlatım |
| 3–4 | B2 | Deneyim/süreç anlatımı, planlar, koşullar, teklifler |
| 5–6 | B2+ | Hikâye ve rapor dili, ikna, sorun çözme |
| 7–8 | C1 | Vurgu ve incelik, resmi ve doğal ustalık |

- **Her ünite (~15 dk):** önce 5-6 adımlık konu anlatımı (mantık → kalıp → iş İngilizcesi örnekleri → günlük konuşma örnekleri → kısa cümlelerden uzun cümle kurma → sık yapılan hatalar), her adımdan sonra bir hızlı kontrol sorusu, ardından alıştırmalar.
- **Günlük görev (~15–30 dk):** her gün 1 ünite (en çok geride kalan modülden) + 1 tekrar; planın gerisindeysen 2 ünite.
- **Esnek:** daha fazla çalışmak istediğin gün istediğin modülde istediğin kadar ilerleyebilirsin; kilitli bir üniteyi de onaylayarak açabilirsin. Ayarlar'dan tüm üniteleri açmak da mümkün.
- **Haftalık:** her haftanın sonunda o haftanın sınavı (hedef %80) ve 2 "gerçek hayat görevi" (konuşma kaydı, e-posta yazma vb.).
- Not: 1–2 ayda B1'den C1'e çıkmak çok iddialı bir hedef. Plan seni sağlam bir B2+ seviyesine taşır ve C1 yapılarıyla tanıştırır. Uygulamanın dışında da İngilizce dinleyip okumak bu süreci belirgin şekilde hızlandırır.

## Alıştırma tipleri ve oyunlar

- **Ünite içi:** çoktan seçmeli, boşluk doldurma (yazarak), kelimeleri dizerek cümle kurma, **kısa cümleleri doğru bağlaçla tek uzun cümlede birleştirme**, eşleştirme, dinle-yaz (tarayıcının sesli okuması; 🇬🇧/🇺🇸 aksan ve hız ayarlı).
- Yanlış cevaplanan sorular dersin sonunda tekrar sorulur ve **Hatalarım** bölümüne eklenir.
- **Kart Tekrarı:** aralıklı tekrar (Leitner kutuları: 0-1-2-4-7-15-30-60 gün).
- **Hız Turu:** 60 saniye, art arda doğrularla x5'e kadar çarpan.
- **Eşleştirme Yarışı**, **Karışık Test**, **Haftalık Sınavlar**.
- XP, günlük seri (🔥), günlük dakika hedefi, yıldızlar.

## İlerleme nerede saklanır?

Tarayıcının `localStorage`'ında. Ayarlar → **İlerlemeni yedekle** ile dosya olarak indirebilir, panoya kopyalayabilir ve başka bir cihazda içe aktarabilirsin.
Uygulama claude.ai Artifact olarak açıldığında ilerleme ayrıca hesabına kaydedilir ve cihazlar arasında senkronlanır.

## Proje yapısı

```
index.html              uygulama kabuğu
css/styles.css          tasarım (açık/koyu tema)
js/app.js               motor: yönlendirme, ders akışı, oyunlar, aralıklı tekrar, plan, ayarlar
js/plan.js              8 haftalık plan: haftalık hedefler ve gerçek hayat görevleri
modules/*.js            içerik (her modül ayrı dosya)
modules/README.md       içerik şeması — yeni ünite/alıştırma eklemek için
tools/validate.js       içerik doğrulayıcı:  node tools/validate.js
tools/build-artifact.js tek dosyalık sürüm üretir:  node tools/build-artifact.js out.html
```

Yeni içerik eklemek için `modules/README.md`'deki şemayı izle ve `node tools/validate.js` ile kontrol et.
