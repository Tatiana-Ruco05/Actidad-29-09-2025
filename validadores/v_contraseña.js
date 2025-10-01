
const regexContrasena = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
console.log(regexContrasena.test("Pass1234")); 
console.log(regexContrasena.test("pass1234")); 

