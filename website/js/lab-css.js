// ========== J01: CSS VARIABLE THROUGH JAVASCRIPT ==========
document.querySelector('#change-accent').addEventListener('click', function () {
  document.querySelector('.variable-demo').style.setProperty('--panel-accent', '#bd481e');
});
