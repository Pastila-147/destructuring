export default function getAttackType(character) {
  const { special } = character;

  special.map((item) => {
    const object = item;
    if (!Object.prototype.hasOwnProperty.call(object, 'description')) {
      object.description = 'Описание недоступно';
    }

    return object;
  });

  return special;
}