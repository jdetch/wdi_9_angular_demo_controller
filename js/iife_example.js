//what JS scope is this function defined in?
// The global scope

// Polluting the Global Namespace
// If we had a JS library that ALSO had a variable or function of this name,
// 'say', it would cause a naming conflict
// function say(){
//   alert('Say Hello');
// }

//IIFE
(alert("hello"))()
