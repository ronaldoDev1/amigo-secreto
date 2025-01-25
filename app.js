let amigos = [];

function adicionarAmigo() {
  let inputNome = document.getElementById("amigo");
  let nome = inputNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  inputNome.value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  let i = 0;
  while (i < amigos.length) {
    let li = document.createElement("li");
    li.textContent = amigos[i];

    listaAmigos.appendChild(li);
    i++;
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    let li = document.createElement("li");
    li.textContent = "Nenhum amigo disponível para o sorteio.";
    li.className = "result-item";
    resultado.appendChild(li);
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  li.className = "result-item";
  resultado.appendChild(li);
}

function reiniciarJogo() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
