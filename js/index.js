
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

const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener ('click', e => {
		firebase.auth().signOut();
	})

//add realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			var user = firebase.auth().currentUser;
		} else {
			console.log('not logged in');
		}
	});
