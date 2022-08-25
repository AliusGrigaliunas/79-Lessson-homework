import App from './components/app';
import Table from './components/table';

const app = new App('#root');
app.initialize();

const test = new Table({
    title: 'Visos mašinos pardavimui',
    columns: ['Pirmas', 'Antras', 'Trečias', 'Ketvirtas', 'penktas'],
    rowsData: [
        ['1', 'Bananai', '0.89', 'Skanūs', 'Vaisiai, Maistas'],
        ['2', 'Obuoliai', '1.89', 'Skanūs', 'Vaisiai, Maistas'],
        ['3', 'Mandarinai', '3.89', 'Skanūs', 'Vaisiai, Maistas'],
        ['4', 'Kėglis', '99.89', 'Skanūs', 'Pramogos'],
        ['5', 'Vanduo', '0.69', 'Skanūs', 'Gėrimai'],
    ],
});

console.log(test.htmlElement);
