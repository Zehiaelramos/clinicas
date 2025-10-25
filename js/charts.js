
async function loadChart() {
  showLoading()
  try{

    document.getElementById('maps').style.display = 'none';
    document.getElementById('charts').style.display = 'block';

    var xData = ['Parametro1', 'Parametro2', 'Parametro3', 'Parametro4'];
    var yData = [15, 7, 10, 25];

    // Definición de la "traza" (el tipo de gráfico y los datos)
    var trazaBarra = {
      x: xData,
      y: yData,
      name: 'Distribucion de Clinicas',
      type: 'bar', // Define que será un gráfico de barras
      marker: {
        color: 'rgb(58, 166, 172)' // Color de las barras
      }
    };

    // El array de datos puede contener múltiples trazas si quieres superponer gráficos
    var data = [trazaBarra];

    // Definición del "layout" (títulos, ejes, configuración general)
    var layout = {
      title: 'Distribucion de Clinicas',
      xaxis: {
        title: 'Tipo'
      },
      yaxis: {
        title: 'Cantidad Vendida (Unidades)'
      }
    };

    // 4. Dibujar el gráfico usando Plotly.newPlot()
    // Primer argumento: ID del contenedor (Div)
    // Segundo argumento: Array de datos
    // Tercer argumento: Objeto de configuración del layout
    Plotly.newPlot('first-chart', data, layout);

    setTimeout(() => {
      hideLoading();
    }, 1000);

  }catch(err) {
    console.error('Error cargando GeoJSON:', err);

    setTimeout(() => {
      hideLoading();
    }, 5000);
  }
}

function showLoading() {
  document.getElementById('overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('overlay').style.display = 'none';
}
