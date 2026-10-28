'use strict';
const search=document.querySelector('#guide-search');
const clear=document.querySelector('#clear-search');
const guides=[...document.querySelectorAll('[data-guide]')];
const links=[...document.querySelectorAll('[data-guide-link]')];
const index=new Map(guides.map(g=>[g.id,g.textContent.toLowerCase()]));
function filterGuides(){const terms=search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);let count=0;for(const guide of guides){const matches=terms.every(term=>index.get(guide.id).includes(term));guide.hidden=!matches;if(matches)count++}for(const link of links)link.hidden=document.getElementById(link.dataset.guideLink).hidden;for(const group of document.querySelectorAll('.toc-group'))group.hidden=![...group.querySelectorAll('[data-guide-link]')].some(link=>!link.hidden);document.querySelector('#search-status').textContent=terms.length?`${count} matching ${count===1?'guide':'guides'}`:`${count} guides`;document.querySelector('#no-results').hidden=count!==0;document.querySelector('.quick-start').hidden=terms.length>0;clear.hidden=!terms.length;if(terms.length)document.querySelector('.toc').open=true}
search.addEventListener('input',filterGuides);
clear.addEventListener('click',()=>{search.value='';filterGuides();search.focus()});
function revealHash(){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target?.matches('[data-guide]')&&target.hidden){search.value='';filterGuides();target.scrollIntoView()}}
window.addEventListener('hashchange',revealHash);revealHash();
for(const pre of document.querySelectorAll('pre')){const button=document.createElement('button');button.type='button';button.className='copy-code';button.textContent='Copy';button.setAttribute('aria-label','Copy code example');button.addEventListener('click',async()=>{const code=pre.querySelector('code');try{await navigator.clipboard.writeText(code.textContent);button.textContent='Copied';setTimeout(()=>button.textContent='Copy',1800)}catch{const range=document.createRange();range.selectNodeContents(code);const selection=getSelection();selection.removeAllRanges();selection.addRange(range);button.textContent='Selected';setTimeout(()=>button.textContent='Copy',1800)}});pre.append(button)}
const toc=document.querySelector('.toc');if(matchMedia('(max-width: 700px)').matches&&!location.hash)toc.open=false;
