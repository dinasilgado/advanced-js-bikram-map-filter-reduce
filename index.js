//numero 1//
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    return numbers.map(num => Math.pow(num,num));
}
console.log(elevados(numbers));

//numero 2//
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = foodList.map(food => {
    if (food === "Pizza") {
        return "Como soy de Italia, amo comer Pizza";
    } else if (food === "Ramen") {
        return "Como soy de Japón, amo comer Ramen";
    } else if (food === "Paella") {
        return "Como soy de Valencia, amo comer Paella";
    } else{ 
        return "Aunque no como carne, el Entrecot es sabroso";
    }
});
console.log(result2);
// numero 3//
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
const result3 = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`;
});

console.log(result3);
// numero 4//
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(numero => {
  return numero % 2 != 0;
})
console.log(result4);
 // numero 5//
 const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];
  const result5 = foodList2
  .filter(food => food.isVeggie)
  .map(food =>{
    if (food.name === 'Tempeh'){
     return`Que rico ${food.name} me voy a comer!`;
   } else {
    return`Que rica ${food.name} me voy a comer!`;
  }
   })
   console.log(result5);



// numero 6//
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const result6 = inventory
.filter(Element=> Element.price > 300)
.map (Element => Element.name)
console.log(result6);

// numero7 //
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce( function(acc , actual){return acc * actual}
  ) 
  console.log(result7)

  // numero 8 //
  const sentenceElements = [
    'Me',
    'llamo',
     'Dina',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  const result8 = sentenceElements.reduce((acc, palabra) => acc +" "+ palabra).trim();
  console.log(result8)
  // numero 9//
  const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  const result9 =books
  .filter(function(book){
    return book.category === 'code'
  }
)
.reduce (function(suma, book ){
  return suma + book.price;

}, 0)
console.log(result9)

  