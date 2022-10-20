// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCBtq9rm5YVWq1T8yc9Kd_VVrwXiiAqZ74",
    authDomain: "katler-3a9ef.firebaseapp.com",
    databaseURL: "https://katler-3a9ef.firebaseio.com",
    projectId: "katler-3a9ef",
    storageBucket: "katler-3a9ef.appspot.com",
    messagingSenderId: "597614569501",
    appId: "1:597614569501:web:5d8c6e15844ae88d89fef4",
    measurementId: "G-J3ZPT4KKXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
	
	
function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
}



function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
}

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

/*function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
}*/



auth.onAuthStateChanged(function(user){
    
    if(user){
        
        var email = user.email;
        alert("Active User " + email);
        
        //Take user to a different or home page
        //is signed in
        
    }else{
        
        alert("No Active User");
        //no user is signed in
    }
    
    
    
});