type ClothingItem = { 
    name: String,
    age: Number, 
    fits: Boolean, 
    sentimental: Boolean 
}

const blueShirt: ClothingItem = {
    name: 'Blue Shirt',
    age: 5,
    fits: false,
    sentimental: true
};

const skinnyJeans: ClothingItem = {
    name: 'Skinny Jeans',
    age: 10,
    fits: false,
    sentimental: false
};

const tShirt: ClothingItem = {
    name: 'T Shirt',
    age: 1,
    fits: false,
    sentimental: false
};

export {
    ClothingItem,
    blueShirt,
    skinnyJeans,
    tShirt,
};

