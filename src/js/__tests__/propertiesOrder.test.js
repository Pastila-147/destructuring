import propertiesOrder from "../app";

test("testing propertiesOrder function", () => {
    const obj = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40
    };
    const result = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    expect(propertiesOrder(obj, ['name', 'level'])).toEqual(result);
})

test("testing propertiesOrder function", () => {
  const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
  };
  const result = [
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
  ];
  expect(propertiesOrder(obj, ['name', 'level', 'nonexsist'])).toEqual(result);
})

test("testing propertiesOrder function", () => {
  const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
  };
  const result = [
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10},
      {key: "level", value: 2},
      {key: "name", value: "мечник"}
  ];
  expect(propertiesOrder(obj, [])).toEqual(result);
})
