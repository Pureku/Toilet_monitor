// const mqtt = require('mqtt');
// const WebSocket = require('ws');

// const brokerUrl = 'mqtt://10.0.0.1:1883';
// const topics = ['T13/Tae/Yot', 'another/topic']; // Array of MQTT topics

// const wss = new WebSocket.Server({ port: 6080 }); // WebSocket server

// // Connect to MQTT broker
// const client = mqtt.connect(brokerUrl);

// client.on('connect', function () {
//     console.log('Connected to MQTT broker');
//     // Subscribe to multiple topics
//     topics.forEach(topic => {
//         client.subscribe(topic, function (err) {
//             if (!err) {
//                 console.log(`Subscribed to ${topic}`);
//             }
//         });
//     });
// });

// client.on('message', function (topic, message) {

//     wss.clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify({ topic, message: message.toString() }));
//         }
//     });

// });

// client.on('error', function (error) {
//     console.error('MQTT error:', error);
// });

// export default async function handler(req, res) {
//     try {
//         res.status(200).json({ message: 'Last MQTT message received' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }
data = { "M1-1": 1, "M1-2": 0, "M1-3": 1, "M1-4": 0 }


const result = Object.entries(data).reduce((acc, [key, value]) => {
    const [avaID] = key.split("-");
    acc[avaID] = (acc[avaID] || 0) + value;
    return acc;
}, {});

console.log(Object.keys(result)[0]);
console.log(Object.values(result)[0]);

const textElement = document.getElementById(Object.keys(result)[0]);
textElement.textContent = Object.values(result)[0].toString();
