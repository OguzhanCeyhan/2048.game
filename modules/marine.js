// Gemi Camı – İş İngilizcesi (marine glass business English)
(function () {
var units = [];

// ---------------------------------------------------------------- 01
units.push({
  id: "marine-01",
  title: "Cam Türleri",
  level: "B1+",
  week: 1,
  intro: {
    tr: "Gemi camı sektöründe her cam türünün İngilizce bir adı vardır ve müşteriler bunları çok net kullanır. Float cam ham maddedir; temperleme, laminasyon veya ısıcam yapımı ile işlenmiş ürünlere dönüşür. Bu ünitede temel cam türlerini ve onları anlatırken kullanılan basit cümle kalıplarını öğreneceksin.",
    points: [
      "\"tempered\" ve \"toughened\" aynı anlama gelir: temperli cam. ABD'de tempered, İngiltere'de toughened daha yaygındır.",
      "\"laminated glass\" iki veya daha fazla camın PVB ya da SGP ara katmanla birleştirilmesidir.",
      "\"heat-strengthened\" (yarı temperli) cam, float camdan yaklaşık iki kat dayanıklıdır ama tam temperli cam kadar güçlü değildir.",
      "IGU (insulated glass unit) Türkçede ısıcam / yalıtımlı cam ünitesi olarak geçer.",
      "Malzeme anlatırken: \"X is made of...\", \"X consists of...\", \"X is used for...\" kalıpları çok işe yarar."
    ],
    examples: [
      { en: "Laminated glass consists of two panes bonded with a PVB interlayer.", tr: "Lamine cam, PVB ara katmanla birleştirilmiş iki cam levhadan oluşur." },
      { en: "Toughened glass is about four to five times stronger than float glass.", tr: "Temperli cam, float camdan yaklaşık dört ila beş kat daha dayanıklıdır." },
      { en: "Heated glass is used for bridge windows to prevent ice and fog.", tr: "Isıtmalı cam, buzlanma ve buğulanmayı önlemek için köprüüstü pencerelerinde kullanılır." },
      { en: "So, what do you do? — I work for a company that makes glass for ships.", tr: "Peki, ne iş yapıyorsun? — Gemiler için cam üreten bir firmada çalışıyorum." }
    ]
  },
  cards: [
    { en: "float glass", tr: "float cam", ex: "All our products start as clear float glass." },
    { en: "tempered / toughened glass", tr: "temperli cam", ex: "Side scuttles are glazed with toughened safety glass." },
    { en: "heat-strengthened glass", tr: "yarı temperli (ısıl güçlendirilmiş) cam", ex: "Heat-strengthened glass is often used in laminated panes." },
    { en: "laminated glass", tr: "lamine cam", ex: "Laminated glass stays in the frame even when it breaks." },
    { en: "insulated glass unit (IGU)", tr: "ısıcam / yalıtımlı cam ünitesi", ex: "The accommodation windows are double-glazed IGUs." },
    { en: "heated glass", tr: "ısıtmalı cam", ex: "The heated glass keeps the bridge windows clear in winter." },
    { en: "tinted glass", tr: "renkli (füme) cam", ex: "Tinted glass is used in passenger areas, but not in bridge windows." },
    { en: "interlayer", tr: "ara katman", ex: "The interlayer holds the fragments together." },
    { en: "PVB (polyvinyl butyral)", tr: "PVB (polivinil bütiral) ara katman", ex: "We use a 1.52 mm PVB interlayer as standard." },
    { en: "SGP (SentryGlas) interlayer", tr: "SGP ara katman (sert iyonoplast)", ex: "SGP is stiffer and stronger than PVB." },
    { en: "pane", tr: "cam levha / cam tabla", ex: "Each window has two panes of glass." },
    { en: "safety glass", tr: "emniyet camı", ex: "All glazing on deck must be safety glass." }
  ],
  exercises: [
    { type: "mcq", q: "Which glass is the basic, unprocessed product?",
      options: ["Laminated glass", "Heated glass", "Tempered glass", "Float glass"],
      answer: 3, explain: "Float cam işlenmemiş ana üründür; diğerleri ondan üretilir." },
    { type: "mcq", q: "\"Toughened glass\" means the same as ___.",
      options: ["tempered glass", "tinted glass", "laminated glass"],
      answer: 0, explain: "Toughened (İngiliz) = tempered (Amerikan) = temperli cam." },
    { type: "match", pairs: [["tempered", "temperli"], ["laminated", "lamine"], ["tinted", "renkli / füme"], ["heated", "ısıtmalı"], ["interlayer", "ara katman"]],
      explain: "Temel cam türlerinin Türkçe karşılıkları." },
    { type: "fill", q: "Laminated glass ___ of two or more panes and an interlayer.",
      answers: ["consists", "is made up", "is composed", "is made"], hint: "oluşur", explain: "\"consist of\" = -den oluşmak. Tekil özne için consists (is made up of / is composed of da olur)." },
    { type: "mcq", q: "Why do ship owners choose heated glass for the bridge?",
      options: ["To reduce the weight", "To make the window cheaper", "To keep the windows free of ice and fog", "To change the colour"],
      answer: 2, explain: "Isıtmalı cam buz ve buğuyu önleyerek görüşü açık tutar." },
    { type: "order", answer: "Our bridge windows are made of laminated toughened glass",
      alts: ["Our bridge windows are made of toughened laminated glass"],
      tr: "Köprüüstü pencerelerimiz lamine temperli camdan yapılır.", explain: "\"be made of\" malzemeyi anlatır." },
    { type: "fill", q: "SGP is stiffer ___ PVB, so it is used for large panes.",
      answers: ["than"], explain: "Karşılaştırmada \"-er than\" kullanılır." },
    { type: "mcq", q: "What happens when laminated glass breaks?",
      options: ["It falls out in large pieces.", "It turns into small round pieces.", "It melts.", "The fragments stick to the interlayer."],
      answer: 3, explain: "Lamine camda kırık parçalar ara katmana yapışık kalır." },
    { type: "listen", text: "We make tempered and laminated glass for ships.",
      tr: "Gemiler için temperli ve lamine cam üretiyoruz." },
    { type: "order", answer: "I work for a company that makes marine glass",
      tr: "Gemi camı üreten bir firmada çalışıyorum.", explain: "Tanışma cümlesi: \"I work for a company that...\"" },
    { type: "mcq", q: "Heat-strengthened glass is ___ fully tempered glass.",
      options: ["not as strong as", "stronger than", "the same as"],
      answer: 0, explain: "Yarı temperli cam, tam temperli kadar güçlü değildir (not as ... as)." },
    { type: "fill", q: "An IGU is used ___ thermal and acoustic insulation in cabins.",
      answers: ["for", "to provide"], explain: "\"be used for + isim\" = ... için kullanılmak." },
    { type: "listen", text: "Tinted glass reduces glare in the passenger areas.",
      tr: "Renkli cam yolcu alanlarındaki göz kamaşmasını azaltır." }
  ]
});

// ---------------------------------------------------------------- 02
units.push({
  id: "marine-02",
  title: "Gemi Pencereleri ve Parçaları",
  level: "B1+",
  week: 1,
  intro: {
    tr: "Müşteriler sipariş verirken pencerenin tipini ve parçalarını adlarıyla söyler. Köprüüstü penceresi, lomboz, fırtına kapağı, conta ve kelepçe halkası gibi terimleri bilmek yanlış anlaşılmaları önler. Bu ünitede pencere parçalarını ve \"there is / there are\", \"is fitted with\" gibi tarif kalıplarını çalışacaksın.",
    points: [
      "\"side scuttle\" resmi (ISO/SOLAS) terimdir; günlük dilde \"porthole\" veya \"portlight\" denir: lomboz.",
      "\"deadlight\" lombozun iç tarafındaki metal fırtına kapağıdır; cam kırılırsa su girişini önler.",
      "\"wheelhouse\" dümen evi / kaptan köşküdür; \"bridge\" köprüüstüdür. Çoğu gemide aynı alanı anlatır.",
      "Parça anlatırken: \"The window is fitted with a wiper.\" / \"The glass is held by a clamp ring.\"",
      "gasket = conta (katı parça), sealant = sızdırmazlık macunu / mastik (sürülen malzeme)."
    ],
    examples: [
      { en: "Each side scuttle is fitted with a hinged deadlight.", tr: "Her lomboz menteşeli bir fırtına kapağı ile donatılmıştır." },
      { en: "The bridge windows have wipers and a heating system.", tr: "Köprüüstü pencerelerinde silecekler ve bir ısıtma sistemi vardır." },
      { en: "There are twelve rectangular windows on the main deck.", tr: "Ana güvertede on iki dikdörtgen pencere var." },
      { en: "My cabin had a tiny porthole, but the view was amazing!", tr: "Kamaramda minicik bir lomboz vardı ama manzara harikaydı!" }
    ]
  },
  cards: [
    { en: "bridge window", tr: "köprüüstü penceresi", ex: "The bridge windows are inclined to reduce reflections." },
    { en: "wheelhouse", tr: "dümen evi / kaptan köşkü", ex: "The wheelhouse has fourteen front windows." },
    { en: "side scuttle", tr: "lomboz (ISO terimi)", ex: "Side scuttles below the freeboard deck need deadlights." },
    { en: "porthole / portlight", tr: "lomboz", ex: "The crew cabins have round portholes." },
    { en: "deadlight", tr: "fırtına kapağı (lomboz kör kapağı)", ex: "Close the deadlights before heavy weather." },
    { en: "rectangular window", tr: "dikdörtgen pencere", ex: "Rectangular windows are used in the superstructure." },
    { en: "frame", tr: "kasa / çerçeve", ex: "The frame is made of marine-grade aluminium." },
    { en: "gasket", tr: "conta", ex: "The rubber gasket keeps the window watertight." },
    { en: "sealant", tr: "sızdırmazlık macunu / mastik", ex: "Apply sealant evenly around the edge." },
    { en: "clamp ring", tr: "kelepçe (baskı) halkası", ex: "The clamp ring holds the glass in the frame." },
    { en: "wiper", tr: "silecek", ex: "The pendulum wiper covers most of the glass." },
    { en: "watertight / weathertight", tr: "su geçirmez (etanş) / hava koşullarına karşı sızdırmaz", ex: "The window must be weathertight." }
  ],
  exercises: [
    { type: "match", pairs: [["gasket", "conta"], ["frame", "kasa / çerçeve"], ["wiper", "silecek"], ["deadlight", "fırtına kapağı"], ["clamp ring", "kelepçe halkası"]],
      explain: "Pencere parçalarının Türkçe karşılıkları." },
    { type: "mcq", q: "What is the official ISO/SOLAS term for a porthole?",
      options: ["Bridge window", "Deadlight", "Skylight", "Side scuttle"],
      answer: 3, explain: "Resmi terim \"side scuttle\"; porthole günlük kullanımdır." },
    { type: "mcq", q: "A deadlight is ___.",
      options: ["an inner metal cover that protects a side scuttle", "a type of tinted glass", "a lamp on the bridge"],
      answer: 0, explain: "Deadlight, lombozun iç tarafındaki metal kör kapaktır." },
    { type: "fill", q: "The window is fitted ___ an electric wiper.",
      answers: ["with"], explain: "\"be fitted with\" = ile donatılmış olmak." },
    { type: "order", answer: "The glass is held in the frame by a clamp ring",
      alts: ["The glass is held by a clamp ring in the frame"],
      tr: "Cam, kasaya bir kelepçe halkası ile tutturulur.", explain: "Edilgen yapı: is held by." },
    { type: "mcq", q: "Which material do you apply with a gun around the glass edge?",
      options: ["Gasket", "Clamp ring", "Sealant", "Frame"],
      answer: 2, explain: "Sealant (mastik) sürülerek uygulanır; gasket katı bir parçadır." },
    { type: "fill", q: "There ___ fourteen windows in the wheelhouse.",
      answers: ["are"], explain: "Çoğul isimle \"there are\" kullanılır." },
    { type: "listen", text: "Please check the gasket on the side scuttle.",
      tr: "Lütfen lombozdaki contayı kontrol edin." },
    { type: "mcq", q: "Customer: \"We need windows for the wheelhouse.\" Where will these windows be?",
      options: ["In the engine room", "In the cargo hold", "Where the ship is steered", "In the crew cabins"],
      answer: 2, explain: "Wheelhouse gemiyi yönettikleri yer, yani dümen evidir." },
    { type: "order", answer: "Do the bridge windows need wipers and heating",
      alts: ["Do the bridge windows need heating and wipers"],
      tr: "Köprüüstü pencereleri silecek ve ısıtmaya ihtiyaç duyuyor mu?", explain: "Do + özne + fiil soru yapısı." },
    { type: "fill", q: "A good gasket keeps the window ___ (su geçirmez).",
      answers: ["watertight", "weathertight"], explain: "watertight = su geçirmez." },
    { type: "listen", text: "There are twelve rectangular windows on the main deck.",
      tr: "Ana güvertede on iki dikdörtgen pencere var." },
    { type: "mcq", q: "Small talk: \"Have you ever been on a cruise?\" — Best natural answer:",
      options: ["Yes, I am going on a cruise yesterday.", "No, I never go.", "Yes, once. My cabin only had a tiny porthole!", "I have been cruise."],
      answer: 2, explain: "Doğal ve dilbilgisel olarak doğru tek cevap; diğerlerinde zaman veya yapı hatası var." }
  ]
});

// ---------------------------------------------------------------- 03
units.push({
  id: "marine-03",
  title: "Ölçüler ve Teknik Özellikler",
  level: "B1+",
  week: 2,
  intro: {
    tr: "Teknik özellikleri sesli okumak (telefonda, video toplantıda) pratik ister. Kalınlık, tolerans, en x boy, köşe yarıçapı ve kenar işlemesi sık konuşulur. \"x\" işareti \"by\" diye okunur: 800 x 600 mm = \"eight hundred by six hundred millimetres\". Ondalık ayırıcı İngilizcede noktadır ve \"point\" diye okunur.",
    points: [
      "800 x 600 → \"eight hundred by six hundred\"; ±0.5 mm → \"plus or minus zero point five millimetres\".",
      "Ondalık: 1.52 → \"one point five two\" (Türkçedeki virgül yerine nokta!).",
      "kg/m² → \"kilograms per square metre\"; R50 → \"a corner radius of fifty millimetres\".",
      "Kenar işlemesi: ground (taşlanmış / mat rodajlı), polished (parlatılmış / parlak rodajlı), arrised (pahı kırılmış, emniyet kenarı).",
      "\"thick / wide / high\" sıfat, \"thickness / width / height\" isimdir: \"10 mm thick\" ama \"a thickness of 10 mm\"."
    ],
    examples: [
      { en: "The pane is eight hundred by six hundred millimetres, twelve millimetres thick.", tr: "Cam 800 x 600 mm ölçüsünde ve 12 mm kalınlığındadır." },
      { en: "The tolerance on width and height is plus or minus one millimetre.", tr: "En ve boydaki tolerans artı eksi bir milimetredir." },
      { en: "All edges are ground and arrised.", tr: "Tüm kenarlar taşlanmış ve pahı kırılmıştır." },
      { en: "Fifteen millimetre glass weighs about thirty-seven point five kilograms per square metre.", tr: "15 mm cam metrekare başına yaklaşık 37,5 kg gelir." }
    ]
  },
  cards: [
    { en: "thickness", tr: "kalınlık", ex: "What thickness do you need for the front windows?" },
    { en: "tolerance", tr: "tolerans", ex: "The thickness tolerance is plus or minus zero point three millimetres." },
    { en: "width x height", tr: "en x boy", ex: "Please always give the size as width by height." },
    { en: "corner radius", tr: "köşe yarıçapı", ex: "All corners have a radius of fifty millimetres." },
    { en: "edge work", tr: "kenar işleme", ex: "Edge work is included in the price." },
    { en: "ground edge", tr: "taşlanmış (mat rodajlı) kenar", ex: "A ground edge is enough for framed glass." },
    { en: "polished edge", tr: "parlatılmış (parlak rodajlı) kenar", ex: "Exposed edges should be polished." },
    { en: "arrised edge", tr: "pahı kırılmış (emniyet) kenar", ex: "Arrised edges are safer to handle." },
    { en: "flatness / bow", tr: "düzlük / bombe (eğrilik)", ex: "Tempering can cause some bow in the glass." },
    { en: "weight per square metre", tr: "metrekare ağırlığı", ex: "Glass weighs two point five kilograms per square metre per millimetre." },
    { en: "drawing", tr: "teknik çizim", ex: "Could you send us a drawing with all dimensions?" },
    { en: "dimension", tr: "ölçü / boyut", ex: "Please confirm the dimensions before production." }
  ],
  exercises: [
    { type: "mcq", q: "How do you say \"1200 x 800 mm\" aloud?",
      options: ["twelve hundred times eight hundred", "twelve hundred by eight hundred millimetres", "one two zero zero x eight zero zero", "twelve hundred on eight hundred"],
      answer: 1, explain: "\"x\" ölçülerde \"by\" diye okunur." },
    { type: "mcq", q: "How do you read \"±0.5 mm\"?",
      options: ["plus or minus zero point five millimetres", "more or less zero comma five", "plus minus half millimetre"],
      answer: 0, explain: "± = plus or minus; ondalık nokta = point." },
    { type: "fill", q: "The glass is twelve millimetres ___.",
      answers: ["thick"], hint: "sıfat: kalın", explain: "Ölçüden sonra sıfat gelir: 12 mm thick." },
    { type: "fill", q: "The glass has a ___ of twelve millimetres.",
      answers: ["thickness"], hint: "isim: kalınlık", explain: "\"a ... of\" yapısında isim kullanılır: thickness." },
    { type: "match", pairs: [["ground edge", "taşlanmış kenar"], ["polished edge", "parlatılmış kenar"], ["arrised edge", "pahı kırılmış kenar"], ["corner radius", "köşe yarıçapı"], ["flatness", "düzlük"]],
      explain: "Kenar işleme ve geometri terimleri." },
    { type: "order", answer: "What is the tolerance on width and height",
      alts: ["What is the tolerance on height and width"],
      tr: "En ve boydaki tolerans nedir?", explain: "Wh- soru: What is ...?" },
    { type: "mcq", q: "Float glass weighs about 2.5 kg/m² per mm. What does a 10 mm pane weigh per square metre?",
      options: ["10 kg", "2.5 kg", "50 kg", "25 kg"],
      answer: 3, explain: "10 x 2,5 = 25 kg/m²." },
    { type: "listen", text: "All corners have a radius of fifty millimetres.",
      tr: "Tüm köşelerin yarıçapı elli milimetredir." },
    { type: "order", answer: "Could you send us a drawing with all dimensions",
      tr: "Bize tüm ölçülerin olduğu bir çizim gönderebilir misiniz?", explain: "Kibar rica: Could you ...?" },
    { type: "mcq", q: "Customer: \"Is it seven hundred wide or seven hundred high?\" What is the customer asking about?",
      options: ["The weight", "The price", "The edge work", "The width or the height"],
      answer: 3, explain: "wide = en, high = boy; müşteri hangi ölçü olduğunu soruyor." },
    { type: "fill", q: "1.52 mm is read as \"one ___ five two millimetres\".",
      answers: ["point"], explain: "İngilizcede ondalık ayırıcı noktadır ve \"point\" diye okunur." },
    { type: "listen", text: "The pane is eight hundred by six hundred millimetres.",
      tr: "Cam sekiz yüze altı yüz milimetredir." },
    { type: "mcq", q: "Which sentence is correct?",
      options: ["The window is 600 mm width.", "The window has 600 mm wide.", "The window is 600 mm wide.", "The window is width 600 mm."],
      answer: 2, explain: "Ölçü + sıfat: 600 mm wide." }
  ]
});

// ---------------------------------------------------------------- 04
units.push({
  id: "marine-04",
  title: "Firmayı ve Ürünleri Tanıtmak",
  level: "B1+",
  week: 2,
  intro: {
    tr: "Yeni bir müşteriyle ilk görüşmede firmanı birkaç net cümleyle tanıtabilmelisin: ne üretiyorsunuz, kapasiteniz ne, hangi ülkelere ihraç ediyorsunuz, neyi farklı yapıyorsunuz. Present Simple (genel gerçekler) ve Present Perfect (\"since / for\" ile deneyim) en çok kullanılan zamanlardır.",
    points: [
      "\"We specialise in + -ing / isim\": We specialise in marine glazing.",
      "\"Our product range includes...\" = ürün yelpazemiz ... içerir.",
      "Deneyim: \"We have been in business since 1998.\" / \"We have exported to over forty countries.\"",
      "\"in-house\" = firma içinde: in-house testing, in-house design team.",
      "İngiliz yazımı \"specialise\", Amerikan yazımı \"specialize\" — ikisi de doğru."
    ],
    examples: [
      { en: "We specialise in safety glass for ships and offshore platforms.", tr: "Gemiler ve açık deniz platformları için emniyet camında uzmanız." },
      { en: "Our annual capacity is around two hundred thousand square metres.", tr: "Yıllık kapasitemiz yaklaşık iki yüz bin metrekaredir." },
      { en: "We have an in-house test lab, so we can test every batch.", tr: "Firma içi bir test laboratuvarımız var, bu yüzden her partiyi test edebiliriz." },
      { en: "Nice to meet you. I'm in charge of export sales.", tr: "Tanıştığımıza memnun oldum. İhracat satışından sorumluyum." }
    ]
  },
  cards: [
    { en: "we specialise in", tr: "... konusunda uzmanız", ex: "We specialise in bridge windows for workboats." },
    { en: "product range", tr: "ürün yelpazesi / gamı", ex: "Our product range covers all types of marine glass." },
    { en: "annual capacity", tr: "yıllık kapasite", ex: "Our annual capacity is one hundred thousand square metres." },
    { en: "in-house testing", tr: "firma içi test", ex: "In-house testing helps us control quality." },
    { en: "to export to", tr: "... ülkesine ihracat yapmak", ex: "We export to more than thirty countries." },
    { en: "shipyard", tr: "tersane", ex: "Most of our customers are shipyards in Europe." },
    { en: "ship owner", tr: "armatör", ex: "Some ship owners order spare glass directly from us." },
    { en: "naval architect", tr: "gemi inşa mühendisi / gemi mimarı", ex: "The naval architect approved our proposal." },
    { en: "distributor", tr: "distribütör", ex: "We are looking for a distributor in Norway." },
    { en: "to be in charge of", tr: "... sorumlusu olmak", ex: "I'm in charge of key accounts." },
    { en: "headquarters", tr: "genel merkez", ex: "Our headquarters and factory are in Turkey." },
    { en: "track record", tr: "geçmiş başarılar / referanslar", ex: "We have a strong track record with cruise ships." }
  ],
  exercises: [
    { type: "fill", q: "We specialise ___ toughened and laminated glass for ships.",
      answers: ["in"], explain: "specialise in = ... konusunda uzmanlaşmak." },
    { type: "mcq", q: "Which sentence is correct?",
      options: ["We are in business since 1998.", "We were in business since 1998.", "We have been in business since 1998.", "We be in business since 1998."],
      answer: 2, explain: "since + geçmiş nokta → Present Perfect (have been)." },
    { type: "order", answer: "Our product range includes bridge windows and side scuttles",
      tr: "Ürün yelpazemiz köprüüstü pencerelerini ve lombozları içerir.", explain: "Özne + includes + nesne." },
    { type: "match", pairs: [["shipyard", "tersane"], ["ship owner", "armatör"], ["naval architect", "gemi mimarı"], ["distributor", "distribütör"], ["headquarters", "genel merkez"]],
      explain: "Müşteri türleri ve şirket terimleri." },
    { type: "mcq", q: "\"We have an ___ test lab, so we don't need external labs for routine tests.\"",
      options: ["outside", "home-made", "inside-out", "in-house"],
      answer: 3, explain: "in-house = firma içi." },
    { type: "fill", q: "We ___ (export) to over forty countries so far.",
      answers: ["have exported", "'ve exported"], hint: "so far → Present Perfect", explain: "so far (şimdiye kadar) → Present Perfect." },
    { type: "listen", text: "Our annual capacity is around two hundred thousand square metres.",
      tr: "Yıllık kapasitemiz yaklaşık iki yüz bin metrekaredir." },
    { type: "mcq", q: "At a dinner, someone asks: \"So, what's your role there?\" Best answer:",
      options: ["I'm in charge of export sales.", "I am responsible of sales.", "I make the sales role.", "My role is export sale person."],
      answer: 0, explain: "\"in charge of\" doğru kalıptır. Not: \"responsible of\" yanlış, doğrusu \"responsible for\"." },
    { type: "order", answer: "Nice to meet you I'm in charge of export sales",
      tr: "Tanıştığımıza memnun oldum, ihracat satışından sorumluyum.", explain: "Tanışma kalıbı." },
    { type: "mcq", q: "Which phrase best describes past success with customers?",
      options: ["a strong track record", "a long track", "a record track", "a strong recording"],
      answer: 0, explain: "track record = geçmiş başarı/referans geçmişi." },
    { type: "fill", q: "Most of our customers ___ shipyards in Northern Europe.",
      answers: ["are"], explain: "Çoğul özne (customers) → are." },
    { type: "listen", text: "We have a strong track record with cruise ships.",
      tr: "Yolcu gemileri konusunda güçlü bir referans geçmişimiz var." },
    { type: "mcq", q: "Choose the most natural company introduction.",
      options: ["We are a glass company and we do glass for ships, many glass.", "We are glass producer since long time.", "We are a family-owned manufacturer of marine safety glass, based in Turkey.", "Our company is making ship glasses."],
      answer: 2, explain: "Net, doğal ve dilbilgisel olarak doğru tanıtım: \"family-owned manufacturer of ...\"." }
  ]
});

// ---------------------------------------------------------------- 05
units.push({
  id: "marine-05",
  title: "Talepler ve Fiyat Teklifleri",
  level: "B2",
  week: 3,
  intro: {
    tr: "Bir müşteri RFQ (teklif talebi) gönderdiğinde hızlı, net ve kibar cevap vermek siparişi kazanmanın yarısıdır. Teklifte birim fiyat, teslim süresi, geçerlilik süresi, minimum sipariş miktarı ve ödeme koşulları mutlaka yer alır. Bu ünitede teklif e-postalarındaki kalıpları ve kibar rica cümlelerini (\"Could you...\", \"We would be grateful if...\") çalışacaksın.",
    points: [
      "RFQ = Request for Quotation (teklif talebi). Quote / quotation = fiyat teklifi.",
      "lead time = teslim süresi (siparişten sevkiyata kadar geçen süre).",
      "\"The quotation is valid for 30 days.\" = Teklif 30 gün geçerlidir.",
      "MOQ = Minimum Order Quantity (minimum sipariş miktarı).",
      "Kibar rica: \"We would be grateful if you could send...\" / \"Could you please confirm...?\"",
      "\"Please find attached our quotation.\" e-postalarda standart bir ifadedir."
    ],
    examples: [
      { en: "Thank you for your enquiry. Please find attached our quotation.", tr: "Talebiniz için teşekkür ederiz. Teklifimizi ekte bulabilirsiniz." },
      { en: "The unit price is one hundred and eighty euros, EXW Izmir.", tr: "Birim fiyat 180 euro, EXW İzmir'dir." },
      { en: "Our lead time is four to five weeks from drawing approval.", tr: "Teslim süremiz çizim onayından itibaren dört-beş haftadır." },
      { en: "We would be grateful if you could confirm the quantities.", tr: "Miktarları teyit edebilirseniz minnettar oluruz." }
    ]
  },
  cards: [
    { en: "enquiry / inquiry", tr: "talep / soru", ex: "Thank you for your enquiry about bridge windows." },
    { en: "RFQ (request for quotation)", tr: "teklif talebi", ex: "We received an RFQ from a shipyard in Poland." },
    { en: "quotation / quote", tr: "fiyat teklifi", ex: "We will send you our quotation by Friday." },
    { en: "unit price", tr: "birim fiyat", ex: "The unit price depends on the quantity." },
    { en: "lead time", tr: "teslim süresi", ex: "Our standard lead time is four weeks." },
    { en: "validity", tr: "geçerlilik (süresi)", ex: "The validity of this offer is thirty days." },
    { en: "MOQ (minimum order quantity)", tr: "minimum sipariş miktarı", ex: "There is no MOQ for spare parts." },
    { en: "discount", tr: "indirim", ex: "We can offer a five percent discount for this volume." },
    { en: "payment terms", tr: "ödeme koşulları", ex: "Our payment terms are thirty percent in advance." },
    { en: "to be valid for", tr: "... süreyle geçerli olmak", ex: "Prices are valid for sixty days." },
    { en: "please find attached", tr: "ekte bulabilirsiniz", ex: "Please find attached the revised quotation." },
    { en: "subject to", tr: "... şartına bağlı", ex: "The price is subject to final drawing approval." }
  ],
  exercises: [
    { type: "mcq", q: "What does \"lead time\" mean?",
      options: ["The time a quotation is valid", "The time of a meeting", "The time between order and delivery/shipment", "The time for payment"],
      answer: 2, explain: "Lead time = teslim süresi." },
    { type: "fill", q: "Please find ___ our quotation for the wheelhouse windows.",
      answers: ["attached", "enclosed"], explain: "\"Please find attached\" sabit e-posta kalıbıdır." },
    { type: "match", pairs: [["unit price", "birim fiyat"], ["lead time", "teslim süresi"], ["payment terms", "ödeme koşulları"], ["validity", "geçerlilik"], ["discount", "indirim"]],
      explain: "Teklif terimleri." },
    { type: "mcq", q: "The quotation is ___ for thirty days.",
      options: ["valid", "validity", "validate", "available"],
      answer: 0, explain: "be valid for = ... süre geçerli olmak (sıfat)." },
    { type: "order", answer: "We would be grateful if you could confirm the quantities",
      tr: "Miktarları teyit edebilirseniz minnettar oluruz.", explain: "Resmi kibar rica kalıbı." },
    { type: "fill", q: "The price is ___ to final drawing approval.",
      answers: ["subject"], explain: "subject to = ... şartına bağlı." },
    { type: "mcq", q: "Customer email: \"What is your MOQ?\" They want to know ___.",
      options: ["the maximum price", "the delivery address", "the smallest quantity you accept per order", "your quality manager's name"],
      answer: 2, explain: "MOQ = minimum sipariş miktarı." },
    { type: "listen", text: "Our lead time is four to five weeks from drawing approval.",
      tr: "Teslim süremiz çizim onayından itibaren dört ila beş haftadır." },
    { type: "mcq", q: "Which opening is best for replying to an RFQ?",
      options: ["Hi, here price.", "Thank you for your enquiry. Please find our offer below.", "We got your mail, what you want?", "Dear Sir, I am sending price because you asked."],
      answer: 1, explain: "Teşekkür + teklif bilgisi: profesyonel açılış." },
    { type: "order", answer: "Could you please let us know the required quantity",
      tr: "Lütfen gerekli miktarı bize bildirebilir misiniz?", explain: "Kibar soru: Could you please let us know...?" },
    { type: "fill", q: "Our payment terms are thirty percent in ___ and seventy percent before shipment.",
      answers: ["advance"], explain: "in advance = peşin / önceden." },
    { type: "listen", text: "The unit price depends on the quantity.",
      tr: "Birim fiyat miktara bağlıdır." },
    { type: "mcq", q: "\"Prices are quoted EXW, excluding packing.\" What is NOT included in the price?",
      options: ["The glass", "The edge work", "The packing", "The tempering"],
      answer: 2, explain: "excluding packing = ambalaj hariç." }
  ]
});

// ---------------------------------------------------------------- 06
units.push({
  id: "marine-06",
  title: "Siparişler ve Sipariş Teyidi",
  level: "B2",
  week: 3,
  intro: {
    tr: "Müşteri teklifi kabul edince satın alma siparişi (PO) gönderir. Sen de sipariş teyidi ve proforma fatura ile cevap verirsin. Üretim genellikle çizim onayı ve avans ödemesi alındıktan sonra başlar. Bu ünitede sipariş sürecindeki terimleri ve \"once / as soon as / until\" gibi zaman bağlaçlarını kullanmayı öğreneceksin.",
    points: [
      "PO = Purchase Order (satın alma siparişi); order confirmation = sipariş teyidi.",
      "proforma invoice = proforma fatura; deposit / down payment = avans / peşinat; balance = kalan bakiye.",
      "drawing approval = çizim onayı; revision = revizyon (Rev. A, Rev. B...).",
      "Zaman bağlaçlarından sonra gelecek zaman yerine Present Simple: \"Once we receive the deposit, we will start production.\"",
      "\"We acknowledge receipt of your PO\" = Siparişinizi aldığımızı teyit ederiz (resmi)."
    ],
    examples: [
      { en: "We acknowledge receipt of your purchase order No. 4512.", tr: "4512 numaralı satın alma siparişinizi aldığımızı teyit ederiz." },
      { en: "Once we receive the signed drawings, we will start production.", tr: "İmzalı çizimleri alır almaz üretime başlayacağız." },
      { en: "The balance is payable before shipment.", tr: "Kalan bakiye sevkiyattan önce ödenir." },
      { en: "Please note that drawing Rev. B replaces Rev. A.", tr: "Lütfen Rev. B çiziminin Rev. A'nın yerine geçtiğini not edin." }
    ]
  },
  cards: [
    { en: "purchase order (PO)", tr: "satın alma siparişi", ex: "Please send us your PO with the delivery address." },
    { en: "order confirmation", tr: "sipariş teyidi", ex: "You will receive our order confirmation within two days." },
    { en: "proforma invoice", tr: "proforma fatura", ex: "We have attached the proforma invoice for the deposit." },
    { en: "deposit / down payment", tr: "avans / peşinat", ex: "Production starts after we receive the deposit." },
    { en: "balance", tr: "kalan bakiye", ex: "The balance is due before shipment." },
    { en: "drawing approval", tr: "çizim onayı", ex: "We are still waiting for drawing approval." },
    { en: "revision (Rev.)", tr: "revizyon", ex: "Please use the latest revision of the drawing." },
    { en: "to acknowledge receipt", tr: "alındığını teyit etmek", ex: "We acknowledge receipt of your order." },
    { en: "to place an order", tr: "sipariş vermek", ex: "We would like to place an order for twenty panes." },
    { en: "delivery date", tr: "teslim tarihi", ex: "Can you confirm the delivery date?" },
    { en: "bank transfer", tr: "banka havalesi", ex: "Payment by bank transfer only." },
    { en: "to put on hold", tr: "beklemeye almak", ex: "The order is on hold until we get the deposit." }
  ],
  exercises: [
    { type: "mcq", q: "Once we ___ the deposit, we will start production.",
      options: ["will receive", "are receiving", "received", "receive"],
      answer: 3, explain: "once/when/as soon as sonrası gelecek anlamında Present Simple." },
    { type: "fill", q: "We would like to ___ an order for twenty bridge windows.",
      answers: ["place"], explain: "place an order = sipariş vermek." },
    { type: "match", pairs: [["purchase order", "satın alma siparişi"], ["proforma invoice", "proforma fatura"], ["deposit", "avans"], ["balance", "kalan bakiye"], ["drawing approval", "çizim onayı"]],
      explain: "Sipariş süreci terimleri." },
    { type: "order", answer: "We acknowledge receipt of your purchase order",
      tr: "Satın alma siparişinizi aldığımızı teyit ederiz.", explain: "Resmi teyit kalıbı." },
    { type: "mcq", q: "\"The order is on hold.\" This means:",
      options: ["The order is finished.", "The order is cancelled.", "The order is paused for now.", "The order has shipped."],
      answer: 2, explain: "on hold = beklemede, geçici olarak durdurulmuş." },
    { type: "fill", q: "The ___ (kalan bakiye) is payable before shipment.",
      answers: ["balance"], explain: "balance = kalan bakiye." },
    { type: "mcq", q: "Which drawing should production use?",
      options: ["The first revision", "Any revision", "The oldest one", "The latest approved revision"],
      answer: 3, explain: "Üretim her zaman son onaylı revizyonu kullanır." },
    { type: "listen", text: "Please send us the signed drawings by Friday.",
      tr: "Lütfen imzalı çizimleri bize cumaya kadar gönderin." },
    { type: "order", answer: "We will start production as soon as you approve the drawings",
      tr: "Çizimleri onaylar onaylamaz üretime başlayacağız.", explain: "as soon as + Present Simple." },
    { type: "mcq", q: "A customer changes a dimension after confirmation. The best reply:",
      options: ["No, impossible.", "OK we change, no problem, no drawing.", "Noted. We will issue Rev. B of the drawing and send it for your approval.", "Why did you change it?"],
      answer: 2, explain: "Değişiklik yeni bir revizyon ve onayla yönetilir." },
    { type: "fill", q: "We will not ship the goods ___ the balance has been paid.",
      answers: ["until", "before", "unless"], explain: "until = ...-e kadar (ödeme yapılana kadar)." },
    { type: "listen", text: "Production starts after we receive the deposit.",
      tr: "Üretim avansı aldıktan sonra başlar." },
    { type: "mcq", q: "Small talk with a buyer: \"How was your weekend?\" Natural answer:",
      options: ["It was lovely, thanks. We went to the seaside. How about yours?", "Weekend is good.", "I was in weekend.", "Thanks, my weekend has been good last Sunday."],
      answer: 0, explain: "Doğal cevap + karşı soru (How about yours?)." }
  ]
});

// ---------------------------------------------------------------- 07
units.push({
  id: "marine-07",
  title: "Standartlar ve Sertifikasyon",
  level: "B2",
  week: 4,
  intro: {
    tr: "Gemi camı satışında sertifika her şeydir. Müşteriler ürünün ilgili ISO standartlarına, SOLAS kurallarına ve klas kuruluşu gereksinimlerine uygun olduğunu görmek ister. AB bayraklı gemiler için MED (Denizcilik Teçhizatı Direktifi) kapsamındaki ürünlerde \"wheelmark\" (dümen işareti) aranır. Bu ünitede sertifika dilini ve edilgen yapıyı (\"is certified by\", \"has been approved\") çalışacaksın.",
    points: [
      "ISO 21005: gemi pencere ve lombozları için ısıl temperli emniyet camı; ISO 1095: lombozlar için temperli emniyet camı; ISO 3903: gemilerin dikdörtgen pencereleri; ISO 614: cam levhalar için zımba (punch) yöntemiyle tahribatsız dayanım testi.",
      "SOLAS ve IMO kuralları uluslararası güvenliği belirler; klas kuruluşları (DNV, ABS, Lloyd's Register, Bureau Veritas) gemiyi ve ekipmanı onaylar.",
      "type approval = tip onayı (ürün tasarımının onayı); class certificate = klas sertifikası.",
      "surveyor = sörvey uzmanı / klas sörveyörü; witness test = tanıklı test (sörveyör izlerken yapılan test).",
      "\"comply with / be in compliance with\" = ... ile uyumlu olmak."
    ],
    examples: [
      { en: "Our toughened panes are tested according to ISO 614.", tr: "Temperli camlarımız ISO 614'e göre test edilir." },
      { en: "The product is type approved by DNV and has MED certification.", tr: "Ürün DNV tip onaylıdır ve MED sertifikasına sahiptir." },
      { en: "The surveyor will witness the test next Tuesday.", tr: "Sörveyör testi önümüzdeki salı yerinde izleyecek." },
      { en: "All windows comply with SOLAS requirements.", tr: "Tüm pencereler SOLAS gerekliliklerine uygundur." }
    ]
  },
  cards: [
    { en: "standard", tr: "standart", ex: "Which standard should the glass comply with?" },
    { en: "SOLAS", tr: "Denizde Can Güvenliği Sözleşmesi", ex: "SOLAS sets the safety rules for passenger ships." },
    { en: "IMO", tr: "Uluslararası Denizcilik Örgütü", ex: "IMO is a United Nations agency." },
    { en: "MED / wheelmark", tr: "Denizcilik Teçhizatı Direktifi / dümen işareti", ex: "EU-flagged ships need wheelmarked equipment." },
    { en: "type approval", tr: "tip onayı", ex: "Our type approval certificate is valid until 2028." },
    { en: "class certificate", tr: "klas sertifikası", ex: "The yard asked for a class certificate for each batch." },
    { en: "classification society", tr: "klas kuruluşu", ex: "DNV and ABS are classification societies." },
    { en: "surveyor", tr: "sörveyör / klas denetçisi", ex: "The surveyor checked the test reports." },
    { en: "witness test", tr: "tanıklı test", ex: "The client wants a witness test at our factory." },
    { en: "to comply with", tr: "... ile uyumlu olmak / uymak", ex: "The glass complies with ISO 21005." },
    { en: "certificate of conformity", tr: "uygunluk belgesi", ex: "A certificate of conformity is shipped with every order." },
    { en: "valid until", tr: "... tarihine kadar geçerli", ex: "The certificate is valid until March." }
  ],
  exercises: [
    { type: "match", pairs: [["type approval", "tip onayı"], ["surveyor", "sörveyör"], ["witness test", "tanıklı test"], ["classification society", "klas kuruluşu"], ["certificate of conformity", "uygunluk belgesi"]],
      explain: "Sertifikasyon terimleri." },
    { type: "mcq", q: "Which of these is a classification society?",
      options: ["SOLAS", "ISO 3903", "Lloyd's Register", "MED"],
      answer: 2, explain: "Lloyd's Register bir klas kuruluşudur; diğerleri sözleşme/standart/direktif." },
    { type: "mcq", q: "What is the \"wheelmark\"?",
      options: ["A scratch made by a wiper", "A type of tinted glass", "A US Navy standard", "The EU marking for equipment approved under the Marine Equipment Directive"],
      answer: 3, explain: "Wheelmark, MED kapsamında onaylı denizcilik teçhizatı işaretidir." },
    { type: "fill", q: "All our side scuttle glass ___ with ISO 1095.",
      answers: ["complies"], explain: "comply with; tekil özne (glass) → complies." },
    { type: "fill", q: "The product ___ (approve) by Bureau Veritas last year.",
      answers: ["was approved"], hint: "passive, past", explain: "Geçmişte, edilgen: was approved." },
    { type: "order", answer: "The surveyor will witness the test at our factory",
      tr: "Sörveyör testi fabrikamızda yerinde izleyecek.", explain: "witness (fiil) = tanıklık etmek, yerinde izlemek." },
    { type: "mcq", q: "Which ISO standard covers ships' ordinary rectangular windows?",
      options: ["ISO 3903", "ISO 9001", "ISO 614", "ISO 14001"],
      answer: 0, explain: "ISO 3903: gemilerin dikdörtgen pencereleri." },
    { type: "listen", text: "Our type approval certificate is valid until next year.",
      tr: "Tip onay sertifikamız gelecek yıla kadar geçerli." },
    { type: "mcq", q: "Customer: \"Can you send us the class certificate?\" Best reply:",
      options: ["Of course. I'll send it over this afternoon.", "Of course. I'll sending it this afternoon.", "Sure, I am send it.", "No problem, it sent."],
      answer: 0, explain: "will + yalın fiil: I'll send." },
    { type: "order", answer: "Has the design been approved by the classification society",
      tr: "Tasarım klas kuruluşu tarafından onaylandı mı?", explain: "Present Perfect edilgen soru: Has ... been approved?" },
    { type: "fill", q: "ISO 614 describes a ___ method for testing toughened panes without destroying them.",
      answers: ["punch", "non-destructive"], explain: "ISO 614: zımba (punch) yöntemiyle tahribatsız test." },
    { type: "listen", text: "All windows comply with SOLAS requirements.",
      tr: "Tüm pencereler SOLAS gerekliliklerine uygundur." },
    { type: "mcq", q: "Which standard is about thermally toughened safety glass for ship windows and side scuttles?",
      options: ["ISO 21005", "ISO 9001", "ISO 45001", "ISO 3903"],
      answer: 0, explain: "ISO 21005: pencere ve lombozlar için ısıl temperli emniyet camı." }
  ]
});

// ---------------------------------------------------------------- 08
units.push({
  id: "marine-08",
  title: "Test ve Kalite",
  level: "B2",
  week: 4,
  intro: {
    tr: "Müşteriler ve sörveyörler test raporlarını detaylı okur. Darbe testi, kırılma (parçalanma) testi, hidrostatik basınç testi, heat soak testi ve yangın dayanımı en sık geçen konulardır. Bu ünitede test sonuçlarını raporlarken kullanılan edilgen yapıları ve \"pass / fail\" dilini öğreneceksin.",
    points: [
      "impact test = darbe testi; fragmentation test = kırılma/parçalanma testi (temperli camın küçük parçalara ayrılıp ayrılmadığı).",
      "hydrostatic / pressure test = hidrostatik basınç testi; heat soak test = nikel sülfür kaynaklı kendiliğinden kırılmayı azaltan ısı bekletme testi.",
      "Yangın sınıfları: A-60 (60 dakika yangın bütünlüğü ve yalıtım), A-0, B-15. Konuşurken: \"A sixty\", \"B fifteen\".",
      "optical distortion = optik bozulma (köprüüstünde görüş için kritik).",
      "Sonuç dili: \"The sample passed / failed the test.\", \"No defects were found.\", \"within tolerance\"."
    ],
    examples: [
      { en: "All samples passed the fragmentation test.", tr: "Tüm numuneler kırılma testini geçti." },
      { en: "The heat soak test reduces the risk of spontaneous breakage.", tr: "Heat soak testi kendiliğinden kırılma riskini azaltır." },
      { en: "This window is A-60 rated, so it can be used in fire divisions.", tr: "Bu pencere A-60 sınıflıdır, bu yüzden yangın bölmelerinde kullanılabilir." },
      { en: "No defects were found during the final inspection.", tr: "Son muayenede hiçbir kusur bulunmadı." }
    ]
  },
  cards: [
    { en: "impact test", tr: "darbe testi", ex: "The impact test simulates a heavy object hitting the glass." },
    { en: "fragmentation test", tr: "kırılma (parçalanma) testi", ex: "The fragmentation test counts the particles in a fifty millimetre square." },
    { en: "hydrostatic pressure test", tr: "hidrostatik basınç testi", ex: "Side scuttles are checked with a hydrostatic pressure test." },
    { en: "heat soak test", tr: "ısı bekletme (heat soak) testi", ex: "Heat soak testing reduces nickel sulphide breakage." },
    { en: "fire resistance", tr: "yangın dayanımı", ex: "What fire resistance does the bulkhead need?" },
    { en: "A-60 / A-0 / B-15", tr: "yangın bölmesi sınıfları", ex: "The window must be A-0 rated." },
    { en: "optical distortion", tr: "optik bozulma", ex: "Optical distortion must be minimal on the bridge." },
    { en: "QC report", tr: "kalite kontrol raporu", ex: "The QC report is attached to the delivery note." },
    { en: "inspection", tr: "muayene / kontrol", ex: "The final inspection is on Monday." },
    { en: "sample", tr: "numune", ex: "We will send three samples for testing." },
    { en: "to pass / to fail a test", tr: "testi geçmek / testten kalmak", ex: "One sample failed the impact test." },
    { en: "defect", tr: "kusur / hata", ex: "Small bubbles are a common defect in float glass." }
  ],
  exercises: [
    { type: "match", pairs: [["impact test", "darbe testi"], ["fragmentation test", "kırılma testi"], ["heat soak test", "ısı bekletme testi"], ["optical distortion", "optik bozulma"], ["sample", "numune"]],
      explain: "Test terimleri." },
    { type: "mcq", q: "What is the main purpose of a heat soak test?",
      options: ["To check the colour", "To bend the glass", "To reduce the risk of spontaneous breakage caused by nickel sulphide", "To clean the glass"],
      answer: 2, explain: "Heat soak testi NiS kaynaklı kendiliğinden kırılmayı azaltır." },
    { type: "fill", q: "All samples ___ (pass) the fragmentation test yesterday.",
      answers: ["passed"], explain: "yesterday → Past Simple." },
    { type: "mcq", q: "A fragmentation test checks that tempered glass breaks into ___.",
      options: ["large sharp pieces", "two halves", "small, relatively harmless particles", "a single crack"],
      answer: 2, explain: "Temperli cam küçük, görece zararsız parçalara ayrılmalıdır." },
    { type: "order", answer: "No defects were found during the final inspection",
      tr: "Son muayenede hiçbir kusur bulunmadı.", explain: "Edilgen: were found." },
    { type: "mcq", q: "An \"A-60\" division must resist fire for ___.",
      options: ["sixty seconds", "six hours", "sixty minutes", "sixty days"],
      answer: 2, explain: "A-60: 60 dakika yangın bütünlüğü ve yalıtım." },
    { type: "fill", q: "The test results are ___ tolerance, so the batch is approved.",
      answers: ["within"], explain: "within tolerance = tolerans dahilinde." },
    { type: "listen", text: "One sample failed the impact test.",
      tr: "Bir numune darbe testinden kaldı." },
    { type: "mcq", q: "Why is optical distortion important for bridge windows?",
      options: ["It changes the price.", "Officers need a clear, undistorted view.", "It makes the glass heavier.", "It affects the payment terms."],
      answer: 1, explain: "Köprüüstünde kesintisiz, bozulmasız görüş gerekir." },
    { type: "order", answer: "We will send three samples to the test laboratory",
      tr: "Test laboratuvarına üç numune göndereceğiz.", explain: "will + fiil + nesne + yer." },
    { type: "fill", q: "The side scuttles ___ (test) with a hydrostatic pressure test before every shipment.",
      answers: ["are tested"], hint: "passive, present", explain: "Rutin işlem, edilgen geniş zaman: are tested." },
    { type: "listen", text: "The quality control report is attached.",
      tr: "Kalite kontrol raporu ektedir." },
    { type: "mcq", q: "Surveyor: \"Can I see the QC report for batch twelve?\" Best answer:",
      options: ["Here it is. All results are within tolerance.", "I not have it.", "Report is maybe somewhere.", "Yes, it is have."],
      answer: 0, explain: "Kibar, net ve dilbilgisel olarak doğru cevap." }
  ]
});

// ---------------------------------------------------------------- 09
units.push({
  id: "marine-09",
  title: "Üretim Süreci",
  level: "B2+",
  week: 5,
  intro: {
    tr: "Fabrika ziyaretinde ya da bir toplantıda üretim sürecini adım adım anlatman gerekebilir. Süreç anlatımında edilgen yapı (\"the glass is cut\") ve sıralama ifadeleri (first, then, after that, once, finally) kullanılır. Bu ünitede kesimden temperlemeye, laminasyondan son kontrole kadar tüm adımları İngilizce anlatmayı öğreneceksin.",
    points: [
      "Süreç anlatımı = edilgen geniş zaman: \"The panes are cut to size and then edged.\"",
      "Sıralama: First, ... Then, ... After that, ... Once ..., ... Finally, ...",
      "Delikler ve kenar işleme temperlemeden ÖNCE yapılır; temperli cam sonradan kesilemez veya delinemez.",
      "Laminasyon: camlar ara katmanla birleştirilir ve otoklavda ısı ve basınç altında pişirilir.",
      "\"Before being tempered, the glass is washed.\" gibi -ing yapıları B2+ seviyesinde metni akıcı kılar."
    ],
    examples: [
      { en: "First, the float glass is cut to size on a CNC cutting table.", tr: "İlk olarak float cam, CNC kesim masasında ölçüye göre kesilir." },
      { en: "All holes must be drilled before the glass is tempered.", tr: "Tüm delikler cam temperlenmeden önce delinmelidir." },
      { en: "The laminated panes are then processed in an autoclave.", tr: "Lamine camlar daha sonra otoklavda işlenir." },
      { en: "Once it has passed inspection, the glass is packed.", tr: "Muayeneyi geçtikten sonra cam paketlenir." }
    ]
  },
  cards: [
    { en: "cutting", tr: "kesim", ex: "Cutting is fully automated in our plant." },
    { en: "edging / edge grinding", tr: "kenar işleme / rodaj", ex: "Edging removes sharp edges and micro-cracks." },
    { en: "drilling", tr: "delme", ex: "Drilling must be done before tempering." },
    { en: "tempering furnace", tr: "temper fırını", ex: "Our tempering furnace can handle panes up to three metres." },
    { en: "quenching", tr: "ani soğutma (hava ile)", ex: "After heating, the glass is quenched with cold air." },
    { en: "lamination", tr: "laminasyon", ex: "Lamination takes place in a clean room." },
    { en: "autoclave", tr: "otoklav", ex: "The autoclave applies heat and pressure to bond the layers." },
    { en: "bending", tr: "bükme", ex: "Bending is needed for curved bridge windows." },
    { en: "screen printing", tr: "serigrafi baskı", ex: "A black screen-printed border hides the sealant." },
    { en: "heating elements", tr: "ısıtıcı elemanlar (teller)", ex: "Fine heating elements are embedded in the interlayer." },
    { en: "conductive coating", tr: "iletken kaplama", ex: "Some heated glass uses a transparent conductive coating." },
    { en: "clean room", tr: "temiz oda", ex: "Dust in the clean room can cause lamination defects." }
  ],
  exercises: [
    { type: "order", answer: "First the float glass is cut to size",
      tr: "İlk olarak float cam ölçüye göre kesilir.", explain: "Süreç anlatımı: edilgen geniş zaman." },
    { type: "mcq", q: "Why must holes be drilled before tempering?",
      options: ["Because tempered glass cannot be drilled without breaking", "Because it is cheaper after tempering", "Because the autoclave needs holes", "Because customers ask for it"],
      answer: 0, explain: "Temperli cam işlenirse kırılır; tüm işleme temperlemeden önce yapılır." },
    { type: "fill", q: "After heating, the glass ___ (quench) rapidly with cold air.",
      answers: ["is quenched"], hint: "passive, present", explain: "Süreç → edilgen geniş zaman: is quenched." },
    { type: "match", pairs: [["autoclave", "otoklav"], ["tempering furnace", "temper fırını"], ["screen printing", "serigrafi baskı"], ["bending", "bükme"], ["drilling", "delme"]],
      explain: "Üretim ekipmanı ve işlemleri." },
    { type: "mcq", q: "What does the autoclave do in lamination?",
      options: ["It cuts the glass.", "It cools the tempered glass.", "It prints the logo.", "It applies heat and pressure to bond the glass and interlayer."],
      answer: 3, explain: "Otoklav, ısı ve basınçla camı ve ara katmanı birleştirir." },
    { type: "fill", q: "Before ___ tempered, the glass is washed and inspected.",
      answers: ["being"], explain: "before + being + V3: edilgen -ing yapısı." },
    { type: "mcq", q: "Choose the best linking word: \"The panes are edged. ___, they are washed and dried.\"",
      options: ["Although", "Unless", "After that", "Despite"],
      answer: 2, explain: "Sıralama için \"After that\"." },
    { type: "listen", text: "All holes must be drilled before tempering.",
      tr: "Tüm delikler temperlemeden önce delinmelidir." },
    { type: "order", answer: "Once it has passed inspection the glass is packed",
      tr: "Muayeneyi geçtikten sonra cam paketlenir.", explain: "Once + Present Perfect, ana cümle edilgen." },
    { type: "mcq", q: "Why do bridge windows often have a black screen-printed border?",
      options: ["To make the glass stronger", "To reduce weight", "To hide the bonding sealant and protect it from UV", "To pass the impact test"],
      answer: 2, explain: "Serigrafi kenar, yapıştırıcıyı gizler ve UV'den korur." },
    { type: "fill", q: "Fine heating elements are ___ (gömülü) in the interlayer of heated glass.",
      answers: ["embedded"], explain: "embedded = gömülü." },
    { type: "listen", text: "Lamination takes place in a clean room.",
      tr: "Laminasyon temiz odada yapılır." },
    { type: "mcq", q: "Visitor on a factory tour: \"How long does the whole process take?\" Most natural reply:",
      options: ["It depends, but typically around ten working days from cutting to packing.", "It takes depend.", "Ten days it is taking.", "Process is long time."],
      answer: 0, explain: "\"It depends, but typically...\" doğal ve bilgilendirici." }
  ]
});

// ---------------------------------------------------------------- 10
units.push({
  id: "marine-10",
  title: "Ambalaj, Lojistik ve Incoterms",
  level: "B2+",
  week: 5,
  intro: {
    tr: "Cam ağır ve kırılgan bir yüktür; ambalaj ve teslim şekli hem fiyatı hem de riski belirler. Incoterms, satıcı ile alıcı arasındaki maliyet ve risk paylaşımını tanımlar. Bu ünitede ahşap sandık, A-sehpa, konşimento, çeki listesi ve ETA/ETD gibi lojistik terimlerini; ayrıca tahmin ve planlama dilini (\"is due to\", \"is expected to\") çalışacaksın.",
    points: [
      "EXW (Ex Works): alıcı malı fabrikadan alır; risk erken geçer. FOB: mal yükleme limanında gemiye yüklenince risk alıcıya geçer.",
      "CIF: satıcı varış limanına kadar navlun ve sigortayı öder, ama risk yükleme limanında geçer. DAP: satıcı malı belirlenen yere kadar getirir.",
      "bill of lading (B/L) = konşimento; packing list = çeki listesi; commercial invoice = ticari fatura.",
      "ETD = estimated time of departure (tahmini kalkış), ETA = estimated time of arrival (tahmini varış).",
      "\"The vessel is due to arrive on Monday.\" / \"The shipment is expected to clear customs by Friday.\""
    ],
    examples: [
      { en: "The glass is packed in seaworthy wooden crates.", tr: "Cam denize dayanıklı ahşap sandıklarda paketlenir." },
      { en: "Our price is FOB Izmir; freight and insurance are for the buyer's account.", tr: "Fiyatımız FOB İzmir'dir; navlun ve sigorta alıcıya aittir." },
      { en: "The ETD is the fifth of May and the ETA is the nineteenth.", tr: "Tahmini kalkış 5 Mayıs, tahmini varış 19 Mayıs." },
      { en: "Our freight forwarder will send you the bill of lading.", tr: "Nakliye komisyoncumuz konşimentoyu size gönderecek." }
    ]
  },
  cards: [
    { en: "wooden crate", tr: "ahşap sandık", ex: "Each crate holds up to twenty panes." },
    { en: "A-frame", tr: "A-sehpa (cam taşıma sehpası)", ex: "Large panes are shipped on steel A-frames." },
    { en: "EXW (Ex Works)", tr: "fabrikada teslim", ex: "Under EXW, the buyer collects from our factory." },
    { en: "FOB (Free On Board)", tr: "gemide teslim", ex: "FOB means risk passes when the goods are on board." },
    { en: "CIF (Cost, Insurance and Freight)", tr: "masraflar, sigorta ve navlun ödenmiş", ex: "We can quote CIF Rotterdam if you prefer." },
    { en: "DAP (Delivered At Place)", tr: "belirlenen yerde teslim", ex: "DAP shipyard means we deliver to the yard gate." },
    { en: "bill of lading (B/L)", tr: "konşimento", ex: "The original bill of lading was sent by courier." },
    { en: "packing list", tr: "çeki listesi", ex: "The packing list shows the weight of each crate." },
    { en: "customs clearance", tr: "gümrük işlemleri / gümrükleme", ex: "Customs clearance took two days." },
    { en: "ETA / ETD", tr: "tahmini varış / tahmini kalkış", ex: "Could you confirm the ETA at the shipyard?" },
    { en: "freight forwarder", tr: "nakliye komisyoncusu (forwarder)", ex: "Our freight forwarder will book the container." },
    { en: "fragile – handle with care", tr: "kırılabilir – dikkatli taşıyın", ex: "Every crate is marked 'Fragile – handle with care'." }
  ],
  exercises: [
    { type: "match", pairs: [["bill of lading", "konşimento"], ["packing list", "çeki listesi"], ["wooden crate", "ahşap sandık"], ["freight forwarder", "nakliye komisyoncusu"], ["customs clearance", "gümrükleme"]],
      explain: "Lojistik terimleri." },
    { type: "mcq", q: "Under which Incoterm does the buyer collect the goods from the seller's factory?",
      options: ["DAP", "CIF", "EXW", "FOB"],
      answer: 2, explain: "EXW: alıcı malı satıcının tesisinden alır." },
    { type: "mcq", q: "Under CIF, who pays the sea freight to the destination port?",
      options: ["The seller", "The buyer", "The shipyard's bank", "The surveyor"],
      answer: 0, explain: "CIF'te navlun ve sigortayı satıcı öder (risk yükleme limanında geçse de)." },
    { type: "fill", q: "The vessel is ___ to arrive in Hamburg on Monday.",
      answers: ["due", "expected", "scheduled"], explain: "be due to = ... yapması planlanmış olmak." },
    { type: "order", answer: "Could you confirm the ETA at the shipyard",
      tr: "Tersanedeki tahmini varış zamanını teyit edebilir misiniz?", explain: "Kibar soru: Could you confirm...?" },
    { type: "mcq", q: "\"ETD\" stands for ___.",
      options: ["Estimated Time of Delivery", "Export Transport Document", "Exact Time of Docking", "Estimated Time of Departure"],
      answer: 3, explain: "ETD = Estimated Time of Departure (tahmini kalkış)." },
    { type: "fill", q: "Freight and insurance are for the buyer's ___.",
      answers: ["account"], explain: "for the buyer's account = alıcıya ait." },
    { type: "listen", text: "The glass is packed in seaworthy wooden crates.",
      tr: "Cam denize dayanıklı ahşap sandıklarda paketlenir." },
    { type: "mcq", q: "Which document lists the contents and weight of each crate?",
      options: ["Packing list", "Bill of lading", "Proforma invoice", "Type approval"],
      answer: 0, explain: "Packing list = çeki listesi; içerik ve ağırlıkları gösterir." },
    { type: "order", answer: "Large panes are shipped on steel A-frames",
      tr: "Büyük camlar çelik A-sehpalar üzerinde sevk edilir.", explain: "Edilgen: are shipped." },
    { type: "mcq", q: "Customer: \"Can you deliver directly to our yard in Gdańsk?\" Which Incoterm fits best?",
      options: ["EXW Izmir", "FOB Izmir", "DAP Gdańsk shipyard", "None of them"],
      answer: 2, explain: "DAP: satıcı malı belirtilen yere (tersane) kadar getirir." },
    { type: "listen", text: "Our freight forwarder will book the container.",
      tr: "Nakliye komisyoncumuz konteyneri ayarlayacak." },
    { type: "fill", q: "The shipment is expected to ___ customs by Friday.",
      answers: ["clear"], explain: "clear customs = gümrükten çekmek / gümrüklemeyi tamamlamak." }
  ]
});

// ---------------------------------------------------------------- 11
units.push({
  id: "marine-11",
  title: "Teknik Toplantılar ve Video Görüşmeler",
  level: "B2+",
  week: 6,
  intro: {
    tr: "Gemi mimarlarıyla yapılan teknik toplantılarda gereksinimleri netleştirmek, anlamadığın yeri kibarca sormak ve teklifini gerekçelendirmek gerekir. Tasarım yükü, basınç, pencerenin konumu (örneğin üst yapının ön cephesi veya ilk kat) cam kalınlığını doğrudan etkiler. Bu ünitede netleştirme soruları, kibar müdahale ve video görüşme dilini çalışacaksın.",
    points: [
      "Netleştirme: \"Just to clarify, ...\", \"Do you mean ...?\", \"Could you elaborate on ...?\"",
      "Tekrar istemek: \"Sorry, you broke up. Could you repeat the last part?\"",
      "Söz almak: \"Can I just come in here?\", \"If I could add something...\"",
      "design load / design pressure = tasarım yükü / tasarım basıncı (kPa); position = pencerenin gemi üzerindeki konumu.",
      "Özetlemek: \"So, to sum up, we've agreed that...\" / \"Let me recap the action points.\""
    ],
    examples: [
      { en: "Just to clarify, is the design pressure fifty kilopascals?", tr: "Netleştirmek için soruyorum, tasarım basıncı elli kilopaskal mı?" },
      { en: "The required thickness depends on the position of the window and the design pressure.", tr: "Gereken kalınlık pencerenin konumuna ve tasarım basıncına bağlıdır." },
      { en: "Sorry, you're breaking up. Could you say that again?", tr: "Pardon, sesiniz kesiliyor. Tekrar söyleyebilir misiniz?" },
      { en: "Let me share my screen so we can look at the drawing together.", tr: "Ekranımı paylaşayım, çizime birlikte bakalım." }
    ]
  },
  cards: [
    { en: "just to clarify", tr: "netleştirmek gerekirse / sadece emin olmak için", ex: "Just to clarify, do you need heated glass on all windows?" },
    { en: "design load", tr: "tasarım yükü", ex: "What is the design load for the front windows?" },
    { en: "design pressure", tr: "tasarım basıncı", ex: "The design pressure is given in kilopascals." },
    { en: "position (of the window)", tr: "(pencerenin) konumu", ex: "Windows in the first tier of the front bulkhead need thicker glass." },
    { en: "superstructure", tr: "üst yapı", ex: "These windows are on the front of the superstructure." },
    { en: "to elaborate on", tr: "... hakkında ayrıntı vermek", ex: "Could you elaborate on the installation method?" },
    { en: "to break up (on a call)", tr: "(görüşmede) sesin kesilmesi", ex: "Sorry, you're breaking up." },
    { en: "to share one's screen", tr: "ekran paylaşmak", ex: "Can you share your screen, please?" },
    { en: "action points", tr: "yapılacaklar / aksiyon maddeleri", ex: "I'll email the action points after the call." },
    { en: "to recap", tr: "özetlemek", ex: "Let me quickly recap what we've agreed." },
    { en: "requirement", tr: "gereklilik / şart", ex: "Is this a class requirement or the owner's request?" },
    { en: "to be on mute", tr: "mikrofonu kapalı olmak", ex: "I think you're on mute." }
  ],
  exercises: [
    { type: "mcq", q: "You didn't hear the last sentence because the connection was bad. You say:",
      options: ["What?", "Repeat!", "Sorry, you broke up. Could you repeat the last part?", "I don't understand you English."],
      answer: 2, explain: "Kibar ve doğal tekrar isteme kalıbı." },
    { type: "fill", q: "Just to ___, is the design pressure given in kilopascals?",
      answers: ["clarify", "confirm"], explain: "Just to clarify = netleştirmek için." },
    { type: "order", answer: "The thickness depends on the position of the window",
      tr: "Kalınlık pencerenin konumuna bağlıdır.", explain: "depend on = ...-e bağlı olmak." },
    { type: "match", pairs: [["design pressure", "tasarım basıncı"], ["superstructure", "üst yapı"], ["requirement", "gereklilik"], ["action points", "aksiyon maddeleri"], ["to recap", "özetlemek"]],
      explain: "Teknik toplantı terimleri." },
    { type: "mcq", q: "You want to politely interrupt a naval architect. Best phrase:",
      options: ["Stop, I talk now.", "Can I just come in here for a second?", "Be quiet please.", "Wait wait wait."],
      answer: 1, explain: "Kibar söz alma: \"Can I just come in here?\"" },
    { type: "fill", q: "Could you ___ on the installation method you have in mind?",
      answers: ["elaborate"], explain: "elaborate on = ayrıntılandırmak." },
    { type: "mcq", q: "Naval architect: \"These windows are in the first tier of the front bulkhead.\" Why is this important?",
      options: ["Exposed front windows usually face higher design pressures, so thicker glass may be needed.", "Because the colour must change.", "Because they don't need certificates.", "It's not important."],
      answer: 0, explain: "Ön cephedeki alt kat pencereler daha yüksek basınca maruz kalır." },
    { type: "listen", text: "I think you are on mute.",
      tr: "Sanırım mikrofonunuz kapalı." },
    { type: "order", answer: "Let me share my screen so we can see the drawing",
      tr: "Ekranımı paylaşayım ki çizimi görebilelim.", explain: "Let me + fiil; so (that) amaç bildirir." },
    { type: "mcq", q: "Is this a class requirement ___ just the owner's preference?",
      options: ["and", "so", "but", "or"],
      answer: 3, explain: "İki seçenek arasında soru: or." },
    { type: "listen", text: "Let me quickly recap what we have agreed.",
      tr: "Üzerinde anlaştığımız şeyleri hızlıca özetleyeyim." },
    { type: "fill", q: "I'll send you the action points ___ the call.",
      answers: ["after"], explain: "after the call = görüşmeden sonra." },
    { type: "mcq", q: "Which sentence best ends a video call?",
      options: ["OK bye, finish.", "Call is over now, go.", "Thanks, everyone. I'll circulate the minutes by tomorrow. Have a good day.", "We are finished the meeting."],
      answer: 2, explain: "Teşekkür + takip adımı + kibar kapanış." }
  ]
});

// ---------------------------------------------------------------- 12
units.push({
  id: "marine-12",
  title: "Şikayetler ve Hasar Talepleri",
  level: "B2+",
  week: 6,
  intro: {
    tr: "Nakliyede kırılma, delaminasyon, çizik veya yanlış ölçü gibi sorunlar olduğunda müşteri sinirli olabilir. Diplomatik dil, sorumluluğu hemen kabul etmeden empati göstermeyi ve çözüm odaklı olmayı sağlar. Bu ünitede özür, inceleme, kök neden analizi, düzeltici faaliyet ve telafi (yedek cam, alacak dekontu) dilini öğreneceksin.",
    points: [
      "Empati: \"We are sorry to hear about...\", \"We fully understand your concern.\"",
      "Sorumluluğu erken kabul etmeden: \"We are looking into the matter and will revert as soon as possible.\"",
      "Kanıt istemek: \"Could you send us photos of the damaged crates and the delivery note?\"",
      "root cause = kök neden; corrective action = düzeltici faaliyet; replacement = yedek / yenisi; credit note = alacak dekontu.",
      "Yumuşatma: \"It appears that...\", \"It seems the crate may have been dropped.\""
    ],
    examples: [
      { en: "We are very sorry to hear that two panes arrived broken.", tr: "İki camın kırık ulaştığını duyduğumuza çok üzüldük." },
      { en: "Could you please send us photos of the damage and the crate markings?", tr: "Lütfen hasarın ve sandık işaretlerinin fotoğraflarını gönderebilir misiniz?" },
      { en: "Our investigation shows that the root cause was insufficient edge sealing.", tr: "İncelememiz kök nedenin yetersiz kenar sızdırmazlığı olduğunu gösteriyor." },
      { en: "We will send replacement panes free of charge and issue a credit note for the freight.", tr: "Yedek camları ücretsiz göndereceğiz ve navlun için alacak dekontu düzenleyeceğiz." }
    ]
  },
  cards: [
    { en: "breakage in transit", tr: "nakliye sırasında kırılma", ex: "Breakage in transit is covered by insurance." },
    { en: "delamination", tr: "delaminasyon (katmanların ayrılması)", ex: "Delamination appeared at the edges after two years." },
    { en: "scratch", tr: "çizik", ex: "There are fine scratches on the outer surface." },
    { en: "wrong dimensions", tr: "yanlış ölçüler", ex: "Three panes were delivered with wrong dimensions." },
    { en: "claim", tr: "hasar talebi / reklamasyon", ex: "The customer has filed a claim for the broken glass." },
    { en: "root cause", tr: "kök neden", ex: "We are still investigating the root cause." },
    { en: "corrective action", tr: "düzeltici faaliyet", ex: "We have taken corrective action in the packing area." },
    { en: "replacement", tr: "yenisi / yedek (değişim ürünü)", ex: "Replacement panes will be shipped next week." },
    { en: "credit note", tr: "alacak dekontu / iade faturası", ex: "We will issue a credit note for the damaged items." },
    { en: "to look into", tr: "incelemek / araştırmak", ex: "We are looking into the matter." },
    { en: "to revert (to someone)", tr: "(birine) dönüş yapmak", ex: "We will revert to you by Thursday." },
    { en: "goodwill gesture", tr: "iyi niyet jesti", ex: "As a goodwill gesture, we will cover the freight." }
  ],
  exercises: [
    { type: "mcq", q: "A customer reports broken glass. Best first sentence:",
      options: ["It's not our fault.", "Why didn't you check it?", "Glass breaks sometimes, sorry.", "We are very sorry to hear about the damage. We are looking into it."],
      answer: 3, explain: "Empati + inceleme sözü; suçlama yok." },
    { type: "match", pairs: [["root cause", "kök neden"], ["corrective action", "düzeltici faaliyet"], ["credit note", "alacak dekontu"], ["delamination", "delaminasyon"], ["goodwill gesture", "iyi niyet jesti"]],
      explain: "Şikayet ve telafi terimleri." },
    { type: "fill", q: "We are looking ___ the matter and will revert to you shortly.",
      answers: ["into"], explain: "look into = incelemek." },
    { type: "order", answer: "Could you please send us photos of the damaged crates",
      tr: "Lütfen hasarlı sandıkların fotoğraflarını bize gönderebilir misiniz?", explain: "Kanıt isterken kibar rica." },
    { type: "mcq", q: "Which sentence is the most diplomatic?",
      options: ["It appears that the crate may have been damaged during unloading.", "Your forklift driver dropped the crate.", "You broke it.", "The driver is guilty."],
      answer: 0, explain: "\"It appears ... may have been\" yumuşatma ve suçlamadan kaçınma." },
    { type: "fill", q: "As a goodwill ___, we will cover the cost of freight.",
      answers: ["gesture"], explain: "goodwill gesture = iyi niyet jesti." },
    { type: "mcq", q: "Edges of a laminated pane look cloudy and the layers are separating. This is called ___.",
      options: ["fragmentation", "tempering", "delamination", "bending"],
      answer: 2, explain: "Katmanların ayrılması = delamination." },
    { type: "listen", text: "We will send replacement panes free of charge.",
      tr: "Yedek camları ücretsiz göndereceğiz." },
    { type: "order", answer: "We have already taken corrective action in our packing department",
      tr: "Paketleme bölümümüzde düzeltici faaliyeti zaten başlattık.", explain: "Present Perfect + already." },
    { type: "mcq", q: "\"We will revert to you by Thursday\" means:",
      options: ["We will return the goods.", "We will reply to you by Thursday.", "We will cancel the order.", "We will visit you on Thursday."],
      answer: 1, explain: "revert (iş İngilizcesi) = dönüş yapmak / cevap vermek." },
    { type: "fill", q: "Our investigation shows that the root cause ___ insufficient edge sealing.",
      answers: ["was"], explain: "Geçmişteki sorunun nedeni → was." },
    { type: "listen", text: "We fully understand your concern.",
      tr: "Endişenizi tamamen anlıyoruz." },
    { type: "mcq", q: "Three panes arrived with wrong dimensions due to our error. Best solution sentence:",
      options: ["We will produce three new panes with priority and ship them by air at our cost.", "Please cut them yourself.", "Maybe use them anyway.", "This happens to everybody."],
      answer: 0, explain: "Hatayı üstlenip somut, hızlı çözüm sunmak en profesyonel yaklaşım." }
  ]
});

// ---------------------------------------------------------------- 13
units.push({
  id: "marine-13",
  title: "Pazarlık",
  level: "C1",
  week: 7,
  intro: {
    tr: "C1 seviyesinde pazarlık, fiyatı korurken ilişkiyi de korumaktır. Karşı teklif sunmak, şartlı ifadeler kullanmak (\"If you could..., we would...\") ve taviz verirken karşılığında bir şey istemek temel becerilerdir. Bu ünitede hacim indirimi, ortada buluşmak, çerçeve anlaşma ve pazarlığa kapalı noktaları ifade etmeyi öğreneceksin.",
    points: [
      "Şartlı teklif: \"If you increased the volume to two hundred units, we could offer an extra three percent.\"",
      "Karşılığında şart: \"We could agree to that, provided that / on condition that you pay forty percent upfront.\"",
      "Ortada buluşmak: \"Shall we meet halfway?\", \"Let's split the difference.\"",
      "Kesin sınır (kibarca): \"I'm afraid the lead time is non-negotiable because of the furnace schedule.\"",
      "framework agreement = çerçeve anlaşma (birden fazla gemi/proje için sabit fiyat ve koşullar)."
    ],
    examples: [
      { en: "If you committed to all four vessels, we could offer a volume discount.", tr: "Dört geminin tamamını taahhüt ederseniz, hacim indirimi sunabiliriz." },
      { en: "I'm afraid we can't go below that price without changing the specification.", tr: "Korkarım spesifikasyonu değiştirmeden bu fiyatın altına inemeyiz." },
      { en: "We could accept that, provided that the balance is paid before shipment.", tr: "Bakiye sevkiyattan önce ödenmesi şartıyla bunu kabul edebiliriz." },
      { en: "How about a framework agreement for the whole series?", tr: "Tüm seri için bir çerçeve anlaşmaya ne dersiniz?" }
    ]
  },
  cards: [
    { en: "counter-offer", tr: "karşı teklif", ex: "We have reviewed your counter-offer carefully." },
    { en: "volume discount", tr: "hacim (miktar) indirimi", ex: "A volume discount applies above five hundred square metres." },
    { en: "to meet halfway", tr: "ortada buluşmak / orta yolu bulmak", ex: "Could we meet halfway on the freight cost?" },
    { en: "to split the difference", tr: "farkı ikiye bölmek", ex: "Let's split the difference and call it a deal." },
    { en: "non-negotiable", tr: "pazarlığa kapalı", ex: "Safety requirements are non-negotiable." },
    { en: "compromise", tr: "uzlaşma / orta yol", ex: "I think this is a fair compromise for both sides." },
    { en: "framework agreement", tr: "çerçeve anlaşma", ex: "The framework agreement covers six sister vessels." },
    { en: "provided that", tr: "... şartıyla", ex: "We accept, provided that the order is confirmed this week." },
    { en: "bottom line", tr: "en son nokta / alt sınır", ex: "This is our bottom line, I'm afraid." },
    { en: "to commit to", tr: "taahhüt etmek", ex: "Can you commit to a minimum annual volume?" },
    { en: "sister vessel", tr: "kardeş gemi (aynı tasarım)", ex: "The same windows will be used on both sister vessels." },
    { en: "to have some flexibility", tr: "biraz esneklik olmak", ex: "We have some flexibility on payment terms." }
  ],
  exercises: [
    { type: "mcq", q: "If you ___ the quantity, we could offer a better price.",
      options: ["will increase", "increasing", "have increased", "increased"],
      answer: 3, explain: "Second conditional: If + past, could + V1 (varsayımsal teklif)." },
    { type: "fill", q: "We could accept these terms, provided ___ the deposit is paid within seven days.",
      answers: ["that"], explain: "provided that = ... şartıyla." },
    { type: "match", pairs: [["counter-offer", "karşı teklif"], ["non-negotiable", "pazarlığa kapalı"], ["framework agreement", "çerçeve anlaşma"], ["compromise", "uzlaşma"], ["bottom line", "alt sınır"]],
      explain: "Pazarlık terimleri." },
    { type: "mcq", q: "Which is the most diplomatic way to refuse a lower price?",
      options: ["No. Never.", "That price is stupid.", "I'm afraid we can't go below that without changing the specification.", "You are asking too much, forget it."],
      answer: 2, explain: "\"I'm afraid...\" + gerekçe = kibar ret." },
    { type: "order", answer: "Shall we meet halfway on the freight cost",
      tr: "Navlun masrafında ortada buluşalım mı?", explain: "Shall we...? öneri kalıbı." },
    { type: "mcq", q: "Buyer: \"Your price is ten percent too high.\" Best C1-level response:",
      options: ["OK, ten percent discount.", "Other companies are bad.", "Could you tell me which items you're comparing? Our price includes heat soak testing and class certificates.", "No discount possible ever."],
      answer: 2, explain: "Önce soru sor, sonra değeri (dahil olan hizmetleri) vurgula." },
    { type: "fill", q: "Safety requirements are ___; we cannot reduce the glass thickness.",
      answers: ["non-negotiable"], explain: "non-negotiable = pazarlığa kapalı." },
    { type: "listen", text: "Let's split the difference and call it a deal.",
      tr: "Farkı bölüşelim ve anlaşalım." },
    { type: "order", answer: "If you committed to all four vessels we could offer a discount",
      tr: "Dört geminin tamamını taahhüt etseydiniz indirim sunabilirdik.", explain: "Second conditional." },
    { type: "mcq", q: "You give a concession. What should you ask for in return?",
      options: ["Nothing, to be friendly.", "A lower quality standard.", "A gift.", "Something of value, such as faster payment or a larger order."],
      answer: 3, explain: "Taviz verirken karşılığında değer iste (ödeme, hacim)." },
    { type: "fill", q: "Can you ___ to a minimum annual volume of two thousand square metres?",
      answers: ["commit"], explain: "commit to = taahhüt etmek." },
    { type: "listen", text: "We have some flexibility on payment terms.",
      tr: "Ödeme koşullarında biraz esnekliğimiz var." },
    { type: "mcq", q: "\"This is our bottom line\" means:",
      options: ["This is the lowest we can go.", "This is the last line of the contract.", "This is our best product.", "This is the delivery deadline."],
      answer: 0, explain: "bottom line = inebileceğimiz son nokta." }
  ]
});

// ---------------------------------------------------------------- 14
units.push({
  id: "marine-14",
  title: "Fuarlar ve Sunum",
  level: "C1",
  week: 7,
  intro: {
    tr: "SMM Hamburg, Posidonia (Atina) ve Europort (Rotterdam) denizcilik sektörünün en önemli fuarlarıdır. Standına gelen ziyaretçiyle 30 saniyede bağlantı kurmalı, firmanın farkını (USP) net söylemeli ve görüşmeyi bir sonraki adıma taşımalısın. Bu ünitede asansör konuşması (elevator pitch), sohbet başlatma ve sunum kalıplarını çalışacaksın.",
    points: [
      "Sohbet başlatma: \"Are you enjoying the show?\", \"What brings you to SMM this year?\"",
      "Asansör konuşması: kim olduğun + ne çözdüğün + kanıt + soru. \"We help shipyards cut lead times on certified bridge glass...\"",
      "USP = unique selling point (benzersiz satış noktası).",
      "Sunumda yönlendirme: \"Let me walk you through...\", \"Moving on to...\", \"To sum up...\"",
      "Takip: \"Could I take your card? I'll send you our catalogue and references next week.\""
    ],
    examples: [
      { en: "What brings you to Posidonia this year?", tr: "Bu yıl sizi Posidonia'ya getiren ne?" },
      { en: "We help shipyards get type-approved bridge glass in under five weeks.", tr: "Tersanelerin tip onaylı köprüüstü camını beş haftadan kısa sürede almasını sağlıyoruz." },
      { en: "Our main USP is that we test every batch in-house.", tr: "Temel farkımız her partiyi firma içinde test etmemizdir." },
      { en: "Let me walk you through our new heated glass range.", tr: "Size yeni ısıtmalı cam ürün yelpazemizi adım adım anlatayım." }
    ]
  },
  cards: [
    { en: "trade fair / trade show", tr: "ticaret fuarı", ex: "SMM Hamburg is the leading maritime trade fair." },
    { en: "stand / booth", tr: "stand", ex: "Come and visit us at our stand in Hall B." },
    { en: "elevator pitch", tr: "asansör konuşması (kısa tanıtım)", ex: "Prepare a thirty-second elevator pitch." },
    { en: "USP (unique selling point)", tr: "benzersiz satış noktası / fark", ex: "Short lead time is our main USP." },
    { en: "to walk someone through", tr: "birine adım adım anlatmak", ex: "Let me walk you through the test results." },
    { en: "lead (sales)", tr: "potansiyel müşteri", ex: "We collected over eighty leads at the show." },
    { en: "to follow up", tr: "takip etmek", ex: "I'll follow up with an email next week." },
    { en: "business card", tr: "kartvizit", ex: "May I have your business card?" },
    { en: "catalogue / brochure", tr: "katalog / broşür", ex: "Here is our new product brochure." },
    { en: "reference project", tr: "referans proje", ex: "This cruise ship is one of our reference projects." },
    { en: "to stand out", tr: "öne çıkmak / sivrilmek", ex: "What makes your company stand out?" },
    { en: "keynote / talk", tr: "açılış konuşması / sunum", ex: "Did you see the keynote on green shipping?" }
  ],
  exercises: [
    { type: "mcq", q: "Best way to start a conversation with a visitor at your stand:",
      options: ["Buy our glass?", "Our price is low.", "Hello! What brings you to the show this year?", "Sit down please and listen."],
      answer: 2, explain: "Açık uçlu, samimi bir soru ile başla." },
    { type: "fill", q: "Let me walk you ___ our new heated glass range.",
      answers: ["through"], explain: "walk someone through = adım adım anlatmak." },
    { type: "order", answer: "What makes your company stand out from your competitors",
      tr: "Firmanızı rakiplerinizden ayıran nedir?", explain: "stand out from = -den öne çıkmak." },
    { type: "match", pairs: [["trade fair", "ticaret fuarı"], ["lead", "potansiyel müşteri"], ["business card", "kartvizit"], ["reference project", "referans proje"], ["to follow up", "takip etmek"]],
      explain: "Fuar terimleri." },
    { type: "mcq", q: "Which is the strongest elevator pitch?",
      options: ["We are a glass company. We make glass. Good glass.", "We supply type-approved marine glass to over forty countries, test every batch in-house, and typically deliver in four weeks. What kind of projects are you working on?", "Our company was founded and has many machines and people work there.", "Please look at our brochure, all information there."],
      answer: 1, explain: "Kim + kanıt + fark + soru: etkili asansör konuşması." },
    { type: "fill", q: "Short lead time is our main ___ (benzersiz satış noktası).",
      answers: ["USP", "unique selling point"], explain: "USP = unique selling point." },
    { type: "mcq", q: "During a presentation, which phrase moves to the next topic?",
      options: ["Moving on to certification, ...", "Finish this, ...", "Next is coming, ...", "And so, and so, ..."],
      answer: 0, explain: "\"Moving on to...\" sunumda geçiş ifadesidir." },
    { type: "listen", text: "Come and visit us at our stand in Hall B.",
      tr: "Bizi B Salonu'ndaki standımızda ziyaret edin." },
    { type: "order", answer: "I will follow up with an email next week",
      tr: "Gelecek hafta bir e-postayla sizinle irtibata geçeceğim.", explain: "follow up with = ... ile takip etmek." },
    { type: "mcq", q: "Small talk at the evening reception: \"Is this your first time in Hamburg?\" Best answer:",
      options: ["No, it's my third SMM actually. I love the city, especially the harbour area.", "Yes first.", "Hamburg is city.", "I came here by plane."],
      answer: 0, explain: "Cevap + ek bilgi = sohbeti sürdürür." },
    { type: "fill", q: "Could I ___ your business card? I'll send you our references.",
      answers: ["have", "take", "get"], explain: "Could I have/take your card? kibar istek." },
    { type: "listen", text: "This cruise ship is one of our reference projects.",
      tr: "Bu yolcu gemisi referans projelerimizden biridir." },
    { type: "mcq", q: "Where is the SMM trade fair held?",
      options: ["Athens", "Rotterdam", "Hamburg", "Oslo"],
      answer: 2, explain: "SMM Hamburg'da; Posidonia Atina'da; Europort Rotterdam'da yapılır." }
  ]
});

// ---------------------------------------------------------------- 15
units.push({
  id: "marine-15",
  title: "Satış Sonrası, Montaj ve Bakım",
  level: "C1",
  week: 8,
  intro: {
    tr: "Satış sonrası destek uzun vadeli müşteri ilişkisini belirler. Montaj talimatları, camlama (glazing), yapıştırma (bonding), yedek parçalar ve garanti koşulları net anlatılmalıdır. Bu ünitede talimat dilini (emir kipi, \"must / should / must not\"), garanti koşullarını ve \"should you need...\" gibi resmi C1 yapılarını çalışacaksın.",
    points: [
      "Talimat: \"Clean the frame thoroughly before applying the primer.\" (emir kipi)",
      "Zorunluluk derecesi: must (zorunlu) > should (tavsiye) > may (izin). Yasak: must not.",
      "glazing = camlama (camın kasaya takılması); bonding = yapıştırma (yapısal yapıştırıcı ile).",
      "Garanti: \"The warranty covers manufacturing defects for twenty-four months and does not cover improper installation.\"",
      "Resmi devrik şart: \"Should you need any spare parts, please contact our service team.\" (= If you need...)"
    ],
    examples: [
      { en: "Do not use metal tools directly against the glass edge.", tr: "Cam kenarına doğrudan metal alet kullanmayın." },
      { en: "The sealant must cure for at least twenty-four hours before the window is exposed to water.", tr: "Pencere suya maruz kalmadan önce mastik en az 24 saat kürlenmelidir." },
      { en: "Should you have any questions, please do not hesitate to contact us.", tr: "Herhangi bir sorunuz olursa lütfen bizimle iletişime geçmekten çekinmeyin." },
      { en: "We recommend keeping two spare panes on board.", tr: "Gemide iki yedek cam bulundurmanızı tavsiye ederiz." }
    ]
  },
  cards: [
    { en: "installation instructions", tr: "montaj talimatları", ex: "Installation instructions are included in every crate." },
    { en: "glazing", tr: "camlama / cam takma", ex: "Glazing must be carried out by trained staff." },
    { en: "bonding", tr: "yapıştırma (yapısal)", ex: "Structural bonding requires a clean, dry surface." },
    { en: "primer", tr: "astar", ex: "Apply the primer and let it dry for ten minutes." },
    { en: "to cure", tr: "kürlenmek (kurumak/sertleşmek)", ex: "The adhesive needs twenty-four hours to cure." },
    { en: "setting block", tr: "takoz (cam altı oturma takozu)", ex: "Place the glass on two setting blocks." },
    { en: "spare parts", tr: "yedek parçalar", ex: "Spare parts can be shipped within forty-eight hours." },
    { en: "warranty", tr: "garanti", ex: "The warranty period is twenty-four months." },
    { en: "manufacturing defect", tr: "üretim hatası", ex: "The warranty covers manufacturing defects only." },
    { en: "improper installation", tr: "hatalı montaj", ex: "Damage caused by improper installation is not covered." },
    { en: "maintenance", tr: "bakım", ex: "Regular maintenance extends the life of the wiper." },
    { en: "do not hesitate to", tr: "... çekinmeyin", ex: "Do not hesitate to contact our service team." }
  ],
  exercises: [
    { type: "mcq", q: "___ you need any spare parts, please contact our service team.",
      options: ["Should", "Would", "Must", "Shall"],
      answer: 0, explain: "Devrik şart: Should you need = If you need (resmi)." },
    { type: "fill", q: "The adhesive needs at least twenty-four hours to ___.",
      answers: ["cure", "set"], explain: "cure = kürlenmek." },
    { type: "match", pairs: [["glazing", "camlama"], ["bonding", "yapıştırma"], ["primer", "astar"], ["setting block", "oturma takozu"], ["warranty", "garanti"]],
      explain: "Montaj ve satış sonrası terimleri." },
    { type: "mcq", q: "Which instruction expresses a prohibition?",
      options: ["You should clean the frame.", "You may use gloves.", "You must not use metal tools against the glass edge.", "You can call us."],
      answer: 2, explain: "must not = yasak." },
    { type: "order", answer: "Clean the frame thoroughly before applying the primer",
      tr: "Astarı uygulamadan önce kasayı iyice temizleyin.", explain: "Emir kipi + before + -ing." },
    { type: "fill", q: "Damage caused by ___ installation is not covered by the warranty.",
      answers: ["improper", "incorrect", "faulty", "wrong"], explain: "improper installation = hatalı montaj." },
    { type: "mcq", q: "Customer: \"One pane cracked after the crew installed it themselves.\" A good reply:",
      options: ["Too bad, no warranty.", "Please buy a new one.", "Your crew is bad.", "We're sorry to hear that. Could you send photos of the installation and the setting blocks so we can assess whether it's a warranty case?"],
      answer: 3, explain: "Empati + kanıt isteği + değerlendirme: profesyonel yaklaşım." },
    { type: "listen", text: "Please do not hesitate to contact our service team.",
      tr: "Lütfen servis ekibimizle iletişime geçmekten çekinmeyin." },
    { type: "order", answer: "We recommend keeping two spare panes on board",
      tr: "Gemide iki yedek cam bulundurmanızı tavsiye ederiz.", explain: "recommend + -ing." },
    { type: "mcq", q: "\"The warranty covers manufacturing defects only.\" Which is covered?",
      options: ["A pane broken by a falling tool", "Scratches from cleaning with sand paper", "Delamination caused by a production fault", "Damage from incorrect glazing"],
      answer: 2, explain: "Üretim kaynaklı delaminasyon üretim hatasıdır." },
    { type: "fill", q: "We recommend ___ (check) the gaskets every six months.",
      answers: ["checking"], explain: "recommend + -ing." },
    { type: "listen", text: "Spare parts can be shipped within forty-eight hours.",
      tr: "Yedek parçalar kırk sekiz saat içinde gönderilebilir." },
    { type: "mcq", q: "Which sentence is the most formal?",
      options: ["Call us if you need something.", "If you need help, just shout.", "Should you require further assistance, please contact us.", "Need help? Ring us!"],
      answer: 2, explain: "Should you require... = resmi C1 yapısı." }
  ]
});

// ---------------------------------------------------------------- 16
units.push({
  id: "marine-16",
  title: "Resmi Teknik E-posta ve Rapor Yazımı",
  level: "C1",
  week: 8,
  intro: {
    tr: "C1 seviyesinde yazılı iletişim kesin, kısa ve gerektiğinde temkinlidir (hedging). Teknik bir müşteriye spesifikasyon özetlerken belirsizliği net ifade etmeli, varsayımları belirtmeli ve sorumluluk sınırlarını dikkatle çizmelisin. Bu ünitede resmi e-posta yapısını, temkinli dil (\"it would appear\", \"is likely to\") ve özetleme kalıplarını çalışacaksın.",
    points: [
      "Yapı: amaç → ana bilgi → varsayımlar/açık noktalar → istenen aksiyon → kapanış.",
      "Temkinli dil (hedging): \"It would appear that...\", \"This is likely to...\", \"Based on the information provided, ...\"",
      "Kesinlik: belirsiz \"big\", \"soon\" yerine \"1,800 x 900 mm\", \"by 15 May\".",
      "Özetleme: \"In summary, ...\", \"The key points are as follows: ...\", \"Please note that...\"",
      "Varsayım belirtme: \"This quotation assumes a design pressure of 25 kPa; should the actual value differ, the thickness will need to be reviewed.\""
    ],
    examples: [
      { en: "Further to our call this morning, please find below a summary of the agreed specification.", tr: "Bu sabahki görüşmemize istinaden, aşağıda üzerinde anlaşılan spesifikasyonun özetini bulabilirsiniz." },
      { en: "Based on the information provided, a thickness of fifteen millimetres would appear to be sufficient.", tr: "Sağlanan bilgilere göre 15 mm kalınlık yeterli görünmektedir." },
      { en: "Please note that this is subject to confirmation by the classification society.", tr: "Lütfen bunun klas kuruluşunun teyidine tabi olduğunu not ediniz." },
      { en: "We would appreciate your feedback by the end of the week.", tr: "Hafta sonuna kadar geri bildiriminizi rica ederiz." }
    ]
  },
  cards: [
    { en: "further to", tr: "... istinaden / ... devamı olarak", ex: "Further to your email, we have revised the drawing." },
    { en: "in summary", tr: "özetle", ex: "In summary, all panes meet the specification." },
    { en: "it would appear that", tr: "... gibi görünmektedir", ex: "It would appear that the drawing has a typo." },
    { en: "is likely to", tr: "muhtemelen ...", ex: "The lead time is likely to increase in spring." },
    { en: "based on the information provided", tr: "sağlanan bilgilere dayanarak", ex: "Based on the information provided, ten millimetres is sufficient." },
    { en: "to assume / assumption", tr: "varsaymak / varsayım", ex: "This calculation assumes a design pressure of twenty-five kilopascals." },
    { en: "please note that", tr: "lütfen ... not ediniz", ex: "Please note that prices exclude VAT." },
    { en: "to outline", tr: "ana hatlarıyla belirtmek", ex: "The report outlines the test results." },
    { en: "in accordance with", tr: "... uyarınca / uygun olarak", ex: "Tests were carried out in accordance with ISO 614." },
    { en: "to be sufficient", tr: "yeterli olmak", ex: "Is a ground edge sufficient for this application?" },
    { en: "we would appreciate", tr: "... rica ederiz / memnun oluruz", ex: "We would appreciate your prompt reply." },
    { en: "to the best of our knowledge", tr: "bildiğimiz kadarıyla", ex: "To the best of our knowledge, no further approval is required." }
  ],
  exercises: [
    { type: "mcq", q: "Which is the best opening line for a formal follow-up email?",
      options: ["Hey, about the call...", "I write you because of call.", "So like we said...", "Further to our call this morning, please find below a summary of the agreed specification."],
      answer: 3, explain: "\"Further to...\" resmi takip e-postası açılışıdır." },
    { type: "fill", q: "Based ___ the information provided, fifteen millimetre glass would appear to be sufficient.",
      answers: ["on"], explain: "based on = ...-e dayanarak." },
    { type: "mcq", q: "Which sentence uses hedging appropriately?",
      options: ["It would appear that the crack originated at the edge, possibly due to point loading.", "The crack is definitely your fault.", "Crack is from edge.", "We know 100% what happened."],
      answer: 0, explain: "\"It would appear... possibly\" = kanıt tam değilken temkinli dil." },
    { type: "order", answer: "Please note that this is subject to class approval",
      tr: "Lütfen bunun klas onayına tabi olduğunu not ediniz.", explain: "Please note that + subject to." },
    { type: "match", pairs: [["further to", "... istinaden"], ["in accordance with", "... uyarınca"], ["to outline", "ana hatlarıyla belirtmek"], ["assumption", "varsayım"], ["in summary", "özetle"]],
      explain: "Resmi yazı kalıpları." },
    { type: "fill", q: "All tests were carried out in ___ with ISO 614.",
      answers: ["accordance"], explain: "in accordance with = ... uyarınca." },
    { type: "mcq", q: "Which is the most precise sentence?",
      options: ["We will send the big windows soon.", "The windows are quite large and will ship shortly.", "The six panes of 1,800 x 900 mm will ship on 15 May.", "Windows coming next month maybe."],
      answer: 2, explain: "Kesin ölçü ve tarih = C1 teknik yazı." },
    { type: "listen", text: "We would appreciate your feedback by the end of the week.",
      tr: "Hafta sonuna kadar geri bildiriminizi rica ederiz." },
    { type: "order", answer: "The lead time is likely to increase in the spring",
      tr: "Teslim süresi ilkbaharda muhtemelen artacak.", explain: "be likely to = muhtemelen." },
    { type: "fill", q: "This quotation ___ a design pressure of twenty-five kilopascals; please confirm.",
      answers: ["assumes", "is based on"], explain: "assume = varsaymak; özne tekil → assumes." },
    { type: "mcq", q: "Choose the best closing for a formal technical email.",
      options: ["Bye!", "That's all, thx.", "Should you require any further information, please do not hesitate to contact me. Kind regards,", "Waiting your answer urgently!!!"],
      answer: 2, explain: "Resmi, kibar ve standart kapanış." },
    { type: "listen", text: "To the best of our knowledge, no further approval is required.",
      tr: "Bildiğimiz kadarıyla başka bir onay gerekmemektedir." },
    { type: "mcq", q: "Where should you mention open points and assumptions in a technical email?",
      options: ["Nowhere; they confuse the client.", "Clearly, after the main information and before the requested action.", "Only in the subject line.", "In a separate email a month later."],
      answer: 1, explain: "Açık noktalar ana bilgiden sonra, istenen aksiyondan önce net yazılmalı." }
  ]
});

window.EA_MODULES = window.EA_MODULES || [];
window.EA_MODULES.push({
  id: "marine",
  title: "Gemi Camı – İş İngilizcesi",
  icon: "🚢",
  color: "#00a8a8",
  description: "Gemi camı üreticisi olarak yabancı tersaneler, armatörler ve gemi mimarlarıyla iletişim: cam türleri, teklif, sipariş, sertifika, test, lojistik, şikayet ve pazarlık — B1+'dan C1'e 8 haftada.",
  units: units
});
})();
