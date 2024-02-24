const term = require( 'terminal-kit' ).terminal ;

async function entrada(){
  term.green("Ingresa la operacion: \n");
  var entrada = await term.inputField().promise;
  var sumatoria=0;
  if(entrada.includes("+")){
    var numerosSuma = entrada.split("+");
    for (i =0; i<numerosSuma.length; i++){
      sumatoria+=parseInt(numerosSuma[i]);
    }
    console.log( "\n"+ sumatoria);
  } else {
    console.log("error");
  }
  process.exit();
}

entrada();