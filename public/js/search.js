// function to search posts by zip code //
const searchPosts = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const input = document.querySelector("#zipcode-input-search");
  console.log(input.value);
  console.log("type", type);
  fetch(`/api/posts/search/${input.value}/${type}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

let type = "";
document.querySelector("#search-form").addEventListener("submit", searchPosts);
const buttons = document.querySelectorAll(".water");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // button.disabled = true;
    type = event.target.innerHTML;
    console.log("type", type);
  });
});

$(".btn").on("click", function () {
  $(this).siblings(".water").removeClass("active");
  $(this).addClass("active");
});
