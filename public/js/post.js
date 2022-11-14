const postForm = async function (event) {
  event.preventDefault();
  console.log("hello hello!");
  const type = document.querySelector("#type");
  const zip = document.querySelector("#zip");

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      type: type.value,
      zip: zip.value,
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
