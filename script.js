//final: array {dia, mes, año}
function diasHasta(final) {
    function actualizarCuenta() {
      let Hoy = new Date();
      // Ajustamos el mes restando 1 (porque los meses comienzan desde 0)
      let fin = new Date(final.año, final.mes - 1, final.dia);
      let mseg_dia = 1000 * 60 * 60 * 24;
  
      // Si ya pasó la fecha en el mes actual, sumamos un año a la fecha final
      if (Hoy.getMonth() == final.mes - 1 && Hoy.getDate() > final.dia) {
        fin.setFullYear(fin.getFullYear() + 1);
      }
  
      let dias = Math.ceil((fin.getTime() - Hoy.getTime()) / mseg_dia);
  
      // Actualizamos el contenido del cuadro
      let cuadro = document.getElementById('cuenta');
      cuadro.innerText = "Faltan " + dias + " días hasta " + fin.toLocaleDateString();
    }
  
    // Actualizamos inmediatamente al cargar
    actualizarCuenta();
  
    // Configuramos el intervalo para actualizar cada segundo
    setInterval(actualizarCuenta, 1000);
  }
  
  // Llamamos a la función con la fecha deseada
  diasHasta({ dia: 31, mes: 12, año: 2024 });
  