
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzgLNvpE2z5RuAPJg5545BM8gN1D_YRr15_B2YWlQNy-YUmbUJ75nLQNOY3jD_B9kRKvQ/exec'
  const form = document.getElementById('registration-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Add blur class to the form
    form.classList.add('blur');
    
    // Set current date and time
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('date').value = currentDate;
    document.getElementById('time').value = currentTime;
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          form.classList.add('hidden');
          successMessage.classList.remove('hidden');
      })
      .catch(error => console.error('Error!', error.message))
  })
