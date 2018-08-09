function getFirstSelector(selector){
  const inp = selector.toString()
  return document.querySelector(inp).innerHTML
}


function nestedTarget(){
  return document.getElementById('nested').querySelector('target').innerHTML
}

function increaseRankBy(n){
  const listt = document.getElementById('app').querySelector('ul.ranked-list li')
  for (let i = 0; i<listt.length; i++){
    listt[i].innerHTML=parseInt(listt[i].innerHTML)+1
  }
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div').innerHTML
}