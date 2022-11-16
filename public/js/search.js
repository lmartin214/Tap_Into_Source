let type = "";
const resultsDiv = document.getElementById("post-card");

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
    .then((searchResults) => {
      resultsDiv.innerHTML = "";

      searchResults.forEach((post) => {
        resultsDiv.innerHTML += `<div class="card" style="width: 18rem;">
              <div class="card-body">
                  <p class="card-text">${post.type}</p>
                  <p class="card-text">${post.zip}</p>
              
              </div>
          </div>`;
      });
    })
    .then((data) => console.log(data));
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

// ***************************************************** //

// const resultsDiv = document.getElementById("post-card");

// const advancedSearch = async function (event) {
//   event.preventDefault();

//   // const id = document.querySelector('#movieTitle').value
//   const waterZip = document.querySelector("#zip").value;
//   const waterType = document.querySelector("#type").value;

//   fetch("/api/movieshows/search", {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       streamingservice_id,
//       genre,
//       rating,
//       yearReleased,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     // start of what i think i need //
//     .then((searchResults) => {
//       resultsDiv.innerHTML = "";

//       searchResults.forEach((post) => {
//         resultsDiv.innerHTML += `<div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <p class="card-text">${post.waterType}</p>
//                     <p class="card-text">${post.waterZip}</p>

//                 </div>
//             </div>`;
//       });
//     });
// };

// // document.querySelector('#searchForm').addEventListener('submit', advancedSearch);

// // trying to append data here //
// // .then((data) => {
// //   console.log(data);
// //   var resultsCard = $("<div>").addClass("col card future");
// //   var source = $("<p>").addClass("water-type").text(data.id);

// //   resultsCard.append(source);
// //   $("#post-card").append(resultsCard);
// // });
