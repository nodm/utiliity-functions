export default function getRandomElement(list) {
  const randomPosition = Math.round(Math.random() * list.length);

  return list[randomPosition];
}
