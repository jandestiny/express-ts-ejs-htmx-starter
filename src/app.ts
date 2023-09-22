import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render your views
app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'HTMX-Starter' });
});

app.get('/congrats', (req: Request, res: Response) => {
    res.render('htmx/congrats', { title: 'Congrats!' });
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
