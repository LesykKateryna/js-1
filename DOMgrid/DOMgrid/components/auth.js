function authUser() {
  const authComp = document.createElement('form');
  authComp.className = 'auth-course';

  const nameInput = document.createElement('input');
  const nameLabel = document.createElement('label');
  const passInput = document.createElement('input');
  const passLabel = document.createElement('label');
  nameLabel.textContent = 'Name';
  passLabel.textContent = 'Password';

  const butSend = document.createElement('button');
  butSend.textContent = 'Send data';

  authComp.append(nameLabel);
  authComp.append(nameInput);
  authComp.append(passLabel);
  authComp.append(passInput);

  authComp.append(butSend);

  return authComp;
}
