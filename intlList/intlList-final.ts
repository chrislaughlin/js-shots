declare namespace Intl {
    class ListFormat {
      constructor(lang:any, opts:any)
        public format: (items:any) => any;
    }
  }
  

const ITEMS: string[] = [
    'Wallet',
    'Watch',
    'Keys'
];

console.log('Simple Join')
console.log(ITEMS.join(', '));

const join_Items = (list:string[]):string  => {
    return list.reduce((prev, curr, index) => {
        if (index === 0) {
            return curr;
        }
        
        if (index === list.length-1) {
            return `${prev} and ${curr}`
        }

        return `${prev}, ${curr}`
    }, '')
}
console.log('Reduce Join')
console.log(join_Items(ITEMS));

const formatter = new Intl.ListFormat(
    'en', 
    { style: 'long', type: 'conjunction' }
);
console.log('Intl List')
console.log(formatter.format(ITEMS));
