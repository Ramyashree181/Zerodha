require('dotenv').config({ path: __dirname + '/.env' });

const mongoose = require('mongoose');
const { HoldingsModel } = require('./model/HoldingsModel');
const fs = require('fs');
const path = require('path');

const uri = process.env.MONGO_URL;

async function run() {
    if (!uri) {
        console.error('MONGO_URL not set in .env');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            family: 4,
            tls: true,
            tlsAllowInvalidCertificates: true,
        });
        console.log('Connected to MongoDB');

        const file = path.join(__dirname, 'data', 'holdings.json');
        const raw = fs.readFileSync(file, 'utf8');
        const tempHoldings = JSON.parse(raw);

        await HoldingsModel.deleteMany({});
        console.log('Cleared existing holdings');

        const docs = tempHoldings.map(item => ({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss || false,
        }));

        const inserted = await HoldingsModel.insertMany(docs);
        console.log('Inserted holdings:', inserted.length);
        process.exit(0);
    } catch (err) {
        console.error('Failed to seed holdings:', err.message || err);
        process.exit(1);
    }
}

run();
