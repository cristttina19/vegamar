# Vegamar · Espacio Ser

Web de **Verónica Garijo (Vegamar)**: reiki, limpieza y sanación de útero, lectura álmica, meditaciones,
talleres, programas (Volver a ti, Espacio Ser, 22 días de placer) y su libro *Reconociéndome*.

Es una sola página (`index.html`) en HTML, CSS y JavaScript, sin nada que instalar ni construir.
Pensada para publicarse gratis con **GitHub Pages**.

## Verla en el ordenador

Desde esta carpeta:

```
py -m http.server 8110
```

y abre http://127.0.0.1:8110 (Ctrl+C para pararla).

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Textos, precios, sesiones, programas | `index.html` |
| Eventos y talleres | `index.html`, sección `id="eventos"`: copia un `<article class="event">` y cambia la fecha. Cada evento se oculta solo al día siguiente de su `data-until` (AAAA-MM-DD). Si no queda ninguno, sale «Pronto habrá nuevas fechas». |
| Mensajes de WhatsApp | atributo `data-wa="..."` de cada botón (el texto que ya llega escrito) |
| Número / enlace de WhatsApp | `js/main.js`, constante `WHATSAPP` (solo ahí) |
| Colores | `css/estilo.css`, al principio (`:root`) |
| Brillitos | `data-sparkles="número"` en `index.html` (cuántos hay en cada zona) |

Letras: Fraunces y Work Sans (las mismas que su página de enlaces), guardadas en `fonts/`: la web no pide nada a
Google ni a nadie, así que no necesita aviso de cookies.

## Publicar en GitHub Pages

Publicada en **https://cristttina19.github.io/vegamar/** (repositorio `cristttina19/vegamar`).

Se actualiza sola: cada `git push` a `main` la vuelve a publicar en 1-2 minutos
(`.github/workflows/pages.yml`; se puede seguir en la pestaña *Actions* de GitHub). Solo se publican los archivos
de la web (`index.html`, `css`, `js`, `fonts`, `img`).

Más adelante se le puede poner un dominio propio (por ejemplo `vegamar.es`) en *Settings → Pages*.

## Pendiente

- Foto de Vero (y la portada del libro) para sustituir el sol de «Sobre mí».
- Imagen para la vista previa al compartir por WhatsApp (`og:image`, 1200×630).
- Aviso legal (nombre, NIF y correo de Vero): obligatorio al vender servicios en la web.
- Revisar con Vero los textos de «Sobre mí» y las descripciones de cada sesión.
