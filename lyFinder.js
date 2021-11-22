let urlArr = [];

let lyCounter = 0;

function addUrls() {
  let urlList = urlArr.map((url) => `<li><a href=${url}>${url}</a></li>`);
  document.querySelector("ul").innerHTML = urlList;
}

function findLy() {
  lyCounter = 0;

  for (let i = 0; i < urlArr.length; i++) {
    for (let j = 0; j < urlArr[i].length; j++) {
      if ((urlArr[i][j] == "l") & (urlArr[i][j + 1] == "y")) {
        lyCounter += 1;
      }
    }
  }
  console.log(lyCounter);
}

let urlInputField = document.querySelector("input");

let submitBtn = document.querySelector("#submitButton");

let jCounter = document.querySelector("#Jcount");

submitBtn.addEventListener("click", () => {
  urlArr.push(urlInputField.value);
  urlInputField.value = "";
  addUrls();
});

jCounter.addEventListener("click", () => {
  findLy();
});
