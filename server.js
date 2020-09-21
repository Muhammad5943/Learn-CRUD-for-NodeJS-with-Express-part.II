const http = require('http');
const express = require('express');
let cors = require('cors');

const itemsRouter = require('./router/items');

const app = express();
app.use(express.json());

app.use(cors({origin: 'http://localhost:4000'}));

app.use('/items', itemsRouter);

app.use('/', (req,res) => {
    res.send('Pretest running fine');
});

const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port);

console.debug(`Server listening on port: http://localhost:${port}`);