const postForm = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const type = document.querySelector("#type");
  const country = document.querySelector("#country");
  const zip = document.querySelector("#zip");
  const state = document.querySelector("#state");
  const movingOrStill = document.querySelector("#movingOrStill");

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      type: type.value,
      country: country.value,
      zip: zip.value,
      state: state.value,
      movingOrStill: movingOrStill.value,
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
