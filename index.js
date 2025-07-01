import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('AI Video Agent is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
