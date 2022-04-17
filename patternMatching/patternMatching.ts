import { match, P } from 'ts-pattern';

import {
    ClothingItem,
    blueShirt,
    skinnyJeans,
    tShirt,
} from './clothes'

const processClothes = (item: ClothingItem) => {
    
}

console.log('Pattern Matching');

processClothes(blueShirt);
processClothes(skinnyJeans);
processClothes(tShirt);

