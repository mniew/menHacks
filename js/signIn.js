	

  	// Initialize Firebase
try {
  irebase.initializeApp(config);
} catch (err) {
  var config = {
    apiKey: "AIzaSyABtn913naDjtWABL-Rhv3DQ1PV2ary3rw",
    authDomain: "guelphhacks-3629b.firebaseapp.com",
    databaseURL: "https://guelphhacks-3629b.firebaseio.com",
    storageBucket: "guelphhacks-3629b.appspot.com",
    messagingSenderId: "9749438327"
  };
  firebase.initializeApp(config);
}

	

	//Get Elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	//const btnLogout = document.getElementById('btnLogout');

	//log in event
	btnLogin.addEventListener ('click', e => {
		const email = txtEmail.value;
		const password = txtPassword.value;
		const auth = firebase.auth();

		//Sign in
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => {
			alert("Unseccessful log in");
			console.log(e.message);
		});


	});

	//sign up
	btnSignUp.addEventListener ('click', e => {
		//CHECK FOR REAL EMAIL
		const email = txtEmail.value;
		const password = txtPassword.value;
		const auth = firebase.auth();

		//Sign in
		const promise = auth.createUserWithEmailAndPassword(email, password);
		promise.catch(e => {
			alert("Unseccessful sign up");
			console.log(e.message);
		});

	});

/*
	btnLogout.addEventListener ('click', e => {
		firebase.auth().signOut();
	}) */

	//add realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			var user = firebase.auth().currentUser;
			document.location.href = "index.html";
		} else {
			console.log('not logged in');
		}
	});
