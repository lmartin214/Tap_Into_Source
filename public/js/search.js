// function to search posts by zip code and water type //
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
    .then((data) => console.log(data))
    // trying to append data here //
    .then((data) => {
      console.log(data.id);
      var resultsCard = $("<div>").addClass("col card future");
      var source = $("<p>").addClass("water-type").text(data.id);

      resultsCard.append(source);
      $("#post-card").append(resultsCard);
    });
};

let type = "";
// event listener that calls searchPosts function //
document.querySelector("#search-form").addEventListener("submit", searchPosts);

// event listener for water type buttons to grab type value for url //
const buttons = document.querySelectorAll(".water");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    type = event.target.innerHTML;
    console.log("type", type);
  });
});

// code to toggle through water type buttons //
$(".btn").on("click", function () {
  $(this).siblings(".water").removeClass("active");
  $(this).addClass("active");
});
