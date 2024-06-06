const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
document.getElementById('displayButton').addEventListener('click',function(){
  const articleDiv = document.getElementById('article');
  articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.description}</p>`
});
