//import fetch from 'node-fetch';
let fetch = require("node-fetch");

async function fetchDataFromEndpoint() {
  const url = "https://padel-web-cristobaljjg.vercel.app/api"; // URL de destino
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al obtener datos: ${error.message}`);
  }
}

async function main() {
  try {
    const data = await fetchDataFromEndpoint();
    console.log("Datos recibidos:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
