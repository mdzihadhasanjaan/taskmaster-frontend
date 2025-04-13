require('dotenv').config();
const express = require('express');
const connectDB = require('./index');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Updated route
app.use('/', authRoutes);
app.use('/api/tasks', taskRoutes); // ← এইটা আগে ছিল '/tasks'

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
