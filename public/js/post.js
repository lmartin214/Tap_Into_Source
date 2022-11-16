const postForm = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const type = document.querySelector("#type");
  const country = document.querySelector("#country");
  const zip = document.querySelector("#zip");
  const state = document.querySelector("#state");
  const testResults = document.querySelector("#testResults");
  const accessibility = document.querySelector("#accessibility");
  const footTraffic = document.querySelector("#footTraffic");
  const trailDifficulty = document.querySelector("#trailDifficulty");
  const parking = document.querySelector("#parking");
  const depth = document.querySelector("#depth");
  const dogs = document.querySelector("#dogs");

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      type: type.value.split(" ").join("-"),
      country: country.value,
      zip: zip.value,
      state: state.value,
      accessibility: accessibility.value,
      testResults: testResults.value,
      trailDifficulty: trailDifficulty.value,
      footTraffic: footTraffic.value,
      parking: parking.value,
      depth: depth.value,
      dogs: dogs.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("Posted!");
    // redirect to whichever page you want to after you sign up //
  } else {
    alert("failed to post");
  }
};

document.querySelector("#post-form").addEventListener("submit", postForm);

// // API
// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const hawaii = { lat: 19.741755, lng: 151.844437 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: hawaii,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: hawaii,
//     map: map,
//   });
// }

// window.initMap = initMap;

// <script
//   async
//   defer
//   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_YP8aCoVnnRWfhHT6ozNbDEFPhshZ81s&callback=initMap"
// ></script>