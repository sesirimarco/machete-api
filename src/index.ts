import express from 'express';
const PORT = process.env.port ?? 3001;
const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'hello' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} .)`);
});
