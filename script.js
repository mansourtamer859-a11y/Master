// GitHub Pages is a static host, so this is a client-side access gate.
// For real security, protect the site on a server or use an authenticated service.
const PASSWORD = "117067";
const SESSION_KEY = "master-site-authenticated";

const loginView = document.getElementById("loginView");
const protectedView = document.getElementById("protectedView");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("passwordMessage");
const logoutButton = document.getElementById("logoutButton");

function setAuthenticated(isAuthenticated) {
  loginView.hidden = isAuthenticated;
  protectedView.hidden = !isAuthenticated;

  if (isAuthenticated) {
    sessionStorage.setItem(SESSION_KEY, "true");
  } else {
    sessionStorage.removeItem(SESSION_KEY);
    passwordInput.value = "";
  }
}

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === PASSWORD) {
    passwordMessage.textContent = "";
    setAuthenticated(true);
  } else {
    passwordMessage.textContent = "كلمة المرور غير صحيحة. حاول مرة أخرى.";
    passwordInput.select();
  }
});

logoutButton.addEventListener("click", () => setAuthenticated(false));

setAuthenticated(sessionStorage.getItem(SESSION_KEY) === "true");
