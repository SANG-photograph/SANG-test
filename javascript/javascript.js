const fotoElems = document.querySelectorAll('.foto');

const html = src => `
  <div class="zoom">
		<div class="zoom__overlay"></div>
		<div class="zoom__body">
			<img src="${src}" />
		</div>
	</div>`;

fotoElems.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.add('lock');
    document.body.classList.add('zoom-img');
    document.body.style.cursor = 'zoom-out';
  });
});

document.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.zoom')) {
    document.querySelector('.zoom').remove();
    document.body.classList.remove('lock');
    document.body.classList.remove('zoom-img');
    document.body.style.cursor = 'default';
  }

  if (target.classList.contains('foto'))
    document.body.insertAdjacentHTML('afterbegin', html(target.src));
});