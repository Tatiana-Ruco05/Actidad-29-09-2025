// función para calcular días faltantes a Navidad
function diasParaNavidad() {
  const hoy = new Date();

  // Crea la fecha de Navidad (25 de diciembre del año actual).
  const navidad = new Date(hoy.getFullYear(), 11, 25); 
  if (hoy > navidad) {
    navidad.setFullYear(navidad.getFullYear() + 1); 
  }

  // Un milisegundo es la milésima parte de un segundo.
  // 1 segundo = 1000 milisegundos (ms).
  const diferenciaMs = navidad - hoy; 
  const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24)); 

  return `Faltan ${diasFaltantes} días para Navidad.`;
}

// En Node.js usamos console.log para mostrar en consola.
console.log(diasParaNavidad());

// Apuntes:
// Aprendí qué son los milisegundos y cómo funciona Date.
// Había un error al ejecutar, pero lo corregí probando y con ayudita del inter.
// Math.ceil siempre redondea hacia arriba.
