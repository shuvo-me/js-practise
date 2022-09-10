// let todos = [];
window.addEventListener("load", function () {
  // this.document.body.appendChild(`<button>Loade More</button>`);
  this.fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log({ res: res.json() });

      return res.json();
    })
    .then((todos) => {
      // console.log({ todos });

      let div = this.document.createElement("div");
      function loadData(todos = todos, n = 0) {
        // console.log(todos);
        // div.style('')
        let range = 2 + n;

        console.log(range);
        todos.slice(0, range).forEach((todo, idx) => {
          div.innerHTML += `
          <div class='border'>
            <h4>${todo.title} ${idx}</h4>
            <p>${todo.body}</p>
          </div>
            
          `;
        });

        console.log(div);

        this.document.body.prepend(div);
      }
      let n = 0;
      document.querySelector("#more").addEventListener("click", function () {
        n++;
        div.innerHTML = " ";
        loadData(todos, n);
      });
      document.querySelector("#less").addEventListener("click", function () {
        n--;
        div.innerHTML = " ";
        loadData(todos, n);
      });
      loadData(todos);
    });
});
