// const { json } = require("sequelize/types");

const searchPosts = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const input = document.querySelector("#zipcode-input-search");
  console.log(input.value);

  fetch("/api/posts/:zip", {
    method: "GET",
    params: JSON.stringify({
      zip: input,
    }),
  })
    // .then((res) => res.json())
    .then((data) => console.log(data));
};

document.querySelector("#search-form").addEventListener("submit", searchPosts);
