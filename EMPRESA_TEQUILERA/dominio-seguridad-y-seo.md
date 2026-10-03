# Dominio, protección y que te encuentren

Tres cosas distintas. Se hacen en este orden.

---

## Parte 1 — El dominio

### Cuál comprar

| Extensión | Cuándo conviene | Precio aprox./año |
|---|---|---|
| **.com** | Si vas a exportar algún día. Es el estándar mundial | $220 – $400 MXN |
| **.mx** | Corto y mexicano. Sin requisito de residencia | $500 – $700 MXN |
| **.com.mx** | El clásico mexicano, más disponibilidad | $300 – $500 MXN |

**Recomendación: compra el `.com` y el `.mx`.** Son menos de mil pesos al año entre los dos, y redireccionas uno al otro. Si alguien más agarra tu `.com` cuando ya tengas marca, recuperarlo te cuesta mil veces eso.

### Dónde comprarlo

| Registrador | Nota |
|---|---|
| **Cloudflare Registrar** ⭐ | Vende al costo, sin margen. Y ya vas a usar Cloudflare para lo demás. Solo maneja algunas extensiones |
| **Namecheap** | Barato, buena interfaz, WHOIS privado gratis |
| **Akky** | El primer registrador mexicano. Bueno para `.mx` y `.com.mx`, soporte en español |
| **GoDaddy** | Funciona, pero el primer año es barato y las renovaciones caras. Y te van a llamar a vender |

> ⚠️ **No compres el dominio con la misma empresa que te da el hosting.** Si un día te quieres cambiar, tenerlo todo con el mismo proveedor te complica salir.

### Antes de comprar, revisa

- [ ] Que esté libre el `.com`, el `.mx` y el `@` de Instagram — **los tres**
- [ ] Que no haya una marca registrada parecida en MARCANET
- [ ] Que se pueda dictar por teléfono sin deletrear
- [ ] Que no se preste a lectura chistosa junto

**El dominio se compra el mismo día que decides el nombre.** No después.

---

## Parte 2 — Protección

### 2.1 Que no te lo tumben: Cloudflare

Es gratis y es lo más importante de esta sección.

Pones tu dominio a apuntar a Cloudflare y te da, sin costo:

- **CDN mundial** — tu sitio carga rápido desde cualquier país
- **Protección contra DDoS** — filtra ataques de saturación
- **HTTPS automático** con certificado gratis y renovación sola
- **Firewall básico** contra bots
- **Caché** — si tu servidor se cae, Cloudflare sigue mostrando la página

**Cómo:**

1. Crea cuenta en [cloudflare.com](https://cloudflare.com)
2. Agrega tu dominio
3. Cloudflare te da dos servidores DNS
4. Entra donde compraste el dominio y cambia los DNS por esos dos
5. Espera de 1 a 24 horas
6. En **SSL/TLS** pon el modo en **Full (strict)**
7. Activa **"Always Use HTTPS"**

### 2.2 Que no te lo roben

El robo de dominios existe y es más común de lo que parece. Cuatro candados:

- [ ] **Domain Lock / Transfer Lock** activado en el registrador
- [ ] **Autenticación en dos pasos (2FA)** en la cuenta del registrador — **este es el más importante**
- [ ] **WHOIS privado** para que tus datos no queden públicos
- [ ] **Renovación automática activada** y una tarjeta que no venza pronto

> El 90% de los dominios robados se pierden por dos razones: se olvidó renovar, o entraron a la cuenta del registrador porque no tenía 2FA. Las dos se arreglan en cinco minutos.

### 2.3 Que no se caiga

Tu sitio es HTML estático. Eso ya te da una ventaja enorme: **no hay base de datos que hackear ni WordPress que actualizar.** El 99% de los sitios tumbados son WordPress con plugins viejos.

- **GitHub Pages o Vercel** te dan HTTPS gratis y disponibilidad altísima
- **Tu código en GitHub es tu respaldo.** Si borras todo, un `git clone` lo devuelve
- Ponle **2FA a tu cuenta de GitHub** también

### 2.4 Protección legal

Tu sitio necesita, además:

- [ ] **Aviso de privacidad** conforme a la LFPDPPP (obligatorio si captas cualquier dato)
- [ ] **Verificación de edad** *(ya la trae)*
- [ ] **Leyenda precautoria** *(ya la trae)*
- [ ] **Registro de marca en clase 35** — protege tu nombre en el comercio en línea

---

## Parte 3 — Que te encuentren

### 3.1 Lo que ya te dejé hecho

Le agregué al sitio:

| Archivo | Para qué |
|---|---|
| `sitemap.xml` | El mapa que Google usa para saber qué indexar, con tus imágenes incluidas |
| `robots.txt` | Le dice a los buscadores que pueden entrar y dónde está el sitemap |
| **JSON-LD** en el `index.html` | Datos estructurados de Organization y Product. Es lo que hace que Google entienda que eres una marca de tequila de Amatitán y no un blog |
| `favicon.svg` | El iconito de la pestaña, con tu agave |
| Meta tags | Open Graph y Twitter Card, para que el link se vea bien al compartirlo en WhatsApp |
| `geo.region` | Señal de que eres de Jalisco |

> ⚠️ **Cambia `linaje59.mx` por tu dominio real** en `index.html`, `robots.txt` y `sitemap.xml` cuando lo compres. Es buscar y reemplazar.

### 3.2 Google Search Console — hazlo el día 1

Es gratis y es cómo le avisas a Google que existes.

1. Entra a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu dominio y verifica con un registro DNS (Cloudflare lo hace en un clic)
3. En **Sitemaps**, envía `sitemap.xml`
4. En **Inspección de URLs**, pega tu dominio y dale **"Solicitar indexación"**

Sin esto puedes tardar semanas en aparecer. Con esto, días.

Haz lo mismo en [Bing Webmaster Tools](https://www.bing.com/webmasters) — importa la configuración de Google en un clic.

### 3.3 Google Business Profile ⭐ el más importante para lo local

**Si solo haces una cosa de esta sección, que sea esta.**

Es lo que te pone en Google Maps y en el panel lateral cuando alguien busca "tequila artesanal Amatitán". Para un negocio local vale más que todo el SEO junto.

1. [business.google.com](https://business.google.com) → crear perfil
2. Categoría: **"Destilería"** o **"Productor de bebidas alcohólicas"**
3. Ubicación: tu domicilio comercial en Amatitán
4. **Sube las mismas fotos del predio** — Google premia fuerte los perfiles con muchas fotos reales
5. Te mandan una postal con código para verificar. Tarda 1–2 semanas
6. Publica algo cada 15 días: la jima, el lote nuevo, dónde te pueden encontrar

**Y pide reseñas.** Cinco reseñas de verdad te posicionan más que cualquier truco técnico.

### 3.4 Las palabras por las que quieres aparecer

No pelees por "tequila" — ahí compites contra Cuervo y pierdes. Pelea por las específicas:

| Búsqueda | Por qué |
|---|---|
| tequila sin aditivos | La gente informada busca exactamente esto |
| tequila artesanal Amatitán | Local + específico |
| tequila de agave propio | Tu diferenciador exacto |
| additive free tequila Jalisco | En inglés, para el comprador extranjero |
| tequila blanco 100% agave Jalisco | Categoría + lugar |
| destilería pequeña Ruta del Tequila | Turismo |

**Métete esas frases en los textos del sitio**, en `content.js`, de forma natural. No las repitas como robot — Google penaliza eso.

### 3.5 Lo que de verdad mueve la aguja

El SEO técnico ya está hecho. Lo que falta es lo que Google no puede fabricar solo:

**1. Enlaces desde otros sitios.** Cada vez que un bar, un hotel, una tienda o un blog te enlace, subes. Pídelo explícitamente: *"¿me pueden poner en su lista de marcas con un enlace?"* Es gratis y casi nadie lo pide.

**2. Directorios donde debes estar:**

- Tequila Matchmaker *(esencial — es donde busca el consumidor informado)*
- Consejo Regulador del Tequila, directorio de marcas
- Directorios de la Ruta del Tequila y turismo de Jalisco
- Cámara de comercio de Amatitán

**3. Instagram.** En bebidas premium manda más que Google. Enlaza tu sitio en la bio y publica el proceso, no la botella.

**4. Contenido que solo tú puedes escribir.** Una nota de *"cómo saber si tu tequila tiene aditivos"* o *"por qué se corta el quiote"* te trae gente buscando información. Es el tráfico más barato que existe y nadie con fábrica grande lo va a escribir con tu autoridad.

---

## Orden de ejecución

| # | Acción | Tiempo | Costo |
|---|---|---|---|
| 1 | Decide el nombre definitivo | — | — |
| 2 | Compra `.com` y `.mx` el mismo día | 15 min | ~$900 MXN/año |
| 3 | Activa 2FA y domain lock en el registrador | 5 min | gratis |
| 4 | Conecta el dominio a Cloudflare | 30 min | gratis |
| 5 | Apunta el dominio a GitHub Pages o Vercel | 20 min | gratis |
| 6 | Reemplaza `linaje59.mx` por tu dominio real en los 3 archivos | 5 min | — |
| 7 | Verifica en Google Search Console y envía el sitemap | 20 min | gratis |
| 8 | Crea el Google Business Profile | 30 min + 2 semanas | gratis |
| 9 | Da de alta en Tequila Matchmaker y directorios | 1 hora | gratis |
| 10 | Pide enlaces a cada cliente que abras | continuo | gratis |

**Costo total del año 1: menos de $1,000 MXN.** Todo lo demás es gratis y es trabajo.

---

## Errores que cuestan caro

**Comprar solo el `.com.mx` y dejar libre el `.com`.** Cuando tu marca valga, alguien lo va a registrar y te lo va a querer vender caro.

**Registrar el dominio a nombre de tu diseñador o de tu sobrino.** Suena obvio y pasa todo el tiempo. **Tiene que estar a tu nombre y en tu cuenta.**

**Olvidar la renovación.** Pon renovación automática y una alarma en el calendario una semana antes.

**Comprar el dominio antes de revisar MARCANET.** Puedes terminar con un dominio de un nombre que no vas a poder registrar como marca.

**Esperar a "tener todo listo" para publicar.** Google tarda semanas en confiar en un sitio nuevo. Entre antes esté vivo, mejor. Publícalo hoy aunque le falten cosas.

---

## Fuentes

- [¿Cuánto cuesta un dominio web en México? — Tiendanube](https://www.tiendanube.com/blog/cuanto-cuesta-un-dominio-web-en-mexico/)
- [Registro de dominios — Akky](https://www.akky.mx/servicios/dominios)
- [Dominio .MX — Wikipedia](https://en.wikipedia.org/wiki/.mx)
- [Mejores proveedores de dominio en México 2026 — SPEED Consultors](https://speedconsultors.com/mejores-proveedores-de-dominio-en-mexico-2026/)
- [Google Search Console](https://search.google.com/search-console)
- [Google Business Profile](https://business.google.com)
- [Cloudflare](https://www.cloudflare.com/)

*Los precios de dominios cambian y varían por promoción. Confirma en el registrador antes de comprar.*
