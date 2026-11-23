(function(){
  var b=document.getElementById('burger'),s=document.getElementById('scrim');
  function set(o){document.body.classList.toggle('navopen',o);b.setAttribute('aria-expanded',o);}
  b.addEventListener('click',function(){set(!document.body.classList.contains('navopen'));});
  s.addEventListener('click',function(){set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
  document.getElementById('nav').addEventListener('click',function(e){if(e.target.closest('li a'))set(false);});
  var cur=document.querySelector('#nav details[open] summary');if(cur)cur.scrollIntoView({block:'start'});
})();
