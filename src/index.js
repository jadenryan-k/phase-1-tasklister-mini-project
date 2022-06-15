document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector("create-task-form");
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let value = document.getElementById("new-task-description").value;
  handleTask(value)
  form.reset()
})
});
