// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// yr3
// for (const [name, rating] of entries) {
// yr2
//   const [name, rating] = entry;

// yr1
//   const name = entry[0];
//   const rating = entry[1];

//   console.log(name, rating);
// }

// const { name, tag, location, ...qwe } = profile;

// console.log(nam, tag, location);
// console.log(qwe);

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// console.log(numbers);

// const temps = [18, 14, 12, 1, 17, 29, 24];

// console.log(Math.max(...temps));

// console.log(temps);

// Math.max([18, 14, 12, 1, 17, 29, 24]);

// const a = [{ x: 1 }, { b: 2 }, { c: 3 }];

// const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);

// const lestWeekTemps = [1, 2, 3];
// const curentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lestWeekTemps, ...nextWeekTemps];

// console.log(allTemps);

//const allTemps = [];
// console.log(allTemps);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   name: "Mango",
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };

// console.log(c);

// const defaultSetings = {
//   thame: "light",
//   showNotification: true,
//   hidiSidebar: false,
// };

// const userSettings = {
//   showNotification: false,
//   hidiSidebar: true,
// };

// const finaliSettings = {
//   ...defaultSetings,
//   ...userSettings,
// };

// console.log(finaliSettings);

// const playlist = {
//   name: "моц супер пейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
// };

// const { name, rating, tracks } = playlist;

// console.log(playlist.name, playlist.rating, playlist.tracks);

// console.log(name);
// console.log(rating);
// console.log(tracks);

// const books = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const users = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']
