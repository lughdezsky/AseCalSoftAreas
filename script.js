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
  const base = parseFloat(document.getElementById("baseTri").value);
  const altura = parseFloat(document.getElementById("alturaTri").value);

  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").innerText = "Ingresa base y altura válidas (mayores que 0) para el triángulo.";
    return;
  }

  const area = (base * altura) / 2;
  document.getElementById("resultado").innerText = `Área del triángulo: ${area}`;
}

function calcularAreaRectangulo() {
  const base = parseFloat(document.getElementById("baseRect").value);
  const altura = parseFloat(document.getElementById("alturaRect").value);

  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").innerText = "Ingresa base y altura válidas (mayores que 0) para el rectángulo.";
    return;
  }

  const area = base * altura;
  document.getElementById("resultado").innerText = `Área del rectángulo: ${area}`;
}
