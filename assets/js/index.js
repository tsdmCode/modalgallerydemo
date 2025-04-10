//tager fat i "elementerne"
const dialog = document.getElementById('imgDialog');
const gallery = document.querySelectorAll('.imgTile');
const dialogImg = document.getElementById('dialogImg');

//smider en eventlistener på alle billederne som...
gallery.forEach((el) => {
  el.addEventListener('click', () => {
    dialog.showModal(); //... åbner vores dialog...
    dialogImg.src = el.src; //... og sætter src værdien til samme værdi som det billede der blev trykket på!
  });
});

//den her lukker bare dialogen når du trykker et sted der IKKE er dialogen
function closeDialog(e) {
  if (!e.target.contains(dialog)) return;
  dialog.close();
}

document.addEventListener('click', closeDialog);
