"use strict";

// Ficha técnica pública. Os custos seguem a tabela editável em Custos.
const PREPAROS = {
  bisteca:["Tempere a bisteca com alho, sal e limão.","Doure na banha até cozinhar por completo.","Prepare arroz e feijão; refogue a couve e faça a farofa na banha.","Porcione tudo na embalagem escolhida."],
  "frango-quiabo":["Sele o frango temperado na banha com cebola e alho.","Junte tomate, colorau e quiabo; cozinhe até o frango ficar completamente cozido.","Cozinhe o fubá em água até formar um angu cremoso; faça o arroz.","Porcione o frango, o angu e o arroz."],
  tropeiro:["Cozinhe o feijão e escorra; prepare o arroz.","Doure bacon, linguiça e barriga na banha; cozinhe o ovo por completo.","Misture feijão, farinha, couve, cebola e temperos na panela.","Sirva o tropeiro com arroz e torresmo."],
  torresmo:["Tempere a barriga suína e cozinhe até amaciar; seque a superfície.","Frite na banha quente até pururucar, com cuidado com os respingos.","Cozinhe e doure a mandioca; prepare arroz, feijão e vinagrete.","Porcione os acompanhamentos e acrescente o torresmo ao final para preservar a crocância."],
  costelinha:["Tempere e cozinhe a costelinha até ficar macia.","Doure a carne na banha; cozinhe a mandioca.","Prepare arroz e vinagrete com tomate, cebola e limão.","Monte a marmita com as porções do tamanho escolhido."],
  "bife-acebolado":["Tempere e sele o bife na banha até o ponto seguro de cocção.","Doure a cebola na mesma frigideira.","Faça arroz e feijão; cozinhe e frite as batatas na banha.","Monte a marmita separando a batata para manter a textura."],
  milanesa:["Tempere o frango e empane com ovo e farinha de rosca.","Frite na banha até dourar e cozinhar por completo.","Cozinhe e amasse as batatas; faça o arroz e o feijão.","Porcione o frango com o purê e os acompanhamentos."],
  "carne-panela":["Sele o acém na banha com alho e cebola.","Junte tomate, batata, cenoura e água; cozinhe até a carne amaciar.","Prepare o arroz e finalize o molho com cheiro-verde.","Porcione a carne, os legumes e o arroz."],
  tilapia:["Tempere a tilápia com limão e sal; passe no fubá.","Frite na banha até o peixe cozinhar por completo.","Prepare arroz, feijão e vinagrete.","Embale o peixe separado dos acompanhamentos úmidos."],
  toscana:["Cozinhe completamente a linguiça e doure na banha com a cebola.","Faça o arroz e o feijão.","Doure a farinha na banha para a farofa.","Monte as porções e finalize com cheiro-verde."],
  picadinho:["Refogue o acém em cubos com cebola, alho e tomate na banha.","Prepare arroz e farofa; frite o ovo até cozinhar completamente.","Doure a banana-da-terra na banha.","Porcione o picadinho com os acompanhamentos."],
  figado:["Corte e tempere o fígado; doure rapidamente na banha com cebola até cozinhar por completo.","Prepare arroz e feijão.","Cozinhe e salteie as batatas com alho.","Monte a marmita e finalize com cheiro-verde."],
  carreteiro:["Dessalgue e cozinhe a carne seca conforme necessário.","Doure bacon, linguiça, carne seca, alho e cebola na banha.","Acrescente arroz e tomate; cozinhe até o arroz ficar macio.","Refogue a couve e monte a porção."],
  feijoada:["Dessalgue as carnes salgadas quando necessário.","Cozinhe feijão preto, costelinha, calabresa, bacon e carne seca até amaciar.","Refogue com alho, cebola e banha; faça arroz, couve e farofa.","Porcione a feijoada com os acompanhamentos."],
  "frango-frito":["Tempere o frango com alho, sal, limão e pimenta.","Frite na banha até dourar e cozinhar por completo.","Faça polenta de fubá, corte e doure; cozinhe arroz e feijão.","Monte a marmita com a polenta protegida da umidade."],
  lombo:["Tempere o lombo, unte com banha e asse até cozinhar por completo.","Cozinhe feijão e engrosse com farinha de mandioca para fazer tutu.","Prepare arroz e couve refogada.","Fatie o lombo e monte a porção."],
  galinhada:["Doure o frango na banha com alho, cebola, açafrão e sal.","Junte arroz, tomate, pimentão, milho e água.","Cozinhe até o arroz ficar macio e o frango completamente cozido.","Finalize com cheiro-verde e porcione."],
  virado:["Cozinhe feijão e engrosse com farinha para o tutu; prepare arroz.","Doure bisteca, linguiça e barriga na banha até cozinhar por completo.","Prepare ovo, banana empanada e couve.","Monte os componentes separados na marmita."],
  "moida-batata":["Refogue a carne moída na banha com cebola e alho até cozinhar por completo.","Acrescente batata, tomate e temperos; cozinhe até amaciar.","Faça o arroz e o feijão.","Porcione e finalize com cheiro-verde."],
  "vaca-atolada":["Sele a costela bovina na banha.","Junte alho, cebola, tomate e água; cozinhe até a carne ficar macia.","Adicione mandioca e cozinhe até formar caldo cremoso.","Prepare o arroz e monte a marmita."],
  pernil:["Tempere e asse o pernil até cozinhar por completo; fatie.","Doure cebola na banha; prepare farofa com ovo bem cozido.","Faça arroz e feijão.","Monte a marmita com pernil acebolado e acompanhamentos."],
  bolonhesa:["Cozinhe o espaguete conforme a embalagem.","Doure bacon e carne moída na banha até cozinhar por completo.","Junte cebola, alho, cenoura e molho de tomate; apure.","Misture o molho à massa e porcione."],
  calabresa:["Doure as rodelas de calabresa na banha com cebola.","Faça arroz e feijão; cozinhe e frite as batatas.","Porcione a calabresa acebolada e os acompanhamentos.","Embale a batata de modo a preservar a textura."],
  mexidao:["Prepare arroz e feijão; cozinhe completamente a linguiça e o bacon.","Refogue cebola, alho e couve na banha.","Junte arroz, feijão, carnes e ovos; mexa até o ovo cozinhar por completo.","Finalize com cheiro-verde e porcione."]
};

// Médias ilustrativas por 100 g de insumo; o rendimento real depende da cocção.
const NUTRI_BASE = {
  arroz:[130,2.7,28,.3], feijao:[76,4.8,14,.5], feijaoPreto:[77,4.5,14,.5],
  banha:[900,0,0,100], barriga:[520,9,0,52], bacon:[540,37,1,42],
  bisteca:[240,25,0,16], costelinha:[280,22,0,21], costelaBov:[300,20,0,24],
  patinho:[180,27,0,7], acem:[215,26,0,12], moida:[215,26,0,12],
  figado:[165,24,4,5], carneSeca:[250,30,0,14], pernil:[220,27,0,12], lombo:[190,29,0,8],
  sobrecoxa:[210,24,0,12], peito:[165,31,0,4], tilapia:[128,26,0,3],
  toscana:[300,16,2,26], calabresa:[310,15,2,27], ovo:[140,13,1,10],
  mandioca:[125,1,30,.3], batata:[80,2,18,.1], banana:[122,1,31,.4],
  fuba:[360,7,79,2], farinhaMand:[360,1,88,1], farinhaRosca:[350,12,72,2],
  espaguete:[158,6,31,1], molhoTomate:[35,1,7,1], milho:[95,3,21,1]
};
const NUTRI_VEGETAL = new Set(["couve","quiabo","cenoura","cebola","tomate","alho","pimentao","cheiroVerde","limao"]);
function nutriEstimativa(p,c){
  const total=[0,0,0,0];
  for(const l of c.linhas){
    const v=NUTRI_BASE[l.id]||(NUTRI_VEGETAL.has(l.id)?[35,1.5,7,.3]:[20,0,4,0]);
    const fator=l.un==='un'?l.qt*0.5:l.qt/100;
    v.forEach((n,i)=>total[i]+=n*fator);
  }
  return total.map(Math.round);
}
function custosEmbalagem(t){
  const total=G().emb[t], nomes=["Marmita com divisórias","Tampa ou lacre","Talher descartável","Guardanapo","Sacola"];
  const pesos=[.56,.20,.11,.05,.08];let soma=0;
  return nomes.map((nome,i)=>{const valor=i===nomes.length-1?Math.round((total-soma)*100)/100:Math.round(total*pesos[i]*100)/100;soma+=valor;return {nome,valor}});
}
function linkCompra(p,t,q){
  const texto=`Olá, Leandro! Quero pedir ${q}x ${p.nome} (tamanho ${TAMANHOS[t].nome}, ${TAMANHOS[t].peso}). Valor estimado: ${money(preco(p.id,t)*q)}. Pode confirmar disponibilidade, entrega e valor final?`;
  return "https://wa.me/556184202918?text="+encodeURIComponent(texto);
}

renderModal=function(){
  const p=PM[S.detail];if(!p)return;
  const anterior=$('#modal .sheet');const pos=anterior?anterior.scrollTop:0;
  const t=S.detailTam,c=custo(p.id,t),nutri=nutriEstimativa(p,c);
  const comparativo=TAMS.map(x=>{const cx=custo(p.id,x);return {t:x,c:cx,n:nutriEstimativa(p,cx)}});
  $('#modal').innerHTML=`<div class="sheet ficha-sheet" role="dialog" aria-modal="true" aria-label="Ficha técnica de ${esc(p.nome)}">
    <div class="sheet-media ficha-cover"><button class="closex" data-act="close" aria-label="Fechar">${ico('x')}</button><img src="${foto(p.id,'full')}" alt="${esc(p.nome)}"><span class="ficha-over">Ficha técnica · ${esc(p.tag)}</span></div>
    <div class="sheet-body ficha-body">
      <div class="row"><span class="chip porco">${esc(p.cat)}</span><span class="chip ouro">Porção ${t} · ${TAMANHOS[t].peso}</span></div>
      <h2>${esc(p.nome)}</h2><p class="muted">${esc(p.desc)}</p>
      <section><h3>Escolha o tamanho</h3><div class="sizepick">${TAMS.map(x=>`<button data-dtam="${x}" aria-pressed="${t===x}"><b>${TAMANHOS[x].nome}</b><small>${TAMANHOS[x].peso}</small><span>${money(preco(p.id,x))}</span></button>`).join('')}</div></section>
      <section><h3>Tamanhos, calorias e preços</h3><div class="size-comparison">${comparativo.map(x=>`<button data-dtam="${x.t}" aria-pressed="${t===x.t}"><span class="size-letter">${x.t}</span><span><b>${TAMANHOS[x.t].nome}</b><small>${TAMANHOS[x.t].peso}</small></span><span><b>${x.n[0]} kcal</b><small>estimadas</small></span><strong>${money(x.c.preco)}</strong></button>`).join('')}</div></section>
      <section><h3>Ingredientes necessários e custo</h3><div class="tablewrap"><table><thead><tr><th>Ingrediente</th><th class="r">Quantidade</th><th class="r">Valor unitário</th><th class="r">Nesta porção</th></tr></thead><tbody>
      ${c.linhas.map(l=>`<tr><td>${esc(l.nome)}</td><td class="r">${fmtQtd(l.qt,l.un)}</td><td class="r">${money(l.pu)}/${l.un}</td><td class="r">${money(l.c)}</td></tr>`).join('')}
      </tbody><tfoot><tr><th colspan="3">Total de ingredientes</th><th class="r">${money(c.ing)}</th></tr></tfoot></table></div></section>
      <section><h3>Embalagens e descartáveis</h3><div class="tablewrap"><table><thead><tr><th>Item</th><th class="r">Valor estimado</th></tr></thead><tbody>
      ${custosEmbalagem(t).map(x=>`<tr><td>${x.nome}</td><td class="r">${money(x.valor)}</td></tr>`).join('')}</tbody><tfoot><tr><th>Total de embalagem</th><th class="r">${money(c.emb)}</th></tr></tfoot></table></div>
      <p class="fine">Rateio ilustrativo do valor de embalagem configurado na seção Custos; confirme os preços individuais com o fornecedor.</p></section>
      <section><h3>Resumo de custos</h3><div class="ficha-totals"><span>Ingredientes <b>${money(c.ing)}</b></span><span>Embalagem e descartáveis <b>${money(c.emb)}</b></span><span>Custo operacional <b>${money(c.oper)}</b></span><span>Custo total estimado <b>${money(c.total)}</b></span></div></section>
      <section><h3>Tabela nutricional estimada</h3><p class="fine">Por porção ${t} (${TAMANHOS[t].peso}). Cálculo ilustrativo com médias por ingrediente antes do preparo; a absorção de banha, perdas e rendimento variam. Não substitui análise laboratorial ou rotulagem oficial.</p>
      <div class="nutrition"><span>Valor energético <b>${nutri[0]} kcal</b></span><span>Proteínas <b>${nutri[1]} g</b></span><span>Carboidratos <b>${nutri[2]} g</b></span><span>Gorduras totais <b>${nutri[3]} g</b></span></div></section>
      <section><h3>Modo de preparo</h3><ol class="prep">${(PREPAROS[p.id]||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>
      <div class="purchase"><div class="qty"><button data-dq="-1" aria-label="Diminuir quantidade">${ico('minus')}</button><span>${S.detailQtd}</span><button data-dq="1" aria-label="Aumentar quantidade">${ico('plus')}</button></div>
      <a class="btn primary buy" href="${linkCompra(p,t,S.detailQtd)}" target="_blank" rel="noopener noreferrer">Comprar pelo WhatsApp · ${money(c.preco*S.detailQtd)}</a></div>
      <button class="btn ghost sm" data-act="detail-add">Adicionar à sacola do caixa</button>
    </div></div>`;
  $('#modal .sheet').scrollTop=pos;
};

// A mesma tabela vira pares "campo / valor" no celular, sem rolagem lateral.
function rotularTabelas(root){
  if(!root)return;
  root.querySelectorAll('table').forEach(table=>{
    const headings=[...table.querySelectorAll('thead tr:first-child th')].map(th=>th.textContent.trim());
    table.querySelectorAll('tbody tr, tfoot tr').forEach(row=>{
      let column=0;
      [...row.children].forEach(cell=>{
        const span=Number(cell.getAttribute('colspan'))||1;
        if(!cell.dataset.label){
          const label=headings.slice(column,column+span).filter(Boolean).join(' / ');
          cell.dataset.label=label||'Detalhe';
        }
        column+=span;
      });
    });
  });
}
function atualizarTabelas(){
  rotularTabelas(document.querySelector('#main'));
  rotularTabelas(document.querySelector('#modal'));
  rotularTabelas(document.querySelector('#drawer'));
}
const observadorTabelas=new MutationObserver(atualizarTabelas);
['#main','#modal','#drawer'].forEach(selector=>{
  const root=document.querySelector(selector);
  if(root)observadorTabelas.observe(root,{childList:true,subtree:true});
});
atualizarTabelas();
