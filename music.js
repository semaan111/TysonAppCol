'use strict';
(() => {
 const track='https://open.spotify.com/track/6ndmKwWqMozN2tcZqzCX4K';
 let controller=null,ready=false,playing=false,wanted=true,speaking=false,held=false,blocked=false,failed=false,resumeTimer=null,confirmTimer=null;
 let source=track,programmaticPauseUntil=0;
 const el=id=>document.getElementById(id);
 function render(){
  let label='Activar música',status='Spotify · Remember the Name',icon='♪';
  if(failed){label='Música no disponible';status='Abrir opciones';}
  else if(!ready){label='Conectando música';status='Spotify';}
  else if(speaking&&wanted){label='Voz primero';status='Música en pausa automática';icon='Ⅱ';}
  else if(held&&wanted){label='Música en pausa';status='Continúa tu entrenamiento';icon='Ⅱ';}
  else if(playing){label='Pausar música';status='Spotify · Reproduciendo';icon='Ⅱ';}
  else if(!wanted){label='Reanudar música';status='Pausada por ti';icon='▶';}
  else if(blocked){label='Activar música';status='Spotify necesita un toque';icon='▶';}
  el('musicLabel').textContent=label;el('musicStatus').textContent=status;el('musicIcon').textContent=icon;
  el('musicToggle').setAttribute('aria-label',playing||((speaking||held)&&wanted)?'Pausar música':label);
  el('musicToggle').setAttribute('aria-pressed',String(wanted&&(playing||speaking||held)));
 }
 function pause(){programmaticPauseUntil=performance.now()+800;clearTimeout(confirmTimer);if(ready)try{controller.pause();}catch{}playing=false;render();}
 function requestPlay(){if(!ready||!wanted||speaking||held||document.hidden)return;blocked=false;
  try{controller.resume();}catch{blocked=true;}
  clearTimeout(confirmTimer);confirmTimer=setTimeout(()=>{if(!playing&&!speaking&&!held&&wanted){blocked=true;el('spotifyFeedback').textContent='Si no escuchas música, pulsa reproducir en el reproductor de Spotify. Tu navegador o cuenta puede limitar el inicio automático.';render();}},2500);render();
 }
 window.TysonMusic={
  voiceStart(){clearTimeout(resumeTimer);speaking=true;pause();},
  voiceEnd(){clearTimeout(resumeTimer);resumeTimer=setTimeout(()=>{speaking=false;requestPlay();render();},250);}
 };
 window.onSpotifyIframeApiReady=API=>{
  try{API.createController(el('spotifyEmbed'),{url:source,width:'100%',height:152},c=>{
   controller=c;
   c.addListener('ready',()=>{ready=true;failed=false;el('spotifyFeedback').textContent='La voz del entrenador tiene prioridad. Spotify se pausa durante las instrucciones.';requestPlay();render();});
   c.addListener('playback_update',e=>{const wasPlaying=playing;playing=!e.data.isPaused&&!e.data.isBuffering;
    if(playing){clearTimeout(confirmTimer);blocked=false;if(speaking||(held&&!el('musicSheet').open)){pause();return;}wanted=true;if(el('musicSheet').open)held=false;}else if(wasPlaying&&e.data.isPaused&&!speaking&&!held&&performance.now()>programmaticPauseUntil){wanted=false;}
    render();
   });
   c.addListener('playback_started',()=>{blocked=false;});
  });}catch{failed=true;render();el('spotifyFeedback').textContent='No se pudo iniciar Spotify. Puedes abrir la canción en Spotify con el enlace de abajo.';}
 };
 el('musicToggle').onclick=()=>{
  if(failed||!ready){el('musicSheet').showModal();return;}
  if(playing||((speaking||held)&&wanted)){wanted=false;pause();}
  else{wanted=true;held=false;requestPlay();}render();
 };
 el('loadSpotify').onclick=()=>{
  let url;try{url=new URL(el('spotifyUrl').value.trim());if(url.protocol!=='https:'||url.hostname!=='open.spotify.com'||!/^\/(?:intl-[a-z]+\/)?(?:track|playlist|album)\/[A-Za-z0-9]{22}\/?$/.test(url.pathname))throw Error();}catch{el('spotifyFeedback').textContent='Pega un enlace válido de canción, álbum o playlist de open.spotify.com.';return;}
  if(!ready){el('spotifyFeedback').textContent='Spotify aún no está disponible. Revisa tu conexión o abre el enlace en Spotify.';return;}
  source=url.origin+url.pathname;el('spotifyExternal').href=source;wanted=true;blocked=false;pause();
  try{controller.loadEntity(source);el('spotifyFeedback').textContent='Nuevo enlace cargado. Pulsa el control flotante o el reproductor para escucharlo.';wanted=false;}catch{el('spotifyFeedback').textContent='No se pudo cargar ese enlace en Spotify.';}render();
 };
 el('start').addEventListener('click',()=>{held=clock.state==='paused';if(held)pause();else requestPlay();});
 el('stop').addEventListener('click',()=>{held=true;pause();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){held=true;pause();}});
 const observer=new MutationObserver(()=>{const state=document.body.dataset.state;if(['paused','done'].includes(state)){held=true;pause();}else if(['work','prepare','rest'].includes(state)){held=false;requestPlay();}});
 observer.observe(document.body,{attributes:true,attributeFilter:['data-state']});
 setTimeout(()=>{if(!ready){failed=true;el('spotifyFeedback').textContent='No se pudo conectar con Spotify. Revisa tu conexión o abre la canción en Spotify.';render();}},12000);
 render();
})();
