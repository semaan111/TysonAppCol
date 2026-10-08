# TYSON · Boxing Club

Tu entrenador de boxeo por voz en español. Interfaz old school: papel, negro, rojo de ring y cronómetro grande. Proyecto completo en HTML, CSS y JavaScript, con servidor Node.js opcional. Sin dependencias de producción, claves ni suscripciones.

## Nueva interfaz mobile first

La pantalla Entrenar concentra reloj, combinación, voz y botón principal. **Ajustar** abre un panel inferior con tiempos, nivel, enfoque, guardia y voz. **Actividad** muestra el historial y **Técnica** contiene la guía y biblioteca. Abrir un panel durante el entrenamiento lo pausa automáticamente; ciérralo con **Listo** y pulsa **Continuar**. Los tiempos quedan bloqueados durante una sesión: finalízala para configurar una nueva.

Controles redondeados, listas agrupadas, interruptores y paneles inspirados en iOS, conservando el rojo, negro y papel del gimnasio clásico. Sigue siendo una app web HTML, compatible también con Android y computador. No requiere instalar una aplicación nativa.

## 1. Publicarlo en GitHub, paso a paso

1. Descomprime `Tyson_Boxing_App.zip` en tu computador.
2. Entra a GitHub e inicia sesión.
3. Crea un repositorio nuevo llamado `tyson`. Elige **Public** si usas GitHub Free. Pulsa **Create repository**.
4. En la pantalla del repositorio selecciona **uploading an existing file**. Si ya tiene archivos: **Add file → Upload files**.
5. Arrastra los archivos y carpetas descomprimidos. **index.html debe quedar en la raíz**, junto a app.js, core.js y style.css, no dentro de otra carpeta `tyson`. No subas el ZIP como único archivo.
6. Pulsa **Commit changes**.
7. Abre **Settings → Pages**.
8. En **Build and deployment**, elige **Deploy from a branch**.
9. Selecciona la rama **main** y carpeta **/(root)**. Pulsa **Save**.
10. Espera la publicación y pulsa **Visit site** en esa misma pantalla. La dirección tendrá esta forma: `https://TU-USUARIO.github.io/tyson/`.
11. Abre la página en el celular. En Safari puedes usar Compartir → Agregar a inicio como acceso directo.

La app está preparada para repositorios con subcarpeta: todos sus recursos usan rutas relativas. Si no aparece, revisa que el archivo se llame exactamente `index.html` y que la publicación en Actions haya terminado. GitHub indica que la publicación puede tardar hasta diez minutos.

**GitHub Pages aloja archivos estáticos; no ejecuta Node.js.** El cronómetro, la biblioteca, la voz y el historial funcionan completos en el navegador. El backend se entrega para usarlo en un servidor Node.js cuando lo necesites; no hace falta contratarlo para entrenar.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 2. Probarlo antes de subirlo

Puedes abrir `index.html` con doble clic, manteniendo juntos los otros archivos. Algunos navegadores limitan la voz o el almacenamiento al abrir archivos locales; la opción recomendada es GitHub Pages o el servidor local.

Si tienes Node.js 20 o posterior instalado:

```bash
npm start
```

Después abre `http://localhost:3000`. No hace falta ejecutar `npm install`.

## 3. Tu primera sesión

1. Pulsa **Ajustar** y elige **Principiante**, **Completo** y guardia diestra o zurda.
2. Ajusta segundos de trabajo, descanso, preparación y número de rounds, o usa un preset.
3. Activa instrucciones habladas y escoge una voz en español.
4. Pulsa **ESCUCHAR ENTRENADOR**. Sube el volumen del dispositivo.
5. Cierra los ajustes con **Listo** y pulsa **Empezar**. Primero verás la cuenta de preparación.
6. Escucha la combinación completa y ejecútala. La pausa que configuraste comienza al terminar la frase; no se mide desde el comienzo de la voz.
7. Al terminar cada round sonará la campana. El descanso comienza automáticamente. No hay descanso extra al final de la sesión.
8. Puedes pausar, continuar, finalizar o pedir otro combo. El historial distingue sesiones completas y parciales.

El contador registra **combinaciones indicadas**, no golpes detectados ni calidad técnica. No usa cámara o sensores.

## 4. Voz: qué incluye realmente

- Síntesis de voz nativa (`speechSynthesis`) en español.
- Selector de las voces españolas que ofrece tu dispositivo.
- Tono y velocidad ajustables. El tono inicial es natural (1.0), sin el efecto artificialmente grave anterior. La app prioriza voces identificadas como naturales, mejoradas o neuronales si están disponibles.
- La calidad, timbre, acento y disponibilidad dependen del navegador y del sistema operativo; no se garantiza una voz masculina o grave en todos los equipos.
- No es una grabación ni una clonación de Mike Tyson. Es una voz del sistema para un entrenador independiente. No se necesita ElevenLabs ni una API de pago.
- Las instrucciones no se superponen; se cancela la voz al pausar, cambiar de fase o finalizar. Un bloqueo de síntesis tiene un tiempo máximo de espera para recuperar el entrenamiento.
- Si no hay voces españolas, la app intenta solicitar español al sistema y lo advierte. Si no se escucha, instala una voz española desde las opciones de voz/accesibilidad del dispositivo, cierra y vuelve a abrir el navegador. La app puede usarse visualmente.
- El botón de prueba queda desactivado durante la sesión para evitar interrumpir instrucciones.
- Las voces del sistema pueden usar servicios del proveedor del navegador. No hay servidor de voz propio ni claves incluidas.

Mantén la pantalla abierta. Al cambiar de pestaña, minimizar o bloquear, el entrenamiento se pausa para no perder instrucciones. La app solicita mantener la pantalla encendida donde el navegador lo permite; no puede garantizar audio continuo con el celular bloqueado.

## 5. Biblioteca y niveles

**114 secuencias: 56 bases y 58 variaciones de salida.** Se seleccionan por nivel y enfoque y se evita repetir inmediatamente el mismo identificador. No se arma una cadena de golpes al azar sin estructura.

- **Principiante:** secuencias cortas, jab, recto, ganchos, introducción al cuerpo, bloqueo y salidas sencillas.
- **Intermedio:** agrega uppercuts, cambios de altura, fintas, esquivas y pivotes. Incluye las bases del nivel anterior.
- **Avanzado:** agrega secuencias más largas de ataque, defensa, contraataque y salida. Incluye las bases anteriores.
- **Enfoques:** completo, técnica, cuerpo, defensa y desplazamientos.
- La biblioteca estática y las adaptaciones son una herramienta de práctica; no equivalen a un entrenador que observe y corrija tu técnica.

Los golpes 1–6 representan jab, recto, gancho adelantado, gancho atrasado, upper adelantado y upper atrasado. C indica cuerpo. En guardia zurda se invierten las manos adelantada y atrasada. Las esquivas izquierda/derecha siguen siendo hacia tu izquierda/derecha física. La leyenda completa está dentro de la app.

No existe una lista finita de “todas las combinaciones”: longitud, repetición, cambios de altura y desplazamientos permiten muchas variaciones. El proyecto incluye una biblioteca acotada, ampliable y consultable.

## 6. Backend incluido

`server.js` sirve la aplicación y una API de lectura usando solamente módulos nativos de Node.js. No necesita base de datos. Se inicia con `npm start`; acepta la variable de entorno `PORT` (3000 por defecto).

| Ruta | Resultado |
| --- | --- |
| `GET /api/health` | Estado y versión |
| `GET /api/moves` | Diccionario de movimientos |
| `GET /api/combos?level=2&focus=body` | Secuencias filtradas |
| `GET /api/combo?level=3&focus=defense&last=T020` | Una secuencia aleatoria |

`level`: 1, 2 o 3. `focus`: all, technique, body o defense. Parámetros inválidos devuelven 400; rutas desconocidas, 404; otros métodos, 405. Solo se sirven los archivos públicos autorizados, no el código del servidor. No hay endpoints de escritura ni autenticación.

El frontend usa el mismo motor `core.js` localmente para seguir funcionando en GitHub Pages; no depende de estas rutas. La API permite integrar la biblioteca desde otro cliente. El servidor puede publicarse en un alojamiento compatible con Node; subir su archivo a GitHub no lo ejecuta.

## 7. Archivos

- `index.html`: estructura y controles.
- `style.css`: diseño responsive old school, sin fuentes o imágenes remotas.
- `core.js`: movimientos, combinaciones, filtros, selección y reloj.
- `app.js`: voz, sonido, interfaz, pausas y almacenamiento.
- `mobile.js`: paneles móviles, resumen, control rápido de voz y navegación.
- `server.js`: backend y servidor de archivos.
- `icon.svg`: favicon.
- `package.json`: comandos de ejecución y pruebas.
- `tests/core.test.js`: pruebas del reloj, catálogo y API.
- `FUENTES.md`: referencias y alcance de las adaptaciones.
- `.nojekyll`: evita procesamiento innecesario de GitHub Pages.

## 8. Datos y límites

Ajustes y hasta 30 sesiones se guardan en `localStorage` del navegador. No hay sincronización entre celulares, cuentas, envío de historiales ni una base de datos remota. Si borras los datos del navegador, perderás ese historial. Puedes borrarlo desde la app. El navegador puede impedir persistencia en ciertos modos privados.

El cronómetro usa un reloj monotónico para corregir retrasos de los intervalos, conserva el tiempo al pausar y no añade un descanso tras el último round. No es un sistema de cronometraje certificado.

Para ejecutar las pruebas incluidas:

```bash
npm test
```

Entrena con calentamiento previo y espacio libre. La app está pensada para sombra y saco. No coordina sparring ni evalúa si tu ejecución es segura. Aprende la técnica con un entrenador.

## Personaje, pronunciación y Spotify

- Personaje central: caricatura 3D de Mike Tyson generada como imagen PNG con transparencia. Es una ilustración renderizada, no un modelo 3D interactivo. Tiene una animación CSS sutil cuando el entrenador habla; se desactiva al preferir movimiento reducido.
- La voz lee **yab**, mientras la pantalla conserva **Jab**. Se aplica a todas las frases, incluida la prueba de voz.
- Pausa para ejecutar: **2 segundos por defecto**, ajustable desde **1 hasta 12 segundos**. En la primera carga de esta actualización se migran la pausa a 2 y el tono/velocidad a 1; los cambios posteriores que hagas se conservan.
- Spotify: integrado con la iFrame API oficial. El enlace recibido es una canción, **Remember the Name (feat. Styles of Beyond), Fort Minor**, no una playlist. Se puede pegar una playlist, álbum o canción diferente en las opciones de música. La app no crea una playlist en tu cuenta.
- El reproductor intenta arrancar al estar listo y al iniciar/continuar el entrenamiento, respetando una pausa manual. Si el navegador bloquea autoplay o Spotify requiere interacción, habrá que pulsar una vez el botón flotante o el reproductor oficial. No se eluden restricciones del navegador ni de Spotify.
- Botón flotante inferior: pausa/reanuda música. Los tres puntos abren el reproductor y permiten cambiar el enlace. Al salir de la página o pausar/finalizar la sesión, la música se pausa.
- La API de Spotify Embed no expone un método para fijar volumen. Por ello **no se ha implementado un volumen bajo automático**: la música se pausa mientras habla el entrenador y se reanuda al terminar. Ajusta el volumen en los controles disponibles de Spotify o del dispositivo. No se superpone intencionalmente música con voz.
- La calidad de la voz aún depende del dispositivo. Elegir una voz natural y evitar modificar su tono mejora la configuración, pero no equivale a una grabación humana ni a una voz premium contratada.
- Spotify requiere conexión. Puede ofrecer reproducción limitada según navegador, región o cuenta. No se descargó ni copió el audio de la canción. La app no usa credenciales ni tokens de Spotify.
- `music.js` contiene integración, estados y prioridad de voz; `assets/tyson-3d.png` contiene el personaje. Incluye ambos al actualizar GitHub.

Documentación consultada:
https://developer.spotify.com/documentation/embeds/references/iframe-api
https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api
https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay
