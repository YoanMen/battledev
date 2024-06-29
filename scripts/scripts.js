class LightMode {
  constructor() {
    this.lightBtn = document.querySelector(".btn--dark");

    this.lightBtn.addEventListener("click", () => this.manageLightMode());
  }

  manageLightMode() {
    document.body.classList.toggle("light-mode");
  }
}

class ConnectionManager {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.submitBtn = document.querySelector("#submit");
    this.form = document.querySelector("form");

    this.passwordInput.addEventListener("input", () => this.checkInputs());
    this.passwordInput.addEventListener("input", () => this.checkInputs());

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!this.submitBtn.hasAttribute("disabled") && !this.isSendAdvice) {
        this.sendAdvice();
      }
    });
  }

  errorMessage(element, message) {
    const nextElement = element.nextElementSibling;

    if (nextElement == null) {
      const error = document.createElement("small");
      console.log("error message");

      error.className = "error";
      error.textContent = message;
      element.insertAdjacentElement("afterEnd", error);
    }
  }

  removeError(element) {
    const error = element.nextElementSibling;

    if (error != null) {
      error.remove();
    }
  }

  checkInputs() {
    const passwordValue = this.passwordInput.value.length;
    const emailValue = this.emailInput.value.length;

    let passwordIsValid = false;
    let emailIsValid = false;

    if (passwordValue > 0) {
      if (passwordValue > 255) {
        this.errorMessage(this.passwordInput, "Le mot de passe est trop long");
      } else if (passwordValue < 3) {
        this.errorMessage(this.passwordInput, "Le mot de passe est trop court");
      } else {
        passwordIsValid = true;
        this.removeError(this.passwordInput);
      }
    }

    if (passwordIsValid) {
      this.submitBtn.disabled = false;
    } else {
      this.submitBtn.disabled = true;
    }
  }
}

new ConnectionManager();
new LightMode();
