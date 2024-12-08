function createRipple(event) {
  const btn = event.currentTarget;
  const ripple = document.createElement('span');
  const radius = Math.max(btn.clientWidth, btn.clientHeight) / 2;
  const bounds = btn.getBoundingClientRect();

  ripple.classList.add('ripple');
  ripple.style.width = ripple.style.height = `${2 * radius}px`;
  ripple.style.left = `${event.clientX - (bounds.left + radius)}px`;
  ripple.style.top = `${event.clientY - (bounds.top + radius)}px`;

  btn.querySelectorAll('.ripple').forEach(el => el.remove());
  btn.appendChild(ripple);
}

function handleScroll(btt) {
  return function () {
    if (document.documentElement.scrollTop > 300) {
      btt.classList.add('back-to-top--show');
    } else {
      btt.classList.remove('back-to-top--show');
    }
  };
}

function handleClick(event) {
  event.preventDefault();
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
  });
}

const ready = cb => {
  if (document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
};

ready(() => {
  document.querySelectorAll('.btn--ripple').forEach(el => {
    el.addEventListener('click', createRipple);
  });

  const btt = document.querySelector('#back-to-top');
  if (btt) {
    document.addEventListener('scroll', handleScroll(btt));
    btt.addEventListener('click', handleClick);
  }
});
