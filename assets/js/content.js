/* ════════════════════════════════════════════════════════════════
   CONTENIDO Y CONFIGURACIÓN
   Todo el texto del sitio vive aquí. Es el único archivo que
   necesitas tocar para cambiar la marca, los datos o las palabras.
   ════════════════════════════════════════════════════════════════ */

const BRAND = {
  /* ── Cambia el nombre aquí y se actualiza en todo el sitio ── */
  name: "LINDEROS",

  /* ── Datos de contacto ── */
  email: "hola@tumarca.mx",
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

    "nav.land": "La tierra",
    "nav.estate": "El predio",
    "nav.process": "El proceso",
    "nav.bottle": "La botella",
    "nav.house": "La casa",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Tequila 100% de agave · Valles de Amatitán",
    "hero.tagline": "Del agave que sembramos nosotros.",
    "hero.scroll": "Conoce la casa",

    "land.eyebrow": "El origen",
    "land.title": "La tierra tiene dueño",
    "land.lead": "No compramos agave. Lo sembramos.",
    "land.body": "Cada botella sale de parcelas que trabajamos nosotros, en los Valles de Amatitán. El suelo volcánico de esta zona da un agave más mineral y menos dulce que el de los Altos — y eso se prueba en el vaso. Siete años desde el hijuelo hasta la jima. No hay forma de apurarlo, y no lo intentamos.",
    "land.s1t": "Región",
    "land.s1d": "Valles de Amatitán, Jalisco",
    "land.s2t": "Suelo",
    "land.s2d": "Volcánico oscuro",
    "land.s3t": "Edad del agave",
    "land.s3d": "7 años o más",
    "land.s4t": "Azúcares",
    "land.s4d": "24 °Brix mínimo",

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
    "house.title": "Agricultor e ingeniero",
    "house.quote": "No vendo algo que yo no me tomaría.",
    "house.body": "Soy agavero de familia y soy ingeniero en mecatrónica. La primera mitad me enseñó que una planta tarda siete años y que no se puede apurar. La segunda me enseñó a medir, calibrar y documentar en vez de adivinar. Este tequila es lo que pasa cuando esas dos cosas trabajan juntas.",

    "cta.eyebrow": "Para el canal",
    "cta.title": "Restaurantes, hoteles y barras",
    "cta.lead": "Mandamos muestra y ficha técnica. Si prefieres, vamos personalmente a que lo pruebes al lado de lo que ya tienes en la barra.",
    "cta.mail": "Escríbenos",
    "cta.wa": "WhatsApp",

    "foot.origin": "Hecho en México · Jalisco",
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
      ["Agave de 7+ años",        "Mínimo 24 °Brix. Todo de parcela propia, con registro."],
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

    "nav.land": "The land",
    "nav.estate": "The estate",
    "nav.process": "The process",
    "nav.bottle": "The bottle",
    "nav.house": "The house",
    "nav.contact": "Contact",

    "hero.eyebrow": "100% agave tequila · Valles de Amatitán",
    "hero.tagline": "From agave we planted ourselves.",
    "hero.scroll": "Meet the house",

    "land.eyebrow": "Origin",
    "land.title": "This land has an owner",
    "land.lead": "We don't buy agave. We grow it.",
    "land.body": "Every bottle comes from parcels we farm ourselves, in the Valles de Amatitán. The dark volcanic soil here yields a more mineral, less sugary agave than the highlands — and you taste it. Seven years from pup to harvest. There is no way to rush it, and we don't try.",
    "land.s1t": "Region",
    "land.s1d": "Valles de Amatitán, Jalisco",
    "land.s2t": "Soil",
    "land.s2d": "Dark volcanic",
    "land.s3t": "Agave age",
    "land.s3d": "7 years or more",
    "land.s4t": "Sugars",
    "land.s4d": "24 °Brix minimum",

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
    "house.title": "Farmer and engineer",
    "house.quote": "I don't sell what I wouldn't drink myself.",
    "house.body": "I'm a third-generation agave farmer and a mechatronics engineer. The first taught me a plant takes seven years and cannot be hurried. The second taught me to measure, calibrate and document instead of guess. This tequila is what happens when those two work together.",

    "cta.eyebrow": "For the trade",
    "cta.title": "Restaurants, hotels and bars",
    "cta.lead": "We'll send a sample and the tech sheet. Or we'll come in person so you can taste it beside whatever's already on your back bar.",
    "cta.mail": "Get in touch",
    "cta.wa": "WhatsApp",

    "foot.origin": "Made in Mexico · Jalisco",
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
      ["Agave 7+ years",         "24 °Brix minimum. All estate-grown, all logged."],
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
