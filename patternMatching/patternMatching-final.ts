import { match, P } from 'ts-pattern';

import {
    ClothingItem,
    blueShirt,
    skinnyJeans,
    tShirt,
} from './clothes'

const processClothes = (item: ClothingItem) => {
    match(item)
        .with(
            { fits: false, sentimental: false, age: P.when(a => a >=5) },
            (item:ClothingItem) => console.log(`${item.name}: Give to charity`))
        .with(
            { fits: false, sentimental: false, age: P.when(a => a <= 4) },
            (item:ClothingItem) => console.log(`${item.name}: Keep I might fit into it at some point`))
        .with(
            { fits: false, sentimental: true },
            (item:ClothingItem) => console.log(`${item.name}: Keep, it means something to me`))
        .with(
            { fits: true },
            (item:ClothingItem) => console.log(`${item.name}: Keep, it fits me`))
        .otherwise(item => console.log(item));
}

console.log('Pattern Matching');

processClothes(blueShirt);
processClothes(skinnyJeans);
processClothes(tShirt);

