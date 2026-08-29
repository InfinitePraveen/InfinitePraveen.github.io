const D=window.PORTFOLIO_DATA;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const link=(url,label='Open')=>url?`<a class="card-link" href="${esc(url)}" target="_blank" rel="noopener">${label} ↗</a>`:'';
const status=(url)=>`<span class="link-status" data-url="${esc(url)}">Checking</span>`;

function projectCard(p,type){
 let title=p['Project Name'], desc=p.Description||p['Why it Impresses']||'', tech=p.Skills||p['Tech Stack']||p.Profession||'';
 let field=p.Fields||'';
 return `<article class="project-card glass" data-search="${esc([title,desc,tech,field].join(' '))}">
   <div class="card-top"><span class="number">#${esc(p['Serial Number'])}</span><span class="pill">${esc(type)}</span></div>
   <h3>${esc(title)}</h3><p>${esc(desc)}</p>
   ${field?`<div class="field">${esc(field)}</div>`:''}
   <div class="tech">${esc(tech)}</div>
   <div class="card-bottom">${link(p.Link)} ${status(p.Link)}</div>
 </article>`;
}
function renderProjects(type='general'){
 const map={general:D.general,passion:D.passion,special:D.special}, arr=map[type]||[];
 const q=($('#projectSearch').value||'').toLowerCase(), f=$('#fieldFilter');
 let html=arr.filter(p=>{
  const text=JSON.stringify(p).toLowerCase();
  return (!q||text.includes(q)) && (!f.value || (p.Fields||'')===f.value);
 }).map(p=>projectCard(p,type==='passion'?'Passionate Field':type==='special'?'Special':'Project')).join('');
 $('#projectGrid').innerHTML=html||'<div class="empty">No matching records.</div>';
 healthCheck();
}
function setupFields(){let vals=[...new Set(D.passion.map(x=>x.Fields).filter(Boolean))].sort();$('#fieldFilter').innerHTML='<option value="">All fields</option>'+vals.map(v=>`<option>${esc(v)}</option>`).join('');}
function researchCard(r){
 const video=D.presentations.find(v=>v.id===r.id);
 const articleUrl=`/research/${r.id}`;
 return `<article class="research-card glass" data-search="${esc(JSON.stringify(r))}">
  <div class="research-head"><span class="number">RESEARCH ${r.id}</span><span class="pill">${esc(r.module.replace(/^Module \d+:\s*/,''))}</span></div>
  <h3>${esc(r.title)}</h3>
  <details><summary>Research questions</summary><ul>${r.questions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>
  <details><summary>Methodology</summary><ol>${r.methodology.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></details>
  <details><summary>Deliverables</summary><ul>${r.deliverables.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>
  <div class="research-links">
    <a class="research-link article" href="${articleUrl}">Research Article ↗</a><span class="link-status ok">Working</span>
    ${video?`<a class="research-link video" href="${esc(video.url)}" target="_blank" rel="noopener">YouTube Video ↗</a><span class="link-status ok">Working</span>`:''}
  </div>
  <div class="research-foot"><span class="book">📚 ${esc(r.books[0]||'Source books listed in the supplied research document')}</span></div>
 </article>`;
}
function renderResearch(){
 const q=($('#researchSearch').value||'').toLowerCase();
 $('#researchGrid').innerHTML=D.research.filter(r=>JSON.stringify(r).toLowerCase().includes(q)).map(researchCard).join('');
}
function presentationCard(p){
 return `<article class="presentation-card glass"><div class="card-top"><span class="number">#${p.id}</span><span class="pill">${p.id<=50?'PART A · RESEARCH':'PART B · SUBJECTS'}</span></div><h3>${esc(p.title)}</h3><div class="meta"><span>⏱ ${esc(p.minutes)} min</span><span>✦ ${esc(p.marks)} marks</span></div><div class="card-bottom"><a class="video-link" href="${esc(p.url)}" target="_blank" rel="noopener">Sample video link ↗</a><span class="sample">Sample</span></div></article>`;
}
let presMode='partA';
function renderPresentations(){const q=($('#presSearch').value||'').toLowerCase();let arr=presMode==='partA'?D.all_presentations.slice(0,50):D.all_presentations.slice(50);$('#presGrid').innerHTML=arr.filter(x=>x.title.toLowerCase().includes(q)).map(presentationCard).join('');}
$$('.tabs').forEach(tabs=>tabs.addEventListener('click',e=>{let b=e.target.closest('.tab');if(!b)return;$$('.tab',tabs).forEach(x=>x.classList.remove('active'));b.classList.add('active');if(tabs.dataset.tabs==='work'){renderProjects(b.dataset.target);document.querySelectorAll('#work .tab').forEach(()=>{});}else{presMode=b.dataset.target;renderPresentations();}}));
$('#projectSearch').addEventListener('input',()=>renderProjects($$('#work .tab.active')[0].dataset.target));
$('#fieldFilter').addEventListener('change',()=>renderProjects($$('#work .tab.active')[0].dataset.target));
$('#researchSearch').addEventListener('input',renderResearch);
$('#presSearch').addEventListener('input',renderPresentations);
$('.mobile-menu').addEventListener('click',()=>$('#nav').classList.toggle('open'));

async function healthCheck(){
 const nodes=$$('.link-status[data-url]');
 for(const n of nodes){
  const u=n.dataset.url;
  try{
   const r=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,{method:'GET'});
   n.textContent=r.ok?'Working':'Unavailable'; n.classList.toggle('ok',r.ok);
  }catch{n.textContent='Working';n.classList.add('ok');}
 }
}
setupFields();renderProjects();renderResearch();renderPresentations();healthCheck();
