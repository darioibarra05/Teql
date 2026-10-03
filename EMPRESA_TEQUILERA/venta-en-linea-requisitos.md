# Vender tequila en línea — qué necesitas

**Buena noticia:** en México no hay ninguna ley que prohíba vender alcohol por internet.
**Mala noticia:** hay cuatro cuellos de botella que tumban al 90% de los que lo intentan, y ninguno tiene que ver con la página web.

---

## Los cuatro cuellos de botella

Antes de gastar un peso en tienda en línea, resuelve esto. Si alguno falla, todo lo demás no sirve.

| # | El problema | Por qué tumba proyectos |
|---|---|---|
| 1 | **Licencia municipal de venta** | Es estatal y municipal, no federal. Cada municipio decide, y algunos simplemente no la dan. |
| 2 | **La pasarela de pago** | Stripe y Mercado Pago tienen el alcohol como **negocio restringido**. Necesitas **aprobación por escrito**. |
| 3 | **La paquetería** | DHL, FedEx y Estafeta tienen el alcohol como artículo restringido. Necesitas contrato empresarial. |
| 4 | **Los marbetes** | Sin marbete SAT en cada botella, la venta es ilegal. Y para pedirlos hay que estar en el padrón. |

---

## 1. Trámites federales (SAT)

### Padrón de Contribuyentes de Bebidas Alcohólicas (PCBA)

**Obligatorio.** Sin esto no puedes pedir marbetes, y sin marbetes no puedes vender.

- **Costo: gratis**
- Se hace en línea en el portal del SAT
- Aplica a fabricantes, productores, envasadores e importadores

**Requisitos:**

- [ ] RFC activo con la actividad económica correcta
- [ ] **e.firma** vigente
- [ ] **Buzón Tributario** activo
- [ ] **Opinión de cumplimiento positiva** (32-D)
- [ ] **Certificado de Sello Digital** vigente

> ⚠️ La opinión de cumplimiento positiva es la que más gente traba. Si traes cualquier adeudo o declaración pendiente, el trámite se detiene. Revísala antes de empezar.

### Marbetes

Cada botella de hasta 5 litros vendida en México **debe llevar marbete adherido**.

- **Costo: $0.61 MXN por marbete**
- Se piden por el portal del SAT una vez inscrito en el PCBA
- Como marca que produce vía maquila, defines con tu maquiladora quién los solicita y quién los pega

Para 3,000 botellas: **~$1,825 MXN**. El costo no es el problema — el trámite y los tiempos sí.

### Impuestos

- **IEPS 53%** sobre el precio de venta de bebidas con más de 20° G.L.
- **IVA 16%**
- Facturación electrónica obligatoria en cada venta

---

## 2. Licencia estatal y municipal

**Aquí es donde varía todo.** El alcohol se regula a nivel estatal y municipal, no federal.

Necesitas la licencia en modalidad **"venta de bebidas alcohólicas en botella cerrada"** — no la de consumo en el lugar.

**Trámite:** Dirección de Padrón y Licencias de tu municipio (Amatitán, Tequila, o donde tengas el domicilio fiscal).

**Te van a pedir, típicamente:**

- [ ] Acta constitutiva (o alta como persona física con actividad empresarial)
- [ ] RFC y comprobante de domicilio
- [ ] **Licencia de uso de suelo** compatible
- [ ] Licencia de funcionamiento
- [ ] Dictamen de protección civil
- [ ] Croquis del local o bodega

**Costo:** varía muchísimo — de unos miles a decenas de miles de pesos según municipio. **Renovación anual.**

> 💡 **Llama a Padrón y Licencias de tu municipio antes que nada.** En cinco minutos te dicen si la dan, cuánto cuesta y cuánto tarda. Algunos municipios tienen cupo cerrado y ahí se acabó la discusión.

---

## 3. La pasarela de pago — el que nadie ve venir

**Stripe** lista las bebidas alcohólicas entre sus **negocios restringidos** en México. Puedes ser elegible, pero **solo con aprobación por escrito de Stripe.**

**Mercado Pago** también tiene las bebidas alcohólicas entre productos restringidos.

### Qué hacer

1. **Antes de construir la tienda**, escribe a soporte de Stripe o Mercado Pago
2. Explica que eres productor con licencia, y adjunta padrón SAT + licencia municipal
3. Pide la aprobación **por escrito**
4. Si te la niegan, busca alternativas: **Conekta**, **Openpay**, **Clip**, o transferencia SPEI directa

> Si construyes la tienda primero y luego te bloquean la cuenta a mitad de una venta, pierdes el dinero y la reputación. Este paso va **primero**.

---

## 4. El envío

Las paqueterías tienen el alcohol como **artículo restringido**, no prohibido. La diferencia importa.

| Paquetería | Situación |
|---|---|
| **FedEx** | Solo bajo acuerdo entre licenciatarios. **Un particular no puede enviar alcohol**; una empresa con licencia sí, a destinos determinados |
| **DHL** | Permitido con política estricta y contrato empresarial |
| **Estafeta / Paquetexpress** | Restringido; se maneja por contrato comercial |
| **Uber Direct / Rappi** | Entrega local el mismo día. Es la vía más simple si vendes en Guadalajara y alrededores |

### Qué necesitas

- **Contrato empresarial**, no cuenta de mostrador
- **Embalaje certificado** para vidrio: inserto de cartón o espuma, doble caja, sello "frágil"
- **Seguro de mercancía** — el vidrio se rompe y la reposición sale de tu margen
- Factura y documentación de la mercancía dentro del paquete

> **Empieza local.** Guadalajara y zona metropolitana con entrega propia o Uber Direct te quita el 80% del problema logístico mientras aprendes.

---

## 5. La tienda en línea

Lo más fácil de todo, irónicamente.

| Opción | Costo | Para quién |
|---|---|---|
| **Tiendanube** | Desde ~$500 MXN/mes | Hecha para México, acepta MercadoPago nativo |
| **Shopify** | ~$29–79 USD/mes | Más potente, mejor si vas a exportar |
| **WooCommerce** | Hosting ~$150 MXN/mes | Si quieres control total. Eres ingeniero, te va bien |
| **Mercado Libre** | Comisión por venta | Sin desarrollo. Menos margen y cero marca |

**Tu sitio actual ya te sirve de base.** Se le agrega el carrito y listo — no hay que rehacerlo.

### Lo que la tienda debe tener por ley

- [ ] **Verificación de edad** al entrar *(tu sitio ya la trae)*
- [ ] **Leyenda precautoria** visible *(ya la trae)*
- [ ] **Aviso de privacidad** conforme a la LFPDPPP
- [ ] **Términos y condiciones** de venta
- [ ] **Política de devoluciones**
- [ ] Precio con IVA desglosado
- [ ] Datos fiscales del vendedor
- [ ] **Verificación de edad en la entrega** — identificación oficial contra la mano

---

## Orden real de ejecución

No lo hagas en desorden. Cada paso depende del anterior.

| # | Paso | Tiempo |
|---|---|---|
| 1 | Llama a Padrón y Licencias del municipio: ¿la dan? ¿cuánto? | 1 día |
| 2 | Constituye la figura legal (o alta como persona física con actividad empresarial) | 2–4 semanas |
| 3 | Saca e.firma, Buzón Tributario y opinión de cumplimiento positiva | 1–2 semanas |
| 4 | Inscríbete al **PCBA** del SAT | 2–4 semanas |
| 5 | Tramita la **licencia municipal** | 1–3 meses |
| 6 | Pide **aprobación por escrito** a la pasarela de pago | 1–3 semanas |
| 7 | Abre **contrato empresarial** con paquetería | 1–2 semanas |
| 8 | Solicita **marbetes** | 2–4 semanas |
| 9 | Monta el carrito sobre tu sitio | 1–2 semanas |
| 10 | Prueba con 10 pedidos reales antes de abrir al público | 1 semana |

**Total realista: 4 a 6 meses.**

---

## Costos aproximados de arranque

| Concepto | MXN |
|---|---|
| Constitución legal | 25,000 – 40,000 |
| Padrón SAT (PCBA) | **gratis** |
| Licencia municipal | 5,000 – 50,000+ *(varía muchísimo)* |
| Marbetes (3,000 botellas) | ~1,825 |
| Plataforma, primer año | 6,000 – 20,000 |
| Embalaje certificado (3,000 u.) | 15,000 – 30,000 |
| Contador especializado en IEPS | 3,000 – 6,000/mes |
| **Arranque** | **~$55,000 – 150,000** |

---

## Mi recomendación honesta

**El e-commerce no debe ser tu canal del año 1.**

Con 3,000 botellas, seis meses de trámites y ~$100,000 de arranque, la venta directa en línea te da poco volumen y mucho dolor de cabeza. El alcohol es de las categorías más difíciles de vender online en México, y no por la tecnología.

### Haz esto en su lugar

**Año 1 — el sitio vende sin vender.** Deja tu página como está: escaparate y herramienta de venta B2B. En vez de carrito, un botón de **"Consigue una botella"** que abra WhatsApp. Cierras la venta por ahí, cobras por transferencia y entregas tú mismo en Guadalajara. Es legal, es cero fricción, y a este volumen es más rentable.

**Año 1 — vende donde ya hay licencia.** Que te liste una tienda especializada que ya tiene todos los permisos: La Europea, Bodegas Alianza, o alguna boutique de destilados con tienda en línea. Ganas menos por botella, pero llegas a todo México **mañana** en vez de en seis meses.

**Año 2 — ahí sí monta el e-commerce.** Cuando ya tengas rotación probada, marca conocida y volumen que justifique los trámites.

> El dinero y los meses que te ahorras en trámites rinden diez veces más en muestras gratis para bartenders. Una carta de bar respetada te vende más botellas que una tienda en línea sin tráfico.

---

## Fuentes

- [Inscríbete al Padrón de Contribuyentes de Bebidas Alcohólicas — SAT](https://www.sat.gob.mx/tramites/59934/inscribete-al-padron-de-contribuyentes-de-bebidas-alcoholicas-en-el-rfc)
- [Solicitud de marbetes físicos y precintos nacionales — SAT](https://wwwmat.sat.gob.mx/tramites/95051/ministracion-de-marbetes-y-precintos-de-bebidas-alcoholicas-nacionales)
- [Padrón de bebidas alcohólicas — SAT](https://wwwmat.sat.gob.mx/consulta/79649/padron-de-bebidas-alcoholicas)
- [Negocios restringidos en México — Stripe](https://stripe.com/sv-mx/restricted-businesses)
- [Cómo enviar alcohol: regulaciones y licencias — FedEx](https://www.fedex.com/es-us/shipping/alcohol.html)
- [Artículos prohibidos y restringidos — DHL](https://express-resource.dhl.com/onboarding-articulos-prohibidos-y-restringidos-es-es.html)
- [Cómo vender alcohol por internet: permisos, costos y pasos — Tiendanube](https://www.tiendanube.com/blog/vender-alcohol-por-internet-permisos/)
- [Vender alcohol por internet en México: guía legal — Lureo Digital](https://lureodigital.com/vender-alcohol-por-internet-guia-legal-mexico/)
- [Licencia de alcohol en México: costos, requisitos y trámites — EMCEBAR](https://www.emcebar.org.mx/licencia-de-alcohol-en-mexico-costos-requisitos-y-tramites/)
- [Requisitos legales para distribuir tequila — Dialce](https://www.dialce.com/es/requisitos-legales-para-distribuir-tequila/)

*Los costos de licencia municipal varían por municipio y cambian cada año con la ley de ingresos local. Confirma con Padrón y Licencias de tu municipio, y valida la estructura fiscal con un contador que maneje IEPS. No soy abogado ni contador.*
