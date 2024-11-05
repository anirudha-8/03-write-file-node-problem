const fs = require("fs");

const fileName = "output.txt";

const content = "Hello, Node.js!";

fs.writeFile(fileName, content, (err) => {
	if (err) {
		console.log(`Error: ${err}`);
		return;
	}
	console.log("File written successfully!");
});
