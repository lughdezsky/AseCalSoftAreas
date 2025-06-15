function calcularAreaCuadrado() {
  const lado = parseFloat(document.getElementById("lado").value);

  if (isNaN(lado) || lado <= 0) {
    document.getElementById("resultado").innerText = "Ingresa un lado válido (mayor que 0).";
    return;
  }

  const area = lado * lado;
  document.getElementById("resultado").innerText = `Área del cuadrado: ${area}`;
}

function calcularAreaTriangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").innerText = "Ingresa base y altura válidas (mayores que 0).";
    return;
  }

  const area = (base * altura) / 2;
  document.getElementById("resultado").innerText = `Área del triángulo: ${area}`;
}
