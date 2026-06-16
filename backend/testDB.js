require('dotenv').config();
const mongoose = require('mongoose');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');

const uri = process.env.MONGO_URL;

async function testConnection() {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            family: 4,
            tls: true,
            tlsAllowInvalidCertificates: true,
        });
        console.log('✓ Connected to MongoDB');

        // Test Holdings
        const holdings = await HoldingsModel.find({});
        console.log(`✓ Holdings count: ${holdings.length}`);
        if (holdings.length > 0) {
            console.log('Sample holding:', holdings[0]);
        } else {
            console.log('⚠ No holdings data found in database');
        }

        // Test Positions
        const positions = await PositionsModel.find({});
        console.log(`✓ Positions count: ${positions.length}`);
        if (positions.length > 0) {
            console.log('Sample position:', positions[0]);
        } else {
            console.log('⚠ No positions data found in database');
        }

        process.exit(0);
    } catch (err) {
        console.error('✗ Error:', err.message);
        process.exit(1);
    }
}

testConnection();
