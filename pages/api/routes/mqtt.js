const mqtt = require('mqtt');
const WebSocket = require('ws');

const brokerUrl = 'mqtt://163.50.57.176:1883';
const topic = 'F12/MT900/Toilet-BP-MAN';

const wss = new WebSocket.Server({ port: 6080 }); // WebSocket server

// Connect to MQTT broker
const client = mqtt.connect(brokerUrl);

client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe(topic, function (err) {
        if (!err) {
            console.log(`Subscribed to ${topic}`);
        }
    });
});

client.on('message', function (topic, message) {

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
        }
    });
    // Handle incoming message here
});

client.on('error', function (error) {
    console.error('MQTT error:', error);
});

export default async function handler(req, res) {
    try {
        res.status(200).json({ message: 'Last MQTT message received' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}