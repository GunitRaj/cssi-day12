let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
      console.log(googleUser);
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleNoteSubmit = () => {
    console.log("note submission function called");
    // 1. Capture the form data
   noteTitle = document.querySelector('#noteTitle');
   noteText = document.querySelector('#noteText');

    // 2. Format the data
      const note = {
        title: noteTitle.value,
        text: noteText.value,
    }
    // 3. Write it to our database
        const dbRef = firebase.database().ref(`users/${googleUser.uid}`);
        dbRef.push(note).then(()=>{
    // 4. Clear the form so that we can write a new note
            noteTitle.value="";
            noteText.value="";
        });
    
}
