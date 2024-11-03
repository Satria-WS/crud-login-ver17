const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4400;

// Serve static files from the 'dist/crud-login/browser' directory
app.use(express.static(path.join(__dirname, 'dist/crud-login/browser')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/crud-login/browser', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
