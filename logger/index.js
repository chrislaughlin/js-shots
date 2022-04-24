import chalk from 'chalk';

const COLORS = [
    chalk.hex('#fe6c11'),
    chalk.hex('#ff3864'),
    chalk.hex('#a446f0'),
    chalk.hex('#f6009d'),
    chalk.hex('#2be2e6'),
];

const log = (...args) => {
    const color = Math.floor(Math.random() * COLORS.length);
    const processedArgs = args.map(arg => {
        if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 4);
        }
        return arg; 
    })
    console.log(COLORS[color](...processedArgs))
}

export default log;