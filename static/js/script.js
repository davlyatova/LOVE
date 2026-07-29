/* ============================================================
   CINÉVA — логика одностраничного кинотеатра
   ============================================================ */

// База изображений TMDB (реальные постеры и кадры)
const IMG = 'https://image.tmdb.org/t/p/w500';
const BACK = 'https://image.tmdb.org/t/p/original';

// ---------- ДАННЫЕ ФИЛЬМОВ ----------
const MOVIES = [
  { id: 1, title: 'Interstellar', year: 2014, rating: 8.6, duration: '2ч 49м', genre: ['Фантастика', 'Драма', 'Приключения'],
    poster: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', backdrop: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    desc: 'Команда исследователей отправляется сквозь червоточину в попытке спасти человечество и найти новый дом среди звёзд.' },
  { id: 2, title: 'Dune', year: 2021, rating: 8.0, duration: '2ч 35м', genre: ['Фантастика', 'Приключения'],
    poster: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', backdrop: '/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
    desc: 'Пол Атрейдес попадает на опасную планету Арракис, чтобы обеспечить будущее своей семьи и народа.' },
  { id: 3, title: 'The Batman', year: 2022, rating: 7.8, duration: '2ч 56м', genre: ['Боевик', 'Криминал', 'Триллер'],
    poster: '/74xTEgt7R36Fpooo50r9T25onhq.jpg', backdrop: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
    desc: 'На втором году борьбы с преступностью Бэтмен выслеживает серийного убийцу, охотящегося на элиту Готэма.' },
  { id: 4, title: 'Oppenheimer', year: 2023, rating: 8.4, duration: '3ч 00м', genre: ['Драма', 'Триллер'],
    poster: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', backdrop: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    desc: 'История американского учёного Роберта Оппенгеймера и его роли в создании атомной бомбы.' },
  { id: 5, title: 'Blade Runner 2049', year: 2017, rating: 8.0, duration: '2ч 44м', genre: ['Фантастика', 'Триллер'],
    poster: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg', backdrop: '/ilRyazdMJwN05exqhwK4tMKBYZs.jpg',
    desc: 'Молодой бегущий по лезвию раскрывает давно похороненную тайну, способную ввергнуть мир в хаос.' },
  { id: 6, title: 'Joker', year: 2019, rating: 8.4, duration: '2ч 02м', genre: ['Драма', 'Криминал', 'Триллер'],
    poster: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', backdrop: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
    desc: 'Неудачливый комик Артур Флек постепенно погружается в безумие и становится культовым злодеем Готэма.' },
  { id: 7, title: 'Mad Max: Fury Road', year: 2015, rating: 8.1, duration: '2ч 00м', genre: ['Боевик', 'Приключения', 'Фантастика'],
    poster: '/hA2ple9q4qnwxp3hKVNhroipsir.jpg', backdrop: '/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg',
    desc: 'В постапокалиптической пустыне Макс объединяется с Фуриосой, чтобы сбежать от жестокого тирана.' },
  { id: 8, title: 'Inception', year: 2010, rating: 8.8, duration: '2ч 28м', genre: ['Фантастика', 'Боевик', 'Триллер'],
    poster: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg', backdrop: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    desc: 'Вор, крадущий секреты из снов, получает шанс на искупление, если сможет внедрить идею в чужой разум.' },
  { id: 9, title: 'The Dark Knight', year: 2008, rating: 9.0, duration: '2ч 32м', genre: ['Боевик', 'Криминал', 'Драма'],
    poster: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg', backdrop: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    desc: 'Бэтмен сталкивается с Джокером — анархистом, погружающим Готэм в хаос ради разрушения всего порядка.' },
  { id: 10, title: 'Tenet', year: 2020, rating: 7.4, duration: '2ч 30м', genre: ['Боевик', 'Фантастика', 'Триллер'],
    poster: '/k68nPLbIST6NP96JmTxmZ8vfmn.jpg', backdrop: '/aCIFmriJESLtxHVR5kERQFOFdga.jpg',
    desc: 'Агент осваивает манипуляции временем, чтобы предотвратить катастрофу масштабнее Третьей мировой.' },
  { id: 11, title: 'Gladiator', year: 2000, rating: 8.5, duration: '2ч 35м', genre: ['Боевик', 'Драма', 'Приключения'],
    poster: '/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', backdrop: '/hLkljtQjA4jsBgnaBtLBhFEC1uh.jpg',
    desc: 'Преданный генерал Максимус становится гладиатором и жаждет отомстить императору, убившему его семью.' },
  { id: 12, title: 'Avatar', year: 2009, rating: 7.9, duration: '2ч 42м', genre: ['Фантастика', 'Приключения', 'Боевик'],
    poster: '/kyeqWdyUXW608qlYkRqosgbbJyK.jpg', backdrop: '/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg',
    desc: 'Парализованный морпех отправляется на Пандору и оказывается между приказом и любовью к её народу.' },
];

// Отдельная подборка «В тренде»
const TRENDING_IDS = [4, 2, 3, 6, 1, 9];

// Слайды героя
const HERO_IDS = [1, 2, 4, 9];

// ---------- СОСТОЯНИЕ ----------
const favorites = new Set();
let activeGenre = 'all';
let searchQuery = '';

// ---------- УТИЛИТЫ ----------
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const byId = (id) => MOVIES.find(m => m.id === id);

function toast(msg, icon = 'fa-circle-check') {
  const t = $('#toast');
  t.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ---------- РЕНДЕР КАРТОЧКИ ----------
function cardHTML(m) {
  const fav = favorites.has(m.id) ? 'active' : '';
  const heart = favorites.has(m.id) ? 'fa-solid' : 'fa-regular';
  return `
    <article class="card" data-id="${m.id}">
      <div class="card__poster">
        <img src="${IMG}${m.poster}" alt="${m.title}" loading="lazy" />
        <span class="card__rating"><i class="fas fa-star"></i> ${m.rating}</span>
        <button class="card__fav ${fav}" data-fav="${m.id}" aria-label="В избранное"><i class="${heart} fa-heart"></i></button>
        <div class="card__overlay">
          <div class="card__genre-tags">${m.genre.slice(0, 2).map(g => `<span>${g}</span>`).join('')}</div>
        </div>
        <div class="card__play"><i class="fas fa-play"></i></div>
      </div>
      <div class="card__info">
        <div class="card__title">${m.title}</div>
        <div class="card__sub"><span>${m.year}</span> • <span>${m.duration}</span></div>
      </div>
    </article>`;
}

// ---------- КАТАЛОГ ----------
function renderGrid() {
  const grid = $('#movieGrid');
  const list = MOVIES.filter(m => {
    const matchGenre = activeGenre === 'all' || m.genre.includes(activeGenre);
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || m.title.toLowerCase().includes(q) || m.genre.some(g => g.toLowerCase().includes(q));
    return matchGenre && matchSearch;
  });
  grid.innerHTML = list.map(cardHTML).join('');
  $('#emptyState').hidden = list.length !== 0;
  observeReveals();
}

// ---------- КАРУСЕЛЬ ТРЕНДОВ ----------
function renderTrending() {
  $('#trendingCarousel').innerHTML = TRENDING_IDS.map(id => cardHTML(byId(id))).join('');
}

// ---------- ФОН ГЕРОЯ (плавная смена картинок, без текста) ----------
let heroIndex = 0;
let heroTimer;

function buildHero() {
  const slides = $('#heroSlides');
  slides.innerHTML = HERO_IDS.map((id, i) =>
    `<div class="hero__slide ${i === 0 ? 'active' : ''}" style="background-image:url('${BACK}${byId(id).backdrop}')"></div>`
  ).join('');
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    const els = $$('.hero__slide');
    els[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % els.length;
    els[heroIndex].classList.add('active');
  }, 6000);
}

// ---------- ИЗБРАННОЕ ----------
function toggleFav(id) {
  if (favorites.has(id)) { favorites.delete(id); toast('Удалено из избранного', 'fa-heart-crack'); }
  else { favorites.add(id); toast('Добавлено в избранное', 'fa-heart'); }
  renderGrid();
  renderTrending();
  syncModalFav(id);
}

// ---------- МОДАЛЬНОЕ ОКНО ----------
let modalMovieId = null;

function openModal(id) {
  const m = byId(id);
  modalMovieId = id;
  $('#modalImg').src = `${BACK}${m.backdrop}`;
  $('#modalImg').alt = m.title;
  $('#modalTitle').textContent = m.title;
  $('#modalDesc').textContent = m.desc;
  $('#modalMeta').innerHTML = `
    <span class="rating"><i class="fas fa-star"></i> ${m.rating}</span>
    <span>${m.year}</span>
    <span>${m.duration}</span>
    ${m.genre.map(g => `<span>${g}</span>`).join('')}`;
  syncModalFav(id);
  $('#modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modal').classList.remove('open');
  document.body.style.overflow = '';
  modalMovieId = null;
}

function syncModalFav(id) {
  if (modalMovieId !== id) return;
  const btn = $('#modalFav');
  const on = favorites.has(id);
  btn.classList.toggle('active', on);
  btn.innerHTML = on
    ? '<i class="fa-solid fa-heart"></i> В избранном'
    : '<i class="fa-regular fa-heart"></i> В избранное';
}

// ---------- СЧЁТЧИКИ ----------
function animateCounters() {
  $$('.stat__num').forEach(el => {
    const target = +el.dataset.count;
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('ru-RU');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ---------- REVEAL ПРИ СКРОЛЛЕ ----------
let revealObserver;
function observeReveals() {
  const els = $$('.card:not(.reveal), .plan:not(.reveal), .stat:not(.reveal)');
  els.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });
}

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
function init() {
  // Reveal observer
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.15 });

  buildHero();
  renderTrending();
  renderGrid();

  // Счётчики при попадании в вид
  const statObs = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.4 });
  statObs.observe($('.stats'));

  // Клики по карточкам (делегирование)
  document.body.addEventListener('click', e => {
    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) { e.stopPropagation(); toggleFav(+favBtn.dataset.fav); return; }
    const card = e.target.closest('.card');
    if (card) { openModal(+card.dataset.id); }
  });

  // Фильтры
  $('#filters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeGenre = chip.dataset.genre;
    renderGrid();
  });

  // Поиск
  const searchBar = $('#searchBar');
  $('#searchToggle').addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) $('#searchInput').focus();
  });
  $('#searchClose').addEventListener('click', () => { searchBar.classList.remove('open'); $('#searchInput').value = ''; searchQuery = ''; renderGrid(); });
  $('#searchInput').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderGrid();
    if (searchQuery) $('#catalog').scrollIntoView({ behavior: 'smooth' });
  });

  // Модалка
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', closeModal);
  $('#modalFav').addEventListener('click', () => toggleFav(modalMovieId));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Карусель — кнопки прокрутки
  const car = $('#trendingCarousel');
  const step = 322;
  $('#trendNext').addEventListener('click', () => car.scrollBy({ left: step, behavior: 'smooth' }));
  $('#trendPrev').addEventListener('click', () => car.scrollBy({ left: -step, behavior: 'smooth' }));

  // Хедер: скролл, прогресс, кнопка наверх
  const header = $('#header');
  const progress = $('#scrollProgress');
  const toTop = $('#toTop');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 500);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (y / h * 100) + '%';
    spyNav();
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Бургер-меню
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); nav.classList.toggle('open'); });
  $$('.nav__link').forEach(l => l.addEventListener('click', () => { burger.classList.remove('open'); nav.classList.remove('open'); }));

  // Логин
  $('#loginBtn').addEventListener('click', () => toast('Форма входа скоро появится 👋', 'fa-user'));

  // Прелоадер
  window.addEventListener('load', () => setTimeout(() => $('#preloader').classList.add('hidden'), 600));
  setTimeout(() => $('#preloader').classList.add('hidden'), 2500); // fallback

  observeReveals();
}

// ---------- SCROLLSPY (активная ссылка в навигации) ----------
function spyNav() {
  const sections = ['home', 'trending', 'catalog', 'new', 'subscribe'];
  let current = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) current = id;
  }
  $$('.nav__link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}

document.addEventListener('DOMContentLoaded', init);