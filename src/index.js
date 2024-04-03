const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = e.target.searchByID.value;

    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = data.title;
        summary.textContent = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
