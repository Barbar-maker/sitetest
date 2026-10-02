document.documentElement.classList.add('js');

const PROJ = {
  showreel: { title:'Motion Reel', type:'Motion Design', kind:'Personal Work', year:'2024', vimeo:'https://player.vimeo.com/video/1169162691?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:'Compilation de mes projets | réalisations de ces 3 dernières années.', dossier:'https://bookencours.my-curriculum-vitae.workers.dev', dossierLabel:'MON PORTFOLIO' },
  geo: { title:"Géographie d'une Intuition", type:'Documentaire ( 05:50 min )', kind:'Collaboration Gobelins / INA', year:'2026', vimeo:'https://player.vimeo.com/video/1170063979?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:`Écriture, direction artistique, montage, motion design\n\nUne plongée dans le parcours d’Alfred Wegener, visionnaire incompris qui, en 1912, imagine la dérive des continents. Entre expéditions au Groenland et solitude scientifique, il suit son intuition malgré le rejet. J'ai voulu mêler science et aventure pour faire ressentir son cheminement intérieur et dessiner le portrait sensible d’un esprit en avance, oublié et reconnu trop tard.\n\nMon objectif était de me rapprocher du rendu d’une production d’Arte.\n\nIl s’agit d’un trailer, les images d’archives utilisées (INA) qui ne sont pas libres de droits.\nLe film est disponible dans ma bio Instagram tout de même ;)`, dossier:'https://geopgraphieduneintuition.my-curriculum-vitae.workers.dev', dossierLabel:'DOSSIER DE PRÉSENTATION', stills:['https://imgbs.com/uploads/geo-1-42cf4177.jpg','https://imgbs.com/uploads/geo-2-7b01e8f8.jpg','https://imgbs.com/uploads/geo-3-df820f5b.jpg','https://imgbs.com/uploads/geo-4-e0e7c5a5.jpg','https://imgbs.com/uploads/geo-5-9731b98c.jpg','https://imgbs.com/uploads/geo-6-ba49968b.jpg','https://imgbs.com/uploads/geo-7-518819a8.jpg','https://imgbs.com/uploads/geo-8-fc20cfc3.jpg','https://lastfrmegeo.my-curriculum-vitae.workers.dev'] },
  fearless: { title:'FEARLESS', type:'Concept de documentaire', kind:'Projet personnel', year:'2025', vimeo:'https://player.vimeo.com/video/1226425533?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:`DA & Concept, Motion design, Animation 2D\n\nUn projet documentaire entre science et émotion, qui explore les mécanismes de la peur et donne la parole à celles et ceux qui grimpent avec ou sans corde flirtant avec les limites du possible.\n\nUne animation 2D subtile et immersive pour retranscrire ce que l’on ressent face au vide : solitude, vertige, tension, et parfois… dépassement de soi. Nous avons utilisé une texture qui rappelle les reliefs de la roche pour les séquences animées.`, dossier:'https://2025-05-fearless.my-curriculum-vitae.workers.dev', dossierLabel:'DOSSIER DE PRÉSENTATION', stills:['https://imgbs.com/uploads/fear-1-ea9544f6.jpg','https://imgbs.com/uploads/feea-6-081ab3e1.jpg','https://imgbs.com/uploads/fear-2-c01f00e4.jpg','https://imgbs.com/uploads/fear-3-e464d81a.jpg','https://imgbs.com/uploads/fear-4-bed97354.jpg','https://fearless.my-curriculum-vitae.workers.dev'] },
  carnets: { title:'Les Carnets du sous-sol', type:'Teaser animé', kind:'Projet personnel', year:'2025', vimeo:'https://player.vimeo.com/video/1226427094?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:`Animation 2D, DA\n\nRoman fondateur de la littérature moderne, Les Carnets du sous-sol plonge dans la conscience d’un homme solitaire, lucide jusqu’à l’excès et rongé par ses contradictions. Retranché du monde, il observe avec amertume la société qu’il rejette autant qu’il envie. Dans ce monologue intérieur, Dostoïevski explore les profondeurs de l’âme humaine, entre orgueil, culpabilité et désespoir.\n\nUne descente littéralement dans les sous-terrains de l'esprit du narrateur.\n\nLe noir et blanc permet de créer un univers sombre et texturé, comme tracé à l’encre sur les pages d’un carnet griffonné, imparfait. Cette matière visuelle, presque poisseuse, traduit le tourment intérieur du narrateur.`, dossier:'https://251104-lescarnets.my-curriculum-vitae.workers.dev', dossierLabel:'DOSSIER DE PRÉSENTATION', stills:['https://imgbs.com/uploads/book-1-7f789014.jpg','https://imgbs.com/uploads/bok-2-9a74cc0c.jpg','https://imgbs.com/uploads/book-3-f9ace1a1.jpg','https://imgbs.com/uploads/book-4-a015e189.jpg','https://imgbs.com/uploads/book-5-2928bed3.jpg','https://imgbs.com/uploads/book-6-23d92df0.jpg'] },
  grand: { title:'Grand Paysan', type:'Court métrage (40 s)', kind:'Projet personnel', year:'2026', desc:`Animation 2D | Projet en court\n\nDans le cadre d’un brief fictif, le Musée d’Orsay me demande de concevoir un court film destiné aux réseaux sociaux afin de promouvoir l’une de ses œuvres. J’ai choisi une sculpture qui m’a particulièrement marqué et qui fait écho à mon propre univers artistique. L’objectif est de proposer une interprétation personnelle et contemporaine de l’œuvre, tout en donnant envie au public de la découvrir au musée.`, dossier:'https://grandpaysanv1.my-curriculum-vitae.workers.dev', dossierLabel:'DOSSIER DE PRÉSENTATION', stills:['https://imgbs.com/uploads/grand-paysan-37249be9.jpg','','','','',''] },
  seche: { title:'L’effet sèche cheveux', type:'Explainer vidéo', kind:'AFP', year:'2026', vimeo:'https://player.vimeo.com/video/1226425024?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:`Animation 3D (grease pencil)\n\nJ'ai eu pour mission d'adapter une infographie fixe de l'AFP en un explainer de 30 secondes, simple et visuel. Avec pour objectif de montrer les causes et les conséquences juste avec l'image, sans aucun texte.\n\nMon intention : insuffler du mouvement à une illustration aquarelle, technique humide, pour raconter un phénomène d'assèchement.`, dossier:'https://effetsechecheveux.my-curriculum-vitae.workers.dev', dossierLabel:'MON PROCESS', stills:['https://imgbs.com/uploads/tournesol-82409c7d.jpg','https://imgbs.com/uploads/tournesol-04136462.jpg','https://imgbs.com/uploads/tournesol-3-1652c37e.jpg','https://imgbs.com/uploads/tour-4-7bb2f448.jpg','https://imgbs.com/uploads/tour-5-c91a0d8e.jpg','https://imgbs.com/uploads/tour-6-338368ae.jpg'] },
  moustiques: { title:'L’identité des moustiques', type:'Packshots', kind:'AFP', year:'2026', vimeo:'https://player.vimeo.com/video/1226424522?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&controls=0', desc:`Modélisation 3D\n\nPour l’AFP (Agence France-Presse), j’ai réalisé trois packshots de moustiques afin de permettre au public de différencier les principales espèces. Le projet met en avant leurs caractéristiques visuelles à travers des vidéos macro photoréalistes.\n\nLes images ont ensuite intégré la banque de contenus visuels de l’AFP, destinée aux médias et diffuseurs broadcast pour illustrer leurs sujets et reportages.`, stills:['https://imgbs.com/uploads/ligne-67dc9168.png','https://imgbs.com/uploads/culex-pipen-b1958e0a.png','https://imgbs.com/uploads/last-4a1bc8c0.png'] },
  ligne: { title:'LIGNE media', type:'Branding, Motion design', kind:'Projet personnel', year:'2025', vimeo:'https://player.vimeo.com/video/1226426762?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:`C’est un projet pensé et réalisé en équipe.\n\nUne chaîne YouTube de sport et de divertissement. Par ce média, nous voulons rapprocher le public du sport, à travers des défis décalés, des documentaires et des interviews immersives.\n\n• Créer un concept de média\n• Réaliser la Direction Artistique`, dossier:'https://brandbook.my-curriculum-vitae.workers.dev', dossierLabel:'BRAND BOOK', stills:['https://frame1.my-curriculum-vitae.workers.dev','https://frame2.my-curriculum-vitae.workers.dev','https://f3.my-curriculum-vitae.workers.dev','https://f4.my-curriculum-vitae.workers.dev','https://f5.my-curriculum-vitae.workers.dev','https://f6.my-curriculum-vitae.workers.dev'] },
  cartel: { title:'Cartel of the Nuts', type:'DA d’un jeu vidéo', kind:'Projet personnel', year:'2024', vimeo:'https://player.vimeo.com/video/1226765324?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&controls=0', desc:`Les différents cartels se disputent sévèrement une denrée rare : la nut.\n\nVous incarnerez chacun un écureuil mafeu, serviteur du parrain écureuil. Certaines actions nécessitent d’être à deux, alors vous devrez collaborer afin de ramasser un maximum de nuts. L’objectif est simple : combattre pour récolter et récolter pour régner ! (La map affiche les différents spots de récoltes et autres.)`, dossier:'https://cartelofthenuts.my-curriculum-vitae.workers.dev', dossierLabel:'BRAND BOOK', stills:['https://imgbs.com/uploads/cart-1-a510ed12.jpg','https://imgbs.com/uploads/car-2-ce281ea2.jpg'] },
  sunshine: { title:'Little Miss Sunshine', type:'Générique de film', kind:'Projet personnel', year:'2025', vimeo:'https://player.vimeo.com/video/1226425751?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&controls=0', desc:`DA, Motion design\n\nMon approche : un style collage animé, basé sur la déchirure, l’accumulation et l’esthétique du collage vivant (Dadaïsme et Pop Art).\n\n• Présenter une famille déchirée, en exposant leurs paradoxes avec poésie.\n• Illustrer le voyage, ses chaos et imprévus.`, dossier:'#', dossierLabel:'PRESENTATION', stills:['https://imgbs.com/uploads/li-1-ed365730.jpg','https://imgbs.com/uploads/li-2-2ca60a3a.jpg','https://imgbs.com/uploads/li-3-374cbf28.jpg','https://imgbs.com/uploads/li-4-5454d1f1.jpg','https://imgbs.com/uploads/li-5-4ead1d42.jpg','https://imgbs.com/uploads/li-6-69469b7c.jpg'] },
  experiments: { title:'Expérimentations', type:'Typographie', kind:'Projet personnel', year:'2026', vimeo:'https://player.vimeo.com/video/1226764998?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0', desc:'Motion design\n\nPrise en main de Cavalry.', stills:['https://imgbs.com/uploads/ex-1-8a4c30b4.jpg','https://imgbs.com/uploads/ex-2-5df3cf43.jpg','https://imgbs.com/uploads/ex-3-5e588f99.jpg','https://imgbs.com/uploads/ex-4-0f036997.jpg','https://imgbs.com/uploads/ex-5-d19bd0d0.jpg','https://imgbs.com/uploads/ex-6-3badf437.jpg'] }
};

var REEL_ID = '1169162691';
var $ = function (id) { return document.getElementById(id); };
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function vimeoId(u) { var m = String(u || '').match(/video\/(\d+)/); return m ? m[1] : ''; }
function noop() {}
function whenVimeo(cb) {
  if (window.Vimeo) return cb();
  var t = setInterval(function () { if (window.Vimeo) { clearInterval(t); cb(); } }, 100);
  setTimeout(function () { clearInterval(t); }, 20000);
}

/* ─── LOADER ─── */
(function () {
  var loader = $('loader'), count = $('loader-count'), title = $('loader-title'), done = false;
  function hide() { if (done) return; done = true; loader.classList.add('out'); setTimeout(function () { loader.style.display = 'none'; }, 700); }
  title.innerHTML = ['Graphiste,', 'Motion', 'designer'].map(function (w) { return '<span class="lw"><span>' + w + '</span></span>'; }).join(' ');
  title.querySelectorAll('.lw').forEach(function (w, i) { setTimeout(function () { w.classList.add('in'); }, 120 + i * 80); });
  var start = null, dur = 1800;
  function tick(now) {
    if (!start) start = now;
    var t = Math.min((now - start) / dur, 1);
    count.textContent = Math.round((1 - Math.pow(1 - t, 2.5)) * 100);
    if (t < 1) requestAnimationFrame(tick); else setTimeout(hide, 150);
  }
  requestAnimationFrame(tick);
  setTimeout(hide, 4000);
})();

/* ─── LECTEUR VIDÉO PERSONNALISÉ (interface Vimeo masquée) ─── */
var PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
var SOUND_SVG = '<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
var MUTE_SVG = '<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
var FS_SVG = '<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';

function createPlayer(host, id, opts) {
  opts = opts || {};
  host.innerHTML =
    '<div class="vp">' +
      '<iframe title="Vidéo" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' +
      '<div class="vp-overlay"></div>' +
      '<div class="vp-play">' + PLAY_SVG + '</div>' +
      '<div class="vp-controls">' +
        '<div class="vp-timeline"><div class="vp-progress"></div></div>' +
        '<div class="vp-btns"><button class="vp-btn vp-mute" type="button" aria-label="Son">' + SOUND_SVG + '</button>' +
        '<button class="vp-btn vp-fs" type="button" aria-label="Plein écran">' + FS_SVG + '</button></div>' +
      '</div>' +
    '</div>';
  var wrap = host.firstChild, iframe = wrap.querySelector('iframe'), overlay = wrap.querySelector('.vp-overlay');
  var playBtn = wrap.querySelector('.vp-play'), tl = wrap.querySelector('.vp-timeline'), prog = wrap.querySelector('.vp-progress');
  var muteBtn = wrap.querySelector('.vp-mute'), fsBtn = wrap.querySelector('.vp-fs');
  var p = null, dur = 0, muted = false, playing = false, dragging = false, started = false, dead = false;

  iframe.src = 'https://player.vimeo.com/video/' + id + '?autoplay=0&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1&controls=0&playsinline=1';

  function setState(v) { playing = v; playBtn.classList.toggle('hidden', v); }
  function start() {
    if (!p) return;
    started = true;
    p.setMuted(muted).catch(noop);
    var r = p.play(); if (r && r.catch) r.catch(function () { setState(false); });
  }
  function setProgress(ratio) { prog.style.width = (Math.max(0, Math.min(1, ratio)) * 100) + '%'; }

  whenVimeo(function () {
    if (dead) return;
    try { p = new Vimeo.Player(iframe); } catch (e) { return; }
    p.on('play', function () { setState(true); });
    p.on('pause', function () { setState(false); });
    p.on('timeupdate', function (d) { dur = d.duration || dur; if (!dragging) setProgress(d.percent); });
    p.on('ended', function () { p.setCurrentTime(0).then(function () { p.play().catch(noop); }).catch(noop); });
    p.ready().then(function () {
      if (dead) return;
      p.getDuration().then(function (d) { dur = d; }).catch(noop);
      p.setLoop(true).catch(noop);
      if (opts.autoplay) start();
      else if (!started) p.pause().catch(noop);
    }).catch(noop);
  });

  overlay.addEventListener('click', function () { if (!p) return; if (playing) p.pause().catch(noop); else start(); });
  muteBtn.addEventListener('click', function (e) {
    e.stopPropagation(); muted = !muted;
    muteBtn.innerHTML = muted ? MUTE_SVG : SOUND_SVG;
    if (p) p.setMuted(muted).catch(noop);
  });
  var canFs = wrap.requestFullscreen || wrap.webkitRequestFullscreen;
  if (!canFs) fsBtn.style.display = 'none';
  fsBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var fsEl = document.fullscreenElement || document.webkitFullscreenElement;
    if (!fsEl) { (wrap.requestFullscreen || wrap.webkitRequestFullscreen).call(wrap); }
    else { (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
  });

  function scrub(x) {
    if (!p || !dur) return;
    var r = tl.getBoundingClientRect(), ratio = Math.max(0, Math.min(1, (x - r.left) / r.width));
    setProgress(ratio); p.setCurrentTime(dur * ratio).catch(noop);
  }
  tl.addEventListener('pointerdown', function (e) { e.stopPropagation(); e.preventDefault(); dragging = true; tl.setPointerCapture(e.pointerId); scrub(e.clientX); });
  tl.addEventListener('pointermove', function (e) { if (dragging) scrub(e.clientX); });
  tl.addEventListener('pointerup', function (e) { dragging = false; try { tl.releasePointerCapture(e.pointerId); } catch (x) {} });
  tl.addEventListener('pointercancel', function () { dragging = false; });
  tl.addEventListener('click', function (e) { e.stopPropagation(); });

  return {
    destroy: function () {
      dead = true;
      try { if (p) { p.off('play'); p.off('pause'); p.off('timeupdate'); p.off('ended'); p.pause().catch(noop); p.destroy().catch(noop); } } catch (e) {}
      iframe.src = '';
      host.innerHTML = '';
    }
  };
}

/* ─── ACCUEIL : vidéo de fond muette en boucle ─── */
var heroPlayer = null, heroFrame = $('hero-iframe');
heroFrame.src = 'https://player.vimeo.com/video/' + REEL_ID + '?background=1&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1&title=0&byline=0&portrait=0';
whenVimeo(function () { try { heroPlayer = new Vimeo.Player(heroFrame); } catch (e) {} syncHero(); });
function syncHero() {
  if (!heroPlayer) return;
  try { (currentPage === 'home' && !reelOpen) ? heroPlayer.play().catch(noop) : heroPlayer.pause().catch(noop); } catch (e) {}
}

/* ─── MENU MOBILE ─── */
var header = $('header'), menu = $('mobile-menu'), menuBtn = $('menu-btn');
function setMenu(open) {
  menu.classList.toggle('open', open); header.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open); menuBtn.textContent = open ? 'Fermer' : 'Menu';
  syncLock();
}
menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
window.addEventListener('resize', function () { if (window.innerWidth > 720) setMenu(false); });

var project = $('project'), reelModal = $('reel-modal'), reelOpen = false;
function syncLock() {
  var lock = menu.classList.contains('open') || project.classList.contains('open') || reelOpen || currentPage === 'home';
  document.body.classList.toggle('locked', lock && currentPage !== 'home');
}

/* ─── APPARITION AU SCROLL ─── */
var revealIO = ('IntersectionObserver' in window) ? new IntersectionObserver(function (en) {
  en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); revealIO.unobserve(x.target); } });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }) : null;
document.querySelectorAll('.reveal').forEach(function (e) { revealIO ? revealIO.observe(e) : e.classList.add('in'); });

/* ─── PAGES (navigation par #/…) ─── */
var PAGES = { '': 'home', '/': 'home', '/projets': 'projets', '/a-propos': 'apropos', '/contact': 'contact' };
var TITLES = { home: 'Barbara Brice — Motion designer', projets: 'Projets — Barbara Brice', apropos: 'À propos — Barbara Brice', contact: 'Contact — Barbara Brice' };
var currentPage = null;

function showPage(name) {
  if (name === currentPage) return;
  currentPage = name;
  document.querySelectorAll('.page').forEach(function (p) { p.classList.toggle('active', p.id === 'page-' + name); });
  document.querySelectorAll('#nav a[data-page]').forEach(function (a) {
    if (a.dataset.page === name) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  var home = name === 'home';
  document.body.classList.toggle('is-home', home);
  header.classList.toggle('on-light', !home);
  window.scrollTo(0, 0);
  document.title = TITLES[name];
  syncHero(); syncLock();
}

/* « Scroll » sur l'accueil : un geste vers le bas ouvre la page Projets */
(function () {
  var busy = false, ty = 0;
  function go() { if (busy || currentPage !== 'home' || reelOpen || menu.classList.contains('open')) return; busy = true; location.hash = '#/projets'; setTimeout(function () { busy = false; }, 900); }
  window.addEventListener('wheel', function (e) { if (e.deltaY > 30) go(); }, { passive: true });
  window.addEventListener('touchstart', function (e) { ty = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchend', function (e) { if (ty - e.changedTouches[0].clientY > 60) go(); }, { passive: true });
  window.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'PageDown') go(); });
})();

$('to-top').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

/* ─── MODALE SHOWREEL ─── */
var reelPlayer = null;
function openReel() {
  reelOpen = true;
  reelModal.classList.add('open'); reelModal.setAttribute('aria-hidden', 'false');
  reelPlayer = createPlayer($('reel-box'), REEL_ID, { autoplay: true });
  syncHero(); syncLock();
}
function closeReel() {
  reelOpen = false;
  reelModal.classList.remove('open'); reelModal.setAttribute('aria-hidden', 'true');
  if (reelPlayer) { reelPlayer.destroy(); reelPlayer = null; }
  syncHero(); syncLock();
}
$('reel-open').addEventListener('click', openReel);
$('reel-close').addEventListener('click', closeReel);
reelModal.addEventListener('click', function (e) { if (e.target === reelModal) closeReel(); });

/* ─── PAGE PROJET ─── */
var projPlayer = null, viaHistory = false;

function renderDesc(text) {
  var parts = String(text || '').split('\n\n'), lead = parts.shift() || '';
  return '<strong class="desc-lead">' + esc(lead) + '</strong>' + (parts.length ? '\n\n' + parts.map(esc).join('\n\n') : '');
}
function renderStills(list) {
  var block = $('p-stills-block'), grid = $('p-stills');
  grid.innerHTML = '';
  var valid = (list || []).filter(Boolean);
  if (!valid.length) { block.style.display = 'none'; return; }
  block.style.display = 'block';
  valid.forEach(function (src, i) {
    var cell = document.createElement('div'); cell.className = 'still';
    var img = document.createElement('img');
    img.alt = 'Style frame ' + (i + 1); img.loading = 'lazy'; img.decoding = 'async';
    img.onerror = function () { cell.remove(); if (!grid.children.length) block.style.display = 'none'; };
    img.src = src; cell.appendChild(img); grid.appendChild(cell);
  });
}

function openProject(key) {
  var d = PROJ[key]; if (!d) return;
  if (projPlayer) { projPlayer.destroy(); projPlayer = null; }
  $('p-title').textContent = d.title || '';
  var meta = [d.type, d.kind, d.year].filter(Boolean);
  $('p-meta').innerHTML = meta.map(function (m, i) { return (i ? '<span class="proj-tag">·</span>' : '') + '<span class="proj-tag">' + esc(m) + '</span>'; }).join('');
  $('p-desc').innerHTML = renderDesc(d.desc);
  var dos = $('p-dossier');
  if (d.dossier && d.dossier !== '#' && d.dossierLabel) { dos.href = d.dossier; dos.textContent = d.dossierLabel; dos.style.display = ''; }
  else dos.style.display = 'none';

  var host = $('p-player'), id = vimeoId(d.vimeo);
  if (id) projPlayer = createPlayer(host, id);
  else {
    var thumb = document.querySelector('.card[data-key="' + key + '"] img');
    host.innerHTML = '<div class="vp" style="cursor:default">' + (thumb ? '<img class="vp-ph" src="' + thumb.src + '" alt="">' : '') + '<div class="vp-ph-label">Vidéo en cours</div></div>';
  }
  renderStills(d.stills);
  project.scrollTop = 0;
  project.classList.add('open'); project.setAttribute('aria-hidden', 'false');
  document.title = d.title + ' — Barbara Brice';
  syncLock();
  $('project-close').focus({ preventScroll: true });
}
function hideProject() {
  if (!project.classList.contains('open')) return;
  project.classList.remove('open'); project.setAttribute('aria-hidden', 'true');
  if (projPlayer) { projPlayer.destroy(); projPlayer = null; }
  $('p-player').innerHTML = '';
  document.title = TITLES[currentPage] || TITLES.projets;
  syncLock();
}
function requestClose() {
  if (reelOpen) { closeReel(); return; }
  if (!project.classList.contains('open')) return;
  if (viaHistory) history.back();
  else { history.replaceState(null, '', location.pathname + location.search + '#/projets'); hideProject(); }
}
$('project-close').addEventListener('click', requestClose);
$('p-back').addEventListener('click', requestClose);
$('project').querySelector('.logo').addEventListener('click', function () { hideProject(); });

function route(fromEvent) {
  var h = location.hash.replace(/^#/, ''), m = h.match(/^p-(\w+)$/);
  if (m && PROJ[m[1]]) {
    if (!currentPage) showPage('projets');
    if (fromEvent) viaHistory = true;
    openProject(m[1]);
  } else if (Object.prototype.hasOwnProperty.call(PAGES, h)) {
    hideProject(); showPage(PAGES[h]);
  } else if (!currentPage) { showPage('home'); }
}
window.addEventListener('hashchange', function () { route(true); });
route(false);

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape' || $('lightbox').classList.contains('open')) return;
  if (menu.classList.contains('open')) { setMenu(false); return; }
  requestClose();
});

/* ─── LIGHTBOX ─── */
(function () {
  var lb = $('lightbox'), img = $('lb-img'), count = $('lb-count'), prev = $('lb-prev'), next = $('lb-next');
  var list = [], idx = 0;
  function show(i) {
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    img.src = list[idx]; img.alt = 'Style frame ' + (idx + 1);
    count.textContent = (idx + 1) + ' / ' + list.length;
    prev.style.display = next.style.display = list.length < 2 ? 'none' : 'flex';
  }
  function close() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); img.src = ''; }
  $('p-stills').addEventListener('click', function (e) {
    var t = e.target.closest('img'); if (!t) return;
    list = Array.prototype.map.call($('p-stills').querySelectorAll('img'), function (n) { return n.src; });
    show(Math.max(0, list.indexOf(t.src)));
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
  });
  prev.addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
  next.addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });
  $('lb-close').addEventListener('click', close);
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  var tx = 0;
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 45) show(idx + (dx < 0 ? 1 : -1)); }, { passive: true });
})();
