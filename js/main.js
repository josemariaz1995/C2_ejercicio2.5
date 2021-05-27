let italiano = "Italiani";
let noitaliano = "Italiano";

function busqueda(apellido) {
  if (apellido.charAt(apellido.length - 1) === "i") {
    console.log("Este apellido podria ser italiano");
  } else {
    console.log("Este apellido podria no ser italiano");
  }
}
busqueda(italiano);
busqueda(noitaliano);
