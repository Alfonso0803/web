/**
 * Check JQuery Support
 */
if (typeof jQuery === "undefined") {
  var errorMsg = "ERRO: O seu navegador non soporta a versión actual da libraría jQuery.\n\r" +
    "Non é posible executar unha aplicación web baseada en MAQINT sen esta libraría.\n\r\n\r" +
    "Por favor, actualice o seu navegador ou empregue outro que soporte jQuery ";
  if (typeof bowser !== "undefined") {
    errorMsg = errorMsg + "\n\r\n\r" +
      "Navegador: " + bowser.name + " v." + bowser.version + "\n\r" +
      "Sistema Operativo: " + bowser.osname + " v." + bowser.osversion;
  }
  console.error(errorMsg);
  alert(errorMsg);
}