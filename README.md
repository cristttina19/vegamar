# Vegamar · Espacio Ser

Web de **Verónica Garijo (Vegamar)**: reiki, limpieza y sanación de útero, lectura álmica, meditaciones,
talleres, programas (Volver a ti, Espacio Ser, 22 días de placer) y su libro *Reconociéndome*.

Una portada corta (`index.html`) y una página (landing) para cada cosa, con toda la información:

| Página | Archivo |
|---|---|
| Masterclass gratuita | `masterclass/index.html` |
| Reiki | `reiki/index.html` |
| Limpieza y sanación de útero | `sanacion-de-utero/index.html` |
| Lectura álmica | `lectura-almica/index.html` |
| Cursos grabados (próximamente) | `cursos/index.html` |
| Volver a ti | `volver-a-ti/index.html` |

Cada landing: título y datos clave (duración, formato, precio), «Es para ti si…», «Cómo funciona», quién te
acompaña, preguntas frecuentes y botón final. HTML, CSS y JavaScript, sin nada que instalar.

## Verla en el ordenador

Desde esta carpeta:

```
py -m http.server 8110
```

y abre http://127.0.0.1:8110 (Ctrl+C para pararla).

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Textos y precios | `index.html` (portada) y el `index.html` de la carpeta de cada landing (el precio sale en las dos) |
| Fecha de la masterclass | `index.html` y `masterclass/index.html`: texto y `data-until="AAAA-MM-DD"`. Al día siguiente de esa fecha se oculta sola y sale «Avísame de la próxima». |
| Mensajes de WhatsApp | atributo `data-wa="..."` de cada botón (el texto que ya llega escrito) |
| Número / enlace de WhatsApp | `js/main.js`, constante `WHATSAPP` (solo ahí) |
| Colores | `css/estilo.css`, al principio (`:root`) |
| Fotos | `img/fotos/` (`vero-avatar.webp` redonda, `vero-retrato.webp`), sacadas de `Escritorio\claude\vegamar\perfil.jpeg` |
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

- Portada del libro (ahora es un dibujo) y más fotos de Vero.
- Descripciones reales de cada sesión y programa (los textos de las landings son un borrador).
- Imagen para la vista previa al compartir por WhatsApp (`og:image`, 1200×630).
- Aviso legal (nombre, NIF y correo de Vero): obligatorio al vender servicios en la web.
- Revisar con Vero los textos de «Sobre mí» y las descripciones de cada sesión.
