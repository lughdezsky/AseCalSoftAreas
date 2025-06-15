function calcularArea() {
  const lado = parseFloat(document.getElementById("lado").value);

  if (isNaN(lado) || lado <= 0) {
    document.getElementById("resultado").innerText = "Ingresa un valor válido y mayor que 0.";
    return;
  }

  const area = lado * lado;
  document.getElementById("resultado").innerText = `Área del cuadrado: ${area}`;
}
