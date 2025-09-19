// Example of scope, parameters, return values
function greetUser(name) {
  return `Hello, ${name}! Welcome to the website.`;
}

document.getElementById("welcomeBtn").addEventListener("click", () => {
  alert(greetUser("Boaz"));
});
