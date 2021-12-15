const express = require("express");

const cors = require('cors');

//if env port is not set, use 3001
const PORT = process.env.PORT || 3001;

const app = express();

const corsOption = {
    origin: "http://localhost:3000"
}

var totalRequest = 0;

app.use(cors(corsOption));


app.get('/api', (req, res) => {

    var coffee = {
        'coffee': [
            {
                'name': 'Cafe latte',
                'description': '1/3 coffee shot, 2/3 forthed milk'
            },
            {
                'name': 'Cappuccino',
                'description': ' 1/3 coffee shot, 1/3 steamed milk, 1/3 frothed milk – topped with chocolate powder'
            },
            {
                'name': 'Espresso',
                'description': '1 shot of coffee (30ml)'
            },
            {
                'name': 'Piccolo latte',
                'description': '1 shot of coffee, a dash of steamed milk'
            },
            {
                'name': 'Vienna',
                'description': ' 2 shots of coffee – topped with whipped cream'
            },
            {
                'name': 'Mocha',
                'description': '1/3 coffee shot, 2/3 steamed milk (lightly frothed), heaped scoop/pump of desired powder or syrup (typically chocolate) – topped with chocolate powder'
            },
            {
                'name': 'Affogato',
                'description': '1 coffee shot, heaped scoop of ice cream – occasionally topped with a special liqueur'
            },
            {
                'name': 'Flat white',
                'description': '1/3 coffee shot, 2/3 steamed milk (no froth)'
            },
            {
                'name': 'Long back',
                'description': '2/3 hot water then 1/3 coffee shot'
            },
            {
                'name': 'Americano',
                'description': '1/3 coffee shot then 2/3 hot water'
            },
            {
                'name': 'Macchiato',
                'description': '1 coffee shot, a dash of frothed milk'
            },
            {
                'name': 'Ristretto',
                'description': '1/2 ristretto coffee shot'
            },


        ]
    }

    res.json(coffee);
    totalRequest++;
    console.log(`data sent! ${totalRequest}`);

})

app.listen(PORT, () => {
    console.log(`Server is running`);
})