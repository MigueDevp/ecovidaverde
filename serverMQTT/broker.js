const mqtt = require('mqtt');

const client = mqtt.connect({
  host: 'broker.emqx.io',
  port: 1883, 
});

// Suscribirse al tema donde se publicarán los datos del sensor de humedad
client.on('connect', function () {
  client.subscribe('humidity_sensor_data', function (err) {
    if (!err) {
      console.log('Conexión MQTT establecida y suscrito al tema humidity_sensor_data');
    }
  });
});

// Manejar los mensajes recibidos del sensor de humedad
client.on('message', function (topic, message) {
  // Procesar los datos recibidos del sensor de humedad
  const humidityData = JSON.parse(message.toString());
  console.log('Datos de humedad recibidos:', humidityData);
  // Actualizar la interfaz de usuario con los datos recibidos
  // ...
});

// Manejar errores de conexión MQTT
client.on('error', function (error) {
  console.error('Error de conexión MQTT:', error);
});

// Manejar cierre de conexión MQTT
client.on('close', function () {
  console.log('Conexión MQTT cerrada');
});

// Finalmente, asegúrate de cerrar la conexión MQTT cuando la aplicación se cierre
// client.end();
