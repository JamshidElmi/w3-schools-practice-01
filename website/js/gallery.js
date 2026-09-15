// ========== J01: OPEN A NATIVE MODAL (LATER LESSON) ==========
// querySelector finds one element. An event listener runs on a click.
const photoDialog = document.querySelector('#photo-dialog');
document.querySelector('#open-photo').addEventListener('click', function () {
  photoDialog.showModal();
});
