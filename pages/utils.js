// export function getImageUrl(person, size = 'm') {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       size +
//       '.jpg'
//     );
//   }

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}