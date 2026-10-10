// Module: Zamanlar (Tenses) — 16 units, 8 weeks, B1+ → C1
(function () {
  var units = [];

  // ---------------------------------------------------------------- 1
  units.push({
    id: "tenses-01",
    title: "Present Simple vs Present Continuous",
    level: "B1+",
    week: 1,
    intro: {
      tr: "Present Simple kalıcı durumlar, alışkanlıklar ve genel gerçekler için kullanılır. Present Continuous ise şu anda ya da bu dönemde süren, geçici eylemler içindir. 'know, need, belong, cost' gibi durum (state) fiilleri genelde continuous yapılmaz.",
      points: [
        "Alışkanlık / genel gerçek → Present Simple: We produce tempered glass.",
        "Şu an / bu aralar / geçici → Present Continuous: We are working on a big order this month.",
        "Sıklık zarfları (usually, always, often) genelde Present Simple ile gelir.",
        "Durum fiilleri (know, want, need, cost, belong, prefer) continuous olmaz: I need (✗ I'm needing).",
        "'always' + continuous → şikayet/rahatsızlık: He's always calling me late at night."
      ],
      examples: [
        { en: "Our factory produces bridge windows for cargo ships.", tr: "Fabrikamız kargo gemileri için köprüüstü camı üretir." },
        { en: "We are currently testing a new heated glass panel.", tr: "Şu anda yeni bir ısıtmalı cam paneli test ediyoruz." },
        { en: "I usually go to the gym after work.", tr: "Genelde işten sonra spor salonuna giderim." },
        { en: "I'm staying with my cousin until I find a flat.", tr: "Bir daire bulana kadar kuzenimde kalıyorum." }
      ]
    },
    cards: [
      { en: "at the moment", tr: "şu anda", ex: "We are running a stress test at the moment." },
      { en: "these days", tr: "bu aralar", ex: "I'm learning to cook these days." },
      { en: "lead time", tr: "teslim süresi", ex: "Our standard lead time is six weeks." },
      { en: "bridge window", tr: "köprüüstü camı", ex: "We manufacture bridge windows for tankers." },
      { en: "portlight", tr: "lomboz", ex: "Each portlight has a deadlight cover." },
      { en: "What do you do?", tr: "Ne iş yapıyorsun?", ex: "So, what do you do? — I work in sales." }
    ],
    exercises: [
      { type: "mcq", q: "Our company ___ laminated glass for passenger ships. It has been our main product for thirty years.",
        options: ["is manufacturing", "manufactures", "manufacture", "manufacturing"],
        answer: 1, explain: "Şirketin genel/kalıcı faaliyeti → Present Simple (3. tekil -s)." },
      { type: "mcq", q: "Sorry, I can't talk now. I ___ a call with a customer from Norway.",
        options: ["am having", "has", "had", "have had"],
        answer: 0, explain: "Konuşma anında süren eylem → Present Continuous. 'have a call' eylem anlamında continuous olabilir." },
      { type: "mcq", q: "This bridge window ___ about 2,400 euros.",
        options: ["is costing", "costing", "costs", "is cost"],
        answer: 2, explain: "'cost' durum fiilidir → Present Simple." },
      { type: "fill", q: "I ___ (live) with my parents at the moment, but I'm looking for a flat.",
        answers: ["am living", "'m living", "i'm living"], hint: "geçici durum",
        explain: "'at the moment' + geçici durum → Present Continuous." },
      { type: "fill", q: "We usually ___ (ship) our orders by sea freight.",
        answers: ["ship"], hint: "alışkanlık",
        explain: "'usually' → düzenli alışkanlık → Present Simple." },
      { type: "fill", q: "Do you ___ (know) anyone at DNV?",
        answers: ["know"], explain: "'know' durum fiilidir; soru Present Simple ile kurulur." },
      { type: "mcq", q: "Which sentence is correct?",
        options: ["I'm needing the drawings today.", "I needing the drawings today.", "I am need the drawings today.", "I need the drawings today."],
        answer: 3, explain: "'need' durum fiili → continuous olmaz." },
      { type: "order", answer: "We are working on a large order this month.",
        tr: "Bu ay büyük bir sipariş üzerinde çalışıyoruz.",
        alts: ["This month we are working on a large order."],
        explain: "'this month' geçici dönem → Present Continuous." },
      { type: "order", answer: "What do you usually do at the weekend?",
        tr: "Hafta sonları genelde ne yaparsın?", extra: ["doing"],
        explain: "Alışkanlık sorusu → do + özne + fiil." },
      { type: "match", pairs: [
          ["She works in sales.", "kalıcı durum"],
          ["She's working from home this week.", "geçici durum"],
          ["Water boils at 100 degrees.", "genel gerçek"],
          ["He's always interrupting me!", "şikayet"],
          ["I'm talking to a client right now.", "şu an süren eylem"]
        ], explain: "Simple: kalıcı/genel; Continuous: geçici, şu an, 'always' ile şikayet." },
      { type: "fill", q: "Prices ___ (rise) quickly this year, so we must update the quotation.",
        answers: ["are rising", "'re rising", "have been rising", "'ve been rising", "have risen", "'ve risen"], hint: "değişen durum",
        explain: "Gelişen/değişen durumlar → Present Continuous (are rising). 'have been rising / have risen' de doğrudur." },
      { type: "listen", text: "We manufacture heated glass for bridge windows.",
        tr: "Köprüüstü camları için ısıtmalı cam üretiyoruz." },
      { type: "listen", text: "What are you doing this evening?",
        tr: "Bu akşam ne yapıyorsun?" }
    ]
  });

  // ---------------------------------------------------------------- 2
  units.push({
    id: "tenses-02",
    title: "Past Simple vs Past Continuous",
    level: "B1+",
    week: 1,
    intro: {
      tr: "Past Simple geçmişte tamamlanmış eylemleri anlatır. Past Continuous geçmişte belirli bir anda süren eylemi anlatır. Süren bir eylem kısa bir eylemle kesildiğinde: uzun eylem Past Continuous, kesen eylem Past Simple olur.",
      points: [
        "Tamamlanmış eylem → Past Simple: We shipped the glass on Monday.",
        "Geçmişte süren arka plan → Past Continuous: I was driving to work.",
        "while + uzun eylem (Continuous), when + kısa eylem (Simple).",
        "Ardışık eylemler → hepsi Past Simple: He opened the box, checked the glass and called us.",
        "İki paralel süren eylem → while + Past Continuous ×2."
      ],
      examples: [
        { en: "The customer called while I was preparing the quotation.", tr: "Ben teklifi hazırlarken müşteri aradı." },
        { en: "We were loading the container when it started to rain.", tr: "Yağmur başladığında konteyneri yüklüyorduk." },
        { en: "I met my wife when I was studying in Izmir.", tr: "Eşimle İzmir'de okurken tanıştım." },
        { en: "The inspector checked the panes and signed the report.", tr: "Denetçi camları kontrol etti ve raporu imzaladı." }
      ]
    },
    cards: [
      { en: "while", tr: "-iken", ex: "While we were testing the glass, a pane cracked." },
      { en: "suddenly", tr: "aniden", ex: "We were talking when suddenly the lights went out." },
      { en: "crack", tr: "çatlamak", ex: "The pane cracked during the impact test." },
      { en: "load a container", tr: "konteyner yüklemek", ex: "They were loading the container at noon." },
      { en: "run into someone", tr: "birine rastlamak", ex: "I ran into an old friend at the airport." },
      { en: "inspection", tr: "denetim", ex: "The inspection took two hours." }
    ],
    exercises: [
      { type: "mcq", q: "I ___ an email to the client when the power went off.",
        options: ["wrote", "write", "have written", "was writing"],
        answer: 3, explain: "Kesilen uzun eylem → Past Continuous." },
      { type: "mcq", q: "While we were testing the sample, one pane ___.",
        options: ["was cracking", "cracks", "cracked", "has cracked"],
        answer: 2, explain: "Kısa, kesen eylem → Past Simple." },
      { type: "fill", q: "We ___ (send) the samples to Hamburg last Friday.",
        answers: ["sent"], hint: "tamamlanmış",
        explain: "'last Friday' → belirli geçmiş zaman → Past Simple." },
      { type: "fill", q: "What ___ you doing at eight o'clock last night?",
        answers: ["were"], explain: "Geçmişte belirli bir anda süren eylem → were + -ing." },
      { type: "fill", q: "I ___ (run) into an old friend while I was waiting for my flight.",
        answers: ["ran"], hint: "kesen eylem",
        explain: "Arka plan 'was waiting', kısa eylem 'ran into' → Past Simple." },
      { type: "mcq", q: "The inspector arrived, ___ the panes and left after an hour.",
        options: ["was checking", "checks", "checked", "had checking"],
        answer: 2, explain: "Ardışık eylemler → hepsi Past Simple." },
      { type: "mcq", q: "___ I was living in London, I worked in a café.",
        options: ["When", "While", "During", "Both 'When' and 'While'"],
        answer: 3, explain: "Süren durum için hem 'when' hem 'while' kullanılabilir; 'during' + isim gerekir." },
      { type: "order", answer: "The phone rang while I was having dinner.",
        tr: "Akşam yemeği yerken telefon çaldı.",
        alts: ["While I was having dinner the phone rang."],
        explain: "while + Past Continuous (uzun), ana cümle Past Simple (kısa)." },
      { type: "order", answer: "We were loading the container when the crane broke down.",
        tr: "Vinç bozulduğunda konteyneri yüklüyorduk.", extra: ["was"],
        alts: ["When the crane broke down we were loading the container."],
        explain: "Uzun eylem were loading, kesen eylem broke down." },
      { type: "fill", q: "It ___ (rain) heavily when the truck arrived at the port.",
        answers: ["was raining"], hint: "arka plan",
        explain: "Hikâyedeki arka plan durumu → Past Continuous." },
      { type: "match", pairs: [
          ["was talking", "süren eylem (geçmiş)"],
          ["talked", "tamamlanmış eylem"],
          ["while", "uzun eylemle"],
          ["when", "genelde kısa eylemle"]
        ], explain: "Past Continuous süreci, Past Simple tamamlanmış olayı gösterir." },
      { type: "listen", text: "The customer called while I was in a meeting.",
        tr: "Ben toplantıdayken müşteri aradı." },
      { type: "listen", text: "Where were you going when I saw you?",
        tr: "Seni gördüğümde nereye gidiyordun?" }
    ]
  });

  // ---------------------------------------------------------------- 3
  units.push({
    id: "tenses-03",
    title: "Present Perfect vs Past Simple",
    level: "B1+",
    week: 2,
    intro: {
      tr: "Present Perfect (have/has + V3) geçmişle şimdi arasında bağ kurar: deneyim, sonucu şimdi önemli olan yeni olaylar, henüz bitmemiş zaman dilimleri. Past Simple ise belirli, bitmiş bir zamandaki olayları anlatır. 'yesterday, last week, in 2019, ago' gibi ifadeler varsa Past Simple kullanılır.",
      points: [
        "Deneyim (ne zaman olduğu önemsiz) → Present Perfect: Have you ever been to Greece?",
        "just / already / yet → genelde Present Perfect.",
        "Belirli geçmiş zaman (yesterday, ago, last…, in 2020) → Past Simple.",
        "Bitmemiş zaman (today, this week, this year) → Present Perfect: We've received three orders this week.",
        "Soru 'When…?' ise → Past Simple: When did you send it?"
      ],
      examples: [
        { en: "We have already received the DNV certificate.", tr: "DNV sertifikasını zaten aldık." },
        { en: "We received it two days ago.", tr: "İki gün önce aldık." },
        { en: "Have you ever been to Japan? — Yes, I went there in 2018.", tr: "Hiç Japonya'ya gittin mi? — Evet, 2018'de gittim." },
        { en: "The shipment hasn't arrived yet.", tr: "Sevkiyat henüz gelmedi." }
      ]
    },
    cards: [
      { en: "already", tr: "zaten / çoktan", ex: "We have already sent the invoice." },
      { en: "yet", tr: "henüz (olumsuz/soru)", ex: "Have you checked the drawings yet?" },
      { en: "just", tr: "az önce", ex: "The truck has just left the factory." },
      { en: "ever / never", tr: "hiç / asla", ex: "I've never tried Korean food." },
      { en: "certificate", tr: "sertifika", ex: "The Lloyd's Register certificate is attached." },
      { en: "so far", tr: "şimdiye kadar", ex: "So far we have produced 300 panes." }
    ],
    exercises: [
      { type: "mcq", q: "We ___ the type approval certificate from Lloyd's Register last month.",
        options: ["have received", "received", "have been receiving", "receive"],
        answer: 1, explain: "'last month' belirli geçmiş → Past Simple." },
      { type: "mcq", q: "Have you ___ been to Istanbul?",
        options: ["ever", "yet", "ago", "last"],
        answer: 0, explain: "Deneyim sorusu → Have you ever…?" },
      { type: "fill", q: "Good news: the shipment ___ (just / arrive) at Piraeus.",
        answers: ["has just arrived", "'s just arrived"], hint: "yeni olay",
        explain: "just + yeni sonuç → Present Perfect." },
      { type: "fill", q: "I ___ (not / finish) the quotation yet.",
        answers: ["haven't finished", "have not finished"],
        explain: "'yet' olumsuz cümle → Present Perfect." },
      { type: "mcq", q: "When ___ the invoice?",
        options: ["have you sent", "you sent", "did you send", "have you send"],
        answer: 2, explain: "'When' sorusu belirli zaman ister → Past Simple." },
      { type: "fill", q: "We ___ (receive) three complaints so far this year.",
        answers: ["have received", "'ve received"],
        explain: "'so far this year' bitmemiş dönem → Present Perfect." },
      { type: "fill", q: "My sister ___ (move) to Berlin two years ago.",
        answers: ["moved"], explain: "'ago' → Past Simple." },
      { type: "mcq", q: "I've lost my phone. ___",
        options: ["I had it this morning, I'm sure.", "I've had it this morning, I'm sure.", "I have it this morning, I'm sure.", "I was having it this morning."],
        answer: 0, explain: "'this morning' bitmiş (artık öğleden sonra) → Past Simple." },
      { type: "order", answer: "Have you checked the technical drawings yet?",
        tr: "Teknik çizimleri kontrol ettin mi?",
        explain: "Soru + yet → Present Perfect." },
      { type: "order", answer: "I have never been to a trade fair before.",
        tr: "Daha önce hiç fuara gitmedim.", extra: ["went"],
        explain: "Deneyim + never → Present Perfect." },
      { type: "match", pairs: [
          ["I've just seen him.", "Onu az önce gördüm."],
          ["I saw him last week.", "Onu geçen hafta gördüm."],
          ["I haven't seen him yet.", "Onu henüz görmedim."],
          ["I've never seen him.", "Onu hiç görmedim."],
          ["Did you see him yesterday?", "Onu dün gördün mü?"]
        ], explain: "Belirli geçmiş zaman (last week, yesterday) Past Simple; just / yet / never Present Perfect ister." },
      { type: "listen", text: "Have you ever been to a trade fair in Hamburg?",
        tr: "Hiç Hamburg'da bir fuara gittin mi?" },
      { type: "listen", text: "We sent the samples last Tuesday.",
        tr: "Numuneleri geçen salı gönderdik." }
    ]
  });

  // ---------------------------------------------------------------- 4
  units.push({
    id: "tenses-04",
    title: "Present Perfect Continuous vs Simple",
    level: "B1+",
    week: 2,
    intro: {
      tr: "Present Perfect Continuous (have/has been + -ing) geçmişte başlayıp hâlâ süren ya da yeni bitmiş bir etkinliğin süresini vurgular. Present Perfect Simple ise sonucu, tamamlanan miktarı veya sayıyı vurgular. 'How long' + for/since sorularında continuous sık kullanılır.",
      points: [
        "Süre / etkinlik → Continuous: We've been testing the glass for three days.",
        "Sonuç / miktar → Simple: We've tested 40 panes.",
        "for + süre (for two years), since + başlangıç noktası (since 2015).",
        "Durum fiilleri continuous olmaz: I've known him for years.",
        "Yeni bitmiş etkinliğin görünen sonucu: You look tired. — I've been working all day."
      ],
      examples: [
        { en: "We have been working with this shipyard since 2016.", tr: "2016'dan beri bu tersaneyle çalışıyoruz." },
        { en: "We have delivered over 500 portlights to them.", tr: "Onlara 500'den fazla lomboz teslim ettik." },
        { en: "How long have you been learning English?", tr: "Ne zamandır İngilizce öğreniyorsun?" },
        { en: "I've known Mark for ten years.", tr: "Mark'ı on yıldır tanıyorum." }
      ]
    },
    cards: [
      { en: "for ages", tr: "uzun zamandır", ex: "I haven't seen you for ages!" },
      { en: "since", tr: "-den beri", ex: "We've been partners since 2018." },
      { en: "How long…?", tr: "Ne zamandır…?", ex: "How long have you been waiting?" },
      { en: "shipyard", tr: "tersane", ex: "We supply glass to three shipyards in Korea." },
      { en: "impact test", tr: "darbe testi", ex: "The impact test lasted all morning." },
      { en: "lately / recently", tr: "son zamanlarda", ex: "Have you been travelling a lot lately?" }
    ],
    exercises: [
      { type: "mcq", q: "We ___ with this Greek shipowner since 2017.",
        options: ["work", "are working", "have been working", "worked"],
        answer: 2, explain: "since + hâlâ süren eylem → Present Perfect Continuous." },
      { type: "mcq", q: "So far, the lab ___ 25 samples.",
        options: ["has been testing", "tests", "is testing", "has tested"],
        answer: 3, explain: "Miktar/sonuç (25 sample) → Present Perfect Simple." },
      { type: "fill", q: "How long ___ you been waiting for the inspector?",
        answers: ["have"], explain: "How long + have + been + -ing." },
      { type: "fill", q: "I ___ (know) Elena since university.",
        answers: ["have known", "'ve known", "i've known"], hint: "durum fiili",
        explain: "'know' durum fiili → continuous değil, Present Perfect Simple." },
      { type: "fill", q: "You look exhausted! — Yes, I ___ (work) on the tender all day.",
        answers: ["have been working", "'ve been working", "i've been working"],
        explain: "Görünen sonuç + etkinlik → Present Perfect Continuous." },
      { type: "mcq", q: "We have been partners ___ ten years.",
        options: ["since", "for", "during", "from"],
        answer: 1, explain: "Süre (ten years) → for." },
      { type: "mcq", q: "She's been living in Spain ___ she got married.",
        options: ["for", "during", "ago", "since"],
        answer: 3, explain: "Başlangıç noktası (bir olay) → since." },
      { type: "fill", q: "We ___ (write) four emails to the forwarder, but nobody has replied.",
        answers: ["have written", "'ve written"], hint: "sayı → sonuç",
        explain: "Sayı belirtilmiş (four emails) → Present Perfect Simple." },
      { type: "order", answer: "How long have you been working for this company?",
        tr: "Ne zamandır bu şirkette çalışıyorsun?",
        explain: "How long + have + özne + been + -ing." },
      { type: "order", answer: "We have been testing the new heated glass since Monday.",
        tr: "Pazartesiden beri yeni ısıtmalı camı test ediyoruz.", extra: ["for"],
        alts: ["Since Monday we have been testing the new heated glass."],
        explain: "since + başlangıç günü; süreç vurgusu → Continuous." },
      { type: "match", pairs: [
          ["for", "three months"],
          ["since", "last summer"],
          ["How long", "have you lived here?"],
          ["I've known her", "for years"]
        ], explain: "for + süre, since + başlangıç; 'know' Simple kalır." },
      { type: "listen", text: "I have been learning English for six years.",
        tr: "Altı yıldır İngilizce öğreniyorum." },
      { type: "listen", text: "We have shipped two hundred panes this month.",
        tr: "Bu ay iki yüz cam levha sevk ettik." }
    ]
  });

  // ---------------------------------------------------------------- 5
  units.push({
    id: "tenses-05",
    title: "Gelecek Zaman Biçimleri",
    level: "B2",
    week: 3,
    intro: {
      tr: "İngilizcede geleceği anlatmanın birkaç yolu vardır. 'will' anlık kararlar, söz ve tahminler için; 'going to' önceden verilmiş kararlar ve kanıta dayalı tahminler için; Present Continuous kesinleşmiş randevu/planlar için; Present Simple ise tarifeler ve programlar (gemi kalkışı, uçuş saati) için kullanılır.",
      points: [
        "Anlık karar / söz / teklif → will: I'll send you the price list right away.",
        "Önceden plan / niyet → going to: We're going to open an office in Rotterdam.",
        "Kanıta dayalı tahmin → going to: Look at the clouds — it's going to rain.",
        "Kesin randevu (tarih, kişi belli) → Present Continuous: I'm meeting the client on Friday.",
        "Tarife / resmî program → Present Simple: The vessel departs at 6 a.m. tomorrow."
      ],
      examples: [
        { en: "Don't worry, I'll check the order status for you.", tr: "Merak etme, sipariş durumunu senin için kontrol ederim." },
        { en: "We're going to exhibit at Posidonia next year.", tr: "Gelecek yıl Posidonia'da stant açacağız." },
        { en: "I'm flying to Athens on Monday.", tr: "Pazartesi Atina'ya uçuyorum." },
        { en: "The fair opens at nine o'clock.", tr: "Fuar saat dokuzda açılıyor." }
      ]
    },
    cards: [
      { en: "I'll get back to you", tr: "Size dönüş yapacağım", ex: "I'll get back to you with a price by Friday." },
      { en: "arrangement", tr: "ayarlanmış plan / randevu", ex: "I've made an arrangement to meet the surveyor on Tuesday." },
      { en: "depart", tr: "kalkmak (araç)", ex: "The vessel departs from Mersin on the 12th." },
      { en: "exhibit at a fair", tr: "fuarda stant açmak", ex: "We exhibit at SMM every two years." },
      { en: "be about to", tr: "-mek üzere olmak", ex: "I'm about to leave the office." },
      { en: "Any plans for the weekend?", tr: "Hafta sonu için plan var mı?", ex: "Any plans for the weekend? — I'm visiting my parents." }
    ],
    exercises: [
      { type: "mcq", q: "A: The client needs the drawings urgently. B: Oh, I didn't know that. OK, I ___ them right away.",
        options: ["'m going to send", "'m sending tomorrow", "send", "'ll send"],
        answer: 3, explain: "Konuşma anında verilen karar → will." },
      { type: "mcq", q: "We ___ a new tempering furnace next year — the budget is already approved.",
        options: ["will buy probably", "are going to buy", "buy", "would buy"],
        answer: 1, explain: "Önceden verilmiş karar / plan → going to." },
      { type: "mcq", q: "The ferry to Chios ___ at 7:30 tomorrow morning.",
        options: ["leaves", "will be leave", "is going leave", "left"],
        answer: 0, explain: "Tarife / resmî program → Present Simple." },
      { type: "fill", q: "I ___ (meet) the surveyor from Bureau Veritas at ten tomorrow; it's in my calendar.",
        answers: ["am meeting", "'m meeting", "i'm meeting", "am going to meet", "'m going to meet", "i'm going to meet"], hint: "kesin randevu",
        explain: "Saati ve kişisi belli randevu → Present Continuous (going to da kabul edilir)." },
      { type: "fill", q: "Look at that truck! It ___ (hit) the glass rack!",
        answers: ["is going to hit", "'s going to hit"], hint: "kanıta dayalı tahmin",
        explain: "Gözle görülen kanıt → going to." },
      { type: "mcq", q: "I promise I ___ late again.",
        options: ["am not being", "am not going be", "won't be", "don't be"],
        answer: 2, explain: "Söz (promise) → will / won't." },
      { type: "fill", q: "What ___ you doing this weekend? Any plans?",
        answers: ["are"], explain: "Plan sorusu → Present Continuous: What are you doing…?" },
      { type: "mcq", q: "I think the price of float glass ___ next quarter.",
        options: ["will rise", "rises", "is rising tomorrow", "rose"],
        answer: 0, explain: "Görüşe dayalı tahmin (I think) → will." },
      { type: "order", answer: "I'll get back to you by Friday.",
        tr: "Cuma gününe kadar size dönüş yapacağım.",
        alts: ["By Friday I'll get back to you."],
        explain: "Söz / taahhüt → will." },
      { type: "order", answer: "We are going to exhibit at Posidonia next year.",
        tr: "Gelecek yıl Posidonia'da stant açacağız.", extra: ["will"],
        alts: ["Next year we are going to exhibit at Posidonia."],
        explain: "Önceden kararlaştırılmış plan → be going to." },
      { type: "match", pairs: [
          ["I'll help you with that.", "teklif / anlık karar"],
          ["It's going to rain.", "kanıta dayalı tahmin"],
          ["I'm seeing Anna at six.", "kesin randevu"],
          ["The train leaves at noon.", "tarife"],
          ["We're going to hire two engineers.", "önceden verilmiş karar"]
        ], explain: "Her gelecek biçimi farklı bir anlam taşır." },
      { type: "listen", text: "I'm meeting the client on Thursday afternoon.",
        tr: "Perşembe öğleden sonra müşteriyle buluşuyorum." },
      { type: "listen", text: "Don't worry, I'll call you later.",
        tr: "Merak etme, seni sonra ararım." }
    ]
  });

  // ---------------------------------------------------------------- 6
  units.push({
    id: "tenses-06",
    title: "Past Perfect & Past Perfect Continuous",
    level: "B2",
    week: 3,
    intro: {
      tr: "Past Perfect (had + V3) geçmişteki bir olaydan daha önce olmuş eylemi gösterir: 'geçmişin geçmişi'. Past Perfect Continuous (had been + -ing) geçmişteki bir ana kadar süren etkinliği ve süresini vurgular. Hikâye anlatırken olayların sırasını netleştirir.",
      points: [
        "Önce olan → had + V3: The ship had already left when the glass arrived.",
        "Sonra olan → Past Simple: …when the glass arrived.",
        "Süre vurgusu → had been + -ing: We had been waiting for two hours when the truck came.",
        "by the time, already, before, after, never … before ile sık kullanılır.",
        "Sıra açıksa (after, before) Past Simple de kabul edilir, ama Past Perfect sırayı vurgular."
      ],
      examples: [
        { en: "When we got to the port, the vessel had already sailed.", tr: "Limana vardığımızda gemi çoktan denize açılmıştı." },
        { en: "I had never eaten sushi before I went to Tokyo.", tr: "Tokyo'ya gitmeden önce hiç suşi yememiştim." },
        { en: "They had been negotiating for weeks before they signed the contract.", tr: "Sözleşmeyi imzalamadan önce haftalardır pazarlık ediyorlardı." },
        { en: "The customer complained because the panes had been damaged in transit.", tr: "Müşteri şikâyet etti çünkü camlar taşımada hasar görmüştü." }
      ]
    },
    cards: [
      { en: "by the time", tr: "-diği zamana kadar", ex: "By the time we arrived, the meeting had finished." },
      { en: "in transit", tr: "taşıma sırasında", ex: "Two panes were broken in transit." },
      { en: "set sail", tr: "denize açılmak", ex: "The vessel had already set sail." },
      { en: "negotiate", tr: "pazarlık etmek", ex: "We had been negotiating for a month." },
      { en: "realise", tr: "farkına varmak", ex: "I realised I had left my passport at home." },
      { en: "turn out", tr: "ortaya çıkmak", ex: "It turned out that the drawings had been wrong." }
    ],
    exercises: [
      { type: "mcq", q: "When the glass arrived at the shipyard, the vessel ___.",
        options: ["already leaves", "has already left", "had already left", "is already leaving"],
        answer: 2, explain: "Camın gelmesinden önce olan eylem → Past Perfect." },
      { type: "fill", q: "I realised I ___ (leave) my passport at the hotel.",
        answers: ["had left", "'d left"], hint: "daha önce olan",
        explain: "Fark etmeden önce olan eylem → Past Perfect." },
      { type: "fill", q: "We ___ (wait) for two hours when the truck finally arrived.",
        answers: ["had been waiting", "'d been waiting", "had waited", "'d waited"], hint: "süre vurgusu",
        explain: "Geçmişteki bir ana kadar süren eylem → Past Perfect Continuous (had waited da kabul edilir)." },
      { type: "mcq", q: "She was tired because she ___ all night.",
        options: ["had been studying", "has been studying", "studies", "is studying"],
        answer: 0, explain: "Geçmişteki yorgunluğun sebebi olan süreç → Past Perfect Continuous." },
      { type: "mcq", q: "I ___ Greek food before I visited Athens.",
        options: ["never try", "was never trying", "have never tried", "had never tried"],
        answer: 3, explain: "Ziyaretten önceki deneyim (yokluğu) → Past Perfect." },
      { type: "fill", q: "It turned out that the drawings ___ (be) wrong from the start.",
        answers: ["had been", "were"], explain: "Ortaya çıkmadan önceki durum → Past Perfect (had been); 'were' da kabul edilir." },
      { type: "mcq", q: "By the time I got to the stand, the visitors ___.",
        options: ["left", "had left", "have left", "were leaving yesterday"],
        answer: 1, explain: "By the time + Past Simple → ana cümle Past Perfect." },
      { type: "order", answer: "The ship had already sailed when we reached the port.",
        tr: "Limana ulaştığımızda gemi çoktan denize açılmıştı.",
        alts: ["When we reached the port the ship had already sailed."],
        explain: "Önce olan had sailed, sonra olan reached." },
      { type: "order", answer: "I had never been abroad before I started this job.",
        tr: "Bu işe başlamadan önce hiç yurt dışına çıkmamıştım.", extra: ["have"],
        alts: ["Before I started this job I had never been abroad."],
        explain: "Geçmişteki bir olaydan önceki deneyim → had never been." },
      { type: "fill", q: "The customer complained because two panes ___ (damage) in transit.",
        answers: ["had been damaged", "were damaged"], hint: "edilgen, daha önce",
        explain: "Şikâyetten önce olan, edilgen → had been + V3 ('were damaged' da kabul edilir)." },
      { type: "match", pairs: [
          ["had finished", "önce tamamlanmış eylem"],
          ["had been working", "önceki sürecin süresi"],
          ["finished", "hikâyedeki ana olay"],
          ["was working", "o anda süren arka plan"]
        ], explain: "Anlatı zamanları olayların sırasını ve süresini gösterir." },
      { type: "listen", text: "The vessel had already left when we arrived.",
        tr: "Biz vardığımızda gemi çoktan ayrılmıştı." },
      { type: "listen", text: "We had been waiting for an hour.",
        tr: "Bir saattir bekliyorduk." }
    ]
  });

  // ---------------------------------------------------------------- 7
  units.push({
    id: "tenses-07",
    title: "Used to / Would / Be used to / Get used to",
    level: "B2",
    week: 4,
    intro: {
      tr: "'used to + V1' geçmişte olup artık olmayan alışkanlık ve durumları anlatır. 'would + V1' yalnızca geçmişteki tekrarlanan eylemler için kullanılır (durumlar için değil). 'be used to + -ing/isim' bir şeye alışkın olmak, 'get used to + -ing/isim' bir şeye alışmak (süreç) demektir.",
      points: [
        "used to + V1 → eskiden (artık değil): I used to smoke.",
        "Olumsuz/soru: didn't use to / Did you use to…?",
        "would → sadece tekrarlanan eylem: Every summer we would go to the seaside. (✗ I would have a dog.)",
        "be used to + -ing → alışkın olmak: I'm used to working late.",
        "get used to + -ing → alışmak: You'll get used to the cold weather."
      ],
      examples: [
        { en: "We used to send all quotations by fax.", tr: "Eskiden bütün teklifleri faksla gönderirdik." },
        { en: "When I was a child, my grandfather would tell us stories about ships.", tr: "Çocukken dedem bize gemilerle ilgili hikâyeler anlatırdı." },
        { en: "I'm used to dealing with difficult customers.", tr: "Zor müşterilerle uğraşmaya alışkınım." },
        { en: "It took me a while to get used to the time difference.", tr: "Saat farkına alışmam biraz zaman aldı." }
      ]
    },
    cards: [
      { en: "used to", tr: "eskiden -erdi", ex: "I used to live near the harbour." },
      { en: "be used to", tr: "alışkın olmak", ex: "Our engineers are used to strict class rules." },
      { en: "get used to", tr: "alışmak", ex: "You'll soon get used to the new ERP system." },
      { en: "time difference", tr: "saat farkı", ex: "The time difference with Korea is six hours." },
      { en: "nowadays", tr: "günümüzde", ex: "Nowadays we do most meetings online." },
      { en: "grow up", tr: "büyümek", ex: "I grew up in a small town on the coast." }
    ],
    exercises: [
      { type: "mcq", q: "I ___ live in Ankara, but now I live in Istanbul.",
        options: ["am used to", "get used to", "would", "used to"],
        answer: 3, explain: "Geçmişte olup artık olmayan durum → used to." },
      { type: "mcq", q: "Our engineers ___ working with strict class requirements; they do it every day.",
        options: ["used to", "would", "use to", "are used to"],
        answer: 3, explain: "Alışkın olmak (şu an) → be used to + -ing." },
      { type: "fill", q: "Did you ___ (use) to play any sports at school?",
        answers: ["use"], explain: "Soru biçiminde 'did' varsa 'use to' (d yok)." },
      { type: "fill", q: "It was hard at first, but I'm slowly getting used to ___ (drive) on the left.",
        answers: ["driving"], hint: "to + -ing",
        explain: "get used to + -ing; buradaki 'to' bir edattır." },
      { type: "mcq", q: "Which sentence is NOT correct?",
        options: ["We would go fishing every Sunday.", "I would have a red bicycle.", "I used to have a red bicycle.", "We used to go fishing every Sunday."],
        answer: 1, explain: "'would' durum (have = sahip olmak) için kullanılmaz." },
      { type: "fill", q: "We ___ (not / use) to have a quality lab, but we built one in 2021.",
        answers: ["didn't use", "did not use"],
        explain: "Olumsuz: didn't use to." },
      { type: "mcq", q: "Don't worry about the new software. You'll ___ it quickly.",
        options: ["used to", "be use to", "get used to", "use to"],
        answer: 2, explain: "Alışma süreci (gelecekte) → get used to." },
      { type: "order", answer: "I am not used to getting up so early.",
        tr: "Bu kadar erken kalkmaya alışkın değilim.", extra: ["get"],
        explain: "be used to + -ing (olumsuz)." },
      { type: "order", answer: "We used to send all our quotations by fax.",
        tr: "Eskiden bütün tekliflerimizi faksla gönderirdik.",
        explain: "Artık olmayan geçmiş alışkanlık → used to + V1." },
      { type: "match", pairs: [
          ["used to + V1", "eskiden yapardım"],
          ["be used to + -ing", "alışkınım"],
          ["get used to + -ing", "alışıyorum / alışacağım"],
          ["would + V1", "geçmişte tekrarlanan eylem"]
        ], explain: "Benzer görünen bu yapıların anlamları farklıdır." },
      { type: "fill", q: "Every summer my father ___ (take) us to the shipyard to watch the launches.",
        answers: ["would take", "'d take", "used to take", "took"], hint: "tekrarlanan geçmiş eylem",
        explain: "Tekrarlanan geçmiş eylem → would / used to (Past Simple de olur)." },
      { type: "listen", text: "I used to live near the harbour.",
        tr: "Eskiden limanın yakınında yaşardım." },
      { type: "listen", text: "You will get used to it soon.",
        tr: "Yakında buna alışacaksın." }
    ]
  });

  // ---------------------------------------------------------------- 8
  units.push({
    id: "tenses-08",
    title: "Tekrar: İş E-postalarında Zamanlar",
    level: "B2",
    week: 4,
    intro: {
      tr: "İş e-postalarında zamanlar karışık kullanılır: durum güncellemesinde Present Perfect ve Present Continuous, gecikmenin nedenini anlatırken Past Simple / Past Perfect, sonraki adımlar için will / going to. Doğru zaman, mesajı net ve profesyonel yapar.",
      points: [
        "Güncel durum: We have completed production and are now packing the panes.",
        "Geçmişteki neden: The delay happened because the supplier had sent the wrong interlayer.",
        "Sonraki adım / söz: We will ship the goods on 15 May.",
        "Özür: We apologise for the delay. / We are sorry for any inconvenience this has caused.",
        "Bekleyen işler: We are still waiting for approval from ABS."
      ],
      examples: [
        { en: "We have finished the heat-soak test and are preparing the shipping documents.", tr: "Isı ıslatma testini bitirdik ve sevkiyat belgelerini hazırlıyoruz." },
        { en: "Unfortunately, the shipment was delayed because the vessel had changed its schedule.", tr: "Ne yazık ki sevkiyat ertelendi çünkü gemi programını değiştirmişti." },
        { en: "We will send you the tracking number as soon as we receive it.", tr: "Takip numarasını alır almaz size göndereceğiz." },
        { en: "Thanks for your email. I've been out of the office since Monday.", tr: "E-postanız için teşekkürler. Pazartesiden beri ofis dışındayım." }
      ]
    },
    cards: [
      { en: "status update", tr: "durum güncellemesi", ex: "Here is a short status update on your order." },
      { en: "We apologise for the delay.", tr: "Gecikme için özür dileriz.", ex: "We apologise for the delay and thank you for your patience." },
      { en: "inconvenience", tr: "rahatsızlık / sorun", ex: "We are sorry for any inconvenience this has caused." },
      { en: "tracking number", tr: "takip numarası", ex: "Please find the tracking number below." },
      { en: "out of the office", tr: "ofis dışında", ex: "I'll be out of the office until Tuesday." },
      { en: "Please find attached", tr: "Ekte bulabilirsiniz", ex: "Please find attached the updated quotation." }
    ],
    exercises: [
      { type: "mcq", q: "Dear Mr Papadakis, we ___ production of your order and are now packing the panes.",
        options: ["had completed", "complete", "have completed", "will have completed"],
        answer: 2, explain: "Şimdiki durumla bağlantılı sonuç → Present Perfect." },
      { type: "fill", q: "We ___ (still / wait) for the approval from ABS.",
        answers: ["are still waiting", "'re still waiting"], hint: "süren durum",
        explain: "Şu an süren bekleme → Present Continuous." },
      { type: "mcq", q: "The delay occurred because our supplier ___ the wrong PVB interlayer.",
        options: ["has sent", "is sending", "sends", "had sent"],
        answer: 3, explain: "Gecikmeden önce olan neden → Past Perfect." },
      { type: "fill", q: "As agreed, we ___ (ship) the goods next week.",
        answers: ["will ship", "'ll ship", "are shipping", "'re shipping", "are going to ship", "'re going to ship", "will be shipping", "'ll be shipping"], hint: "gelecek plan",
        explain: "Gelecek plan/taahhüt → will / going to / Present Continuous." },
      { type: "mcq", q: "We are sorry for the inconvenience the delay ___ so far.",
        options: ["has caused", "had caused", "will cause", "causes"],
        answer: 0, explain: "'so far' → şimdiye kadar → Present Perfect (has caused)." },
      { type: "fill", q: "Thank you for your email. I ___ (be) out of the office since Monday.",
        answers: ["have been", "'ve been", "i've been"],
        explain: "since + hâlâ süren durum → Present Perfect." },
      { type: "mcq", q: "Last week we ___ your sample to the Lloyd's Register lab.",
        options: ["have sent", "sent", "send", "had been sending"],
        answer: 1, explain: "'Last week' → Past Simple." },
      { type: "order", answer: "We apologise for the delay in our reply.",
        tr: "Yanıtımızdaki gecikme için özür dileriz.",
        explain: "Kalıp özür cümlesi; apologise for + isim." },
      { type: "order", answer: "We will send you the tracking number tomorrow.",
        tr: "Takip numarasını size yarın göndereceğiz.", extra: ["sent"],
        alts: ["Tomorrow we will send you the tracking number."],
        explain: "Gelecekteki söz → will + V1." },
      { type: "match", pairs: [
          ["We have completed…", "yeni tamamlanan iş"],
          ["We are currently…", "süren iş"],
          ["The supplier had sent…", "gecikmenin önceki nedeni"],
          ["We will ship…", "taahhüt / sonraki adım"],
          ["We shipped…", "geçmişte bitmiş olay"]
        ], explain: "E-postada her bilgi türü kendi zamanını ister." },
      { type: "fill", q: "How ___ your trip to Hamburg? Did you enjoy the fair?",
        answers: ["was"], explain: "Bitmiş geçmiş olay hakkında soru → Past Simple 'was'." },
      { type: "listen", text: "We have completed production of your order.",
        tr: "Siparişinizin üretimini tamamladık." },
      { type: "listen", text: "Please find attached the updated quotation.",
        tr: "Güncellenmiş teklifi ekte bulabilirsiniz." }
    ]
  });

  // ---------------------------------------------------------------- 9
  units.push({
    id: "tenses-09",
    title: "Future Continuous & Future Perfect",
    level: "B2+",
    week: 5,
    intro: {
      tr: "Future Continuous (will be + -ing) gelecekte belirli bir anda sürüyor olacak eylemi anlatır; ayrıca kibar soru sormak için de kullanılır (Will you be using the meeting room?). Future Perfect (will have + V3) gelecekteki bir zamandan önce tamamlanmış olacak eylemi anlatır ve genelde 'by' ile gelir.",
      points: [
        "Gelecekte o anda süren → will be + -ing: This time tomorrow I'll be flying to Busan.",
        "Gelecekteki bir noktadan önce bitmiş → will have + V3: By Friday we will have shipped the order.",
        "by + zaman (by next week, by the end of May) → Future Perfect sinyali.",
        "Kibar plan sorusu: Will you be joining us for dinner?",
        "Olağan akışta olacak şey: I'll be seeing him at the fair anyway."
      ],
      examples: [
        { en: "By next week we will have shipped all the bridge windows.", tr: "Gelecek haftaya kadar tüm köprüüstü camlarını sevk etmiş olacağız." },
        { en: "This time next month I'll be lying on a beach in Bodrum.", tr: "Gelecek ay bu zamanlar Bodrum'da bir plajda uzanıyor olacağım." },
        { en: "Will you be visiting our stand at SMM?", tr: "SMM'de standımızı ziyaret edecek misiniz?" },
        { en: "By the end of the year, I'll have worked here for five years.", tr: "Yıl sonunda burada beş yılımı doldurmuş olacağım." }
      ]
    },
    cards: [
      { en: "by the end of", tr: "-in sonuna kadar", ex: "By the end of June we will have finished the tests." },
      { en: "this time tomorrow", tr: "yarın bu saatte", ex: "This time tomorrow I'll be flying to Oslo." },
      { en: "Will you be…?", tr: "…yor olacak mısınız? (kibar)", ex: "Will you be attending the meeting?" },
      { en: "complete production", tr: "üretimi tamamlamak", ex: "We will have completed production by the 20th." },
      { en: "in time", tr: "zamanında (yetişecek şekilde)", ex: "Will the glass arrive in time for the dry dock?" },
      { en: "dry dock", tr: "kuru havuz", ex: "The vessel will be in dry dock next month." }
    ],
    exercises: [
      { type: "mcq", q: "By the end of May, we ___ all the tests required by DNV.",
        options: ["have completed", "complete", "are completing", "will have completed"],
        answer: 3, explain: "by + gelecek zaman, öncesinde bitmiş → Future Perfect." },
      { type: "mcq", q: "Don't call me at 10 tomorrow — I ___ a presentation to the shipowner.",
        options: ["will be giving", "will have given", "give", "gave"],
        answer: 0, explain: "Gelecekte o anda süren eylem → Future Continuous." },
      { type: "fill", q: "This time next week I ___ (lie) on a beach in Bodrum.",
        answers: ["will be lying", "'ll be lying", "i'll be lying"], hint: "o anda süren",
        explain: "'This time next week' → Future Continuous." },
      { type: "fill", q: "By the time the vessel enters dry dock, we ___ (deliver) the new portlights.",
        answers: ["will have delivered", "'ll have delivered"], hint: "önce tamamlanmış",
        explain: "By the time + Present Simple → ana cümle Future Perfect." },
      { type: "mcq", q: "___ you be using the meeting room this afternoon? We need it for a call.",
        options: ["Are", "Have", "Do", "Will"],
        answer: 3, explain: "Kibar plan sorusu → Will you be + -ing." },
      { type: "fill", q: "Next June, my parents ___ (be) married for forty years.",
        answers: ["will have been", "'ll have been"],
        explain: "Gelecekteki bir noktaya kadar tamamlanan süre → Future Perfect (be)." },
      { type: "mcq", q: "I'm sure she ___ the report by the time you get back.",
        options: ["will have finished", "will be finish", "finishes", "has finished tomorrow"],
        answer: 0, explain: "By the time + gelecek → Future Perfect." },
      { type: "mcq", q: "I can give the samples to Maria — I ___ her at the fair anyway.",
        options: ["will have seen", "'ll be seeing", "saw", "had seen"],
        answer: 1, explain: "Olağan akışta zaten olacak şey → Future Continuous." },
      { type: "order", answer: "By next Friday we will have shipped the whole order.",
        tr: "Gelecek cumaya kadar siparişin tamamını sevk etmiş olacağız.",
        alts: ["We will have shipped the whole order by next Friday."],
        explain: "by + gelecek zaman → will have + V3." },
      { type: "order", answer: "Will you be joining us for dinner tonight?",
        tr: "Bu akşam yemekte bize katılacak mısınız?", extra: ["join"],
        explain: "Kibar soru → Will you be + -ing." },
      { type: "match", pairs: [
          ["will be working", "o anda süren gelecek eylem"],
          ["will have worked", "o ana kadar tamamlanmış"],
          ["by Monday", "Future Perfect sinyali"],
          ["at this time tomorrow", "Future Continuous sinyali"]
        ], explain: "Continuous süreci, Perfect tamamlanmayı vurgular." },
      { type: "listen", text: "By Friday we will have finished the tests.",
        tr: "Cumaya kadar testleri bitirmiş olacağız." },
      { type: "listen", text: "This time tomorrow I will be flying to Oslo.",
        tr: "Yarın bu saatte Oslo'ya uçuyor olacağım." }
    ]
  });

  // ---------------------------------------------------------------- 10
  units.push({
    id: "tenses-10",
    title: "Future Perfect Continuous & Future in the Past",
    level: "B2+",
    week: 5,
    intro: {
      tr: "Future Perfect Continuous (will have been + -ing) gelecekteki bir ana kadar bir eylemin ne kadar süredir devam ediyor olacağını anlatır. 'Future in the past' ise geçmişte bakıldığında gelecek olan şeyleri anlatır: was/were going to (gerçekleşmemiş planlar için çok yaygın), would (geçmişten yapılan tahmin), was/were about to.",
      points: [
        "will have been + -ing → süre vurgusu: By June I'll have been working here for ten years.",
        "was going to → planlanmış ama (çoğunlukla) gerçekleşmemiş: I was going to call you, but I forgot.",
        "would → geçmişten bakılan gelecek: I knew the order would arrive late.",
        "was about to → tam yapmak üzereydim: I was about to leave when the client called.",
        "was + -ing (Past Continuous) → geçmişteki kesin plan: She was flying to Rome the next day."
      ],
      examples: [
        { en: "By next spring, we'll have been supplying this shipyard for twenty years.", tr: "Gelecek bahar bu tersaneye yirmi yıldır tedarik yapıyor olacağız." },
        { en: "We were going to exhibit at Posidonia, but the costs were too high.", tr: "Posidonia'da stant açacaktık ama maliyetler çok yüksekti." },
        { en: "I knew you would like this restaurant.", tr: "Bu restoranı seveceğini biliyordum." },
        { en: "I was about to send the invoice when I noticed a mistake.", tr: "Faturayı göndermek üzereydim ki bir hata fark ettim." }
      ]
    },
    cards: [
      { en: "I was going to…", tr: "…yapacaktım (ama)", ex: "I was going to call you, but my phone died." },
      { en: "be about to", tr: "-mek üzere olmak", ex: "We were about to close the deal." },
      { en: "I knew it would…", tr: "…olacağını biliyordum", ex: "I knew it would be a long day." },
      { en: "supply", tr: "tedarik etmek", ex: "We have supplied this yard since 2008." },
      { en: "change of plan", tr: "plan değişikliği", ex: "There's been a change of plan — we're flying on Tuesday." },
      { en: "in the end", tr: "sonunda", ex: "In the end, we decided to stay home." }
    ],
    exercises: [
      { type: "mcq", q: "By next March, I ___ at this company for ten years.",
        options: ["will have been working", "will be work", "have been working", "worked"],
        answer: 0, explain: "Gelecekteki bir ana kadar süre vurgusu → Future Perfect Continuous." },
      { type: "mcq", q: "I ___ call you yesterday, but I completely forgot. Sorry!",
        options: ["will", "am going to", "was going to", "have"],
        answer: 2, explain: "Gerçekleşmemiş geçmiş plan → was going to." },
      { type: "fill", q: "I knew the customer ___ (not / accept) such a long lead time.",
        answers: ["wouldn't accept", "would not accept", "wasn't going to accept", "was not going to accept"], hint: "geçmişten bakılan gelecek",
        explain: "knew + gelecek → would (will'in geçmişi)." },
      { type: "fill", q: "We ___ (about / sign) the contract when the buyer asked for another discount.",
        answers: ["were about to sign"], hint: "be about to",
        explain: "Tam yapmak üzereyken → were about to + V1." },
      { type: "fill", q: "When the ship finally arrives, the crew ___ (sail) for thirty days.",
        answers: ["will have been sailing", "'ll have been sailing", "will have sailed", "'ll have sailed"],
        explain: "Gelecekteki bir ana kadar süren eylem → will have been + -ing." },
      { type: "mcq", q: "She told me she ___ to Rome the next day, so she couldn't come to the party.",
        options: ["is flying", "will fly", "flies", "was flying"],
        answer: 3, explain: "Geçmişteki kesin plan (the next day) → Past Continuous." },
      { type: "mcq", q: "We were going to visit the fair in Athens, but in the end we ___.",
        options: ["didn't", "won't", "haven't been going", "weren't going"],
        answer: 0, explain: "Planın gerçekleşmediğini gösteren bitmiş olay → Past Simple (didn't)." },
      { type: "order", answer: "I was going to email you but I forgot.",
        tr: "Sana e-posta atacaktım ama unuttum.",
        explain: "Gerçekleşmemiş plan → was going to." },
      { type: "order", answer: "I knew you would like this place.",
        tr: "Burayı seveceğini biliyordum.", extra: ["will"],
        explain: "Geçmişte yapılan gelecek tahmini → would." },
      { type: "match", pairs: [
          ["was going to", "yapacaktı (plan)"],
          ["was about to", "yapmak üzereydi"],
          ["would", "geçmişten bakılan gelecek"],
          ["will have been doing", "gelecekte bir ana kadar süre"]
        ], explain: "Future in the past yapıları geçmiş bakış açısından geleceği gösterir." },
      { type: "fill", q: "By the time we finish the project, we ___ (work) on it for two years.",
        answers: ["will have been working", "'ll have been working", "will have worked", "'ll have worked"],
        explain: "Gelecekte bir noktaya kadar süren etkinlik → Future Perfect Continuous (will have worked da kabul edilir)." },
      { type: "listen", text: "I was about to leave when the client called.",
        tr: "Müşteri aradığında çıkmak üzereydim." },
      { type: "listen", text: "We were going to exhibit at the fair in Athens.",
        tr: "Atina'daki fuarda stant açacaktık." }
    ]
  });

  // ---------------------------------------------------------------- 11
  units.push({
    id: "tenses-11",
    title: "Sohbette Hikâye Anlatma (Narrative Tenses)",
    level: "B2+",
    week: 6,
    intro: {
      tr: "Bir anıyı ya da olayı anlatırken dört anlatı zamanı birlikte kullanılır: Past Simple (ana olaylar), Past Continuous (arka plan, sahne), Past Perfect (daha önce olanlar) ve Past Perfect Continuous (öncesindeki süren etkinlik). Günlük sohbette ayrıca 'So, there I was…' gibi canlı ifadeler ve hikâyeyi canlandırmak için Present tenses de kullanılır.",
      points: [
        "Sahne kurma → Past Continuous: It was raining and everyone was rushing home.",
        "Olay zinciri → Past Simple: Suddenly the lights went out.",
        "Geri dönüş → Past Perfect: I'd forgotten my wallet at the office.",
        "Önceki uzun süreç → Past Perfect Continuous: We'd been driving for hours.",
        "Anlatı ifadeleri: Guess what happened… / Anyway, … / In the end, … / It turned out that…"
      ],
      examples: [
        { en: "I was waiting at the gate when I heard my name.", tr: "Kapıda bekliyordum ki adımı duydum." },
        { en: "It turned out that the airline had cancelled my flight.", tr: "Meğer havayolu uçuşumu iptal etmiş." },
        { en: "We'd been setting up the stand all night, so we were exhausted.", tr: "Bütün gece standı kuruyorduk, bu yüzden bitkindik." },
        { en: "Anyway, in the end the customer signed the order on the spot.", tr: "Neyse, sonunda müşteri siparişi orada imzaladı." }
      ]
    },
    cards: [
      { en: "Guess what happened!", tr: "Bil bakalım ne oldu!", ex: "Guess what happened at the fair yesterday!" },
      { en: "It turned out that…", tr: "Meğer… / Anlaşıldı ki…", ex: "It turned out that he was the CEO." },
      { en: "on the spot", tr: "anında / orada", ex: "They placed an order on the spot." },
      { en: "set up a stand", tr: "stant kurmak", ex: "We were setting up the stand when the boss arrived." },
      { en: "Anyway, …", tr: "Neyse, …", ex: "Anyway, we finally got to the hotel at midnight." },
      { en: "You won't believe this, but…", tr: "İnanmayacaksın ama…", ex: "You won't believe this, but I lost my passport again." }
    ],
    exercises: [
      { type: "mcq", q: "So, I ___ at the gate in Frankfurt when I heard my name on the speakers.",
        options: ["waited", "was waiting", "had waited", "have waited"],
        answer: 1, explain: "Sahne / kesilen eylem → Past Continuous." },
      { type: "mcq", q: "It turned out that the airline ___ my flight without telling me.",
        options: ["cancels", "was cancelling", "had cancelled", "has cancelled"],
        answer: 2, explain: "'turned out' anından önce olan → Past Perfect." },
      { type: "fill", q: "We ___ (set) up the stand all night, so we were exhausted when the fair opened.",
        answers: ["had been setting", "'d been setting"], hint: "önceki uzun süreç",
        explain: "Yorgunluğun nedeni olan önceki süreç → Past Perfect Continuous." },
      { type: "fill", q: "Suddenly, a man in a suit ___ (walk) up to our stand and asked for the manager.",
        answers: ["walked"], hint: "olay zinciri",
        explain: "Hikâyedeki ana olay → Past Simple." },
      { type: "mcq", q: "When I got home, I found that someone ___ the window.",
        options: ["breaks", "has broken", "was breaking", "had broken"],
        answer: 3, explain: "Eve gelmeden önce olmuş → Past Perfect." },
      { type: "fill", q: "It ___ (snow) heavily and the roads were closed, so we stayed in Oslo.",
        answers: ["was snowing", "had been snowing", "'d been snowing", "snowed"], hint: "sahne",
        explain: "Arka plan / hava durumu → Past Continuous (had been snowing / snowed da kabul edilir)." },
      { type: "mcq", q: "He looked familiar. I was sure I ___ him somewhere before.",
        options: ["had met", "meet", "have met", "was meeting"],
        answer: 0, explain: "'before' + geçmişteki andan önce → Past Perfect." },
      { type: "order", answer: "You won't believe what happened at the fair.",
        tr: "Fuarda ne olduğuna inanmayacaksın.",
        explain: "Hikâyeye başlama ifadesi; ardından Past Simple." },
      { type: "order", answer: "We had been driving for hours when the car broke down.",
        tr: "Araba bozulduğunda saatlerdir yol alıyorduk.", extra: ["was"],
        alts: ["When the car broke down we had been driving for hours."],
        explain: "Önceki uzun süreç → had been + -ing; olay → Past Simple." },
      { type: "match", pairs: [
          ["Past Simple", "ana olaylar"],
          ["Past Continuous", "arka plan / sahne"],
          ["Past Perfect", "daha önce olan"],
          ["Past Perfect Continuous", "önceki süren etkinlik"]
        ], explain: "Dört anlatı zamanı hikâyeye yapı verir." },
      { type: "fill", q: "Anyway, in the end the Greek buyer ___ (sign) the order on the spot.",
        answers: ["signed"], explain: "Hikâyenin sonucu → Past Simple." },
      { type: "listen", text: "Guess what happened to me yesterday.",
        tr: "Bil bakalım dün bana ne oldu." },
      { type: "listen", text: "It turned out that he was the owner of the company.",
        tr: "Meğer şirketin sahibiymiş." }
    ]
  });

  // ---------------------------------------------------------------- 12
  units.push({
    id: "tenses-12",
    title: "Dolaylı Anlatımda Zaman Kaydırma",
    level: "B2+",
    week: 6,
    intro: {
      tr: "Birinin sözlerini aktarırken (reported speech) aktarma fiili geçmişteyse (said, told) zamanlar genelde bir adım geriye kayar: present → past, past/present perfect → past perfect, will → would. Söylenen şey hâlâ doğruysa veya aktarma fiili şimdiki zamandaysa (says) kaydırma zorunlu değildir.",
      points: [
        "am/is/are → was/were; do → did; will → would; can → could.",
        "Past Simple / Present Perfect → Past Perfect: 'We shipped it.' → He said they had shipped it.",
        "Hâlâ geçerli bilgi → kaydırma opsiyonel: She said the factory is in Izmir.",
        "says / has said → kaydırma yok: The client says the glass is fine.",
        "Zaman/yer ifadeleri de değişir: tomorrow → the next day, here → there, ago → before."
      ],
      examples: [
        { en: "'We will deliver next week.' → He said they would deliver the following week.", tr: "'Gelecek hafta teslim edeceğiz.' → Bir sonraki hafta teslim edeceklerini söyledi." },
        { en: "'The panes have arrived damaged.' → She told us the panes had arrived damaged.", tr: "'Camlar hasarlı geldi.' → Camların hasarlı geldiğini bize söyledi." },
        { en: "He asked me where I was from.", tr: "Bana nereli olduğumu sordu." },
        { en: "The surveyor says the documents are complete.", tr: "Sörveyör belgelerin tam olduğunu söylüyor." }
      ]
    },
    cards: [
      { en: "the following week", tr: "bir sonraki hafta", ex: "He said they would ship the following week." },
      { en: "the day before", tr: "bir önceki gün", ex: "She said she had called the day before." },
      { en: "surveyor", tr: "sörveyör / klas denetçisi", ex: "The BV surveyor said the test had been successful." },
      { en: "He told me (that)…", tr: "Bana …dedi", ex: "He told me he was working in Dubai." },
      { en: "She asked if…", tr: "…olup olmadığını sordu", ex: "She asked if we could reduce the price." },
      { en: "claim", tr: "iddia etmek / hasar talebi", ex: "The customer claimed the glass had been scratched." }
    ],
    exercises: [
      { type: "mcq", q: "'We will deliver next week.' → The supplier said they ___ the following week.",
        options: ["will deliver", "had delivered", "delivered", "would deliver"],
        answer: 3, explain: "will → would (aktarma fiili geçmişte)." },
      { type: "mcq", q: "'The panes have arrived damaged.' → The customer told us the panes ___ damaged.",
        options: ["has arrived", "arrive", "had arrived", "were arriving"],
        answer: 2, explain: "Present Perfect → Past Perfect." },
      { type: "fill", q: "'I'm working in Dubai.' → He told me he ___ (work) in Dubai.",
        answers: ["was working"], hint: "present continuous → ?",
        explain: "Present Continuous → Past Continuous." },
      { type: "fill", q: "'We shipped the order on Monday.' → She said they ___ (ship) the order on the Monday.",
        answers: ["had shipped", "shipped"], hint: "past simple → ?",
        explain: "Past Simple → Past Perfect (sıra açıksa Past Simple da kalabilir)." },
      { type: "fill", q: "'Can you reduce the price?' → The buyer asked if we ___ reduce the price.",
        answers: ["could"], explain: "can → could." },
      { type: "mcq", q: "'Where are you from?' → She asked me where ___.",
        options: ["was I from", "I was from", "am I from", "I am from her"],
        answer: 1, explain: "Dolaylı soruda düz cümle sırası + kaydırma: where I was from." },
      { type: "mcq", q: "The surveyor ___ the documents are complete, so we can ship today.",
        options: ["says", "tells", "asks", "speaks"],
        answer: 0, explain: "Şimdiki 'says' → kaydırma yok; 'tell' nesne ister (tells us), 'speak' that-cümlesi almaz." },
      { type: "mcq", q: "'I saw him yesterday.' → She said she had seen him ___.",
        options: ["yesterday", "tomorrow", "the day before", "next day"],
        answer: 2, explain: "yesterday → the day before (the previous day)." },
      { type: "order", answer: "He told me that the glass had been tested.",
        tr: "Camın test edildiğini bana söyledi.",
        explain: "told + nesne; Present Perfect passive → had been tested." },
      { type: "order", answer: "She asked me if I had ever been to Greece.",
        tr: "Bana hiç Yunanistan'a gidip gitmediğimi sordu.", extra: ["have"],
        explain: "Evet/hayır sorusu → asked if + kaydırılmış zaman." },
      { type: "match", pairs: [
          ["am / is", "was"],
          ["will", "would"],
          ["have done", "had done"],
          ["can", "could"],
          ["tomorrow", "the next day"]
        ], explain: "Aktarma fiili geçmişteyse zaman bir adım geri kayar." },
      { type: "listen", text: "He said they would send the samples.",
        tr: "Numuneleri göndereceklerini söyledi." },
      { type: "listen", text: "She asked me where I was from.",
        tr: "Bana nereli olduğumu sordu." }
    ]
  });

  // ---------------------------------------------------------------- 13
  units.push({
    id: "tenses-13",
    title: "Zaman Bağlaçları (as soon as, once, until…)",
    level: "C1",
    week: 7,
    intro: {
      tr: "when, as soon as, once, after, before, until, by the time gibi zaman bağlaçlarından sonra gelecek anlamında will kullanılmaz; Present Simple ya da Present Perfect kullanılır. Ana cümle ise will, going to veya emir kipiyle kurulur. Present Perfect, ilk eylemin ikinci eylemden önce tamamlanacağını vurgular.",
      points: [
        "Zaman bağlacı + Present Simple (gelecek anlamı): I'll call you when I arrive. (✗ when I will arrive)",
        "Tamamlanma vurgusu → Present Perfect: We'll ship the glass once we have received payment.",
        "until / till → -e kadar: We can't ship until the certificate arrives.",
        "by the time + Present → ana cümle çoğu zaman Future Perfect.",
        "Geçmişte: as soon as + Past Simple / Past Perfect: As soon as I had sent it, I noticed the mistake."
      ],
      examples: [
        { en: "We will start production as soon as you confirm the drawings.", tr: "Çizimleri onaylar onaylamaz üretime başlayacağız." },
        { en: "Once we have received the deposit, we will order the raw glass.", tr: "Avansı aldıktan sonra ham camı sipariş edeceğiz." },
        { en: "Let me know when you get to the hotel.", tr: "Otele vardığında bana haber ver." },
        { en: "By the time you read this, I'll have landed in Singapore.", tr: "Sen bunu okuduğunda Singapur'a inmiş olacağım." }
      ]
    },
    cards: [
      { en: "as soon as", tr: "-er -mez", ex: "I'll send it as soon as I get back." },
      { en: "once", tr: "-dikten sonra / bir kez", ex: "Once the test is complete, we'll issue the report." },
      { en: "until", tr: "-e kadar", ex: "Please wait until the glass has cooled down." },
      { en: "deposit / advance payment", tr: "avans / ön ödeme", ex: "We require a 30% deposit." },
      { en: "confirm", tr: "onaylamak", ex: "Please confirm the dimensions." },
      { en: "Let me know when…", tr: "…ince haber ver", ex: "Let me know when you're free for a coffee." }
    ],
    exercises: [
      { type: "mcq", q: "We will start production as soon as you ___ the drawings.",
        options: ["will confirm", "are going to confirm", "would confirm", "confirm"],
        answer: 3, explain: "Zaman bağlacından sonra will kullanılmaz → Present Simple." },
      { type: "mcq", q: "Once we ___ the deposit, we will order the raw glass.",
        options: ["will receive", "have received", "had received", "will have received"],
        answer: 1, explain: "Tamamlanma vurgusu, zaman bağlacı → Present Perfect." },
      { type: "fill", q: "I'll call you when I ___ (land) in Hamburg.",
        answers: ["land", "have landed", "'ve landed"], hint: "will kullanma",
        explain: "when + Present Simple / Present Perfect (gelecek anlamında)." },
      { type: "fill", q: "We can't release the shipment until the surveyor ___ (sign) the report.",
        answers: ["signs", "has signed", "'s signed"],
        explain: "until + Present Simple / Present Perfect." },
      { type: "mcq", q: "By the time you read this email, I ___ in Singapore.",
        options: ["will land", "land", "will have landed", "have landed"],
        answer: 2, explain: "By the time + Present → ana cümle Future Perfect." },
      { type: "mcq", q: "Which sentence is correct?",
        options: ["I'll text you when I will get home.", "I text you when I get home.", "I'll text you when I get home.", "I'll text you when I'll get home."],
        answer: 2, explain: "Ana cümle will, zaman cümlesi Present Simple." },
      { type: "fill", q: "As soon as I ___ (send) the quotation, I noticed a mistake in the price.",
        answers: ["had sent", "sent", "'d sent"], hint: "geçmiş",
        explain: "Geçmişte as soon as + Past Simple / Past Perfect." },
      { type: "fill", q: "Please don't touch the panes before they ___ (cool) down completely.",
        answers: ["have cooled", "cool", "'ve cooled"],
        explain: "before + Present Simple / Present Perfect." },
      { type: "order", answer: "Let me know when you get to the hotel.",
        tr: "Otele vardığında bana haber ver.", extra: ["will"],
        alts: ["When you get to the hotel let me know."],
        explain: "Emir cümlesi + when + Present Simple." },
      { type: "order", answer: "We will ship the order once we have received payment.",
        tr: "Ödemeyi aldıktan sonra siparişi sevk edeceğiz.",
        alts: ["Once we have received payment we will ship the order."],
        explain: "once + Present Perfect (tamamlanma)." },
      { type: "match", pairs: [
          ["as soon as", "-er -mez"],
          ["once", "-dikten sonra"],
          ["until", "-e kadar"],
          ["by the time", "-diği zamana kadar"],
          ["while", "-iken"]
        ], explain: "Bu bağlaçlardan sonra gelecek anlamında will kullanılmaz." },
      { type: "listen", text: "I will call you as soon as I arrive.",
        tr: "Varır varmaz seni arayacağım." },
      { type: "listen", text: "We cannot ship until the certificate arrives.",
        tr: "Sertifika gelene kadar sevkiyat yapamayız." }
    ]
  });

  // ---------------------------------------------------------------- 14
  units.push({
    id: "tenses-14",
    title: "Anlamı Değişen Durum Fiilleri",
    level: "C1",
    week: 7,
    intro: {
      tr: "Bazı durum fiilleri continuous kullanıldığında anlamları değişir. 'I think' (fikrimce) ile 'I'm thinking' (düşünüp taşınıyorum), 'I have a car' (sahibim) ile 'I'm having lunch' (yiyorum) farklıdır. see, taste, smell, weigh, be, appear gibi fiiller de eylem anlamı taşıdığında continuous olabilir.",
      points: [
        "think: I think it's a good offer (fikir) / I'm thinking about the offer (düşünme süreci).",
        "have: We have a lab (sahiplik) / We're having a meeting (eylem).",
        "see: I see what you mean (anlamak) / I'm seeing the client at 3 (buluşmak).",
        "taste / smell / weigh: The soup tastes great (durum) / He's tasting the soup (eylem).",
        "be: He is rude (karakter) / He is being rude (şu anki davranış)."
      ],
      examples: [
        { en: "I think your price is a bit high.", tr: "Bence fiyatınız biraz yüksek." },
        { en: "We're thinking of opening an office in Piraeus.", tr: "Pire'de bir ofis açmayı düşünüyoruz." },
        { en: "The inspector is weighing each pane before packing.", tr: "Denetçi paketlemeden önce her camı tartıyor." },
        { en: "You're being very quiet today. Is everything OK?", tr: "Bugün çok sessizsin. Her şey yolunda mı?" }
      ]
    },
    cards: [
      { en: "I'm thinking of…", tr: "…yı düşünüyorum (planlıyorum)", ex: "I'm thinking of changing jobs." },
      { en: "I see what you mean.", tr: "Ne demek istediğini anlıyorum.", ex: "I see what you mean, but the deadline is fixed." },
      { en: "be seeing someone", tr: "biriyle görüşmek / çıkmak", ex: "Are you seeing anyone at the moment?" },
      { en: "have a word with", tr: "biriyle konuşmak", ex: "Can I have a word with you about the order?" },
      { en: "weigh", tr: "tartmak / ağırlığında olmak", ex: "Each bridge window weighs about 80 kilos." },
      { en: "You're being…", tr: "(Şu an) …davranıyorsun", ex: "You're being too modest." }
    ],
    exercises: [
      { type: "mcq", q: "We ___ of opening a sales office in Piraeus next year.",
        options: ["think", "are think", "thought to", "are thinking"],
        answer: 3, explain: "Düşünme süreci / plan → are thinking of." },
      { type: "mcq", q: "I ___ your price is a little high for this market.",
        options: ["am thinking", "thinking", "am think", "think"],
        answer: 3, explain: "Fikir bildirme → think (simple)." },
      { type: "fill", q: "Each heated bridge window ___ (weigh) about 80 kilos.",
        answers: ["weighs"], hint: "durum",
        explain: "Ağırlık bildirme (durum) → Present Simple." },
      { type: "fill", q: "Look — the inspector ___ (weigh) the crates before they go on the truck.",
        answers: ["is weighing", "'s weighing"], hint: "eylem",
        explain: "Tartma eylemi → Present Continuous." },
      { type: "mcq", q: "Can I call you back? We ___ lunch with some clients.",
        options: ["have", "are having", "had have", "are have"],
        answer: 1, explain: "have = yemek yemek (eylem) → continuous olabilir." },
      { type: "mcq", q: "Why ___ so difficult today? You usually agree with me.",
        options: ["are you be", "do you be", "are you being", "have you being"],
        answer: 2, explain: "Geçici davranış → be + being." },
      { type: "fill", q: "I ___ (see) what you mean, but the deadline can't be changed.",
        answers: ["see"], hint: "anlamak",
        explain: "see = anlamak → durum, simple." },
      { type: "fill", q: "I ___ (see) the BV surveyor at three, so I'll be out of the office.",
        answers: ["am seeing", "'m seeing", "i'm seeing", "will be seeing", "'ll be seeing", "i'll be seeing", "am going to see", "'m going to see", "i'm going to see"], hint: "buluşmak",
        explain: "see = buluşmak (randevu) → Present Continuous." },
      { type: "mcq", q: "This coffee ___ amazing. Where did you buy it?",
        options: ["is tasting", "has tasting", "tasting", "tastes"],
        answer: 3, explain: "Tat bildiren durum → tastes." },
      { type: "order", answer: "We are thinking of visiting Posidonia this year.",
        tr: "Bu yıl Posidonia'yı ziyaret etmeyi düşünüyoruz.", extra: ["think"],
        alts: ["This year we are thinking of visiting Posidonia."],
        explain: "think of + -ing (plan) → continuous." },
      { type: "match", pairs: [
          ["I think so.", "fikir"],
          ["I'm thinking about it.", "değerlendiriyorum"],
          ["We have two furnaces.", "sahiplik"],
          ["We're having a meeting.", "eylem"],
          ["He's being silly.", "şu anki davranış"]
        ], explain: "Aynı fiil, simple/continuous ile farklı anlam taşır." },
      { type: "listen", text: "I see what you mean.",
        tr: "Ne demek istediğini anlıyorum." },
      { type: "listen", text: "We are having a meeting at the moment.",
        tr: "Şu anda bir toplantı yapıyoruz." }
    ]
  });

  // ---------------------------------------------------------------- 15
  units.push({
    id: "tenses-15",
    title: "Kibarlık için Geçmiş Zaman (Distancing)",
    level: "C1",
    week: 8,
    intro: {
      tr: "İngilizcede geçmiş zaman ve continuous biçimler, isteği daha yumuşak ve kibar yapmak için kullanılır; anlam yine şimdiki zamandır. 'I was wondering if…', 'We were hoping…', 'Did you want…?' gibi ifadeler doğrudan istekten daha az zorlayıcıdır. Müşterilerle fiyat, indirim veya erteleme konuşurken çok işe yarar.",
      points: [
        "I wonder if → I was wondering if… (daha kibar): I was wondering if you could send the drawings.",
        "We hope → We were hoping… : We were hoping for a better price.",
        "Do you want…? → Did you want…? (garson, resepsiyon, müşteri): Did you want to see the samples?",
        "I want to ask → I wanted to ask… : I just wanted to check the delivery date.",
        "Continuous ek yumuşatma sağlar: We were thinking you might prefer laminated glass."
      ],
      examples: [
        { en: "I was wondering if you could give us a small discount.", tr: "Acaba bize küçük bir indirim yapabilir misiniz diye düşünüyordum." },
        { en: "We were hoping to receive the order by the end of the month.", tr: "Siparişi ay sonuna kadar almayı umuyorduk." },
        { en: "Did you want a coffee before we start?", tr: "Başlamadan önce kahve ister miydiniz?" },
        { en: "I just wanted to remind you about tomorrow's meeting.", tr: "Sadece yarınki toplantıyı hatırlatmak istedim." }
      ]
    },
    cards: [
      { en: "I was wondering if…", tr: "Acaba … diye düşünüyordum", ex: "I was wondering if we could meet next week." },
      { en: "We were hoping…", tr: "…umuyorduk", ex: "We were hoping for faster delivery." },
      { en: "I just wanted to check…", tr: "Sadece …yı teyit etmek istedim", ex: "I just wanted to check the delivery address." },
      { en: "Did you want…?", tr: "…ister miydiniz?", ex: "Did you want me to send a sample?" },
      { en: "Would it be possible to…?", tr: "…mümkün olur mu?", ex: "Would it be possible to postpone the inspection?" },
      { en: "postpone", tr: "ertelemek", ex: "We had to postpone the sea trial." }
    ],
    exercises: [
      { type: "mcq", q: "Which request sounds most polite to a customer?",
        options: ["I want a deposit.", "Give us a deposit.", "I was wondering if you could pay a deposit.", "You must pay a deposit."],
        answer: 2, explain: "'I was wondering if…' geçmiş zamanla mesafe yaratır → en kibar." },
      { type: "fill", q: "I ___ (wonder) if you could send us the updated drawings today.",
        answers: ["was wondering", "was just wondering", "wonder", "am wondering", "'m wondering"], hint: "kibar istek",
        explain: "En kibar kalıp → I was wondering if… ('I wonder / I'm wondering' de doğrudur ama daha az mesafelidir)." },
      { type: "fill", q: "We ___ (hope) to receive the order before the vessel enters dry dock.",
        answers: ["were hoping", "had been hoping", "'d been hoping", "are hoping", "'re hoping", "hope"], hint: "yumuşatma",
        explain: "Geçmiş continuous (were hoping) → isteği yumuşatır, anlam şimdiki. 'hope / are hoping' da doğrudur ama daha doğrudandır." },
      { type: "mcq", q: "Waiter: ___ to see the dessert menu?",
        options: ["Did you want", "Have you wanted", "Were you want", "Do you wanting"],
        answer: 0, explain: "'Did you want…?' kibar teklif kalıbıdır." },
      { type: "mcq", q: "Polite phone opening: \"Hi Anna, I just ___ to check the delivery address with you.\"",
        options: ["wants", "wanted", "have wanted", "am wanting"],
        answer: 1, explain: "'I just wanted to…' yaygın, kibar giriş." },
      { type: "mcq", q: "In 'I was wondering if you were free on Friday', the speaker is talking about…",
        options: ["the past", "something that never happened", "a past habit", "the present / near future"],
        answer: 3, explain: "Geçmiş biçim burada zaman değil kibarlık bildirir." },
      { type: "fill", q: "We ___ (think) you might prefer laminated glass for the wheelhouse windows.",
        answers: ["were thinking", "thought", "'re thinking", "are thinking", "think"], hint: "yumuşak öneri",
        explain: "Öneriyi yumuşatmak için Past Continuous (veya Past Simple); şimdiki zaman da doğrudur ama daha doğrudandır." },
      { type: "order", answer: "I was wondering if you could help me.",
        tr: "Acaba bana yardım edebilir misiniz?", extra: ["can"],
        explain: "I was wondering if + could → kibar istek." },
      { type: "order", answer: "We were hoping for a slightly better price.",
        tr: "Biraz daha iyi bir fiyat umuyorduk.",
        explain: "Pazarlıkta yumuşak ifade: We were hoping for…" },
      { type: "match", pairs: [
          ["I want to ask…", "I wanted to ask…"],
          ["I wonder if…", "I was wondering if…"],
          ["Do you want…?", "Did you want…?"],
          ["We hope…", "We were hoping…"]
        ], explain: "Sağdaki geçmiş biçimler daha kibar ve dolaylıdır." },
      { type: "order", answer: "Would it be possible to postpone the inspection?",
        tr: "Denetimi ertelemek mümkün olur mu?",
        explain: "Kibar rica kalıbı: Would it be possible to…?" },
      { type: "listen", text: "I was wondering if we could meet next week.",
        tr: "Acaba gelecek hafta buluşabilir miyiz diye düşünüyordum." },
      { type: "listen", text: "I just wanted to check the delivery date.",
        tr: "Sadece teslim tarihini teyit etmek istedim." }
    ]
  });

  // ---------------------------------------------------------------- 16
  units.push({
    id: "tenses-16",
    title: "C1 Ustalık: İnce Görünüş Farkları ve Karışık Tekrar",
    level: "C1",
    week: 8,
    intro: {
      tr: "C1 düzeyinde zaman seçimi çoğu zaman anlam inceliği taşır: tamamlanmış sonuç mu, süreç mi; geçici mi, kalıcı mı; konuşanın bakış açısı ne? Resmî raporlarda Present Perfect ve edilgen perfect biçimleri (has been tested, had been inspected) sık kullanılır. Bu ünite tüm zamanları karışık olarak tekrar eder.",
      points: [
        "Rapor dili: The panes have been tested in accordance with ISO 614.",
        "Sonuç vs süreç: Who's eaten my sandwich? (bitti) / Who's been eating my sandwich? (kısmen yenmiş).",
        "It's the first time + Present Perfect: It's the first time we have worked with ABS.",
        "Edilgen perfect: The defect had been reported before the vessel left.",
        "Hedge: It has been suggested that… / It would appear that… (resmî, mesafeli)."
      ],
      examples: [
        { en: "All panes have been tested in accordance with ISO 614.", tr: "Tüm camlar ISO 614'e uygun olarak test edilmiştir." },
        { en: "It's the first time we've exhibited at SMM Hamburg.", tr: "SMM Hamburg'da ilk kez stant açıyoruz." },
        { en: "The defect had been reported before the vessel left the yard.", tr: "Kusur, gemi tersaneden ayrılmadan önce rapor edilmişti." },
        { en: "I've been reading your book — I'm halfway through.", tr: "Kitabını okuyorum — yarısına geldim." }
      ]
    },
    cards: [
      { en: "in accordance with", tr: "…e uygun olarak", ex: "Tested in accordance with ISO 614." },
      { en: "It's the first time…", tr: "İlk kez…", ex: "It's the first time I've been to Greece." },
      { en: "non-conformity", tr: "uygunsuzluk", ex: "No non-conformities have been found." },
      { en: "be halfway through", tr: "yarısına gelmek", ex: "I'm halfway through the report." },
      { en: "It would appear that…", tr: "Görünüşe göre…", ex: "It would appear that the seal has failed." },
      { en: "to date", tr: "bugüne kadar", ex: "To date, no claims have been received." }
    ],
    exercises: [
      { type: "mcq", q: "All panes ___ in accordance with ISO 614, and no non-conformities were found.",
        options: ["have been tested", "have tested", "are testing", "had tested"],
        answer: 0, explain: "Rapor dili, edilgen, sonuç → Present Perfect Passive." },
      { type: "mcq", q: "It's the first time we ___ with Bureau Veritas.",
        options: ["work", "worked", "have worked", "are working"],
        answer: 2, explain: "It's the first time + Present Perfect." },
      { type: "fill", q: "To date, no claims ___ (receive) regarding this batch.",
        answers: ["have been received"], hint: "edilgen, bugüne kadar",
        explain: "To date + edilgen → have been received." },
      { type: "mcq", q: "I ___ your book — I'm halfway through and really enjoying it.",
        options: ["have read", "had read", "read", "have been reading"],
        answer: 3, explain: "Bitmemiş etkinlik → Present Perfect Continuous; 'have read' bitmiş anlamı verir." },
      { type: "fill", q: "The crack ___ (report) before the vessel left the yard, so the yard is responsible.",
        answers: ["had been reported", "was reported"], hint: "edilgen, daha önce",
        explain: "Geminin ayrılmasından önce, edilgen → Past Perfect Passive ('before' sırayı gösterdiği için 'was reported' da kabul edilir)." },
      { type: "mcq", q: "By the time the claim reached us, the vessel ___ in service for over a year.",
        options: ["has been", "had been", "was being", "will have been"],
        answer: 1, explain: "Geçmişteki bir ana kadar süre → Past Perfect." },
      { type: "fill", q: "Sorry I'm late — ___ you been waiting long?",
        answers: ["have"], explain: "Şimdiye kadar süren bekleme → Have you been waiting…?" },
      { type: "mcq", q: "Next year we ___ our 30th anniversary, and by then we will have supplied over 900 vessels.",
        options: ["celebrate", "are celebrating", "will be celebrating", "All three are possible"],
        answer: 3, explain: "Gelecek planı bu üç biçimle de anlatılabilir; ince vurgu farkı vardır." },
      { type: "fill", q: "If you ask me, the market ___ (change) a lot over the last decade.",
        answers: ["has changed", "'s changed", "has been changing", "'s been changing"],
        explain: "over the last decade → şimdiye kadar → Present Perfect (Simple/Continuous)." },
      { type: "order", answer: "All panes have been tested in accordance with ISO 614.",
        tr: "Tüm camlar ISO 614'e uygun olarak test edilmiştir.", extra: ["being"],
        explain: "Rapor dili → Present Perfect Passive." },
      { type: "order", answer: "It is the first time I have been to Greece.",
        tr: "Yunanistan'a ilk kez geliyorum.", extra: ["am"],
        explain: "It's the first time + Present Perfect." },
      { type: "match", pairs: [
          ["has been tested", "edilgen, sonuç (rapor)"],
          ["had been reported", "geçmişten önce, edilgen"],
          ["have been reading", "bitmemiş etkinlik"],
          ["will have supplied", "gelecekte tamamlanmış"],
          ["was wondering", "kibar istek"]
        ], explain: "Tüm zamanların karışık tekrarı." },
      { type: "listen", text: "No defects have been found so far.",
        tr: "Şu ana kadar hiçbir kusur bulunmadı." },
      { type: "listen", text: "Have you been waiting long?",
        tr: "Uzun süredir mi bekliyorsun?" }
    ]
  });

  window.EA_MODULES = window.EA_MODULES || [];
  window.EA_MODULES.push({
    id: "tenses",
    title: "Zamanlar (Tenses)",
    icon: "⏳",
    color: "#9b59ff",
    description: "B1+'dan C1'e İngilizce zamanlar: günlük sohbet ve gemi camı iş yazışmalarından örneklerle 16 ünite.",
    units: units
  });
})();
