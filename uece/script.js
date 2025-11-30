document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.button-carta');
  if (!btn) return;

  btn.addEventListener('click', () => {
    openCarta();
  });

  function openCarta() {
    if (document.querySelector('.carta-overlay')) return; 

    const message = `Meu amor,

Primeiramente me perdoe por ter dormido logo após ao te responder kkkkkkk,
mas minhas palavrás são sinceras, e espero que isso pelo menos tenha te deixado
um pouco surpresa ou arrancado um um sorrisinho ou um arzinho pelo nariz.
Realmente estou aqui para o que der e vier, e qualquer coisa, nem era essa a prova
que iria fazer você entrar mesmo, culpa da EP que não lhe deu espaço e tempo para estudar!!!

Caso queira reclamar horrores sobre como foi lá, você sabe que estou sempre aqui,
sem contar que amo ouvir você falando, amo sua voz, amo você e todos os aspectos que te definem.
Espero que você não se canse de minha "melosidade", é porque realmente desejo te fazer a pessoa
triste mais feliz do mundo. Se as coisas não deram certo agora, sei que darão amanhã, depois de amanhã,
e depois também, pois Deus sabe de tudo, sei que isso é simples, e quando eu for te pedir em namoro,
pode deixar que farei algo inesperado e extravagante, para combinar com a explosão de sentimento que você me causa.

Com Amor,
André`;

    const overlay = document.createElement('div');
    overlay.className = 'carta-overlay fade-in';
    overlay.innerHTML = `
      <div class="carta" role="dialog" aria-modal="true" aria-label="Carta">
        <button class="close" aria-label="Fechar carta">✕</button>
        <textarea readonly>${message}</textarea>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('.close');
    closeBtn.addEventListener('click', () => overlay.remove());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }
});