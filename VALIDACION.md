# Validación de esta entrega

- 4 pruebas automáticas incluidas: catálogo/filtros/sin repetición inmediata, reloj con pausa/descanso/final, rounds sin descanso y recuperación de ticks tardíos, API y acceso restringido a archivos públicos.
- Flujo probado en Chromium: iniciar, entrar a trabajo, pausar sin consumir tiempo, continuar, pasar por descanso, terminar dos rounds, recuperar historial tras recargar, finalizar una sesión parcial, seleccionar nivel/cuerpo/guardia zurda.
- Interfaz inspeccionada a 1440 px y 390 px de ancho. Sin desbordamiento horizontal ni errores JavaScript durante el flujo probado.
- Ciclo de síntesis de voz comprobado con un sustituto de voz española: prueba de audio, instrucciones, cancelación, pausa, continuación y nombres de manos en guardia zurda.
- La prueba con voz simulada valida la coordinación de eventos, no el timbre ni la salida física de audio. No se ha escuchado la voz real de un iPhone o Android. Prueba el botón Escuchar entrenador en tu equipo.
- No se ha publicado en tu cuenta GitHub: los archivos están preparados para que los subas siguiendo LEEME_PRIMERO.md.

## Revisión mobile first

Probada en Chromium a 320 y 390 px y en escritorio a 1280 px: paneles Ajustar/Técnica/Actividad, validación de tiempos, actualización del resumen, pausa automática al abrir un panel, continuación y final de round. Botón Empezar visible sobre la barra inferior a 390 × 844. Sin errores de JavaScript ni desbordamiento horizontal. La voz conserva el motor de la entrega anterior.

## Personaje, voz y música

- Pruebas de interfaz a 390 × 844 y ancho 320: imagen cargada, CTA sin quedar cubierto por el control flotante, configuración inicial de 2 segundos y mínimo de 1, tono natural 1.0.
- Con sustitutos de Spotify y síntesis de voz: se verificó intento de inicio, pausa/reanudación manual, pausa durante voz y reanudación posterior, suspensión al pausar entrenamiento, lectura «yab» y rechazo de enlaces no válidos.
- Estas pruebas con sustitutos verifican la lógica; no acreditan reproducción real de Spotify ni calidad de la voz en iPhone. El navegador, disponibilidad de voces y la cuenta de Spotify siguen determinando el resultado real.
- El volumen bajo automático solicitado no es compatible con la iFrame API. Se implementa pausa temporal durante las instrucciones y se explica esta diferencia en el reproductor y la guía.
- Intento real de cargar Spotify en el navegador de pruebas: el recurso externo terminó en ERR_EMPTY_RESPONSE y no se creó el iframe. Se verificó la presentación del error y la alternativa de abrir Spotify. No se afirma que la reproducción real haya sido validada en este entorno.
