import {
    ClothingItem,
    blueShirt,
    skinnyJeans,
    tShirt,
} from './clothes'

const processClothes = (item: ClothingItem) => {
    switch(true as any) {
        case (!item.fits && !item.sentimental && item.age >= 5):
            console.log(`${item.name}: Give to charity`);
            break;
        case (!item.fits && !item.sentimental && item.age <= 4):
            console.log(`${item.name}: Keep I might fit into it at some point`);
            break;
        case (!item.fits && item.sentimental):
            console.log(`${item.name}: Keep, it means something to me`);
            break;
        case (item.fits):
            console.log(`${item.name}: Keep, it fits me`);
            break;
    }
}

console.log('Switch Statement');

processClothes(blueShirt);
processClothes(skinnyJeans);
processClothes(tShirt);