let type = "";
const resultsDiv = document.getElementById("post-card");

// function to search posts by zip code and water type //
const searchPosts = async function (event) {
  event.preventDefault();
  const input = document.querySelector("#zipcode-input-search");
  console.log(input.value);
  type = type.split(" ").join("-");
  results.classList.remove("hide");

  console.log("type", type);
  fetch(`/api/posts/search/${input.value}/${type}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((searchResults) => {
      resultsDiv.innerHTML = "";
      // renders searched posts to page //
      searchResults.forEach((post) => {
        resultsDiv.innerHTML += `<div class="row">
              <div id="searched-post" class="col">
                  <h2 id="header,jk9" class=uu"card-text"><span id="headerColor"> ${post.type} </span></h2>
                  <h1 id="where" class="card-text">${post.country}, ${post.state}, ${post.zip}</h1>
                 <div id="params">
                  <p class="card-text"><span id="underline">Foot Traffic:</span>  ${post.footTraffic}</p>
                  <p class="card-text"><span id="underline">Trail Difficulty:</span>  ${post.trailDifficulty}</p>
                  <p class="card-text"><span id="underline">Accessibility:</span>  ${post.accessibility}</p>
                  <p class="card-text"><span id="underline">Tests Done:</span>  ${post.testResults}</p>
                  <p class="card-text"><span id="underline">Depth:</span>  ${post.depth}</p>
                  <p class="card-text"><span id="underline">Parking Notes:</span>  ${post.parking}</p>
                  <p id="last" class="card-text"><span id="underline">Dogs Allowed:</span> ${post.dogs}</p>
                  </div>

                

              </div>
          </div>`;
      });
    })
    .catch((error) => {
      results.classList.add("hide");
      alert("There are no posts with those parameters yet!");
      console.log(error);
    });
};

// event listener that calls searchPosts function //
document.querySelector("#search-form").addEventListener("submit", searchPosts);

// event listener for water type buttons to grab type value for url //
const buttons = document.querySelectorAll(".water");
const results = document.querySelector("#post-card");
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
