function login() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const result = document.getElementById('result');

  const isCorrectUsername = usernameInput.value === 'haris@sigmaschool.com';
  const isCorrectPassword = passwordInput.value === 'password';
  console.log(usernameInput.value);
  console.log(passwordInput.value);

  if (isCorrectUsername && isCorrectPassword) {
    result.innerHTML = 'Welcome Haris!';
  } else if (isCorrectUsername) {
    result.innerHTML = 'Wrong password';
  } else {
    result.innerHTML = 'Wrong password/username';
  }
}
