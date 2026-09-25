/* Vitrine e gestão usam o mesmo cálculo de preço do cardápio. */
renderModal=function(){
  const p=PM[S.detail];if(!p)return;
  const old=$('#modal .sheet'),position=old?old.scrollTop:0,t=S.detailTam,c=custo(p.id,t),n=nutriEstimativa(p,c);
  $('#modal').innerHTML=`<div class="sheet ficha-sheet" role="dialog" aria-modal="true" aria-label="Ficha de ${esc(p.nome)}">
    <div class="sheet-media ficha-cover"><button class="closex" data-act="close" aria-label="Fechar">${ico('x')}</button><img src="${foto(p.id,'full')}" alt="${esc(p.nome)}"><span class="ficha-over">Ficha do prato · ${esc(p.tag)}</span></div>
    <div class="sheet-body ficha-body">
      <div class="row"><span class="chip porco">${esc(p.cat)}</span><span class="chip ouro">Porção ${t} · ${TAMANHOS[t].peso}</span></div>
      <h2>${esc(p.nome)}</h2><p class="muted">${esc(p.desc)}</p>
      <section><h3>Tamanhos e preços</h3><div class="size-comparison">${TAMS.map(x=>{const cx=custo(p.id,x),nx=nutriEstimativa(p,cx);return `<button data-dtam="${x}" aria-pressed="${t===x}"><span class="size-letter">${x}</span><span><b>${TAMANHOS[x].nome}</b><small>${TAMANHOS[x].peso}</small></span><span><b>${nx[0]} kcal</b><small>estimadas</small></span><strong>${money(cx.preco)}</strong></button>`}).join('')}</div></section>
      <section><h3>Ingredientes da marmita ${t}</h3><div class="ings">${c.linhas.map(l=>`<span class="chip">${esc(l.nome)} · ${fmtQtd(l.qt,l.un)}</span>`).join('')}</div></section>
      <section><h3>Informação nutricional estimada</h3><p class="fine">Por porção ${t} (${TAMANHOS[t].peso}). Valores ilustrativos por ingrediente, sujeitos a perdas e variações no preparo; não substituem análise nutricional do produto final.</p>
        <div class="nutrition"><span>Valor energético <b>${n[0]} kcal</b></span><span>Proteínas <b>${n[1]} g</b></span><span>Carboidratos <b>${n[2]} g</b></span><span>Gorduras totais <b>${n[3]} g</b></span></div></section>
      <div class="purchase"><div class="qty"><button data-dq="-1" aria-label="Diminuir quantidade">${ico('minus')}</button><span>${S.detailQtd}</span><button data-dq="1" aria-label="Aumentar quantidade">${ico('plus')}</button></div>
        <a class="btn primary buy" href="${linkCompra(p,t,S.detailQtd)}" target="_blank" rel="noopener noreferrer">Comprar pelo WhatsApp · ${money(c.preco*S.detailQtd)}</a></div>
    </div></div>`;
  $('#modal .sheet').scrollTop=position;
};

vReceitas=function(){
  const p=PM[S.rec.id]||PRATOS[0],t=S.rec.tam,c=custo(p.id,t),g=G(),lote=Math.max(1,+S.rec.lote||1);
  const lucro=c.sugerido*(1-g.imposto-g.taxa)-c.total;
  return `<div class="wrap page admin-page">
    <div class="page-h"><div><div class="eyebrow">Gestão de produção</div><h1>Admin · fichas técnicas</h1><p>Escolha um prato para conferir ingredientes, preparo e rentabilidade. Valores estimados com as cotações em Custos.</p></div></div>
    <div class="rail-h"><h2>Todos os pratos <span class="count">${PRATOS.length}</span></h2><span class="muted">Deslize para ver mais →</span></div>
    <div class="admin-track" aria-label="Pratos disponíveis">${PRATOS.map(x=>`<button class="admin-item" data-rec="${x.id}" aria-pressed="${x.id===p.id}"><img src="${foto(x.id)}" alt="" loading="lazy"><span>${esc(x.nome)}</span></button>`).join('')}</div>
    <div class="admin-details">
      <div class="card admin-head"><img src="${foto(p.id)}" alt="${esc(p.nome)}"><div class="pad"><span class="chip porco">${esc(p.cat)}</span><h2>${esc(p.nome)}</h2><p class="muted">${esc(p.desc)}</p><div class="bigsize">${TAMS.map(x=>{const cx=custo(p.id,x);return `<button data-rtam="${x}" aria-pressed="${x===t}"><span class="sz">${x}</span><b>${TAMANHOS[x].nome} · ${TAMANHOS[x].peso}</b><span class="num">${money(cx.sugerido)}</span></button>`}).join('')}</div></div></div>
      <div class="admin-metrics"><div class="card pad"><small>Custo de produção / unidade</small><strong>${money(c.total)}</strong></div><div class="card pad"><small>Preço sugerido / unidade</small><strong>${money(c.sugerido)}</strong></div><div class="card pad"><small>Lucro estimado / unidade</small><strong>${money(lucro)}</strong></div></div>
      ${c.praticado?`<p class="fine">Preço praticado no cardápio: <b>${money(c.preco)}</b>. Lucro previsto nesse preço: <b>${money(c.lucro)}</b> por marmita. O comparativo acima usa o preço sugerido.</p>`:''}
      <div class="admin-grid"><section class="card pad"><h3>Ingredientes necessários · ${t}</h3><div class="admin-ingredients">${c.linhas.map(l=>`<div><span>${esc(l.nome)}<small>${fmtQtd(l.qt,l.un)} · ${money(l.pu)}/${l.un}</small></span><b>${money(l.c)}</b></div>`).join('')}</div><div class="admin-subtotal"><b>Ingredientes</b><b>${money(c.ing)}</b></div></section>
      <section class="card pad"><h3>Custos de produção</h3><div class="ficha-totals"><span>Ingredientes <b>${money(c.ing)}</b></span><span>Embalagem e descartáveis <b>${money(c.emb)}</b></span><span>Gás e energia <b>${money(g.oper[t])}</b></span><span>Preparo e montagem <b>${money(c.preparo)}</b></span><span>Total por marmita <b>${money(c.total)}</b></span></div><h3 style="margin-top:20px">Modo de preparo</h3><ol class="prep">${(PREPAROS[p.id]||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section></div>
      <section class="card pad admin-projection"><div><h3>Projeção de vendas</h3><label for="lote">Número de marmitas ${t} a vender</label><input class="input num" type="number" min="1" step="1" id="lote" value="${lote}" inputmode="numeric"><p class="fine">Estimativa ao preço sugerido, após imposto e taxa de cartão configurados. Não considera entrega, perdas nem despesas fixas adicionais.</p></div><div class="ficha-totals"><span>Custo total do lote <b data-projection="cost">${money(c.total*lote)}</b></span><span>Faturamento bruto <b data-projection="revenue">${money(c.sugerido*lote)}</b></span><span>Impostos e cartão <b data-projection="fees">${money(c.sugerido*lote*(g.imposto+g.taxa))}</b></span><span>Lucro estimado <b data-projection="profit">${money(lucro*lote)}</b></span></div></section>
      <p class="fine">O custo de preparo é um rateio estimado por receita, proporcional ao tamanho. Atualize as cotações, embalagem, operação e margens na aba Custos antes de definir o preço final.</p>
    </div></div>`;
};

document.addEventListener('input',e=>{
  if(e.target.id!=='lote')return;
  const n=Math.max(1,Math.floor(Number(e.target.value)||1)),c=custo(S.rec.id,S.rec.tam),g=G();
  const values={cost:c.total*n,revenue:c.sugerido*n,fees:c.sugerido*n*(g.imposto+g.taxa),profit:(c.sugerido*(1-g.imposto-g.taxa)-c.total)*n};
  for(const [key,value] of Object.entries(values)){const node=document.querySelector('[data-projection="'+key+'"]');if(node)node.textContent=money(value)}
});
if(S.view==='receitas')render();
