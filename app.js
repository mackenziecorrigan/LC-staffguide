document.addEventListener("click",function(e){
  var b=e.target.closest("[data-copy]");if(!b)return;
  var txt=document.getElementById(b.dataset.copy).innerText,old=b.textContent;
  function done(){b.textContent="Copied";setTimeout(function(){b.textContent=old},1400)}
  function fb(){var t=document.createElement("textarea");t.value=txt;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove();done()}
  if(navigator.clipboard){navigator.clipboard.writeText(txt).then(done,fb)}else{fb()}
});
