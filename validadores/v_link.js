// 2 Ejercicio de link
const regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
console.log(regexURL.test("https://ejemplo.com")); 
console.log(regexURL.test("ejemplo.com")); 
