const links = document.querySelectorAll("a");
console.log(links);
const selected = links[Math.floor(Math.random() * links.length)];
console.log(selected);
selected.click();
