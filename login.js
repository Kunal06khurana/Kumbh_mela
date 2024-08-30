document.addEventListener("DOMContentLoaded", () => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
  
    if (!loginText) {
      console.error("Element '.title-text .login' not found.");
      return;
    }
    if (!loginForm) {
      console.error("Element 'form.login' not found.");
      return;
    }
    if (!loginBtn) {
      console.error("Element 'label.login' not found.");
      return;
    }
    if (!signupBtn) {
      console.error("Element 'label.signup' not found.");
      return;
    }
    if (!signupLink) {
      console.error("Element 'form .signup-link a' not found.");
      return;
    }
  
    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
  
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
  
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  });
  