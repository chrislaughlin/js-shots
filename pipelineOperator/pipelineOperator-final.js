const double = num => num * 2
const add9 = num => num + 9
const subtract3 = num => num - 3
const divideBy2 = num => num / 2;
const subtractOriginal = (original, num) => num - original;

const ORIGINAL = 5
const result = subtractOriginal(
    ORIGINAL, 
    divideBy2(
        subtract3(
            add9(
                double(ORIGINAL)
            )
        )
    )
)

const resultWithPipe = ORIGINAL 
    |> double(#) 
    |> add9(#) 
    |> subtract3(#) 
    |> divideBy2(#) 
    |> subtractOriginal(ORIGINAL, #)
    
console.log(resultWithPipe)