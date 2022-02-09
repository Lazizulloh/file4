let input = document.getElementById("input");
let output = document.getElementById("output");

let user = {
    name: "name: Marko",
    age: "age: 20",
    job: "job: IT Programmer",
    sizeDick:"sizeDick: 8sm",
}
window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      output.innerHTML += user.name + "<br><hr>";
      output.innerHTML += user.age + "<br><hr>";
      output.innerHTML += user.job + "<br><hr>";
      output.innerHTML += user.sizeDick + "<br><hr>";
      console.log(input.value);
      input.value = "";
    }
  });