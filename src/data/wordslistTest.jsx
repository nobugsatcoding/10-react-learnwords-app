const wordslistTest = [
  { id: 1, eng: 'in town', lt: 'mieste' },
  { id: 2, eng: 'where is?', lt: 'Kur yra?' },
  { id: 3, eng: 'hospital', lt: 'ligoninė' },
  { id: 4, eng: 'hotel', lt: 'viešbutis' },
  { id: 5, eng: 'supermarket', lt: 'prekybos centras' },
  { id: 6, eng: 'toy shop', lt: 'žaislų parduotuvė' },
  { id: 7, eng: 'school', lt: 'mokykla' },
  { id: 8, eng: 'police station', lt: 'policijos nuovada' },
  { id: 9, eng: 'park', lt: 'parkas' },
  { id: 10, eng: "I am", lt: "Aš esu" },
  { id: 11, eng: "it is", lt: "Tai yra" },
  { id: 12, eng: "for me", lt: "man" },
  { id: 13, eng: "not for you", lt: "ne tau" },
  { id: 14, eng: "on table", lt: "ant stalo" },
  { id: 15, eng: "with me", lt: "su manimi" },
  { id: 16, eng: "he is", lt: "jis yra" },
  { id: 17, eng: "run as fast as can", lt: "bėk taip greitai kaip gali" },
  { id: 18, eng: "you are my friend", lt: "tu esi mano draugas" },
  { id: 19, eng: "do homework", lt: "daryk namų darbus" },
  { id: 20, eng: "at home", lt: "namie" },
  { id: 21, eng: "this is me", lt: "tai aš" },
  { id: 22, eng: "it's raining, but I see sun", lt: "lija, bet aš matau saulę" },
  { id: 23, eng: "his face", lt: "jo veidas" },
  { id: 24, eng: "in front of my home ", lt: "priešais mano namus" },
  { id: 25, eng: "from sky", lt: "iš dangaus" },
  { id: 26, eng: "they", lt: "jie" },
  { id: 27, eng: "we are from lithuania", lt: "mes iš Lietuvos" },
  { id: 28, eng: "say Hello", lt: "pasakyk Labas" },
  { id: 29, eng: "her eyes", lt: "jos akys" },
  { id: 30, eng: "she is my sister", lt: "ji yra mano sesuo" },
  { id: 31, eng: "I want water or milk", lt: "aš noriu vandens arb pieno" },
  { id: 32, eng: "one", lt: "vienas" },
  { id: 33, eng: "will", lt: "bus" },
  { id: 34, eng: "my", lt: "mano" },
  { id: 35, eng: "one", lt: "vienas" },
  { id: 36, eng: "all", lt: "visi" },
  { id: 37, eng: "would", lt: "būtų" },
  { id: 38, eng: "there", lt: "ten" },
  { id: 39, eng: "their", lt: "jų" },
  { id: 40, eng: "what", lt: "kas" },
  { id: 41, eng: "so", lt: "taip" },
  { id: 42, eng: "up", lt: "viršuje" },
  { id: 43, eng: "out", lt: "iš" },
  { id: 44, eng: "if", lt: "jei" },
  { id: 45, eng: "about", lt: "apie" },
  { id: 46, eng: "who", lt: "kas" },
  { id: 47, eng: "get", lt: "gauti" },
  { id: 48, eng: "which", lt: "kuris" },
  { id: 49, eng: "go", lt: "eiti" },
  { id: 50, eng: "me", lt: "mane" },
  { id: 51, eng: "when", lt: "kai" },
  { id: 52, eng: "make", lt: "padaryti" },
  { id: 53, eng: "can", lt: "gali" },
  { id: 54, eng: "like", lt: "patinka" },
  { id: 55, eng: "time", lt: "laikas" },
  { id: 56, eng: "no", lt: "ne" },
  { id: 57, eng: "just", lt: "tik" },
  { id: 58, eng: "him", lt: "jį" },
  { id: 59, eng: "know", lt: "žinoti" },
  { id: 60, eng: "take", lt: "imti" },
  { id: 61, eng: "people", lt: "žmonės" },
  { id: 62, eng: "into", lt: "į" },
  { id: 63, eng: "year", lt: "metai" },
  { id: 64, eng: "your", lt: "tavo" },
  { id: 65, eng: "good", lt: "geras" },
  { id: 66, eng: "some", lt: "kai kurie" },
  { id: 67, eng: "could", lt: "galėtų" },
  { id: 68, eng: "them", lt: "juos" },
  { id: 69, eng: "see", lt: "matyti" },
  { id: 70, eng: "other", lt: "kitas" },
  { id: 71, eng: "than", lt: "nei" },
  { id: 72, eng: "then", lt: "tada" },
  { id: 73, eng: "now", lt: "dabar" },
  { id: 74, eng: "look", lt: "pažiūrėti" },
  { id: 75, eng: "only", lt: "tik" },
  { id: 76, eng: "come", lt: "ateiti" },
  { id: 77, eng: "its", lt: "jo" },
  { id: 78, eng: "over", lt: "virš" },
  { id: 79, eng: "think", lt: "galvoti" },
  { id: 80, eng: "also", lt: "taip pat" },
  { id: 81, eng: "back", lt: "atgal" },
  { id: 82, eng: "after", lt: "po" },
  { id: 83, eng: "use", lt: "naudoti" },
  { id: 84, eng: "two", lt: "du" },
  { id: 85, eng: "how", lt: "kaip" },
  { id: 86, eng: "our", lt: "mūsų" },
  { id: 87, eng: "work", lt: "darbas" },
  { id: 88, eng: "first", lt: "pirmas" },
  { id: 89, eng: "well", lt: "gerai" },
  { id: 90, eng: "way", lt: "kelias" },
  { id: 91, eng: "even", lt: "net" },
  { id: 92, eng: "new", lt: "naujas" },
  { id: 93, eng: "want", lt: "norėti" },
  { id: 94, eng: "because", lt: "nes" },
  { id: 95, eng: "any", lt: "bet koks" },
  { id: 96, eng: "these", lt: "šie" },
  { id: 97, eng: "give", lt: "duoti" },
  { id: 98, eng: "day", lt: "diena" },
  { id: 99, eng: "most", lt: "daugiausia" },
  { id: 100, eng: "us", lt: "mus" },
  { id: 101, eng: "is", lt: "yra" },
  { id: 102, eng: "are", lt: "yra" },
  { id: 103, eng: "was", lt: "buvo" },
  { id: 104, eng: "has", lt: "turi" },
  { id: 105, eng: "been", lt: "buvo" },
  { id: 106, eng: "were", lt: "buvo" },
  { id: 107, eng: "do", lt: "daryti" },
  { id: 108, eng: "what", lt: "kas" },
  { id: 109, eng: "will", lt: "bus" },
  { id: 110, eng: "would", lt: "būtų" },
  { id: 111, eng: "can", lt: "gali" },
  { id: 112, eng: "said", lt: "sakė" },
  { id: 113, eng: "may", lt: "gali" },
  { id: 114, eng: "each", lt: "kiekvienas" },
  { id: 115, eng: "how", lt: "kaip" },
  { id: 116, eng: "time", lt: "laikas" },
  { id: 117, eng: "who", lt: "kas" },
  { id: 118, eng: "them", lt: "juos" },
  { id: 119, eng: "see", lt: "matyti" },
  { id: 120, eng: "make", lt: "padaryti" },
  { id: 121, eng: "than", lt: "nei" },
  { id: 122, eng: "like", lt: "patinka" },
  { id: 123, eng: "into", lt: "į" },
  { id: 124, eng: "about", lt: "apie" },
  { id: 125, eng: "up", lt: "viršuje" },
  { id: 126, eng: "down", lt: "žemyn" },
  { id: 127, eng: "only", lt: "tik" },
  { id: 128, eng: "way", lt: "kelias" },
  { id: 129, eng: "could", lt: "galėtų" },
  { id: 130, eng: "find", lt: "rasti" },
  { id: 131, eng: "use", lt: "naudoti" },
  { id: 132, eng: "may", lt: "gali" },
  { id: 133, eng: "other", lt: "kitas" },
  { id: 134, eng: "some", lt: "kai kurie" },
  { id: 135, eng: "who", lt: "kas" },
  { id: 136, eng: "more", lt: "daugiau" },
  { id: 137, eng: "will", lt: "bus" },
  { id: 138, eng: "one", lt: "vienas" },
  { id: 139, eng: "about", lt: "apie" },
  { id: 140, eng: "time", lt: "laikas" },
  { id: 141, eng: "up", lt: "viršuje" },
  { id: 142, eng: "out", lt: "iš" },
  { id: 143, eng: "more", lt: "daugiau" },
  { id: 144, eng: "there", lt: "ten" },
  { id: 145, eng: "when", lt: "kai" },
  { id: 146, eng: "may", lt: "gali" },
  { id: 147, eng: "down", lt: "žemyn" },
  { id: 148, eng: "into", lt: "į" },
  { id: 149, eng: "than", lt: "nei" },
  { id: 150, eng: "other", lt: "kitas" },
  { id: 151, eng: "about", lt: "apie" },
  { id: 152, eng: "out", lt: "iš" },
  { id: 153, eng: "then", lt: "tada" },
  { id: 154, eng: "them", lt: "juos" },
  { id: 155, eng: "these", lt: "šie" },
  { id: 156, eng: "her", lt: "jos" },
  { id: 157, eng: "would", lt: "būtų" },
  { id: 158, eng: "make", lt: "padaryti" },
  { id: 159, eng: "like", lt: "patinka" },
  { id: 160, eng: "him", lt: "jį" },
  { id: 161, eng: "into", lt: "į" },
  { id: 162, eng: "time", lt: "laikas" },
  { id: 163, eng: "has", lt: "turi" },
  { id: 164, eng: "look", lt: "pažiūrėti" },
  { id: 165, eng: "two", lt: "du" },
  { id: 166, eng: "more", lt: "daugiau" },
  { id: 167, eng: "write", lt: "parašyti" },
  { id: 168, eng: "go", lt: "eiti" },
  { id: 169, eng: "see", lt: "matyti" },
  { id: 170, eng: "number", lt: "numeris" },
  { id: 171, eng: "no", lt: "ne" },
  { id: 172, eng: "way", lt: "būdas" },
  { id: 173, eng: "could", lt: "galėtų" },
  { id: 174, eng: "people", lt: "žmonės" },
  { id: 175, eng: "my", lt: "mano" },
  { id: 176, eng: "than", lt: "nei" },
  { id: 177, eng: "first", lt: "pirmas" },
  { id: 178, eng: "water", lt: "vanduo" },
  { id: 179, eng: "been", lt: "buvo" },
  { id: 180, eng: "call", lt: "skambinti" },
  { id: 181, eng: "who", lt: "kas" },
  { id: 182, eng: "oil", lt: "aliejus" },
  { id: 183, eng: "its", lt: "jo" },
  { id: 184, eng: "now", lt: "dabar" },
  { id: 185, eng: "find", lt: "rasti" },
  { id: 186, eng: "long", lt: "ilgas" },
  { id: 187, eng: "down", lt: "žemyn" },
  { id: 188, eng: "day", lt: "diena" },
  { id: 189, eng: "did", lt: "padarė" },
  { id: 190, eng: "get", lt: "gauti" },
  { id: 191, eng: "come", lt: "ateiti" },
  { id: 192, eng: "made", lt: "pagaminta" },
  { id: 193, eng: "may", lt: "gali" },
  { id: 194, eng: "part", lt: "dalis" },
  { id: 195, eng: "over", lt: "virš" },
  { id: 196, eng: "new", lt: "naujas" },
  { id: 197, eng: "sound", lt: "garsas" },
  { id: 198, eng: "take", lt: "imti" },
  { id: 199, eng: "only", lt: "tik" },
  { id: 200, eng: "little", lt: "mažas" },
  { id: 201, eng: "work", lt: "darbas" },
  { id: 202, eng: "know", lt: "žinoti" },
  { id: 203, eng: "place", lt: "vieta" },
  { id: 204, eng: "year", lt: "metai" },
  { id: 205, eng: "live", lt: "gyventi" },
  { id: 206, eng: "me", lt: "mane" },
  { id: 207, eng: "back", lt: "atgal" },
  { id: 208, eng:"give", lt: "duoti" },
  { id: 209, eng:"most", lt: "dauguma" },
  { id: 210, eng: "very", lt: "labai" },
  { id: 211, eng: "white", lt: "baltas" },
  { id: 212, eng: "children", lt: "vaikai" },
  { id: 213, eng: "begin", lt: "pradėti" },
  { id: 214, eng: "got", lt: "gavo" },
  { id: 215, eng: "walk", lt: "eiti" },
  { id: 216, eng: "example", lt: "pavyzdys" },
  { id: 217, eng: "ease", lt: "palengvinti" },
  { id: 218, eng: "paper", lt: "popierius" },
  { id: 219, eng: "often", lt: "dažnai" },
  { id: 220, eng: "always", lt: "visada" },
  { id: 221, eng: "music", lt: "muzika" },
  { id: 222, eng: "those", lt: "tie" },
  { id: 223, eng: "both", lt: "abi" },
  { id: 224, eng: "mark", lt: "ženklas" },
  { id: 225, eng: "book", lt: "knyga" },
  { id: 226, eng: "letter", lt: "laiškas" },
  { id: 227, eng: "until", lt: "iki" },
  { id: 228, eng: "mile", lt: "mylia" },
  { id: 229, eng: "river", lt: "upė" },
  { id: 230, eng: "car", lt: "automobilis" },
  { id: 231, eng: "feet", lt: "kojos" },
  { id: 232, eng: "care", lt: "rūpintis" },
  { id: 233, eng: "second", lt: "antras" },
  { id: 234, eng: "enough", lt: "pakankamai" },
  { id: 235, eng: "plain", lt: "paprastas" },
  { id: 236, eng: "girl", lt: "mergaitė" },
  { id: 237, eng: "usual", lt: "įprastinis" },
  { id: 238, eng: "young", lt: "jaunas" },
  { id: 239, eng: "ready", lt: "pasiruošęs" },
  { id: 240, eng: "above", lt: "viršuje" },
  { id: 241, eng: "ever", lt: "visada" },
  { id: 242, eng: "red", lt: "raudonas" },
  { id: 243, eng: "list", lt: "sąrašas" },
  { id: 244, eng: "though", lt: "nors" },
  { id: 245, eng: "feel", lt: "jaustis" },
  { id: 246, eng: "talk", lt: "kalbėti" },
  { id: 247, eng: "bird", lt: "paukštis" },
  { id: 248, eng: "soon", lt: "netrukus" },
  { id: 249, eng: "body", lt: "kūnas" },
  { id: 250, eng: "dog", lt: "šuo" },
  { id: 251, eng: "family", lt: "šeima" },
  { id: 252, eng: "direct", lt: "tiesioginis" },
  { id: 253, eng: "pose", lt: "poza" },
  { id: 254, eng: "leave", lt: "palikti" },
  { id: 255, eng: "song", lt: "daina" },
  { id: 256, eng: "measure", lt: "matuoti" },
  { id: 257, eng: "door", lt: "durys" },
  { id: 258, eng: "product", lt: "produktas" },
  { id: 259, eng: "black", lt: "juodas" },
  { id: 260, eng: "short", lt: "trumpas" },
  { id: 261, eng: "numeral", lt: "skaitmuo" },
  { id: 262, eng: "class", lt: "klasė" },
  { id: 263, eng: "wind", lt: "vėjas" },
  { id: 264, eng: "question", lt: "klausimas" },
  { id: 265, eng: "happen", lt: "nutikti" },
  { id: 266, eng: "complete", lt: "visiškas" },
  { id: 267, eng: "ship", lt: "laivas" },
  { id: 268, eng: "area", lt: "plotas" },
  { id: 269, eng: "half", lt: "pusė" },
  { id: 270, eng: "rock", lt: "uola" },
  { id: 271, eng: "order", lt: "tvarka" },
  { id: 272, eng: "fire", lt: "ugnis" },
  { id: 273, eng: "south", lt: "pietūs" },
  { id: 274, eng: "problem", lt: "problema" },
  { id: 275, eng: "free", lt: "nemokama" },
  { id: 276, eng: "kind", lt: "geras" },
  { id: 277, eng: "government", lt: "vyriausybė" },
  { id: 278, eng: "child", lt: "vaikas" },
  { id: 279, eng: "begin", lt: "prasidėti" },
  { id: 280, eng: "party", lt: "vakarėlis" },
  { id: 281, eng: "life", lt: "gyvenimas" },
  { id: 282, eng: "close", lt: "artimas" },
  { id: 283, eng: "million", lt: "milijonas" },
  { id: 284, eng: "area", lt: "plotas" },
  { id: 285, eng: "story", lt: "istorija" },
  { id: 286, eng: "fact", lt: "faktas" },
  { id: 287, eng: "change", lt: "pakeisti" },
  { id: 288, eng: "army", lt: "karinė" },
  { id: 289, eng: "car", lt: "automobilis" },
  { id: 290, eng: "woman", lt: "moterys" },
  { id: 291, eng: "reason", lt: "priežastis" },
  { id: 292, eng: "matter", lt: "reikšti" },
  { id: 293, eng: "mother", lt: "mama" },
  { id: 294, eng: "else", lt: "kitas" },
  { id: 295, eng: "bus", lt: "autobusas" },
  { id: 296, eng: "word", lt: "žodis" },
  { id: 297, eng: "country", lt: "šalis" },
  { id: 298, eng: "against", lt: "prieš" },
  { id: 299, eng: "strong", lt: "stiprus" },
  { id: 300, eng: "close", lt: "arti" }
];

export default wordslistTest