import express from 'express';
import { config } from 'dotenv';

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    const name = request.query.name || 'nao preencheu';
    const idade = request.query.idade || '0';
    return response.status(200).send({
        message: `Hello ${name} sua idade é:${idade}!,`

    });
}
);
app.get('/:name/:idade', (request, response) => {
    const age = request.params.idade || 'idade';
    const name = request.params.name || 'nao preencheu';
    return response.status(200).send({
        user: name , idade: age
    });
}
);
app.post('/', (request, response) => { 
    return response.status(200).send({
        message:"Hello World!"
    });
});
app.put('/:name/:idade', (request, response) => {
    return response.status(200).send({
        message:"hello world!"
    });
}
);
app.delete('/:name/:idade', (request, response) => {
    return response.status(200).send({
    message:"hello world!"

    });
}
);
app.listen(port, () => {
    console.log(`🤑Server is running on http://localhost:${port}`);
});
