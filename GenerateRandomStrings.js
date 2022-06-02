function createRandomString() {
	var random_String = [];
	var characters = ["Coffee", "Pudding", "Cola", "Sprite"];
  for (var i = 0; i < characters.length; i++) {
		random_String += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	console.log(random_String);
}
  
function createRandomString();
