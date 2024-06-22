require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const placeId = 'ChIJHe4tCPXLvJURQcxo1kNuOYc';
const apiKey = process.env.GOOGLE_API_KEY

app.use(cors()); 

app.get('/api/place-details', async (req, res) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&reviews_no_translations=true&translated=false&key=${apiKey}`);
        res.json(response.data.result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching place details.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
