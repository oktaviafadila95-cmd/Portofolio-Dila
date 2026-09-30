const tombolMenu = document.getElementById('tombol-menu');
const menuTautan = document.getElementById('menu-tautan');
const tombolTema = document.getElementById('tombol-tema');
const tombolAtas = document.getElementById('tombol-atas');

// Membuka dan menutup navigasi pada layar mobile.
tombolMenu.addEventListener('click', () => {
  const sedangTerbuka = menuTautan.classList.toggle('menu-terbuka');
  tombolMenu.setAttribute('aria-expanded', sedangTerbuka);
  tombolMenu.setAttribute('aria-label', sedangTerbuka ? 'Tutup menu' : 'Buka menu');
});

// Menutup menu setelah salah satu tautan dipilih.
menuTautan.querySelectorAll('a').forEach((tautan) => {
  tautan.addEventListener('click', () => {
    menuTautan.classList.remove('menu-terbuka');
    tombolMenu.setAttribute('aria-expanded', 'false');
  });
});

// Mengganti tema terang dan gelap.
tombolTema.addEventListener('click', () => {
  document.body.classList.toggle('mode-gelap');
  tombolTema.textContent = document.body.classList.contains('mode-gelap') ? '☀' : '◐';
});

// Tombol kembali ke bagian paling atas.
tombolAtas.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
