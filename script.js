firebase.initializeApp({
    apiKey: "AIzaSyDCS6hFxkfaqyTWvO7Zlo23zDbAWh8U3Oc",
    authDomain: "anni-e336f.firebaseapp.com",
    projectId: "anni-e336f",
    storageBucket: "anni-e336f.appspot.com",
    messagingSenderId: "773257785211",
    appId: "1:773257785211:web:7735061a858604eb7757de",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Display existing comments
const commentsDiv = document.getElementById("comments");
db.collection("comments")
  .orderBy("timestamp", "desc")
  .onSnapshot(snapshot => {
    commentsDiv.innerHTML = "";
    snapshot.forEach(doc => {
      const commentData = doc.data();
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.textContent = commentData.text;
      commentsDiv.appendChild(commentDiv);
    });
  });

// Submit a new comment
const submitButton = document.getElementById("submitComment");
const commentInput = document.getElementById("commentInput");
submitButton.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    db.collection("comments").add({
      text: commentText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    commentInput.value = "";
  }
});
