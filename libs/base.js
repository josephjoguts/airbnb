
let arr = new Array(16).fill(1).reduce((fib,_,i)=>{
    fib.push((i <= 1) ? i : fib[i-1] + fib[i-2])
    return fib
},[]).slice(1,16);


console.log(arr);
    const Fib ={
    even:arr.filter((value => {
         return value %2 ===1;
        })
    ),
    odd:arr.filter((value => {
            return value %2 ===0;
        })
    )

}

console.log(Fib)
const even_map = new Map( Fib.even.map( value => { return[value,-value] } ) )
console.log(even_map)
const odd_map = new Map( Fib.odd.map( value => { return[value,-value] } ) )
console.log(odd_map)
