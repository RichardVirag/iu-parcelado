const concat = require("concat");
const fs = require("fs");
const someFile = "./dist/contratacao-parcelada/index.html";
const scriptReplacedString = '<script src="contratacao-parcelada.js" type="module"></script></body>';

(async function build() {
  const files = [
    "./dist/contratacao-parcelada/runtime.js",
    "./dist/contratacao-parcelada/polyfills.js",
    "./dist/contratacao-parcelada/main.js",
  ];
  await concat(files, "./dist/contratacao-parcelada/contratacao-parcelada.js").then(() => {
    fs.readFile(someFile, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var arrResult = data.split('\n');
      arrResult[11] = scriptReplacedString;
      data = arrResult.join('\n');
    
      fs.writeFile(someFile, data, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  });
})();
