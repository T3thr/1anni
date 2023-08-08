document.addEventListener("DOMContentLoaded", function () {
  const commentList = document.getElementById("comment-list");
  const commentInput = document.getElementById("comment-input");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value;
    if (commentText !== "") {
      const commentItem = document.createElement("li");
      commentItem.className = "comment";
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
      commentInput.value = "";
    }
  });
});
