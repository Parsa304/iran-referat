/* Content of the five chapters, B1 level, in German, English and Persian.
   P(text, img, cap)  paragraph with optional picture beside it
   C([[name, meta, text, img, cap], ...])  cards with picture on top */
const P=(x,img,cap,big)=>({t:'p',x,img,cap,big}), H=x=>({t:'h',x}), C=items=>({t:'cards',items:items.map(([n,m,x,img,cap])=>({n,m,x,img,cap}))});
const BARS=(items,cap)=>({t:'bars',items,cap}), CHIPS=(label,items)=>({t:'chips',label,items});
const TL=items=>({t:'tl',items}), Q=(o,x,c)=>({t:'q',o,x,c}), TBL=(head,rows)=>({t:'tbl',head,rows});

const COGNATES=[["مادر","mādar","Mutter","mother"],["پدر","pedar","Vater","father"],["برادر","barādar","Bruder","brother"],["دختر","dokhtar","Tochter","daughter"],["نام","nām","Name","name"],["نو","now","neu","new"],["ستاره","setāre","Stern","star"],["در","dar","Tür","door"]];
const SAADI=`بنی‌آدم اعضای یکدیگرند / که در آفرینش ز یک گوهرند / چو عضوی به درد آورد روزگار / دگر عضوها را نماند قرار`;

const SECTIONS=[
/* ======================= 1. GESCHICHTE ======================= */
{ id:'geschichte', hero:'sec-geschichte',
  heroCap:{de:'Das Tor aller Länder in Persepolis',en:'The Gate of All Nations in Persepolis',fa:'دروازهٔ ملل در تخت جمشید'},
  title:{de:'Geschichte des Iran',en:"Iran's History",fa:'تاریخ ایران'},
  kicker:{de:'Mehr als 5000 Jahre Kultur',en:'More than 5,000 years of culture',fa:'بیش از پنج هزار سال فرهنگ'},
  de:[
    P(`Der Iran ist eines der ältesten Kulturländer der Welt. Schon vor mehr als 5000 Jahren gab es im Südwesten eine Hochkultur: das Reich Elam. Seine Hauptstadt war Susa. Um 700 vor Christus gründeten die Meder das erste große iranische Königreich.`),
    H(`Das Perserreich der Achämeniden`),
    P(`Im Jahr 550 vor Christus gründete Kyros der Große das Perserreich. Man nennt es auch das Reich der Achämeniden. Um 500 vor Christus war Dareios der König. Damals war es das größte Reich der Welt. Es war ungefähr 5,5 Millionen Quadratkilometer groß. Das ist mehr als dreimal so groß wie der Iran heute. Das Reich ging von Ägypten und dem Balkan im Westen bis zum Fluss Indus im Osten. Vielleicht lebten damals bis zu 40 Prozent aller Menschen der Welt in diesem Reich.`,'map-achaemenid','Das Reich der Achämeniden um 500 vor Christus',1),
    BARS([[`Achämenidenreich (um 500 v. Chr.)`,5.5,`≈ 5,5 Mio. km²`],[`Iran heute`,1.648,`≈ 1,65 Mio. km²`],[`Österreich`,0.0839,`≈ 84.000 km²`]],`Die Flächen im gleichen Maßstab`),
    CHIPS(`Diese Länder liegen heute ganz oder teilweise auf dem Gebiet des Reiches:`,['Iran','Irak','Türkei','Syrien','Libanon','Israel und Palästina','Jordanien','Ägypten','Libyen (Osten)','Zypern','Griechenland (Norden)','Bulgarien','Armenien','Aserbaidschan','Georgien','Turkmenistan','Usbekistan','Tadschikistan','Afghanistan','Pakistan','Kuwait']),
    H(`Was war gut an den Achämeniden?`),
    C([
      [`Toleranz`,'',`Kyros war ein toleranter König. Die Menschen durften ihre Religion, ihre Sprache und ihre Traditionen behalten. Die Juden durften aus Babylon nach Hause zurückkehren und ihren Tempel wieder aufbauen.`,'pasargadae','Das Grab von Kyros in Pasargadae'],
      [`Der Kyros-Zylinder`,'539 v. Chr.',`Das ist ein Zylinder aus Ton mit einem Text von Kyros. Viele Menschen sehen darin eine der ersten Erklärungen der Menschenrechte. Das Original ist im British Museum in London. Eine Kopie steht bei der UNO in New York.`,'cylinder'],
      [`Gute Organisation`,'',`Das Reich hatte viele Provinzen. Jede Provinz hatte einen Chef, den Satrapen. Aber die Menschen konnten vieles selbst entscheiden. Auf den Bildern in Persepolis bringen Menschen aus vielen Ländern Geschenke zum König.`,'apadana','Persepolis: Menschen aus vielen Ländern'],
      [`Die Königsstraße`,'über 2500 km',`Eine lange Straße verband die Städte Sardes und Susa. An der Straße gab es Stationen mit frischen Pferden. So kam ein Brief in ungefähr einer Woche an. Das war eine der ersten Postlinien der Welt.`,'royalroad'],
      [`Eigenes Geld`,'',`König Dareios ließ eine Goldmünze für das ganze Reich machen: den Dareikos. So konnten die Menschen leichter handeln.`,'daric'],
      [`Wasser in der Wüste`,'',`Die Perser bauten viele Qanate. Das sind lange Kanäle unter der Erde. Sie bringen Wasser von den Bergen in trockene Gebiete. Die Qanate im Iran sind heute UNESCO-Welterbe.`,'qanat','Ein Qanat in Gonabad'],
      [`Lohn für die Arbeit`,'Persepolis',`In Persepolis hat man viele kleine Tontafeln gefunden. Sie zeigen: Die Bauarbeiter bekamen Lohn, auch die Frauen. Mütter bekamen nach einer Geburt mehr Essen.`,'tablet']
    ]),
    H(`Die Zeit danach`),
    P(`Nach den Achämeniden kamen zwei andere große Reiche: die Parther und die Sassaniden. In Naqsh-e Rostam bei Persepolis sieht man die Gräber von alten Königen. Dort gibt es auch große Bilder im Felsen aus der Zeit der Sassaniden.`,'naqsh','Naqsh-e Rostam'),
    P(`Im 7. Jahrhundert kam der Islam in den Iran. Die persische Sprache und Kultur sind aber geblieben. Später, unter den Safawiden, wurde Isfahan eine der schönsten Städte der Welt. Seit 1979 ist der Iran eine Islamische Republik.`,'isfahan','Der Naqsh-e-Jahan-Platz in Isfahan'),
    TL([['um 3200 v. Chr.','Elam, Hauptstadt Susa'],['um 700 v. Chr.','Meder'],['550–330 v. Chr.','Achämeniden',1],['247 v. Chr. – 224 n. Chr.','Parther'],['224–651','Sassaniden'],['ab 651','Islamische Zeit'],['1501–1736','Safawiden'],['1789–1925','Kadscharen'],['1925–1979','Pahlavi'],['seit 1979','Islamische Republik']])
  ],
  en:[
    P(`Iran is one of the oldest cultures in the world. More than 5,000 years ago there was already an advanced civilisation in the south-west: the kingdom of Elam. Its capital was Susa. Around 700 BCE, the Medes founded the first big Iranian kingdom.`),
    H(`The Achaemenid Persian Empire`),
    P(`In 550 BCE, Cyrus the Great founded the Persian Empire. It is also called the Achaemenid Empire. Around 500 BCE, Darius was the king. At that time it was the biggest empire in the world. It was about 5.5 million square kilometres. That is more than three times as big as Iran today. The empire went from Egypt and the Balkans in the west to the Indus River in the east. Maybe up to 40 percent of all people in the world lived in this empire.`,'map-achaemenid','The Achaemenid Empire around 500 BCE',1),
    BARS([[`Achaemenid Empire (c. 500 BCE)`,5.5,`≈ 5.5 million km²`],[`Iran today`,1.648,`≈ 1.65 million km²`],[`Austria`,0.0839,`≈ 84,000 km²`]],`The areas at the same scale`),
    CHIPS(`These countries lie today fully or partly on the land of the empire:`,['Iran','Iraq','Turkey','Syria','Lebanon','Israel and Palestine','Jordan','Egypt','Libya (east)','Cyprus','Greece (north)','Bulgaria','Armenia','Azerbaijan','Georgia','Turkmenistan','Uzbekistan','Tajikistan','Afghanistan','Pakistan','Kuwait']),
    H(`What was good about the Achaemenids?`),
    C([
      [`Tolerance`,'',`Cyrus was a tolerant king. People could keep their religion, their language and their traditions. The Jews could go home from Babylon and build their temple again.`,'pasargadae','The tomb of Cyrus in Pasargadae'],
      [`The Cyrus Cylinder`,'539 BCE',`This is a clay cylinder with a text by Cyrus. Many people see it as one of the first declarations of human rights. The original is in the British Museum in London. A copy stands at the United Nations in New York.`,'cylinder'],
      [`Good organisation`,'',`The empire had many provinces. Each province had a boss, the satrap. But people could decide many things themselves. In the pictures at Persepolis, people from many countries bring gifts to the king.`,'apadana','Persepolis: people from many countries'],
      [`The Royal Road`,'over 2,500 km',`A long road connected the cities of Sardis and Susa. Along the road there were stations with fresh horses. So a letter arrived in about one week. It was one of the first postal routes in the world.`,'royalroad'],
      [`Their own money`,'',`King Darius made one gold coin for the whole empire: the daric. This made trade easier for people.`,'daric'],
      [`Water in the desert`,'',`The Persians built many qanats. These are long channels under the ground. They bring water from the mountains to dry areas. The qanats of Iran are now a UNESCO World Heritage Site.`,'qanat','A qanat in Gonabad'],
      [`Pay for work`,'Persepolis',`Many small clay tablets were found in Persepolis. They show that the builders got paid, the women too. Mothers got more food after a birth.`,'tablet']
    ]),
    H(`What came after`),
    P(`After the Achaemenids came two other big empires: the Parthians and the Sasanians. At Naqsh-e Rostam, near Persepolis, you can see the tombs of old kings. There are also big pictures cut into the rock from the time of the Sasanians.`,'naqsh','Naqsh-e Rostam'),
    P(`In the 7th century Islam came to Iran. But the Persian language and culture stayed. Later, under the Safavids, Isfahan became one of the most beautiful cities in the world. Since 1979, Iran has been an Islamic Republic.`,'isfahan','Naqsh-e Jahan Square in Isfahan'),
    TL([['c. 3200 BCE','Elam, capital Susa'],['c. 700 BCE','Medes'],['550–330 BCE','Achaemenids',1],['247 BCE – 224 CE','Parthians'],['224–651','Sasanians'],['from 651','Islamic era'],['1501–1736','Safavids'],['1789–1925','Qajars'],['1925–1979','Pahlavi'],['since 1979','Islamic Republic']])
  ],
  fa:[
    P(`ایران یکی از قدیمی‌ترین کشورهای فرهنگی جهان است. بیش از پنج هزار سال پیش، در جنوب‌غربی ایران تمدن بزرگی به نام ایلام وجود داشت. پایتخت آن شوش بود. حدود ۷۰۰ سال پیش از میلاد، مادها نخستین پادشاهی بزرگ ایرانی را ساختند.`),
    H(`شاهنشاهی هخامنشی`),
    P(`در سال ۵۵۰ پیش از میلاد، کوروش بزرگ شاهنشاهی هخامنشی را بنیان گذاشت. حدود ۵۰۰ سال پیش از میلاد، داریوش پادشاه بود. در آن زمان این بزرگ‌ترین کشور جهان بود. مساحت آن حدود ۵٫۵ میلیون کیلومتر مربع بود. یعنی بیش از سه برابر ایران امروز. این سرزمین از مصر و بالکان در غرب تا رود سند در شرق می‌رسید. شاید تا ۴۰ درصد مردم جهان در این سرزمین زندگی می‌کردند.`,'map-achaemenid','شاهنشاهی هخامنشی در حدود ۵۰۰ پیش از میلاد',1),
    BARS([[`شاهنشاهی هخامنشی (حدود ۵۰۰ پ.م.)`,5.5,`≈ ۵٫۵ میلیون کیلومتر مربع`],[`ایران امروز`,1.648,`≈ ۱٫۶۵ میلیون کیلومتر مربع`],[`اتریش`,0.0839,`≈ ۸۴ هزار کیلومتر مربع`]],`مساحت‌ها با یک مقیاس`),
    CHIPS(`این کشورها امروز به‌طور کامل یا بخشی از آن، در قلمرو هخامنشیان قرار دارند:`,['ایران','عراق','ترکیه','سوریه','لبنان','اسرائیل و فلسطین','اردن','مصر','لیبی (شرق)','قبرس','یونان (شمال)','بلغارستان','ارمنستان','جمهوری آذربایجان','گرجستان','ترکمنستان','ازبکستان','تاجیکستان','افغانستان','پاکستان','کویت']),
    H(`خوبی‌های هخامنشیان`),
    C([
      [`مدارا`,'',`کوروش پادشاهی بامدارا بود. مردم می‌توانستند دین، زبان و آیین خود را نگه دارند. یهودیان اجازه داشتند از بابل به خانه برگردند و معبدشان را دوباره بسازند.`,'pasargadae','آرامگاه کوروش در پاسارگاد'],
      [`استوانهٔ کوروش`,'۵۳۹ پ.م.',`این یک استوانهٔ گلی با نوشته‌ای از کوروش است. بسیاری آن را یکی از نخستین منشورهای حقوق بشر می‌دانند. اصل آن در موزهٔ بریتانیا در لندن است و نسخه‌ای از آن در سازمان ملل در نیویورک قرار دارد.`,'cylinder'],
      [`سازمان‌دهی خوب`,'',`کشور استان‌های زیادی داشت. هر استان یک فرماندار به نام ساتراپ داشت. اما مردم بسیاری از کارها را خودشان تصمیم می‌گرفتند. در نقش‌های تخت جمشید، مردم کشورهای مختلف برای شاه هدیه می‌آورند.`,'apadana','تخت جمشید: نمایندگان ملت‌های گوناگون'],
      [`راه شاهی`,'بیش از ۲۵۰۰ کیلومتر',`جاده‌ای طولانی شهر سارد را به شوش وصل می‌کرد. در طول راه چاپارخانه‌هایی با اسب تازه بود. به این ترتیب یک نامه در حدود یک هفته می‌رسید. این یکی از نخستین راه‌های پستی جهان بود.`,'royalroad'],
      [`پول یکسان`,'',`داریوش یک سکهٔ طلا برای همهٔ کشور ساخت: دریک. با آن تجارت برای مردم آسان‌تر شد.`,'daric'],
      [`آب در بیابان`,'',`ایرانیان قنات‌های زیادی ساختند. قنات کانالی طولانی زیر زمین است. آب را از کوه‌ها به زمین‌های خشک می‌برد. قنات‌های ایران امروز میراث جهانی یونسکو هستند.`,'qanat','قنات قصبهٔ گناباد'],
      [`دستمزد برای کار`,'تخت جمشید',`در تخت جمشید گل‌نوشته‌های کوچک زیادی پیدا شده است. آن‌ها نشان می‌دهند که کارگران، حتی زنان، دستمزد می‌گرفتند. مادران بعد از زایمان غذای بیشتری می‌گرفتند.`,'tablet']
    ]),
    H(`دوران‌های بعد`),
    P(`بعد از هخامنشیان، دو شاهنشاهی بزرگ دیگر آمدند: اشکانیان و ساسانیان. در نقش رستم، نزدیک تخت جمشید، آرامگاه پادشاهان قدیم را می‌بینید. آنجا نقش‌های بزرگی روی سنگ از دوران ساسانیان هم هست.`,'naqsh','نقش رستم'),
    P(`در قرن هفتم میلادی اسلام به ایران آمد. اما زبان و فرهنگ فارسی باقی ماند. بعدها، در زمان صفویان، اصفهان یکی از زیباترین شهرهای جهان شد. از سال ۱۳۵۷، ایران جمهوری اسلامی است.`,'isfahan','میدان نقش جهان در اصفهان'),
    TL([['حدود ۳۲۰۰ پ.م.','ایلام، پایتخت: شوش'],['حدود ۷۰۰ پ.م.','مادها'],['۵۵۰ تا ۳۳۰ پ.م.','هخامنشیان',1],['۲۴۷ پ.م. تا ۲۲۴ م.','اشکانیان'],['۲۲۴ تا ۶۵۱ م.','ساسانیان'],['از ۶۵۱ م.','دوران اسلامی'],['۱۵۰۱ تا ۱۷۳۶ م.','صفویان'],['۱۷۸۹ تا ۱۹۲۵ م.','قاجاریان'],['۱۹۲۵ تا ۱۹۷۹ م.','پهلوی'],['از ۱۹۷۹ م. (۱۳۵۷)','جمهوری اسلامی']])
  ]
},
/* ======================= 2. ESSEN ======================= */
{ id:'essen', hero:'sec-essen',
  heroCap:{de:'Ein iranisches Essen',en:'An Iranian meal',fa:'یک سفرهٔ ایرانی'},
  title:{de:'Iranisches Essen heute',en:'Iranian Food Today',fa:'غذاهای امروز ایران'},
  kicker:{de:'Safran, Kräuter und Reis',en:'Saffron, herbs and rice',fa:'زعفران، سبزی و برنج'},
  de:[
    P(`Das iranische Essen ist sehr alt und sehr vielfältig. Viele Gerichte sind süß und sauer zugleich. Man kocht mit vielen frischen Kräutern und mit Gewürzen wie Safran, Kurkuma und Zimt. Reis gibt es fast bei jedem Essen. Er ist lang, duftet gut und ist oft gelb vom Safran.`),
    P(`Am liebsten essen viele Iraner den Tahdig. Das ist die goldene, knusprige Schicht unten im Reistopf. Oft wollen alle das letzte Stück haben.`,'tahdig','Tahdig'),
    H(`Bekannte Gerichte`),
    C([
      [`Tschelo Kabab`,'چلوکباب',`Gegrilltes Fleisch mit Safranreis und gegrillter Tomate. Dieses Gericht gibt es in fast jedem iranischen Restaurant.`,'kabab'],
      [`Ghormeh Sabzi`,'قورمه‌سبزی',`Ein Eintopf mit vielen grünen Kräutern, roten Bohnen, Fleisch und getrockneten Limetten. Viele sagen: Das ist das Nationalgericht.`,'ghormeh'],
      [`Fesendschan`,'فسنجان',`Hühnerfleisch in einer dunklen Soße aus Walnüssen und Granatapfel. Es schmeckt süß und sauer.`,'fesenjan'],
      [`Zereshk Polo`,'زرشک‌پلو',`Reis mit Berberitzen. Das sind kleine rote Beeren, und sie sind sauer. Dazu isst man Huhn. Man kocht es oft für Feste.`,'zereshk'],
      [`Ash Reshteh`,'آش رشته',`Eine dicke Suppe mit Nudeln, Bohnen und Kräutern. Oben kommt Kashk darauf, eine Art salziger Joghurt. Man isst sie gern vor dem Neujahrsfest.`,'ash'],
      [`Abgoosht oder Dizi`,'آبگوشت',`Lammfleisch, Kichererbsen und Kartoffeln in einem Topf aus Stein. Zuerst isst man die Suppe mit Brot. Dann macht man das Fleisch klein und isst es auch mit Brot.`,'dizi'],
      [`Kashk-e Bademjan`,'کشک بادمجان',`Eine Vorspeise aus Auberginen mit Kashk, gebratenen Zwiebeln und Minze.`,'kashk'],
      [`Mirza Ghasemi`,'میرزاقاسمی',`Gegrillte Auberginen mit Knoblauch, Tomaten und Ei. Das Gericht kommt aus der Provinz Gilan am Kaspischen Meer.`,'mirza'],
      [`Sabzi Polo mit Fisch`,'سبزی‌پلو با ماهی',`Reis mit vielen Kräutern und dazu Fisch. Das ist das typische Essen zum Neujahrsfest Nowruz.`,'sabzipolo'],
      [`Bastani Sonnati`,'بستنی سنتی',`Iranisches Eis mit Safran, Rosenwasser und Pistazien. Es ist gelb und schmeckt ein bisschen nach Blumen.`,'bastani'],
      [`Faloodeh`,'فالوده',`Ein kaltes Dessert aus sehr dünnen Nudeln mit Zuckersirup, Rosenwasser und Zitronensaft. Es kommt aus Schiras.`,'faloodeh']
    ]),
    H(`Tee, Brot und die Sofreh`),
    P(`Tee ist das wichtigste Getränk im Iran. Man trinkt ihn den ganzen Tag, aus kleinen Gläsern und ohne Milch. Viele nehmen ein Stück Zucker in den Mund und trinken dann den Tee. Wenn Gäste kommen, gibt es sofort Tee.`,'hospitality','Tee im Glas'),
    P(`Es gibt viele Sorten Brot. Ein Beispiel ist Sangak. Man backt es auf kleinen heißen Steinen. Andere Brote heißen Lavash und Barbari.`,'sangak','Sangak-Brot in Teheran'),
    P(`Traditionell isst man auf dem Boden. Man legt ein Tuch auf den Teppich, die Sofreh. Alle sitzen zusammen. Man kocht immer etwas mehr, denn vielleicht kommt noch ein Gast.`,'sofreh','Eine Sofreh')
  ],
  en:[
    P(`Iranian food is very old and very varied. Many dishes are sweet and sour at the same time. People cook with lots of fresh herbs and with spices like saffron, turmeric and cinnamon. There is rice with almost every meal. It is long, it smells good and it is often yellow from saffron.`),
    P(`Many Iranians love tahdig most of all. It is the golden, crispy layer at the bottom of the rice pot. Often everybody wants the last piece.`,'tahdig','Tahdig'),
    H(`Well-known dishes`),
    C([
      [`Chelow Kabab`,'چلوکباب',`Grilled meat with saffron rice and a grilled tomato. You can find this dish in almost every Iranian restaurant.`,'kabab'],
      [`Ghormeh Sabzi`,'قورمه‌سبزی',`A stew with lots of green herbs, red beans, meat and dried limes. Many people say it is the national dish.`,'ghormeh'],
      [`Fesenjan`,'فسنجان',`Chicken in a dark sauce made of walnuts and pomegranate. It tastes sweet and sour.`,'fesenjan'],
      [`Zereshk Polo`,'زرشک‌پلو',`Rice with barberries. These are small red berries, and they are sour. People eat it with chicken. It is often cooked for parties.`,'zereshk'],
      [`Ash Reshteh`,'آش رشته',`A thick soup with noodles, beans and herbs. On top there is kashk, a kind of salty yoghurt. People like to eat it before the New Year.`,'ash'],
      [`Abgoosht or Dizi`,'آبگوشت',`Lamb, chickpeas and potatoes in a stone pot. First you eat the soup with bread. Then you mash the meat and eat it with bread too.`,'dizi'],
      [`Kashk-e Bademjan`,'کشک بادمجان',`A starter made of aubergines with kashk, fried onions and mint.`,'kashk'],
      [`Mirza Ghasemi`,'میرزاقاسمی',`Grilled aubergines with garlic, tomatoes and egg. The dish comes from Gilan province by the Caspian Sea.`,'mirza'],
      [`Sabzi Polo with fish`,'سبزی‌پلو با ماهی',`Rice with lots of herbs and fish. This is the typical meal for the New Year, Nowruz.`,'sabzipolo'],
      [`Bastani Sonnati`,'بستنی سنتی',`Iranian ice cream with saffron, rosewater and pistachios. It is yellow and tastes a little like flowers.`,'bastani'],
      [`Faloodeh`,'فالوده',`A cold dessert of very thin noodles with sugar syrup, rosewater and lemon juice. It comes from Shiraz.`,'faloodeh']
    ]),
    H(`Tea, bread and the sofreh`),
    P(`Tea is the most important drink in Iran. People drink it all day, from small glasses and without milk. Many people put a sugar cube in their mouth and then drink the tea. When guests come, there is tea right away.`,'hospitality','Tea in a glass'),
    P(`There are many kinds of bread. One example is sangak. It is baked on small hot stones. Other breads are called lavash and barbari.`,'sangak','Sangak bread in Tehran'),
    P(`Traditionally, people eat on the floor. They put a cloth on the carpet, the sofreh. Everybody sits together. People always cook a bit more, because maybe another guest will come.`,'sofreh','A sofreh')
  ],
  fa:[
    P(`غذای ایرانی بسیار قدیمی و بسیار متنوع است. بسیاری از غذاها هم ترش هستند و هم شیرین. ایرانی‌ها با سبزی تازهٔ زیاد و ادویه‌هایی مثل زعفران، زردچوبه و دارچین آشپزی می‌کنند. تقریباً در هر وعده برنج هست. برنج ایرانی دانه‌بلند و خوش‌عطر است و اغلب با زعفران زرد می‌شود.`),
    P(`بسیاری از ایرانی‌ها ته‌دیگ را از همه بیشتر دوست دارند. ته‌دیگ لایهٔ طلایی و ترد ته قابلمهٔ برنج است. معمولاً همه آخرین تکه را می‌خواهند.`,'tahdig','ته‌دیگ'),
    H(`غذاهای معروف`),
    C([
      [`چلوکباب`,'Chelow Kabab',`گوشت کبابی با برنج زعفرانی و گوجهٔ کبابی. این غذا را تقریباً در هر رستوران ایرانی پیدا می‌کنید.`,'kabab'],
      [`قورمه‌سبزی`,'Ghormeh Sabzi',`خورشی با سبزی زیاد، لوبیا قرمز، گوشت و لیمو عمانی. خیلی‌ها می‌گویند این غذای ملی ایران است.`,'ghormeh'],
      [`فسنجان`,'Fesenjan',`مرغ در خورشی تیره از گردو و انار. مزهٔ آن ترش و شیرین است.`,'fesenjan'],
      [`زرشک‌پلو`,'Zereshk Polo',`برنج با زرشک؛ میوه‌ای کوچک، قرمز و ترش. آن را با مرغ می‌خورند و اغلب در مهمانی‌ها درست می‌کنند.`,'zereshk'],
      [`آش رشته`,'Ash Reshteh',`آشی غلیظ با رشته، حبوبات و سبزی. روی آن کشک می‌ریزند. معمولاً پیش از نوروز آن را می‌پزند.`,'ash'],
      [`آبگوشت (دیزی)`,'Abgoosht',`گوشت گوسفند، نخود و سیب‌زمینی در ظرف سنگی. اول آب آن را با نان می‌خورند. بعد گوشت را می‌کوبند و با نان می‌خورند.`,'dizi'],
      [`کشک بادمجان`,'Kashk-e Bademjan',`پیش‌غذایی از بادمجان با کشک، پیاز داغ و نعناع داغ.`,'kashk'],
      [`میرزاقاسمی`,'Mirza Ghasemi',`بادمجان کبابی با سیر، گوجه و تخم‌مرغ. این غذا از استان گیلان در کنار دریای خزر است.`,'mirza'],
      [`سبزی‌پلو با ماهی`,'Sabzi Polo',`برنج با سبزی زیاد و ماهی. این غذای سنتی نوروز است.`,'sabzipolo'],
      [`بستنی سنتی`,'Bastani Sonnati',`بستنی ایرانی با زعفران، گلاب و پسته. رنگش زرد است و کمی بوی گل می‌دهد.`,'bastani'],
      [`فالوده`,'Faloodeh',`دسری سرد از رشته‌های خیلی نازک با شربت، گلاب و آب‌لیمو. فالودهٔ شیرازی معروف است.`,'faloodeh']
    ]),
    H(`چای، نان و سفره`),
    P(`چای مهم‌ترین نوشیدنی ایران است. ایرانی‌ها در تمام روز چای می‌نوشند؛ در استکان‌های کوچک و بدون شیر. خیلی‌ها حبه‌قند را در دهان می‌گذارند و بعد چای می‌نوشند. وقتی مهمان می‌آید، فوراً چای می‌آورند.`,'hospitality','چای در استکان'),
    P(`نان انواع زیادی دارد. یک نمونه سنگک است که روی سنگ‌ریزه‌های داغ پخته می‌شود. نان‌های دیگر لواش و بربری هستند.`,'sangak','نان سنگک در تهران'),
    P(`به‌طور سنتی ایرانی‌ها روی زمین غذا می‌خورند. پارچه‌ای به نام سفره روی فرش پهن می‌کنند و همه دور هم می‌نشینند. همیشه کمی بیشتر غذا می‌پزند، چون شاید مهمانی هم بیاید.`,'sofreh','سفره')
  ]
},
/* ======================= 3. PERSÖNLICHKEITEN ======================= */
{ id:'persoenlichkeiten', hero:'sec-personen',
  heroCap:{de:'Das Grab von Hafez in Schiras',en:'The tomb of Hafez in Shiraz',fa:'آرامگاه حافظ در شیراز'},
  title:{de:'Berühmte Iranerinnen und Iraner',en:'Famous Iranians',fa:'ایرانیان نامدار'},
  kicker:{de:'Dichter, Wissenschaftler und Künstler',en:'Poets, scientists and artists',fa:'شاعران، دانشمندان و هنرمندان'},
  de:[
    P(`Aus dem Iran kommen viele berühmte Menschen. Besonders die persischen Dichter kennt man auf der ganzen Welt. Viele Iraner können Gedichte von Hafez oder Saadi auswendig. Sie benutzen die Verse auch im Alltag.`),
    H(`Dichter`),
    C([
      [`Ferdowsi`,'um 940 – um 1020',`Ferdowsi schrieb das Schahname, das Buch der Könige. Es hat etwa 50.000 Doppelverse. Er arbeitete ungefähr 30 Jahre daran. Das Buch erzählt alte Geschichten über Helden und Könige. Es hat die persische Sprache gerettet.`,'ferdowsi','Sein Grab in Tus'],
      [`Omar Chayyam`,'1048–1131',`Chayyam war Mathematiker, Astronom und Dichter. Er half bei einem sehr genauen Kalender. In Europa kennt man ihn durch seine kurzen Gedichte mit vier Zeilen, die Rubaiyat.`,'khayyam','Sein Grab in Nischapur'],
      [`Hafez`,'um 1315–1390',`Hafez lebte in Schiras. Er schrieb Gedichte über die Liebe und über Gott. Sein Buch, der Diwan, ist in fast jedem iranischen Haus. Viele öffnen das Buch und lesen ein Gedicht als Antwort auf eine Frage. Das nennt man Fal-e Hafez.`,'hafez','Sein Grab in Schiras'],
      [`Rumi`,'1207–1273',`Im Iran heißt Rumi Molana. Er wurde in Balch geboren, im heutigen Afghanistan. Er lebte in Konya in der Türkei. Er schrieb über die Liebe und über Gott. Heute lesen ihn Menschen auf der ganzen Welt.`,'rumi','Sein Grab in Konya'],
      [`Saadi`,'um 1210 – um 1291',`Saadi kam auch aus Schiras. Seine bekanntesten Bücher heißen Golestan und Bustan. Ein Gedicht von ihm sagt: Alle Menschen sind wie ein Körper.`,'saadi','Sein Grab in Schiras']
    ]),
    Q(SAADI,`Alle Menschen sind Teile von einem Körper, denn sie kommen aus derselben Quelle. Wenn ein Teil Schmerzen hat, haben auch die anderen Teile keine Ruhe.`,`Saadi, Golestan`),
    H(`Wissenschaft`),
    C([
      [`Ibn Sina (Avicenna)`,'980–1037',`Ibn Sina war Arzt und Philosoph. In Europa nennt man ihn Avicenna. Sein großes Buch über Medizin war mehr als 500 Jahre lang ein Lehrbuch an Universitäten in Europa.`,'avicenna','Sein Grab in Hamadan'],
      [`Al-Chwarizmi`,'um 780–850',`Er war Mathematiker. Das Wort Algorithmus kommt von seinem Namen. Das Wort Algebra kommt von seinem Buch.`,'khwarizmi','Briefmarke aus dem Jahr 1983'],
      [`Razi`,'865–925',`Razi war Arzt und Chemiker aus Rey. Diese Stadt liegt neben Teheran. Er erklärte als einer der Ersten den Unterschied zwischen Pocken und Masern.`,'razi','Ein späteres Bild von Razi']
    ]),
    H(`Heute`),
    C([
      [`Maryam Mirzakhani`,'1977–2017',`Sie war Mathematikerin aus Teheran. 2014 bekam sie als erste Frau die Fields-Medaille. Das ist der wichtigste Preis in der Mathematik.`,'mirzakhani'],
      [`Asghar Farhadi`,'geb. 1972',`Er ist Filmregisseur. Er hat zwei Oscars gewonnen, für die Filme Nader und Simin und The Salesman.`,'farhadi'],
      [`Abbas Kiarostami`,'1940–2016',`Er war Filmregisseur. 1997 gewann er in Cannes die Goldene Palme für den Film Der Geschmack der Kirsche.`,'kiarostami']
    ]),
    H(`Eine Brücke nach Österreich`),
    P(`Joseph von Hammer-Purgstall kam aus Graz. Er übersetzte 1812 und 1813 die Gedichte von Hafez ins Deutsche. Auch der österreichische Arzt Jakob Eduard Polak hat eine Verbindung zum Iran. Er war im 19. Jahrhundert der Arzt des Schahs und unterrichtete in Teheran Medizin.`,'hammer','Hammer-Purgstall, Akademie der Wissenschaften in Wien'),
    P(`Goethe las die Übersetzung von Hammer-Purgstall. Er war begeistert und schrieb den West-östlichen Divan. In Weimar gibt es heute ein Denkmal für Goethe und Hafez: zwei Stühle aus Stein, die sich gegenüberstehen.`,'goethe-hafez','Das Goethe-Hafis-Denkmal in Weimar'),
    H(`Vier iranische Gelehrte bei der UNO in Wien`),
    P(`Auch in Wien gibt es ein Stück Iran. Auf dem Gelände der Vereinten Nationen in Wien steht seit 2009 der Pavillon der persischen Gelehrten. Er war ein Geschenk des Iran an die UNO. Darin stehen vier Statuen von berühmten iranischen Wissenschaftlern: Omar Chayyam, Ibn Sina, Razi und Al-Biruni. Al-Biruni war Astronom und Mathematiker und berechnete schon vor tausend Jahren die Größe der Erde. Die Architektur des Pavillons verbindet Elemente aus Persepolis mit islamischer Baukunst.`,'pavilion','Der Pavillon der persischen Gelehrten bei der UNO in Wien',true)
  ],
  en:[
    P(`Many famous people come from Iran. People all over the world know the Persian poets. Many Iranians know poems by Hafez or Saadi by heart. They also use the lines in everyday life.`),
    H(`Poets`),
    C([
      [`Ferdowsi`,'c. 940 – c. 1020',`Ferdowsi wrote the Shahnameh, the Book of Kings. It has about 50,000 couplets. He worked on it for about 30 years. The book tells old stories about heroes and kings. It saved the Persian language.`,'ferdowsi','His tomb in Tus'],
      [`Omar Khayyam`,'1048–1131',`Khayyam was a mathematician, an astronomer and a poet. He helped to make a very exact calendar. In Europe people know him for his short poems with four lines, the Rubaiyat.`,'khayyam','His tomb in Nishapur'],
      [`Hafez`,'c. 1315–1390',`Hafez lived in Shiraz. He wrote poems about love and about God. His book, the Divan, is in almost every Iranian home. Many people open the book and read a poem as an answer to a question. This is called Fal-e Hafez.`,'hafez','His tomb in Shiraz'],
      [`Rumi`,'1207–1273',`In Iran Rumi is called Molana. He was born in Balkh, in today's Afghanistan. He lived in Konya in Turkey. He wrote about love and about God. Today people read him all over the world.`,'rumi','His tomb in Konya'],
      [`Saadi`,'c. 1210 – c. 1291',`Saadi also came from Shiraz. His best-known books are called Golestan and Bustan. One of his poems says: all people are like one body.`,'saadi','His tomb in Shiraz']
    ]),
    Q(SAADI,`All people are parts of one body, because they come from the same source. When one part is in pain, the other parts cannot rest.`,`Saadi, Golestan`),
    H(`Science`),
    C([
      [`Ibn Sina (Avicenna)`,'980–1037',`Ibn Sina was a doctor and a philosopher. In Europe he is called Avicenna. His big book about medicine was a textbook at European universities for more than 500 years.`,'avicenna','His tomb in Hamadan'],
      [`Al-Khwarizmi`,'c. 780–850',`He was a mathematician. The word algorithm comes from his name. The word algebra comes from his book.`,'khwarizmi','A stamp from 1983'],
      [`Razi`,'865–925',`Razi was a doctor and chemist from Rey. This city is next to Tehran. He was one of the first people to explain the difference between smallpox and measles.`,'razi','A later picture of Razi']
    ]),
    H(`Today`),
    C([
      [`Maryam Mirzakhani`,'1977–2017',`She was a mathematician from Tehran. In 2014 she was the first woman to win the Fields Medal. It is the most important prize in mathematics.`,'mirzakhani'],
      [`Asghar Farhadi`,'born 1972',`He is a film director. He has won two Oscars, for the films A Separation and The Salesman.`,'farhadi'],
      [`Abbas Kiarostami`,'1940–2016',`He was a film director. In 1997 he won the Palme d'Or in Cannes for the film Taste of Cherry.`,'kiarostami']
    ]),
    H(`A bridge to Austria`),
    P(`Joseph von Hammer-Purgstall came from Graz. In 1812 and 1813 he translated the poems of Hafez into German. The Austrian doctor Jakob Eduard Polak also has a link to Iran. In the 19th century he was the Shah's doctor and taught medicine in Tehran.`,'hammer','Hammer-Purgstall, Academy of Sciences in Vienna'),
    P(`Goethe read Hammer-Purgstall's translation. He loved it and wrote the West-Eastern Divan. Today in Weimar there is a monument to Goethe and Hafez: two stone chairs that face each other.`,'goethe-hafez','The Goethe-Hafez monument in Weimar'),
    H(`Four Iranian scholars at the UN in Vienna`),
    P(`There is also a piece of Iran in Vienna. Since 2009, the Scholars Pavilion has stood on the grounds of the United Nations in Vienna. It was a gift from Iran to the UN. Inside are four statues of famous Iranian scientists: Omar Khayyam, Ibn Sina, Razi and Al-Biruni. Al-Biruni was an astronomer and mathematician who calculated the size of the Earth a thousand years ago. The pavilion's architecture combines elements of Persepolis with Islamic architecture.`,'pavilion','The Persian Scholars Pavilion at the UN in Vienna',true)
  ],
  fa:[
    P(`افراد مشهور زیادی از ایران آمده‌اند. مردم سراسر جهان شاعران فارسی‌زبان را می‌شناسند. بسیاری از ایرانی‌ها شعرهای حافظ یا سعدی را از حفظ هستند و در زندگی روزمره از آن‌ها استفاده می‌کنند.`),
    H(`شاعران`),
    C([
      [`فردوسی`,'حدود ۹۴۰ تا ۱۰۲۰ م.',`فردوسی شاهنامه را نوشت؛ کتاب پادشاهان. شاهنامه حدود پنجاه هزار بیت دارد و فردوسی نزدیک به سی سال روی آن کار کرد. این کتاب داستان‌های قدیمی دربارهٔ پهلوانان و پادشاهان را تعریف می‌کند. شاهنامه زبان فارسی را زنده نگه داشت.`,'ferdowsi','آرامگاه او در توس'],
      [`عمر خیام`,'۱۰۴۸ تا ۱۱۳۱ م.',`خیام ریاضی‌دان، ستاره‌شناس و شاعر بود. او در ساختن یک تقویم بسیار دقیق کمک کرد. در اروپا او را با شعرهای کوتاه چهارخطی‌اش، یعنی رباعیات، می‌شناسند.`,'khayyam','آرامگاه او در نیشابور'],
      [`حافظ`,'حدود ۱۳۱۵ تا ۱۳۹۰ م.',`حافظ در شیراز زندگی می‌کرد. او دربارهٔ عشق و خدا شعر گفت. دیوان او تقریباً در هر خانهٔ ایرانی هست. خیلی‌ها کتاب را باز می‌کنند و یک غزل را جواب سؤال خود می‌دانند. به این کار فال حافظ می‌گویند.`,'hafez','آرامگاه او در شیراز'],
      [`مولانا`,'۱۲۰۷ تا ۱۲۷۳ م.',`مولانا در بلخ، در افغانستان امروزی، به دنیا آمد و در قونیه در ترکیه زندگی کرد. او دربارهٔ عشق و خدا نوشت. امروز مردم سراسر جهان شعرهای او را می‌خوانند.`,'rumi','آرامگاه او در قونیه'],
      [`سعدی`,'حدود ۱۲۱۰ تا ۱۲۹۱ م.',`سعدی هم اهل شیراز بود. معروف‌ترین کتاب‌های او گلستان و بوستان هستند. یکی از شعرهای او می‌گوید: همهٔ انسان‌ها مثل اعضای یک بدن هستند.`,'saadi','آرامگاه او در شیراز']
    ]),
    Q(SAADI,'',`سعدی، گلستان`),
    H(`دانشمندان`),
    C([
      [`ابن‌سینا`,'۹۸۰ تا ۱۰۳۷ م.',`ابن‌سینا پزشک و فیلسوف بود. در اروپا او را اَویسنا می‌نامند. کتاب بزرگ او دربارهٔ پزشکی بیش از پانصد سال در دانشگاه‌های اروپا کتاب درسی بود.`,'avicenna','آرامگاه او در همدان'],
      [`خوارزمی`,'حدود ۷۸۰ تا ۸۵۰ م.',`او ریاضی‌دان بود. واژهٔ الگوریتم از نام او آمده است و واژهٔ جبر از نام کتاب او.`,'khwarizmi','تمبری از سال ۱۹۸۳'],
      [`رازی`,'۸۶۵ تا ۹۲۵ م.',`رازی پزشک و شیمی‌دان اهل ری بود؛ شهری کنار تهران. او از نخستین کسانی بود که تفاوت آبله و سرخک را توضیح داد.`,'razi','تصویری از رازی، کشیده‌شده در دوره‌های بعد']
    ]),
    H(`امروز`),
    C([
      [`مریم میرزاخانی`,'۱۹۷۷ تا ۲۰۱۷ م.',`او ریاضی‌دانی اهل تهران بود. در سال ۲۰۱۴ نخستین زنی بود که مدال فیلدز را گرفت. این مهم‌ترین جایزهٔ ریاضی است.`,'mirzakhani'],
      [`اصغر فرهادی`,'متولد ۱۹۷۲ م.',`او کارگردان سینماست. برای فیلم‌های جدایی نادر از سیمین و فروشنده دو جایزهٔ اسکار گرفته است.`,'farhadi'],
      [`عباس کیارستمی`,'۱۹۴۰ تا ۲۰۱۶ م.',`او کارگردان سینما بود. در سال ۱۹۹۷ برای فیلم طعم گیلاس نخل طلای جشنوارهٔ کن را برد.`,'kiarostami']
    ]),
    H(`پلی به اتریش`),
    P(`یوزف فون هامر-پورگشتال اهل گراتس بود. او در سال‌های ۱۸۱۲ و ۱۸۱۳ شعرهای حافظ را به آلمانی ترجمه کرد. یاکوب ادوارد پولاک، پزشک اتریشی، هم با ایران ارتباط داشت. او در قرن نوزدهم پزشک شاه بود و در تهران پزشکی درس می‌داد.`,'hammer','هامر-پورگشتال، آکادمی علوم وین'),
    P(`گوته ترجمهٔ هامر-پورگشتال را خواند. او بسیار شیفته شد و دیوان غربی-شرقی را نوشت. امروز در شهر وایمار یادبودی برای گوته و حافظ هست: دو صندلی سنگی که روبه‌روی هم قرار دارند.`,'goethe-hafez','یادبود گوته و حافظ در وایمار'),
    H(`چهار دانشمند ایرانی در سازمان ملل وین`),
    P(`در وین هم تکه‌ای از ایران هست. از سال ۲۰۰۹ در محوطهٔ سازمان ملل متحد در وین، چهارطاقی دانشمندان ایرانی قرار دارد. این بنا هدیهٔ ایران به سازمان ملل است. در آن مجسمهٔ چهار دانشمند بزرگ ایرانی دیده می‌شود: عمر خیام، ابن‌سینا، زکریای رازی و ابوریحان بیرونی. بیرونی ستاره‌شناس و ریاضی‌دان بود و هزار سال پیش اندازهٔ زمین را محاسبه کرد. معماری این بنا عناصری از تخت جمشید را با معماری دوران اسلامی ترکیب می‌کند.`,'pavilion','چهارطاقی دانشمندان ایرانی در مقر سازمان ملل متحد در وین',true)
  ]
},
/* ======================= 4. SPRACHEN & KLEIDUNG ======================= */
{ id:'sprachen', hero:'sec-sprachen',
  heroCap:{de:'Eine Familie der Ghaschghai',en:'A Qashqai family',fa:'خانواده‌ای قشقایی'},
  title:{de:'Sprachen, Dialekte und Kleidung',en:'Languages, Dialects and Clothing',fa:'زبان‌ها، لهجه‌ها و پوشاک'},
  kicker:{de:'Ein Land, viele Völker',en:'One country, many peoples',fa:'یک کشور، اقوام گوناگون'},
  de:[
    H(`Sprachen`),
    P(`Im Iran leben ungefähr 90 Millionen Menschen aus vielen Volksgruppen. Die offizielle Sprache ist Persisch, auch Farsi genannt. Aber nur etwas mehr als die Hälfte der Menschen spricht Persisch als Muttersprache. Im Nordwesten spricht man Aserbaidschanisch, eine Turksprache. Im Westen spricht man Kurdisch und Luri. Am Kaspischen Meer spricht man Gilaki und Mazandarani. Im Südosten spricht man Belutschi, im Südwesten Arabisch und im Nordosten Turkmenisch.`,'langmap','Karte der Volksgruppen im Iran',1),
    H(`Persisch und Deutsch sind verwandt`),
    P(`Persisch, Deutsch und Englisch gehören zu einer Sprachfamilie, den indogermanischen Sprachen. Deshalb sind manche Wörter sehr ähnlich. Schauen Sie mal!`),
    TBL(['Persisch','Aussprache','Deutsch','Englisch'],COGNATES),
    H(`Dialekte`),
    P(`Auch im Persischen gibt es viele Akzente. Man hört sofort, ob jemand aus Teheran, Isfahan, Schiras, Maschhad oder Yazd kommt. Der Akzent aus Isfahan klingt fast wie ein Lied. Der Akzent aus Schiras ist weich und langsam. Auch in Afghanistan und Tadschikistan spricht man Persisch. Dort heißt es Dari und Tadschikisch.`,'yazd','Die Altstadt von Yazd'),
    H(`Traditionelle Kleidung`),
    P(`Jede Region hat ihre eigene Kleidung. In den Städten tragen die Menschen meistens moderne Kleidung. Traditionelle Kleidung sieht man vor allem auf dem Land, bei Festen und bei Hochzeiten.`),
    C([
      [`Kurden`,'Westen',`Die Männer tragen weite Hosen, eine kurze Jacke und einen breiten Gürtel aus Stoff. Die Frauen tragen lange, bunte Kleider, die glänzen.`,'kurd'],
      [`Ghaschghai`,'Provinz Fars',`Die Ghaschghai sind Nomaden. Die Frauen tragen viele bunte Röcke übereinander. Die Männer tragen einen runden Hut aus Filz mit zwei Klappen.`,'qashqai'],
      [`Bachtiaren`,'Zagros-Gebirge',`Die Männer tragen weite schwarze Hosen und einen langen Mantel mit Streifen. Er heißt Chogha.`,'bakhtiari'],
      [`Gilan`,'Kaspisches Meer',`Die Frauen tragen kurze, bunte Röcke über einer Hose. So können sie gut auf den Reisfeldern und Teefeldern arbeiten.`,'gilan'],
      [`Turkmenen`,'Nordosten',`Die Frauen tragen lange rote Kleider mit Stickerei. Die Männer tragen hohe Mützen aus Schaffell.`,'turkmen'],
      [`Belutschen`,'Südosten',`Die Kleider der Frauen haben feine, bunte Stickereien. Für ein Kleid braucht man manchmal mehrere Monate.`,'baloch','Belutschische Stickerei'],
      [`Hormozgan`,'Persischer Golf',`Manche Frauen tragen eine Maske im Gesicht, die Battoula. Sie schützt vor der Sonne und ist auch Schmuck.`,'hormozgan'],
      [`Abyaneh`,'Dorf bei Kaschan',`Die Frauen tragen weiße Kopftücher mit roten Blumen und weite Röcke. Das ist eine sehr alte Tradition.`,'abyaneh']
    ]),
    H(`Der Türkis aus Nischapur`),
    P(`Der Türkis ist ein Edelstein mit einer himmelblauen Farbe. Auf Persisch heißt er Firuzeh. Das bedeutet Sieg. Der schönste Türkis der Welt kommt aus den Bergen bei Nischapur, im Nordosten des Iran. Dort holen Menschen seit mehr als 2000 Jahren Türkis aus der Erde. Besonders wertvoll ist ein Stein mit reiner, hellblauer Farbe.`,'turquoise','Persischer Türkis'),
    P(`Viele Iraner tragen Türkis als Ring, Kette oder Ohrring, oft zusammen mit Silber. Man glaubt, dass der Stein Glück bringt und schützt. Auch die Farbe von vielen Kuppeln heißt Türkisblau. Das deutsche Wort Türkis bedeutet übrigens türkischer Stein. Der Stein kam nämlich früher über die Türkei nach Europa.`,'turquoise-mine','Steine sortieren an der Türkismine bei Nischapur')
  ],
  en:[
    H(`Languages`),
    P(`About 90 million people from many ethnic groups live in Iran. The official language is Persian, also called Farsi. But only a little more than half of the people speak Persian as their mother tongue. In the north-west people speak Azerbaijani, a Turkic language. In the west they speak Kurdish and Luri. By the Caspian Sea they speak Gilaki and Mazandarani. In the south-east people speak Balochi, in the south-west Arabic and in the north-east Turkmen.`,'langmap','Map of the ethnic groups in Iran',1),
    H(`Persian and German are related`),
    P(`Persian, German and English belong to one language family, the Indo-European languages. That is why some words are very similar. Have a look!`),
    TBL(['Persian','Pronunciation','German','English'],COGNATES),
    H(`Dialects`),
    P(`There are also many accents in Persian. You can hear at once if someone comes from Tehran, Isfahan, Shiraz, Mashhad or Yazd. The Isfahan accent sounds almost like a song. The Shiraz accent is soft and slow. People also speak Persian in Afghanistan and Tajikistan. There it is called Dari and Tajik.`,'yazd','The old town of Yazd'),
    H(`Traditional clothing`),
    P(`Every region has its own clothes. In the cities people mostly wear modern clothes. You see traditional clothes mainly in the countryside, at festivals and at weddings.`),
    C([
      [`Kurds`,'West',`The men wear wide trousers, a short jacket and a wide cloth belt. The women wear long, colourful dresses that shine.`,'kurd'],
      [`Qashqai`,'Fars province',`The Qashqai are nomads. The women wear many colourful skirts on top of each other. The men wear a round felt hat with two flaps.`,'qashqai'],
      [`Bakhtiari`,'Zagros mountains',`The men wear wide black trousers and a long striped coat. It is called a chogha.`,'bakhtiari'],
      [`Gilan`,'Caspian Sea',`The women wear short, colourful skirts over trousers. Like this they can work well in the rice fields and tea fields.`,'gilan'],
      [`Turkmen`,'North-east',`The women wear long red dresses with embroidery. The men wear tall hats made of sheepskin.`,'turkmen'],
      [`Baloch`,'South-east',`The women's dresses have fine, colourful embroidery. One dress can take several months of work.`,'baloch','Balochi embroidery'],
      [`Hormozgan`,'Persian Gulf',`Some women wear a mask on their face, the battoula. It protects against the sun and is also jewellery.`,'hormozgan'],
      [`Abyaneh`,'Village near Kashan',`The women wear white headscarves with red flowers and wide skirts. This is a very old tradition.`,'abyaneh']
    ]),
    H(`Turquoise from Nishapur`),
    P(`Turquoise is a gemstone with a sky-blue colour. In Persian it is called firuzeh. That means victory. The most beautiful turquoise in the world comes from the mountains near Nishapur, in the north-east of Iran. People have taken turquoise out of the ground there for more than 2,000 years. A stone with a pure, light blue colour is especially valuable.`,'turquoise','Persian turquoise'),
    P(`Many Iranians wear turquoise as a ring, a necklace or earrings, often with silver. People believe the stone brings luck and protection. The colour of many domes is also called turquoise blue. By the way, the word turquoise means Turkish stone, because the stone came to Europe through Turkey.`,'turquoise-mine','Sorting stones at the turquoise mine near Nishapur')
  ],
  fa:[
    H(`زبان‌ها`),
    P(`در ایران حدود ۹۰ میلیون نفر از اقوام مختلف زندگی می‌کنند. زبان رسمی فارسی است. اما زبان مادری فقط کمی بیش از نیمی از مردم فارسی است. در شمال‌غرب به آذربایجانی صحبت می‌کنند که یک زبان ترکی است. در غرب کردی و لری رایج است. در کنار دریای خزر گیلکی و مازندرانی، در جنوب‌شرق بلوچی، در جنوب‌غرب عربی و در شمال‌شرق ترکمنی صحبت می‌شود.`,'langmap','نقشهٔ اقوام ایران',1),
    H(`فارسی و آلمانی خویشاوندند`),
    P(`فارسی، آلمانی و انگلیسی از یک خانوادهٔ زبانی هستند: زبان‌های هندواروپایی. به همین دلیل بعضی واژه‌ها خیلی شبیه هم هستند. نگاه کنید!`),
    TBL(['فارسی','تلفظ','آلمانی','انگلیسی'],COGNATES),
    H(`لهجه‌ها`),
    P(`در زبان فارسی هم لهجه‌های زیادی هست. فوراً می‌شود فهمید که کسی اهل تهران، اصفهان، شیراز، مشهد یا یزد است. لهجهٔ اصفهانی مثل آواز است. لهجهٔ شیرازی نرم و آرام است. در افغانستان و تاجیکستان هم فارسی صحبت می‌کنند که آنجا دری و تاجیکی نام دارد.`,'yazd','بافت قدیمی یزد'),
    H(`پوشاک سنتی`),
    P(`هر منطقه لباس خودش را دارد. در شهرها مردم بیشتر لباس امروزی می‌پوشند. لباس محلی را بیشتر در روستاها، جشن‌ها و عروسی‌ها می‌بینیم.`),
    C([
      [`کردها`,'غرب ایران',`مردان شلوار گشاد، کت کوتاه و شال کمر پهن می‌پوشند. زنان لباس‌های بلند، رنگارنگ و براق می‌پوشند.`,'kurd'],
      [`قشقایی‌ها`,'استان فارس',`قشقایی‌ها عشایر هستند. زنان چند دامن رنگارنگ را روی هم می‌پوشند. مردان کلاه نمدی گردی با دو لبه به نام دوگوشی دارند.`,'qashqai'],
      [`بختیاری‌ها`,'کوه‌های زاگرس',`مردان شلوار گشاد مشکی و ردای راه‌راهی به نام چوقا می‌پوشند.`,'bakhtiari'],
      [`گیلان`,'کنار دریای خزر',`زنان دامن‌های کوتاه و رنگارنگ روی شلوار می‌پوشند. با این لباس راحت در شالیزار و باغ چای کار می‌کنند.`,'gilan'],
      [`ترکمن‌ها`,'شمال‌شرق',`زنان لباس‌های بلند قرمز با سوزن‌دوزی می‌پوشند. مردان کلاه بلندی از پوست گوسفند دارند.`,'turkmen'],
      [`بلوچ‌ها`,'جنوب‌شرق',`لباس زنان سوزن‌دوزی‌های ظریف و رنگارنگ دارد. دوختن یک لباس گاهی چند ماه طول می‌کشد.`,'baloch','سوزن‌دوزی بلوچ'],
      [`هرمزگان`,'خلیج فارس',`بعضی زنان نقابی به نام بتوله روی صورت می‌زنند. بتوله از آفتاب محافظت می‌کند و زینت هم هست.`,'hormozgan'],
      [`ابیانه`,'روستایی نزدیک کاشان',`زنان روسری‌های سفید با گل‌های قرمز و دامن‌های پرچین می‌پوشند. این سنتی بسیار قدیمی است.`,'abyaneh']
    ]),
    H(`فیروزهٔ نیشابور`),
    P(`فیروزه سنگی قیمتی به رنگ آبی آسمانی است. نام فیروزه به معنی پیروزی است. زیباترین فیروزهٔ جهان از کوه‌های نزدیک نیشابور، در شمال‌شرق ایران، به دست می‌آید. مردم بیش از دو هزار سال است که آنجا فیروزه استخراج می‌کنند. سنگی که رنگ آبی روشن و یکدست دارد، از همه باارزش‌تر است.`,'turquoise','فیروزهٔ ایرانی'),
    P(`بسیاری از ایرانی‌ها فیروزه را به شکل انگشتر، گردنبند یا گوشواره، اغلب همراه با نقره، استفاده می‌کنند. باور دارند که این سنگ خوش‌شانسی می‌آورد و از انسان محافظت می‌کند. رنگ بسیاری از گنبدها را هم فیروزه‌ای می‌نامیم. جالب است بدانید که واژهٔ اروپایی Türkis یعنی سنگ ترکی، چون این سنگ از راه ترکیه به اروپا می‌رسید.`,'turquoise-mine','جدا کردن سنگ‌ها در معدن فیروزهٔ نیشابور')
  ]
},
/* ======================= 5. NORMEN ======================= */
{ id:'normen', hero:'sec-normen',
  heroCap:{de:'Der Haft-Sin-Tisch zu Nowruz',en:'The Haft-Sin table for Nowruz',fa:'سفرهٔ هفت‌سین نوروز'},
  title:{de:'Normen und Gewohnheiten',en:'Customs and Social Norms',fa:'رفتارها و هنجارها'},
  kicker:{de:'Was es so nur im Iran gibt',en:'Things you only find in Iran',fa:'آنچه بیشتر فقط در ایران می‌بینید'},
  de:[
    P(`Im Alltag gibt es im Iran viele Regeln, die anders sind als in Österreich. Hier sind ein paar Beispiele, die man in anderen Ländern selten findet.`),
    C([
      [`Taarof`,'تعارف',`Taarof ist eine besondere Form von Höflichkeit. Wenn man etwas angeboten bekommt, sagt man zuerst nein, auch wenn man es möchte. Der Gastgeber fragt dann noch einmal, oft dreimal. Ein Taxifahrer sagt vielleicht: Ghabel nadare. Das heißt: Es kostet nichts. Aber man bezahlt natürlich trotzdem!`,'taxi','Ein Taxi in Teheran'],
      [`Gastfreundschaft`,'مهمان‌نوازی',`Ein Sprichwort sagt: Der Gast ist ein Freund Gottes. Gäste bekommen sofort Tee, Obst und Süßigkeiten. Ihr Teller ist nie leer. Im Haus zieht man die Schuhe aus.`,'taarof','Gaz, eine Süßigkeit aus Isfahan'],
      [`Bitte nach Ihnen`,'بفرمایید',`Vor einer Tür sagt jeder: Befarmāid, bitte nach Ihnen. Keiner will als Erster gehen. Das dauert manchmal lange. Früher hatten viele Türen zwei Türklopfer, einen für Männer und einen für Frauen.`,'door','Zwei Türklopfer an einer alten Tür'],
      [`Sei nicht müde!`,'خسته نباشید',`Zu einem Menschen, der arbeitet, sagt man Khaste nabāshid. Das heißt: Sei nicht müde. Nach dem Essen sagt man zum Koch: Dastet dard nakone. Das heißt: Deine Hand soll nicht weh tun. Diese Sätze gibt es im Deutschen nicht.`,'bazaar','Der große Basar in Teheran'],
      [`Respekt vor Älteren`,'احترام',`Wenn ein älterer Mensch ins Zimmer kommt, stehen alle auf. Ältere Menschen spricht man mit Shomā an. Das ist wie Sie im Deutschen. Manche Kinder sagen sogar Sie zu ihren Eltern.`,'family','Eine Familie in Nischapur zu Nowruz'],
      [`Nowruz`,'نوروز',`Nowruz ist das persische Neujahrsfest. Es beginnt genau am ersten Frühlingstag, am 20. oder 21. März. Auf den Tisch kommen sieben Dinge. Ihr Name beginnt auf Persisch mit dem Buchstaben S. Das nennt man Haft-Sin.`,'nowruz'],
      [`Tschaharschanbe Suri`,'چهارشنبه‌سوری',`Am letzten Dienstagabend vor Nowruz machen die Menschen Feuer auf der Straße. Sie springen über das Feuer. So sagen sie Tschüss zu den Problemen des alten Jahres.`,'suri'],
      [`Sizdah Bedar`,'سیزده‌بدر',`Am 13. Tag des neuen Jahres bleibt niemand zu Hause. Alle Familien machen ein Picknick in der Natur.`,'sizdah'],
      [`Yalda-Nacht`,'شب یلدا',`Die längste Nacht des Jahres ist um den 21. Dezember. Die Familien bleiben lange wach. Sie essen Granatäpfel und Wassermelonen und lesen Gedichte von Hafez.`,'yalda'],
      [`Kalender und Wochenende`,'۱۴۰۵',`Der Iran hat einen eigenen Kalender. Das Jahr beginnt mit Nowruz. Nach diesem Kalender haben wir jetzt das Jahr 1405. Das Wochenende ist am Freitag, nicht am Sonntag.`,'calendar'],
    ]),
    P(`Zum Schluss: Iranerinnen und Iraner freuen sich sehr, wenn sich Menschen aus anderen Ländern für ihre Kultur interessieren. Ein einfaches Salam, also Hallo, öffnet viele Türen. Und Merci für Danke sagt man im Iran auch!`)
  ],
  en:[
    P(`In everyday life in Iran there are many rules that are different from Austria. Here are a few examples that you rarely find in other countries.`),
    C([
      [`Taarof`,'تعارف',`Taarof is a special kind of politeness. When someone offers you something, you first say no, even if you want it. The host then asks again, often three times. A taxi driver might say: Ghabel nadare. That means: it costs nothing. But of course you still pay!`,'taxi','A taxi in Tehran'],
      [`Hospitality`,'مهمان‌نوازی',`A proverb says: the guest is a friend of God. Guests get tea, fruit and sweets right away. Their plate is never empty. In the house you take off your shoes.`,'taarof','Gaz, a sweet from Isfahan'],
      [`After you`,'بفرمایید',`In front of a door everybody says: Befarmāid, after you. Nobody wants to go first. Sometimes this takes a long time. In the past many doors had two knockers, one for men and one for women.`,'door','Two door knockers on an old door'],
      [`Don't be tired!`,'خسته نباشید',`To a person who is working you say Khaste nabāshid. It means: don't be tired. After a meal you say to the cook: Dastet dard nakone. It means: may your hand not hurt. These phrases do not exist in English or German.`,'bazaar','The Grand Bazaar in Tehran'],
      [`Respect for older people`,'احترام',`When an older person comes into the room, everybody stands up. You speak to older people with shomā. It is like Sie in German. Some children even use this polite form with their parents.`,'family','A family in Nishapur at Nowruz'],
      [`Nowruz`,'نوروز',`Nowruz is the Persian New Year. It starts exactly on the first day of spring, on 20 or 21 March. Seven things go on the table. In Persian their names begin with the letter S. This is called Haft-Sin.`,'nowruz'],
      [`Chaharshanbe Suri`,'چهارشنبه‌سوری',`On the last Tuesday evening before Nowruz, people make fires in the street. They jump over the fire. In this way they say goodbye to the problems of the old year.`,'suri'],
      [`Sizdah Bedar`,'سیزده‌بدر',`On the 13th day of the new year nobody stays at home. All families have a picnic in nature.`,'sizdah'],
      [`Yalda Night`,'شب یلدا',`The longest night of the year is around 21 December. Families stay up late. They eat pomegranates and watermelon and read poems by Hafez.`,'yalda'],
      [`Calendar and weekend`,'1405',`Iran has its own calendar. The year starts with Nowruz. In this calendar it is now the year 1405. The weekend is on Friday, not Sunday.`,'calendar'],
    ]),
    P(`Finally: Iranians are very happy when people from other countries are interested in their culture. A simple Salam, which means hello, opens many doors. And people in Iran also say Merci for thank you!`)
  ],
  fa:[
    P(`در زندگی روزمرهٔ ایران قانون‌های زیادی هست که با اتریش فرق دارد. این‌ها چند نمونه است که در کشورهای دیگر کمتر دیده می‌شود.`),
    C([
      [`تعارف`,'Taarof',`تعارف نوع خاصی از ادب است. وقتی چیزی به شما تعارف می‌کنند، اول می‌گویید نه، حتی اگر آن را بخواهید. میزبان دوباره تعارف می‌کند، گاهی سه بار. راننده تاکسی شاید بگوید: قابل نداره. اما البته مسافر کرایه را می‌دهد!`,'taxi','تاکسی در تهران'],
      [`مهمان‌نوازی`,'Gastfreundschaft',`ضرب‌المثلی می‌گوید: مهمان حبیب خداست. مهمان فوراً چای، میوه و شیرینی می‌گیرد و بشقابش هیچ‌وقت خالی نمی‌ماند. در خانه کفش‌ها را درمی‌آورند.`,'taarof','گز، شیرینی اصفهان'],
      [`بفرمایید`,'Bitte nach Ihnen',`جلوی در همه می‌گویند: بفرمایید. هیچ‌کس نمی‌خواهد اول برود و گاهی این کار طول می‌کشد. در قدیم بسیاری از درها دو کوبه داشتند: یکی برای مردان و یکی برای زنان.`,'door','دو کوبه روی یک در قدیمی'],
      [`خسته نباشید`,'Khaste nabāshid',`به کسی که کار می‌کند می‌گوییم: خسته نباشید. بعد از غذا به آشپز می‌گوییم: دستت درد نکنه. این جمله‌ها در آلمانی وجود ندارند.`,'bazaar','بازار بزرگ تهران'],
      [`احترام به بزرگ‌ترها`,'Respekt',`وقتی فرد بزرگ‌تری وارد اتاق می‌شود، همه بلند می‌شوند. بزرگ‌ترها را با «شما» صدا می‌زنیم، مثل Sie در آلمانی. بعضی بچه‌ها حتی به پدر و مادرشان «شما» می‌گویند.`,'family','خانواده‌ای در نیشابور در نوروز'],
      [`نوروز`,'Nowruz',`نوروز جشن سال نو ایرانی است. دقیقاً در نخستین روز بهار، ۲۰ یا ۲۱ مارس، شروع می‌شود. روی سفره هفت چیز می‌گذارند که نامشان با حرف سین شروع می‌شود. به آن هفت‌سین می‌گویند.`,'nowruz'],
      [`چهارشنبه‌سوری`,'Chaharshanbe Suri',`در شب آخرین چهارشنبهٔ سال، مردم در کوچه آتش روشن می‌کنند و از روی آتش می‌پرند. با این کار با مشکلات سال کهنه خداحافظی می‌کنند.`,'suri'],
      [`سیزده‌بدر`,'Sizdah Bedar',`روز سیزدهم سال نو هیچ‌کس در خانه نمی‌ماند. همهٔ خانواده‌ها به طبیعت می‌روند و پیک‌نیک می‌کنند.`,'sizdah'],
      [`شب یلدا`,'Yalda',`بلندترین شب سال حدود ۲۱ دسامبر است. خانواده‌ها تا دیروقت بیدار می‌مانند، انار و هندوانه می‌خورند و فال حافظ می‌گیرند.`,'yalda'],
      [`تقویم و تعطیلی`,'Kalender',`ایران تقویم خودش را دارد. سال با نوروز شروع می‌شود. در این تقویم اکنون سال ۱۴۰۵ است. تعطیلی آخر هفته جمعه است، نه یکشنبه.`,'calendar'],
    ]),
    P(`در پایان: ایرانی‌ها خیلی خوشحال می‌شوند وقتی مردم کشورهای دیگر به فرهنگشان علاقه نشان می‌دهند. یک سلام ساده درهای زیادی را باز می‌کند. و در ایران برای تشکر «مرسی» هم می‌گویند!`)
  ]
}
];
