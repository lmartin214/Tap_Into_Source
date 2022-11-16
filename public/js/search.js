let type = "";
const resultsDiv = document.getElementById("post-card");

// function to search posts by zip code and water type //
const searchPosts = async function (event) {
  event.preventDefault();
  const input = document.querySelector("#zipcode-input-search");
  console.log(input.value);
  type = type.split(" ").join("+");

  console.log("type", type);
  fetch(`/api/posts/search/${input.value}/${type}`, {
    method: "GET",
  })
    .then((res) => res.json())
    // .then((data) => console.log(data))

    .then((searchResults) => {
      resultsDiv.innerHTML = "";

      searchResults.forEach((post) => {
        resultsDiv.innerHTML += `<div class="card" style="width: 18rem;">
              <div class="card-body">
                  <p class="card-text">${post.id}</p>
                  <p class="card-text">${post.type}</p>
                  <p class="card-text">${post.zip}</p>
                  <p class="card-text">${post.state}</p>
                  <p class="card-text">${post.accessibility}</p>
                  <p class="card-text">${post.whichTests}</p>
                  <p class="card-text">${post.footTraffic}</p>
                  <p class="card-text">${post.trailDifficulty}</p>
                  <p class="card-text">${post.parking}</p>
                  <p class="card-text">${post.dogs}</p>
              </div>
          </div>`;
      });
    });
};

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
