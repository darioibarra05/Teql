# Teql

Página web y repositorio de imágenes para mi marca de tequila.

---

Sitio estático de una sola página. Sin build, sin dependencias, sin `npm install`. Abres `index.html` y funciona.

---

## Estructura

```
Teql/
├── index.html
├── .nojekyll                  ← necesario para GitHub Pages
└── assets/
    ├── css/style.css
    ├── js/
    │   ├── content.js         ← TODO el texto y los datos viven aquí
    │   └── main.js            ← lógica (normalmente no se toca)
    └── img/                   ← aquí van tus fotos
```

---

## Lo único que necesitas editar: `assets/js/content.js`

### 1. El nombre de la marca

```js
const BRAND = {
  name: "Don Dario",   // ← cámbialo y se actualiza en todo el sitio
```

Se refleja en la portada, la navegación, el pie, el título de la pestaña y el asunto del correo de contacto. **Un solo lugar.**

### 2. Contacto y datos regulatorios

```js
  email: "ibarradario725@gmail.com",
  phone: "+52 33 0000 0000",
  whatsapp: "523300000000",    // sin +, sin espacios
  nom: "NOM-0000-CRT",         // te lo da tu maquiladora
  crt: "CRT-0000",
```

### 3. Los textos

Todo está en el objeto `I18N`, con `es` e `en` lado a lado. Cambias una frase en español, cambias su gemela en inglés, y listo.

---

## Fotos — ya instaladas

Tus once fotos ya están procesadas, redimensionadas, comprimidas y **sin metadatos EXIF** (importante: los originales traían las coordenadas GPS de tus parcelas).

| Archivo | Origen | Dónde sale |
|---|---|---|
| `hero.jpg` | IMG_7147 — atardecer sobre el agave | Portada, pantalla completa |
| `tierra.jpg` | IMG_8327 — figura con sombrero y el cerro | Sección "La tierra" |
| `botella.jpg` | IMG_6419 — sombrero sobre la penca | Sección "La botella" *(temporal)* |
| `fundador.jpg` | IMG_7215 — tú en el surco, recortada cuadrada | Sección "La casa" |
| `og.jpg` | IMG_7147 recortada 1200×630 | Cuando compartan el link |
| `predio/volcan.jpg` | IMG_8602 — el Volcán de Tequila | Mosaico |
| `predio/surcos.jpg` | IMG_2205 — surcos convergiendo | Mosaico |
| `predio/caballo.jpg` | IMG_6608 — caballo entre el agave | Mosaico |
| `predio/camino.jpg` | IMG_2150 — el camino del predio | Mosaico |
| `predio/mesa.jpg` | IMG_9228 — la mesa al fondo | Mosaico |
| `predio/ladera.jpg` | IMG_1643 — trabajando la ladera | Mosaico |

**Total: 2.6 MB.** Carga rápido incluso en datos móviles.

### Para cambiar una foto

Reemplaza el archivo con el mismo nombre. Nada más. Si borras una, el sitio muestra en su lugar un marcador con textura que se ve digno — no se rompe ni deja hueco.

> ⚠️ `botella.jpg` es provisional: es el sombrero sobre la penca, no una botella. Cuando tengas la foto de producto real, reemplaza ese archivo.

> Si subes fotos nuevas desde el celular, quítales los metadatos antes. Traen la ubicación GPS exacta de donde las tomaste.

---

## Publicar

### GitHub Pages

```bash
git init
git add .
git commit -m "Sitio de marca"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: `main` / root → Save.**
En un par de minutos queda en `https://darioibarra05.github.io/Teql/`.

El archivo `.nojekyll` ya está incluido — sin él, GitHub ignora carpetas que empiezan con guion bajo.

### Vercel

```bash
npm i -g vercel
vercel
```

Acepta los valores por defecto. No preguntes por framework: es HTML puro.
También puedes arrastrar la carpeta a [vercel.com/new](https://vercel.com/new).

### Dominio propio

Cuando tengas el `.com`, en Vercel es **Settings → Domains**; en GitHub Pages es **Settings → Pages → Custom domain**. Ambos dan HTTPS gratis.

---

## Qué trae

- **Español e inglés** con selector arriba a la derecha. Recuerda la preferencia del visitante.
- **Verificación de edad** al entrar — norma de la industria; un comprador nota si falta.
- **Leyenda precautoria** en el pie, como pide la NOM-142.
- **Aparición progresiva** al hacer scroll, con respeto a `prefers-reduced-motion`.
- **Responsive** de teléfono a monitor grande.
- **Marcadores de foto** que se ven bien mientras no tengas las imágenes.
- Espacio ya reservado para **NOM** y **CRT** en el pie.

---

## Antes de mandarle el link a un comprador

- [ ] Cambiar `BRAND.name` al nombre definitivo
- [ ] Poner correo, teléfono y WhatsApp reales
- [ ] Poner NOM y CRT reales
- [ ] Reemplazar `botella.jpg` con foto real de producto
- [ ] Revisar la ficha técnica contra lo que de verdad produjiste
- [ ] Abrirlo en el celular — la mitad lo van a ver ahí
- [ ] Verificar que el enlace de WhatsApp abra tu número

---

## Notas

- La graduación está en **38% Alc. Vol.** en `content.js`. Recuerda que Estados Unidos exige mínimo 40% para destilados; si algún día exportas, hay que cambiar ese dato y el producto.
- Las tipografías cargan de Google Fonts. Si prefieres que el sitio funcione sin internet, descarga Cormorant Garamond y Jost a `assets/fonts/` y cambia el `<link>` por `@font-face`.
- No hay analítica incluida. Si la quieres, Plausible o Umami no rastrean personas y no requieren aviso de cookies.
