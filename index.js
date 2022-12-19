import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})

//req - что приходит от клиента на бэк
//res - бэкенд отправляет клиенту ответ

//чтобы express отправил мы не не пишем экспорт, мы пишем app.listen
//4444 - нз порта и дальше указываем если будет ошибка 