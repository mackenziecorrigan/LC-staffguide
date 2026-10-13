var CATS=["Organize","Create","Communicate","Plan","Collaborate","Think"],all=[],cat="All";
var q=document.getElementById("q"),chips=document.getElementById("chips"),list=document.getElementById("list"),teamSel=document.getElementById("team");
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}
["All"].concat(CATS).forEach(function(c){var b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c==="All");
b.onclick=function(){cat=c;Array.prototype.forEach.call(chips.children,function(x){x.setAttribute("aria-pressed",x===b)});render()};chips.appendChild(b)});
fetch("library/index.json").then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){
  all=d.entries||[];var teams=all.map(function(e){return e.team}).filter(function(t,i,a){return t&&a.indexOf(t)===i}).sort();
  teams.forEach(function(t){var o=document.createElement("option");o.textContent=t;teamSel.appendChild(o)});render();
}).catch(function(){var e=document.getElementById("err");e.style.display="block";e.textContent="The library could not be loaded. If you are previewing locally, serve the folder with a local web server (for example: python3 -m http.server).";});
function render(){var t=q.value.toLowerCase().trim(),tm=teamSel.value;
var r=all.filter(function(e){return(cat==="All"||e.category===cat)&&(tm==="All"||e.team===tm)&&(!t||JSON.stringify(e).toLowerCase().indexOf(t)>-1)});
list.innerHTML=r.map(function(e,n){
  var link=/^https:\/\//.test(e.assetLink||"")?'<p class="sec">Template or asset</p><p><a href="'+esc(e.assetLink)+'" target="_blank" rel="noopener noreferrer">Open the shared file</a></p>':"";
  var asset=e.assetText?'<p class="sec">Reusable text or template</p><div class="prompt" id="as'+n+'">'+esc(e.assetText)+'</div><button class="btn sm alt" data-copy="as'+n+'">Copy</button>':"";
  var who=(e.contributor||"A Life Church colleague")+(e.date?" · "+esc(e.date):"");
  return '<article class="card idea"><span class="tag">'+esc(e.category)+(e.team?" · "+esc(e.team):"")+(e.sample?'<span class="badge">Sample</span>':"")+'</span><h3>'+esc(e.title)+'</h3><p>'+esc(e.summary)+'</p>'
  +'<span class="meta">'+(e.tool?esc(e.tool)+" · ":"")+(e.timeSaved?"Saves "+esc(e.timeSaved)+" · ":"")+esc(who)+'</span>'
  +'<details><summary>See how it works</summary>'+(e.prompt?'<p class="sec">Prompt</p><div class="prompt" id="pr'+n+'">'+esc(e.prompt)+'</div><button class="btn sm" data-copy="pr'+n+'">Copy prompt</button>':"")
  +(e.tips?'<p class="sec">Tips from the contributor</p><p class="note">'+esc(e.tips)+'</p>':"")+asset+link+'</details></article>'}).join("");
document.getElementById("none").style.display=r.length?"none":"block"}
q.oninput=render;teamSel.onchange=render;
