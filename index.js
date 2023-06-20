const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors({
    origin:'*'
}));

const boardgame = require('./routes/boardgame.routes');

app.use('/api/boardgame', boardgame);

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
})