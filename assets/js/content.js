/* ════════════════════════════════════════════════════════════════
   CONTENIDO Y CONFIGURACIÓN — LINAJE 59

   Todo el texto del sitio vive aquí. Es el único archivo que
   necesitas tocar para cambiar la marca, los datos o las palabras.
   Ver MANUAL.md para instrucciones paso a paso.
   ════════════════════════════════════════════════════════════════ */

const BRAND = {
  /* ── Nombre de la marca ── */
  name: "LINAJE 59",     // menú, pie de página y título de la pestaña
  heroWord: "LINAJE",    // primera línea de la portada
  heroNum: "59",         // el número grande en dorado, debajo
  founded: "2026",       // el año que da origen al nombre

  /* ── Contacto ── */
  email: "hola@linaje59.mx",
  phone: "+52 33 0000 0000",
  whatsapp: "523300000000",        // sin +, sin espacios

  /* ── Datos regulatorios (te los da tu maquiladora) ── */
  nom: "NOM-0000-CRT",
  crt: "CRT-0000",

  /* ── Ficha del producto ── */
  abv: "38%",
  volume: "750 ml",
  origin: "Valles de Amatitán, Jalisco"
};

const I18N = {

  es: {
    "gate.q": "¿Tienes 18 años o más?",
    "gate.yes": "Sí, entrar",
    "gate.no": "No",

    "nav.land": "El origen",
    "nav.estate": "El predio",
    "nav.process": "El proceso",
    "nav.bottle": "La botella",
    "nav.house": "La casa",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Tequila 100% de agave · Valles de Amatitán",
    "hero.tagline": "Conocimiento de generacion en generacion",
    "hero.scroll": "Conoce la casa",

    "land.eyebrow": "El origen",
    "land.title": "Un número, no un adorno",
    "land.lead": "59, un numero que pesa",
    "land.body": "Tres generaciones después seguimos trabajando esa misma tierra en los Valles de Amatitán. No compramos agave: lo sembramos. El suelo volcánico de esta zona da una planta más mineral y menos dulce que la de los Altos, y eso se prueba en el vaso. Siete años desde el hijuelo hasta la jima. No hay forma de apurarlo, y no lo intentamos.",
    "land.s1t": "Origen",
    "land.s1d": "1959",
    "land.s2t": "Región",
    "land.s2d": "Valles de Amatitán, Jalisco",
    "land.s3t": "Suelo",
    "land.s3d": "Rojizo",
    "land.s4t": "Edad del agave",
    "land.s4d": "6 años o más",

    "est.eyebrow": "El predio",
    "est.title": "Aquí crece",
    "est.lead": "Ninguna de estas fotos es de banco de imágenes. Son las parcelas, el volcán que se ve desde el surco, y la gente que trabaja ahí.",

    "proc.eyebrow": "Cómo se hace",
    "proc.title": "Nueve compromisos, por escrito",
    "proc.lead": "La norma permite atajos. Nosotros los prohibimos en el contrato de producción.",
    "proc.note": "Estos nueve puntos están firmados con nuestra destilería. No son un discurso: son una cláusula.",

    "bot.eyebrow": "El producto",
    "bot.title": "Blanco",
    "bot.lead": "En el blanco no te puedes esconder. Sin barrica no hay dónde tapar un agave inmaduro ni una fermentación apurada.",
    "bot.tasting": "En nariz: agave cocido, cítrico, tierra húmeda. En boca: pimienta blanca, mineral, un dulzor corto que no empalaga. Final limpio y largo.",

    "house.eyebrow": "Quién lo hace",
    "house.title": "Tercera generación",
    "house.quote": "No vendo algo que yo no me tomaría.",
    "house.body": "Soy agavero de familia. Lo primero me enseñó que una planta tarda siete años y que no se puede apurar. Lo segundo me enseñó a medir, calibrar y documentar en vez de adivinar. Este tequila es lo que pasa cuando esas dos cosas trabajan juntas sobre la tierra que sembró mi abuelo.",

    "cta.eyebrow": "Para el canal",
    "cta.title": "Restaurantes, hoteles y barras",
    "cta.lead": "Mandamos muestra y ficha técnica. Si prefieres, vamos personalmente a que lo pruebes al lado de lo que ya tienes en la barra.",
    "cta.mail": "Escríbenos",
    "cta.wa": "WhatsApp",

    "foot.origin": "Hecho en México Amatitán· Jalisco",
    "foot.nom": "NOM",
    "foot.crt": "CRT",
    "foot.rights": "Todos los derechos reservados",

    "legal.abuse": "El abuso en el consumo de este producto es nocivo para la salud.",
    "legal.age": "Venta exclusiva a mayores de 18 años. Evita el exceso.",

    commitments: [
      ["100% agave",              "Sin mixtos, sin excepción."],
      ["Cero aditivos",           "La norma permite 1% de abocantes sin declararlos. Nosotros no usamos ninguno."],
      ["Sin difusor",             "El difusor lava el agave con ácido en vez de cocerlo. Aquí no entra."],
      ["Horno de mampostería",    "Cocción lenta de 24 a 36 horas. Nada de autoclave exprés."],
      ["Molienda de tahona",      "Piedra volcánica sobre el agave cocido, como siempre se hizo."],
      ["Fermentación con fibra",  "Tinas abiertas, bagazo dentro, levadura nativa. De 72 a 120 horas."],
      ["Doble destilación",       "Alambique de cobre. Los cortes los define el maestro, lote por lote."],
      ["Agave de 6+ años",        "Mínimo 30 °Brix. Todo de parcela propia, con registro."],
      ["Sin filtración en frío",  "Quita la turbidez, pero también el cuerpo. Preferimos el cuerpo."]
    ],

    tech: [
      ["Categoría",     "100% de agave"],
      ["Clase",         "Blanco"],
      ["Graduación",    "38% Alc. Vol."],
      ["Contenido",     "750 ml"],
      ["Cocción",       "Horno de mampostería, 30 h"],
      ["Fermentación",  "Tina abierta con fibra, 96 h"],
      ["Destilación",   "Cobre, doble"],
      ["Aditivos",      "Ninguno"]
    ]
  },

  en: {
    "gate.q": "Are you 18 or older?",
    "gate.yes": "Yes, enter",
    "gate.no": "No",

    "nav.land": "Origin",
    "nav.estate": "The estate",
    "nav.process": "The process",
    "nav.bottle": "The bottle",
    "nav.house": "The house",
    "nav.contact": "Contact",

    "hero.eyebrow": "100% agave tequila · Valles de Amatitán",
    "hero.tagline": "knowledge from generation to generation .",
    "hero.scroll": "Meet the house", 

    "land.eyebrow": "Origin",
    "land.title": "A number, not an ornament",
    "land.lead": "59 a year that weighs",
    "land.body": "Three generations on, we still work that same land in the Valles de Amatitán. We don't buy agave — we grow it. The dark volcanic soil here yields a more mineral, less sugary plant than the highlands, and you taste it. Seven years from pup to harvest. There is no way to rush it, and we don't try.",
    "land.s1t": "Founded",
    "land.s1d": "2026",
    "land.s2t": "Region",
    "land.s2d": "Valles de Amatitán, Jalisco",
    "land.s3t": "Soil",
    "land.s3d": "Reddish dirt",
    "land.s4t": "Agave age",
    "land.s4d": "6 years or more",

    "est.eyebrow": "The estate",
    "est.title": "Where it grows",
    "est.lead": "Not one of these is a stock photo. These are the parcels, the volcano you see from the row, and the people who work there.",

    "proc.eyebrow": "How it's made",
    "proc.title": "Nine commitments, in writing",
    "proc.lead": "The standard allows shortcuts. We ban them in the production contract.",
    "proc.note": "These nine points are signed with our distillery. Not a marketing line — a clause.",

    "bot.eyebrow": "The product",
    "bot.title": "Blanco",
    "bot.lead": "Blanco hides nothing. With no barrel, there's nowhere to bury an unripe agave or a rushed fermentation.",
    "bot.tasting": "Nose: cooked agave, citrus, wet earth. Palate: white pepper, mineral, a brief sweetness that doesn't cloy. Clean, long finish.",

    "house.eyebrow": "Who makes it",
    "house.title": "Third generation",
    "house.quote": "I don't sell what I wouldn't drink myself.",
    "house.body": "I'm a third-generation agave farmer. The first taught me a plant takes seven years and cannot be hurried. The second taught me to measure, calibrate and document instead of guess. This tequila is what happens when those two work together on the land my grandfather planted.",

    "cta.eyebrow": "For the trade",
    "cta.title": "Restaurants, hotels and bars",
    "cta.lead": "We'll send a sample and the tech sheet. Or we'll come in person so you can taste it beside whatever's already on your back bar.",
    "cta.mail": "Get in touch",
    "cta.wa": "WhatsApp",

    "foot.origin": "Made in Mexico Amatitán· Jalisco",
    "foot.nom": "NOM",
    "foot.crt": "CRT",
    "foot.rights": "All rights reserved",

    "legal.abuse": "Excessive consumption of this product is harmful to your health.",
    "legal.age": "Sold only to those 18 and over. Please drink responsibly.",

    commitments: [
      ["100% agave",             "No mixto, no exceptions."],
      ["Zero additives",         "The standard permits 1% undeclared additives. We use none."],
      ["No diffuser",            "A diffuser washes agave with acid instead of cooking it. Not here."],
      ["Brick oven",             "Slow cook, 24 to 36 hours. No express autoclave."],
      ["Tahona milling",         "Volcanic stone over cooked agave, the way it was always done."],
      ["Fermented on fiber",     "Open tanks, bagasse in, native yeast. 72 to 120 hours."],
      ["Double distilled",       "Copper pot still. Cuts called by the master, batch by batch."],
      ["Agave 6+ years",         "30 °Brix minimum. All estate-grown, all logged."],
      ["No chill filtration",    "It removes haze, but it removes body too. We keep the body."]
    ],

    tech: [
      ["Category",      "100% agave"],
      ["Class",         "Blanco"],
      ["Strength",      "38% Alc./Vol."],
      ["Volume",        "750 ml"],
      ["Cooking",       "Brick oven, 30 h"],
      ["Fermentation",  "Open tank on fiber, 96 h"],
      ["Distillation",  "Copper, double"],
      ["Additives",     "None"]
    ]
  }
};
