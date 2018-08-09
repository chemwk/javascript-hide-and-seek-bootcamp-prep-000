function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const listt = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i<listt.length; i++){
    listt[i].innerHTML=parseInt(listt[i].innerHTML)+n
  }
}

function deepestChild(){
  var m = document.getElementById('grand-node')
  while (m.children[0]){
    m = m.children[0]
  }
  return m
}