// Data taken from Recipe Puppy - http://www.recipepuppy.com/api/?q=beef&p=1

var apiResult = {
  title: 'Recipe Puppy',
  version: '0.1',
  href: 'http://www.recipepuppy.com/',
  results:
   [ { title: 'Crostini with Beef Tartare and White Truffle Oil',
       href: 'http://www.epicurious.com/recipes/food/views/Crostini-with-Beef-Tartare-and-White-Truffle-Oil-241047',
       ingredients: 'anchovy fillets, beef, dijon mustard, capers, eggs, garlic, cracked black pepper, olive oil, orange zest, shallot, truffle oil, worcestershire sauce',
       thumbnail: '' },
     { title: 'Beef  Slices With Mushroom Sour Cream Paprika Sauce',
       href: 'http://www.recipezaar.com/Beef-Slices-With-Mushroom-Sour-Cream-Paprika-Sauce-145636',
       ingredients: 'beef broth, butter, mushroom, tomato, flour, garlic, green pepper, onions, paprika, salt, sirloin steak, sour cream, tomato paste, white wine, worcestershire sauce',
       thumbnail: '' },
     { title: 'Favorite Ground Beef',
       href: 'http://www.recipezaar.com/Favorite-Ground-Beef-332958',
       ingredients: 'beef bouillon granules, black pepper, ground beef, water, olive oil, red onions',
       thumbnail: '' },
     { title: 'Delicious Scalloped Potato and Ground Beef Casserole',
       href: 'http://www.recipezaar.com/Delicious-Scalloped-Potato-and-Ground-Beef-Casserole-215414',
       ingredients: 'red pepper flakes, black pepper, garlic, green pepper, ground beef, onions, potato, salt',
       thumbnail: 'http://img.recipepuppy.com/40358.jpg' },
     { title: 'Steamed Beef With Rice-flour Noodles Recipe',
       href: 'http://www.grouprecipes.com/41300/steamed-beef-with-rice-flour-noodles.html',
       ingredients: 'oyster sauce, flour, beef, sweet potato, rice, wheat',
       thumbnail: '' },
     { title: 'Curry Beef Short Ribs With Horseradish Sauce',
       href: 'http://www.recipezaar.com/Curry-Beef-Short-Ribs-With-Horseradish-Sauce-187310',
       ingredients: 'curry powder, flour, ginger, horseradish, molasses, olive oil, onions, black pepper, salt, beef, sour cream, water, worcestershire sauce',
       thumbnail: 'http://img.recipepuppy.com/344678.jpg' },
     { title: 'Creamed Ground Beef Sos',
       href: 'http://www.recipezaar.com/Creamed-Ground-Beef-Sos-28667',
       ingredients: 'beef bouillon granules, cayenne, flour, black pepper, garlic powder, ground beef, milk, onions, onion powder, salt, worcestershire sauce',
       thumbnail: 'http://img.recipepuppy.com/35208.jpg' },
     { title: 'Award Winning Beef Stew',
       href: 'http://www.recipezaar.com/Award-Winning-Beef-Stew-68074',
       ingredients: 'flour, bacon, beef, beef broth, beer, cabbage, caraway seed, carrot, celery, tomato, bread crumbs, garlic, peas, lamb, parsnip, pork, potato, red pepper, red pepper flakes, red wine vinegar, salt, paprika, red onions, butter, water',
       thumbnail: '' },
     { title: 'Beef Braised in Barolo',
       href: 'http://www.epicurious.com/recipes/food/views/Beef-Braised-in-Barolo-240206',
       ingredients: 'beef broth, carrot, celery, black pepper, black pepper, rosemary, sea salt, olive oil, nutmeg, onions, garlic, sage, beef',
       thumbnail: 'http://img.recipepuppy.com/99863.jpg' },
     { title: 'Beef and Mushrooms in Sour Cream Sauce',
       href: 'http://www.recipezaar.com/Beef-and-Mushrooms-in-Sour-Cream-Sauce-149314',
       ingredients: 'beef broth, beef, butter, mushroom, dijon mustard, dill weed, egg noodles, flour, garlic, vegetable oil, onions, parmesan cheese, parmesan cheese, salt, sour cream',
       thumbnail: '' }
   ]
 }


//Write a function that will return all recipes with thumbnails
function recipesWithThumbnails(data) {
  var output = [];
  // console.log('step 1');
  for (var i = 0; i < data.results.length; i++) {
    var results = data.results[i];
    // console.log('step 2');

    if (results.thumbnail.indexOf('') === null) {
      output.push(results);
      // console.log('step 3');
    }
  }
  return output;
  // console.log('step 4');
}
var result = recipesWithThumbnails(apiResult);
// console.log(result);
//-------------------------

//Write a function that will return all recipes that include butter

function recipeWithButter(data) {
  var output = [];
  for (var i =0; i < data.results.length; i++) {
    var results = data.results[i];

    if (results.ingredients.indexOf('butter') != -1) {
      output.push(results);

    }
  }
  return output;
}
var result = recipeWithButter(apiResult);
// console.log(result);

//Write a function that will return all recipes that include mushrooms

function recipeWithMushrooms(data) {
  var output = [];
  for (var i = 0; i < data.results.length; i++) {
    var results = data.results[i];

    if (results.ingredients.indexOf('mushroom') != -1) {
      output.push(results);
    }
  }
  return output
}
var result = recipeWithMushrooms(apiResult);
// console.log(result);

//Once those two are complete, refactor so that they can both use the same function
function recipeSpecificIngredient(data, ingredients) {
  var output = [];
  for(var i = 0; i < data.results.length; i++) {
    var results = data.results[i];

    if (results.ingredients.indexOf(ingredients) != -1) {
      output.push(results);
    }
  }
  return output;
}
// var result = recipeSpecificIngredient(apiResult, 'butter');
var result = recipeSpecificIngredient(apiResult, 'mushroom');
// console.log(result);

//-------------------------

//Write a function that will return all recipes with more than 10 ingredients

function recipeWithTenOrMore(data) {
  var output = [];

  for(var i = 0; i <data.results.length; i++) {
    var results = data.results[i];
    var str = results.ingredients.split(", ");

    if (str.length > 10) {
      output.push(results);
    }
  }
  return output;
}
var result = recipeWithTenOrMore(apiResult);
// console.log(result);

// split function

//Write a function that will return all recipes with more than 13 ingredients

function recipeWithThirteenOrMore(data) {
  var output = [];

  for(var i =0; i < data.results.length; i++) {
    var results = data.results[i];
    var str = results.ingredients.split(", ");

    if (str.length > 13) {
      output.push(results);
    }
  }
  return output;
}
var result = recipeWithThirteenOrMore(apiResult);
// console.log(result);

//Once those two are complete, refactor so that they can both use the same function

function recipeMoreThan(data, numberIngredients) {
  var output = [];

  for(var i= 0; i <data.results.length; i++) {
    var results = data.results[i];
    var str = results.ingredients.split(", ");

    if (str.length > numberIngredients) {
      output.push(results);
    }
  }
  return output;
}
// var result = recipeMoreThan(apiResult, 10);
var result = recipeMoreThan(apiResult, 13);


console.log(result);
