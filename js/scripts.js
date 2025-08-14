

(function initContactForm() {
  const form = document.querySelector('#contactForm');
  const msg = document.querySelector('#contactMsg');

  const fields = {
    name: form.querySelector('input[name="name"]'),
    email: form.querySelector('input[name="email"]'),
    subject: form.querySelector('input[name="subject"]'),
    message: form.querySelector('textarea[name="message"]')
  };

  const errors = {
    name: form.querySelector('[data-error="name"]'),
    email: form.querySelector('[data-error="email"]'),
    subject: form.querySelector('[data-error="subject"]'),
    message: form.querySelector('[data-error="message"]')
  };

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function showError(key, show) {
    if (!errors[key]) return;
    errors[key].hidden = !show;
    if (show) {
      fields[key].classList.add('is-invalid');
    } else {
      fields[key].classList.remove('is-invalid');
    }
  }

  function validate() {
    const nameOk = fields.name.value.trim().length > 0;
    const emailOk = isEmail(fields.email.value.trim());
    const subjectOk = fields.subject.value.trim().length > 0;
    const messageOk = fields.message.value.trim().length > 0;

    showError('name', !nameOk);
    showError('email', !emailOk);
    showError('subject', !subjectOk);
    showError('message', !messageOk);

    return nameOk && emailOk && subjectOk && messageOk;
  }

  form.addEventListener('submit', function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      msg.textContent = 'Please fix the highlighted fields.';
      return;
    }

   
    msg.textContent = 'Thanks! Your message has been sent.';
    form.reset();

    Object.keys(errors).forEach(k => showError(k, false));
  });

  Object.keys(fields).forEach(key => {
    fields[key].addEventListener('blur', () => validate());
  });
})();
