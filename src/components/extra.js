var tutorialsRef = firebase.database().ref("/items");
tutorialsRef.once('value', function(snapshot) {
    var tutorials = [];
  
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var data = childSnapshot.val();
      // ...
  
      tutorials.push({ key: key, title: data.title, price: data.price});
    });
  });

  tutorialsRef.on('child_added', function(data) {
    // data.key, data.val().title, data.val().description
  });
  
  tutorialsRef.on('child_changed', function(data) {
    // data.key, data.val().title, data.val().description
  });
  
  tutorialsRef.on('child_removed', function(data) {
    // data.key, data.val().title, data.val().description
  });