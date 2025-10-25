
// ============================================
// 👉 EDITA AQUÍ: Agrega la ruta de tu archivo GeoJSON local
// ============================================
const RUTA_GEOJSON_MUN_NL = '../data/19-NL.geojson';
const RUTA_GEOJSON_AGEBS_NL = '../data/AGEBS_NSE_NL.geojson';
const RUTA_GEOJSON_AGEBS_FILTER_NL = '../data/AGEBS_filtrados.geojson';
// ============================================

const datosEstados = [
  { estado: 'Aguascalientes', lat: 21.88, lon: -102.28, poblacion: 1.4 },
  { estado: 'Baja California', lat: 30.84, lon: -115.28, poblacion: 3.8 },
  { estado: 'Baja California Sur', lat: 26.04, lon: -111.67, poblacion: 0.8 },
  { estado: 'Campeche', lat: 19.83, lon: -90.53, poblacion: 1.0 },
  { estado: 'Chiapas', lat: 16.75, lon: -93.11, poblacion: 5.5 },
  { estado: 'Chihuahua', lat: 28.63, lon: -106.08, poblacion: 3.7 },
  { estado: 'Ciudad de México', lat: 19.43, lon: -99.13, poblacion: 9.2 },
  { estado: 'Coahuila', lat: 27.05, lon: -101.70, poblacion: 3.1 },
  { estado: 'Colima', lat: 19.24, lon: -103.72, poblacion: 0.7 },
  { estado: 'Durango', lat: 24.02, lon: -104.67, poblacion: 1.8 },
  { estado: 'Guanajuato', lat: 21.02, lon: -101.26, poblacion: 6.2 },
  { estado: 'Guerrero', lat: 17.44, lon: -99.54, poblacion: 3.5 },
  { estado: 'Hidalgo', lat: 20.09, lon: -98.76, poblacion: 3.1 },
  { estado: 'Jalisco', lat: 20.66, lon: -103.35, poblacion: 8.3 },
  { estado: 'Estado de México', lat: 19.50, lon: -99.72, poblacion: 17.0 },
  { estado: 'Michoacán', lat: 19.57, lon: -101.71, poblacion: 4.7 },
  { estado: 'Morelos', lat: 18.68, lon: -99.10, poblacion: 2.0 },
  { estado: 'Nayarit', lat: 21.75, lon: -104.84, poblacion: 1.2 },
  { estado: 'Nuevo León', lat: 25.59, lon: -99.99, poblacion: 5.6 },
  { estado: 'Oaxaca', lat: 17.05, lon: -96.72, poblacion: 4.1 },
  { estado: 'Puebla', lat: 19.04, lon: -98.20, poblacion: 6.6 },
  { estado: 'Querétaro', lat: 20.59, lon: -100.39, poblacion: 2.4 },
  { estado: 'Quintana Roo', lat: 19.18, lon: -88.47, poblacion: 1.9 },
  { estado: 'San Luis Potosí', lat: 22.15, lon: -100.98, poblacion: 2.8 },
  { estado: 'Sinaloa', lat: 25.82, lon: -108.21, poblacion: 3.0 },
  { estado: 'Sonora', lat: 29.30, lon: -110.33, poblacion: 3.0 },
  { estado: 'Tabasco', lat: 17.84, lon: -92.61, poblacion: 2.5 },
  { estado: 'Tamaulipas', lat: 24.27, lon: -98.83, poblacion: 3.5 },
  { estado: 'Tlaxcala', lat: 19.31, lon: -98.24, poblacion: 1.3 },
  { estado: 'Veracruz', lat: 19.53, lon: -96.92, poblacion: 8.1 },
  { estado: 'Yucatán', lat: 20.71, lon: -89.09, poblacion: 2.3 },
  { estado: 'Zacatecas', lat: 22.77, lon: -102.58, poblacion: 1.6 }
];

async function loadCityNL() {

  document.getElementById('charts').style.display = 'none';
  document.getElementById('maps').style.display = 'block';

  try {
    showLoading();
    // document.getElementById('overlay').textContent = 'Cargando delimitaciones de Nuevo León...';

    const resp = await fetch(RUTA_GEOJSON_MUN_NL);

    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`);
    }

    const geojson = await resp.json();

    hideLoading();
    showStateDetailed(geojson, 'Nuevo León');
  } catch (err) {
    console.error('Error cargando GeoJSON:', err);
    document.getElementById('overlay').innerHTML =
      `<span style="color: #d32f2f;">❌ Error: No se pudo cargar el archivo GeoJSON.</span><br>
      <span style="font-size: 12px;">Verifica que la ruta sea correcta: <code>${RUTA_GEOJSON_MUN_NL}</code></span>`;

    setTimeout(() => {
      hideLoading();
    }, 5000);
  }
}

async function loadAgebNL() {
  try {
    showLoading();

    const resp = await fetch(RUTA_GEOJSON_AGEBS_NL);

    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`);
    }

    const geojson = await resp.json();

    hideLoading();
    showStateDetailed(geojson, 'Nuevo León');
  } catch (err) {
    console.error('Error cargando GeoJSON:', err);
    document.getElementById('overlay').innerHTML = 
      `<span style="color: #d32f2f;">❌ Error: No se pudo cargar el archivo GeoJSON.</span><br>
      <span style="font-size: 12px;">Verifica que la ruta sea correcta: <code>${RUTA_GEOJSON_AGEBS_NL}</code></span>`;

    setTimeout(() => {
      hideLoading();
    }, 5000);
  }
}

async function loadAgebFilterNL() {
  try {
    showLoading();

    const resp = await fetch(RUTA_GEOJSON_AGEBS_FILTER_NL);

    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`);
    }

    const geojson = await resp.json();

    hideLoading();
    showStateDetailed(geojson, 'Nuevo León');
  } catch (err) {
    console.error('Error cargando GeoJSON:', err);
    document.getElementById('overlay').innerHTML =
      `<span style="color: #d32f2f;">❌ Error: No se pudo cargar el archivo GeoJSON.</span><br>
      <span style="font-size: 12px;">Verifica que la ruta sea correcta: <code>${RUTA_GEOJSON_AGEBS_FILTER_NL}</code></span>`;

    setTimeout(() => {
      hideLoading();
    }, 5000);
  }
}

function showStateDetailed(geojson, nombreEstado) {
  const traces = [];
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];

  // Procesar cada feature del GeoJSON
  geojson.features.forEach((feature, idx) => {
    const color = colors[idx % colors.length];

    if (feature.geometry.type === 'Polygon') {
      feature.geometry.coordinates.forEach(ring => {
        traces.push({
          type: 'scatter',
          mode: 'lines',
          x: ring.map(c => c[0]),
          y: ring.map(c => c[1]),
          fill: 'toself',
          fillcolor: color.replace(')', ', 0.3)').replace('rgb', 'rgba'),
          line: {
              color: color,
              width: 1.5
          },
          hoverinfo: 'text',
          hovertext: feature.properties.nombre || feature.properties.name || 'Sin nombre',
          showlegend: false,
          name: feature.properties.nombre || ''
        });
      });
    } else if (feature.geometry.type === 'MultiPolygon') {
      feature.geometry.coordinates.forEach(polygon => {
        polygon.forEach(ring => {
          traces.push({
            type: 'scatter',
            mode: 'lines',
            x: ring.map(c => c[0]),
            y: ring.map(c => c[1]),
            fill: 'toself',
            fillcolor: color.replace(')', ', 0.3)').replace('rgb', 'rgba'),
            line: {
              color: color,
              width: 1.5
            },
            hoverinfo: 'text',
            hovertext: feature.properties.nombre || feature.properties.name || 'Sin nombre',
            showlegend: false,
            name: feature.properties.nombre || ''
          });
        });
      });
    }
  });

  const layout = {
    title: {
      text: `${nombreEstado} - Delimitaciones Detalladas (${geojson.features.length} AGEBS/municipios)`,
      font: { size: 20, color: '#333' }
    },
    xaxis: {
      title: 'Longitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      zeroline: false
    },
    yaxis: {
      title: 'Latitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      zeroline: false,
      scaleanchor: 'x',
      scaleratio: 1
    },
    plot_bgcolor: '#f5f9fc',
    paper_bgcolor: 'white',
    margin: { t: 70, b: 60, l: 60, r: 60 },
    hovermode: 'closest'
  };

  Plotly.newPlot('map', traces, layout, { responsive: true });
}

function showAll() {
  const traces = [];

  traces.push({
    x: datosEstados.map(d => d.lon),
    y: datosEstados.map(d => d.lat),
    mode: 'markers+text',
    type: 'scatter',
    text: datosEstados.map(d => d.estado),
    textposition: 'top center',
    textfont: {
      size: 9,
      color: '#000',
      family: 'Arial'
    },
    marker: {
      size: 15,
      color: '#667eea',
      line: {
        color: 'white',
        width: 2
      }
    },
    hovertemplate: '<b>%{text}</b><br>Lat: %{y:.2f}<br>Lon: %{x:.2f}<extra></extra>',
    showlegend: false
  });

  const layout = {
    title: {
      text: 'Estados de México - Vista General',
      font: { size: 22, color: '#333' }
    },
    xaxis: {
      title: 'Longitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      range: [-118, -86]
    },
    yaxis: {
      title: 'Latitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      scaleanchor: 'x',
      scaleratio: 1,
      range: [14, 33]
    },
    plot_bgcolor: '#d4e9f7',
    paper_bgcolor: 'white',
    margin: { t: 60, b: 60, l: 60, r: 60 },
    hovermode: 'closest'
  };

  Plotly.newPlot('map', traces, layout, { responsive: true });
}

function showPopulation() {
  const traces = [];

  traces.push({
    x: datosEstados.map(d => d.lon),
    y: datosEstados.map(d => d.lat),
    mode: 'markers+text',
    type: 'scatter',
    text: datosEstados.map(d => d.estado),
    textposition: 'top center',
    textfont: {
      size: 8,
      color: '#000'
    },
    marker: {
      size: datosEstados.map(d => Math.sqrt(d.poblacion) * 10),
      color: datosEstados.map(d => d.poblacion),
      colorscale: 'Blues',
      showscale: true,
      colorbar: {
        title: 'Población<br>(millones)',
        thickness: 20,
        len: 0.7
      },
      line: {
        color: 'white',
        width: 2
      }
    },
    hovertemplate: '<b>%{text}</b><br>Población: %{marker.color:.1f} millones<extra></extra>',
    showlegend: false
  });

  const layout = {
    title: {
      text: 'Población por Estado (millones)',
      font: { size: 22, color: '#333' }
    },

    xaxis: {
      title: 'Longitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      range: [-118, -86]
    },
    yaxis: {
      title: 'Latitud',
      showgrid: true,
      gridcolor: '#e0e0e0',
      scaleanchor: 'x',
      scaleratio: 1,
      range: [14, 33]
    },
    plot_bgcolor: '#f5f9fc',
    paper_bgcolor: 'white',
    margin: { t: 60, b: 60, l: 60, r: 100 },
    hovermode: 'closest'
  };

  Plotly.newPlot('map', traces, layout, { responsive: true });
}

function showLoading() {
  document.getElementById('overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('overlay').style.display = 'none';
}

// Mostrar vista inicial
// mostrarTodos();
