const DATA = window.SKILLS_DATA || [];
const TOP = 10;                 // top N por categoria (resto fica em "ver todas")
let activeCat = 'all';
const expanded = new Set();

const slugify = n => n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const ghSearch = n => 'https://github.com/search?q=' + encodeURIComponent(n + ' claude skill') + '&type=repositories';
const installOf = it => (it.install && it.install.trim()) ? it.install.trim() : (it.url ? 'npx skills add https://' + it.url : '');
// "Usar" inteligente por tipo: o que a pessoa digita/faz no Claude pra usar depois de instalada
function useOf(it){
  const slug = slugify(it.name);
  if(it.kind==='skill' || it.kind==='plugin') return '/' + slug;          // vira comando slash
  if(it.kind==='agent') return 'use o agente ' + it.name;                 // invoca o agente
  if(it.kind==='mcp') return 'use o ' + it.name.replace(/ MCP.*/i,'') + ' para ...'; // pedido em linguagem natural
  return 'use o ' + it.name + ' para ...';                                // tool / fallback
}
// rótulo curto mostrado no botão Usar
function useLabel(it){
  if(it.kind==='skill' || it.kind==='plugin') return useOf(it);           // mostra o /comando
  return '▸ usar';                                                        // mcp/agent/tool: rótulo curto
}

function fallbackCopy(t){const a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy');}catch(e){}a.remove();}
function copyClip(t){if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(t).catch(()=>fallbackCopy(t));return Promise.resolve(fallbackCopy(t));}
function showToast(m){const t=document.getElementById('toast');t.innerHTML='<span class="toast-check">✓</span>'+m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3000);}
function flash(b,l){const o=b.dataset.l||b.innerHTML;b.dataset.l=o;b.classList.add('ok');b.innerHTML=l;clearTimeout(b._t);b._t=setTimeout(()=>{b.classList.remove('ok');b.innerHTML=o;},1600);}

function allInstall(){const s=new Set();DATA.forEach(g=>g.items.forEach(it=>{const c=installOf(it);if(c)s.add(c);}));return [...s];}
const kindLabel={skill:'skill',plugin:'plugin',mcp:'MCP',agent:'agente',tool:'ferramenta'};

function makeCard(it, color){
  const inst=installOf(it); const use=useOf(it);
  const card=document.createElement('article'); card.className='card';
  const badge=it.rank<=3?'<span class="card-badge">TOP '+it.rank+'</span>':'';
  const tipo=kindLabel[it.kind]||'';
  const tipoTag=tipo?'<span class="card-kind">'+tipo+'</span>':'';
  const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let actions;
  if(inst){
    actions='<button class="btn btn-install" type="button">⬇ instalar</button>'+
            '<button class="btn btn-use" type="button" title="copiar como usar">'+esc(useLabel(it))+'</button>'+
            '<a class="repo-link" href="https://'+it.url+'" target="_blank" rel="noopener">repo ↗</a>';
  } else {
    actions='<a class="btn btn-use" href="https://'+it.url+'" target="_blank" rel="noopener" style="text-decoration:none">abrir repo ↗</a>';
  }
  card.innerHTML='<div class="card-top-tags"><span class="card-tag" style="color:'+color+'">#'+it.n+'</span>'+tipoTag+badge+'</div>'+
    '<h4 class="card-title">'+it.name+'</h4><p class="card-desc">'+(it.desc||'')+'</p>'+
    '<div class="card-actions">'+actions+'</div>';
  if(inst){
    card.querySelector('.btn-install').onclick=e=>{e.stopPropagation();copyClip(inst).then(()=>{flash(e.currentTarget,'✓ Copiado!');showToast('<strong>'+it.name+'</strong> — comando de instalação copiado');});};
    card.querySelector('.btn-use').onclick=e=>{e.stopPropagation();copyClip(use).then(()=>{flash(e.currentTarget,'✓ Copiado!');showToast('<strong>'+it.name+'</strong> — como usar: <code>'+esc(use)+'</code>');});};
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
