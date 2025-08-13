// ===== Variables =====
const subscribeForm = document.querySelector('#subscribeForm');
const subscribeMsg = document.querySelector('#subMsg');
const buyButtons = document.querySelectorAll('.btn.add');

// ===== Functions =====
function handleSubscribe(event) {
  event.preventDefault();
  // I’m checking the email value before confirming subscription
  const emailValue = document.querySelector('#email').value.trim();

  if (!emailValue || !/^\S+@\S+\.\S+$/.test(emailValue)) {
    subscribeMsg.textContent = 'Please enter a valid email.';
    subscribeMsg.style.color = '#d91705';
  } else {
    subscribeMsg.textContent = 'Thanks! You’re subscribed 🎉';
    subscribeMsg.style.color = '#1f7a3f';
    subscribeForm.reset();
  }
}

function handleBuyClick(event) {
  // I’m showing a temporary alert for this demo instead of real cart logic
  const product = event.currentTarget.dataset.item;
  alert(`Added ${product} to cart (demo)`);
}

// ===== Event Listeners =====
if (subscribeForm) {
  subscribeForm.addEventListener('submit', handleSubscribe);
}

buyButtons.forEach((button) => {
  button.addEventListener('click', handleBuyClick);
});
