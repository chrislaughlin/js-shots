import {
    ClothingItem,
    blueShirt,
    skinnyJeans,
    tShirt,
} from './clothes'

const processClothes = (item: ClothingItem) => {
    if (!item.fits && !item.sentimental && item.age >= 5) {
        console.log(`${item.name}: Give to charity`);
    }

    if (!item.fits && !item.sentimental && item.age <= 4) {
        console.log(`${item.name}: Keep I might fit into it at some point`);
    }

    if (!item.fits && item.sentimental) {
        console.log(`${item.name}: Keep, it means something to me`);
    }

    if (item.fits) {
        console.log(`${item.name}: Keep, it fits me`);
    }
}

console.log('If Statements');

processClothes(blueShirt);
processClothes(skinnyJeans);
processClothes(tShirt);