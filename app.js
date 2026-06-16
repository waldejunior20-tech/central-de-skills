const DATA = window.SKILLS_DATA || [];
const TOP = 10;                 // top N por categoria (resto fica em "ver todas")
let activeCat = 'all';
const expanded = new Set();

const slugify = n => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const ghSearch = n => 'https://github.com/search?q=' + encodeURIComponent(n + ' claude skill') + '&type=repositories';
const installOf = it => it.url ? 'npx skills add https://' + it.url : '';
const useOf = it => '/' + slugify(it.name);

function fallbackCopy(t){const a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy');}catch(e){}a.remove();}
function copyClip(t){if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(t).catch(()=>fallbackCopy(t));return Promise.resolve(fallbackCopy(t));}
function showToast(m){const t=document.getElementById('toast');t.innerHTML=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2200);}
function flash(b,l){const o=b.dataset.l||b.innerHTML;b.dataset.l=o;b.classList.add('ok');b.innerHTML=l;clearTimeout(b._t);b._t=setTimeout(()=>{b.classList.remove('ok');b.innerHTML=o;},1500);}

function allInstall(){const s=new Set();DATA.forEach(g=>g.items.forEach(it=>{if(it.url)s.add('npx skills add https://'+it.url);}));return [...s];}

function makeCard(it, color){
  const inst=installOf(it); const use=useOf(it);
  const card=document.createElement('article'); card.className='card';
  const badge=it.rank<=3?'<span class="card-badge">TOP '+it.rank+'</span>':'';
  let actions;
  if(it.url){
    actions='<button class="btn btn-install" type="button">⬇ instalar</button>'+
            '<button class="btn btn-use" type="button">'+use+'</button>'+
            '<a class="repo-link" href="https://'+it.url+'" target="_blank" rel="noopener">repo ↗</a>';
  } else {
    actions='<a class="btn btn-use" href="'+ghSearch(it.name)+'" target="_blank" rel="noopener" style="text-decoration:none">🔎 achar no GitHub</a>'+
            '<a class="repo-link" href="'+ghSearch(it.name)+'" target="_blank" rel="noopener">buscar ↗</a>';
  }
  card.innerHTML='<div class="card-top-tags"><span class="card-tag" style="color:'+color+'">#'+it.n+'</span>'+badge+'</div>'+
    '<h4 class="card-title">'+it.name+'</h4><p class="card-desc">'+(it.desc||'')+'</p>'+
    '<div class="card-actions">'+actions+'</div>';
  if(it.url){
    card.querySelector('.btn-install').onclick=e=>{e.stopPropagation();copyClip(inst).then(()=>{flash(e.currentTarget,'✓ copiado');showToast('Comando de <strong>instalação</strong> copiado!');});};
    card.querySelector('.btn-use').onclick=e=>{e.stopPropagation();copyClip(use).then(()=>{flash(e.currentTarget,'✓ copiado');showToast('Comando de <strong>uso</strong> copiado!');});};
  }
  return card;
}

function render(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  const cont=document.getElementById('tracks-container'); cont.innerHTML='';
  let matches=0;
  DATA.forEach(g=>{
    if(activeCat!=='all'&&g.category!==activeCat) return;
    const found=g.items.filter(it=>{const txt=(it.name+' '+it.desc).toLowerCase();return !q||q.split(/\s+/).every(t=>txt.includes(t));});
    if(!found.length) return; matches+=found.length;
    const searching = q || activeCat!==activeCat; // q ativo mostra tudo
    const showAll = !!q || expanded.has(g.category) || activeCat===g.category;
    const list = showAll ? found : found.slice(0,TOP);

    const track=document.createElement('div'); track.className='category-track';
    const head=document.createElement('div'); head.className='track-header';
    head.style.background='linear-gradient(100deg,'+g.color+'22,transparent 70%)';
    head.innerHTML='<h3 class="track-title">'+g.category+'</h3><span class="track-count">'+found.length+' skills'+(showAll?'':' · top '+Math.min(TOP,found.length))+'</span>';
    track.appendChild(head);
    const grid=document.createElement('div'); grid.className='grid';
    list.forEach(it=>grid.appendChild(makeCard(it,g.color)));
    track.appendChild(grid);
    if(!showAll && found.length>TOP){
      const more=document.createElement('button'); more.className='filter-btn'; more.style.marginTop='14px';
      more.textContent='+ ver todas as '+found.length;
      more.onclick=()=>{expanded.add(g.category);render();};
      track.appendChild(more);
    }
    cont.appendChild(track);
  });
  if(!matches) cont.innerHTML='<div class="empty-search">Nenhuma skill encontrada — tenta outro termo.</div>';
}

function init(){
  const fw=document.getElementById('filters'); fw.innerHTML='';
  const all=document.createElement('button'); all.className='filter-btn active'; all.textContent='Todas';
  all.onclick=e=>setCat('all',e.target); fw.appendChild(all);
  DATA.forEach(g=>{const b=document.createElement('button');b.className='filter-btn';b.textContent=g.category;b.onclick=e=>setCat(g.category,e.target);fw.appendChild(b);});

  const total=DATA.reduce((s,g)=>s+g.items.length,0);
  document.getElementById('total-skills').textContent=total;
  document.getElementById('total-cats').textContent=DATA.length;

  document.getElementById('search').addEventListener('input',render);
  const cmds=allInstall();
  document.getElementById('copyAll').onclick=e=>copyClip(cmds.join('\n')).then(()=>showToast('Script com <strong>'+cmds.length+' instalações</strong> copiado!'));
  const sh='#!/usr/bin/env bash\nset -e\n\n'+cmds.join('\n')+'\n';
  const ps1=cmds.join('\r\n')+'\r\n';
  const dl=(name,c)=>{const b=new Blob([c],{type:'text/plain'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(u);};
  document.getElementById('dlSh').onclick=()=>{dl('instalar-skills.sh',sh);showToast('Script <strong>.sh</strong> baixado!');};
  document.getElementById('dlPs1').onclick=()=>{dl('instalar-skills.ps1',ps1);showToast('Script <strong>.ps1</strong> baixado!');};
  render();
}

function setCat(c,btn){activeCat=c;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render();window.scrollTo({top:document.querySelector('.section-header').offsetTop-20,behavior:'smooth'});}

window.addEventListener('DOMContentLoaded', init);
