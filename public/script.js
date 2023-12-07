export class WebScrapingApp {
  constructor() {
    this.promptUser = document.querySelector("input");
    this.output = document.querySelector(".output");

    this.promptUser.addEventListener("change", this.handlePromptChange.bind(this));
  }

  async handlePromptChange() {
    try {
      this.loading(true);
      const paragraphs = document.querySelectorAll("p");
      paragraphs.forEach(el => el.remove());

      const value = this.promptUser.value;
      const response = await fetch(`http://localhost:3333/${value}`);
      const data = await response.json();

      data?.mensage.forEach(element => {
        const p = document.createElement("p");
        const split = element.split("");
        p.innerHTML = element;
        this.output.appendChild(p);
      });
    } catch (error) {
      this.output.innerHTML = `<p>Algo deu errado!</p>`;
    } finally {
      this.loading(false);
      this.promptUser.value = "";
    }
  }

  loading(state) {
    if (state) {
      const body = document.querySelector("body");
      const loading = document.createElement("div");
      loading.classList.add("loading");
      loading.innerHTML = `<div class="spinner"></div>`;
      body.appendChild(loading);
    } else {
      const loading = document.querySelector(".loading");
      loading.remove();
    }
  }
}

const webScrapingApp = new WebScrapingApp();