const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());


// Enable CORS for all routes
app.use(cors());

app.post('/api/tokens', async (req, res) => {
    try {
        const response = await axios.post('https://api.kroger.com/v1/connect/oauth2/token', {
            grant_type: 'client_credentials',
            scope: 'product.compact'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic bWF0dHNkYXRhLTFlOGIyMDRlNDM0ZGMxNTQ1M2RkY2Q5NWQ5ZmQ4MTJhMzMwMjczMjc1MDE0NTk4NzE4NTp1RDJmT3I5QlpNNEJQQ2Q1RWVOenFZVmxGb19aZmlFVUk4SFBxZWFP' // Replace with your actual authorization header
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000; // Use the provided PORT or 3000 as a default

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
