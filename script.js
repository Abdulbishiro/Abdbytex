const menu=document.querySelector('.menu'), nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.right='20px';nav.style.flexDirection='column';nav.style.padding='18px';nav.style.background='#080d0a';nav.style.border='1px solid #20372a';nav.style.borderRadius='8px';});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<901) nav.style.display='none'}));
