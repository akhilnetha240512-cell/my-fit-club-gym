const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.plan-join').forEach(button => button.addEventListener('click', () => {
  const plan = button.dataset.plan;
  const select = document.getElementById('planSelect');
  if (plan) select.value = plan + ' membership';
}));

document.getElementById('enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const phone = String(form.get('phone') || '').trim();
  const plan = String(form.get('plan') || 'Not sure yet');
  const message = String(form.get('message') || '').trim();
  // Replace this demo number with the gym owner's WhatsApp number, country code included.
  const gymWhatsAppNumber = '918332086769';
  const text = `Hello Power Gym! My name is ${name}. My phone number is ${phone}. I'm interested in: ${plan}. ${message}`;
  if (gymWhatsAppNumber.includes('X')) {
    alert('Demo form ready! Before publishing, replace 91XXXXXXXXXX in script.js with the gym owner’s WhatsApp number.');
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  } else {
    window.open(`https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
});
