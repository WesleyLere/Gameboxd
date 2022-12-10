const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const emailUsername = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (emailUsername && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ emailUsername, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('click', loginFormHandler);
  