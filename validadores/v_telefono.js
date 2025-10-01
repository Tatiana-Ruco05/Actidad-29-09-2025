/**EJEMPLO A SEGUIR
 * const regexCorreo = /^[w.-]+@[w.-]+[a-zA-Z]{2,}$/;
console.log(regexCorreo.test("usuario@correo.com")); // true
 */

// Ejercicio de celular si es falso o verdadero
const regexTelefono = /^\+?\d{1,3}\s?\d{9}$/;
console.log(regexTelefono.test("+57 3001234567")); 
console.log(regexTelefono.test("3001234567")); 


// Apuntes
// Verificación de cómo funcionan las expresiones regulares.
// En los ejercicios realizados quedó más claro su uso y aplicación.