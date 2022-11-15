const postForm = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const type = document.querySelector("#type");
  const country = document.querySelector("#country");
  const zip = document.querySelector("#zip");
  const state = document.querySelector("#state");
  const whichTests = document.querySelector("#whichTests");
  const accessibility = document.querySelector("#accessibility");
  const footTraffic = document.querySelector("#footTraffic");
  const trailDifficulty = document.querySelector("#trailDifficulty");
  const parking = document.querySelector("#parking");
  const depth = document.querySelector("#depth");
  const dogs = document.querySelector("#dogs");

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      type: type.value,
      country: country.value,
      zip: zip.value,
      state: state.value,
      accessibility: accessibility.value,
      whichTests: whichTests.value,

      trailDifficulty: trailDifficulty.value,
      // footTraffic: footTraffic.value,
      // parking: parking.value,
      // depth: depth.value,
      // dogs: dogs.value,
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
