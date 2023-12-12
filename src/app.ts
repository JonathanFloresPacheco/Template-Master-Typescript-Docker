import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to your first REST API with Node.js and TypeScript!');
});

app.get('/api/data', (req: Request, res: Response) => {
    const data = { message: 'This is sample data from your REST API.' };
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
