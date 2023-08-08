document.addEventListener("DOMContentLoaded", function () {
  const commentList = document.getElementById("comment-list");
  const commentInput = document.getElementById("comment-input");
  const submitButton = document.getElementById("submit-button");

  firebase.initializeApp({
    apiKey: "AIzaSyDCS6hFxkfaqyTWvO7Zlo23zDbAWh8U3Oc",
    authDomain: "anni-e336f.firebaseapp.com",
    projectId: "anni-e336f",
     storageBucket: "anni-e336f.appspot.com",
    messagingSenderId: "773257785211",
    appId: "1:773257785211:web:7735061a858604eb7757de"
  });

irebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments-container");

commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const commentText = commentInput.value;
  await db.collection("comments").add({
    text: commentText,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  commentInput.value = "";
});

db.collection("comments")
  .orderBy("timestamp", "desc")
  .onSnapshot((snapshot) => {
    commentsContainer.innerHTML = "";
    snapshot.forEach((doc) => {
      const comment = doc.data();
      const commentElement = document.createElement("div");
      commentElement.innerText = comment.text;
      commentsContainer.appendChild(commentElement);
    });
  });
