const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const exampleRoutes = require('./routes/exampleRoutes');
const swaggerDocs = require('./config/swagger');

const app = express();

app.use(express.json());

// Routes
app.use('/api', exampleRoutes);

// Swagger documentation
swaggerDocs(app);

// Global error handler
app.use(errorHandler);

module.exports = app;