var blogpaginas = document.getElementsByClassName("blog__container");
blogpaginas[0].style = "display:block"

function showdiv(nextdiv) {
for(i=0;i<blogpaginas.length;i++){  blogpaginas[i].style = "display:none;" }
document.getElementsByClassName(nextdiv)[0].style = "display:block;"
}