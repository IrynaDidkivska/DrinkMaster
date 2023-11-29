export const ingredientsCheckReducer = arr => {
  return arr.reduce((acc, ingredient) => {
    if (!ingredient.title || !ingredient.measure) {
      return acc;
    }
    const { title, ingredientId, measure } = ingredient;
    return [...acc, { title, ingredientId, measure: measure + ' cl' }];
  }, []);
};

export const validateDrink = obj => {
  for (let key in obj) {
    if (!obj[key]) {
      return true;
    }
  }
  return false;
};

export const requestNormalize = obj => {
  const request = new FormData();

  for (let key of Object.keys(obj)) {
    if (key === 'ingredients') {
      obj[key].forEach((ingredient, index) => {
        request.append(`ingredients[${index}][title]`, ingredient.title);
        request.append(
          `ingredients[${index}][ingredientId]`,
          ingredient.ingredientId
        );
        request.append(`ingredients[${index}][measure]`, ingredient.measure);
      });
    } else {
      request.append(key, obj[key]);
    }
  }
  //   request.append('drinkPhoto', obj.drinkPhoto);
  //   request.append('drink', obj.drink);
  //   request.append('description', obj.description);
  //   request.append('category', obj.category);
  //   request.append('glass', obj.glass);
  //   request.append('alcoholic', obj.alcoholic);
  //   obj.ingredients.forEach((ingredient, index) => {
  //     request.append(`ingredients[${index}][title]`, ingredient.title);
  //     request.append(
  //       `ingredients[${index}][ingredientId]`,
  //       ingredient.ingredientId
  //     );
  //     request.append(`ingredients[${index}][measure]`, ingredient.measure);
  //   });
  // request.append('instructions', obj.instructions);

  return request;
};
