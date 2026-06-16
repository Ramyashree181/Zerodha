require('dotenv').config({ path: __dirname + '/.env' });

const mongoose = require('mongoose');
const { PositionsModel } = require('./model/PositionsModel');

const uri = process.env.MONGO_URL;

const tempPositions = [
    {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
    },
    {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
    },
];

async function run() {
    if (!uri) {
        console.error('MONGO_URL not set in .env');
        process.exit(1);
    }

    try {
        // try connecting with some options to handle common Atlas environments
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            family: 4,
            tls: true,
            tlsAllowInvalidCertificates: true,
        });
        console.log('Connected to MongoDB');

        const docs = tempPositions.map(item => ({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss,
        }));

        // remove existing positions (this will delete malformed docs as requested)
        await PositionsModel.deleteMany({});
        console.log('Cleared existing positions');

        const inserted = await PositionsModel.insertMany(docs);
        console.log('Inserted positions:', inserted.length);
        process.exit(0);
    } catch (err) {
        console.error('Failed to seed positions:', err.message || err);
        process.exit(1);
    }
}

run();
