# neat-api

**POST** `/api/v1/drinks/drink/new` _Add new drink_

```
  name: {
    type: String,
    required: [true, "Please enter a name."]
  },
  alternative: {
    type: Array
  },
  glass: {
    type: Number
  },
  instructions: {
    type: String,
    required: [true, "Please enter instructions."]
  },
  ingredients: {
    type: Array,
    required: [true, "Please enter the ingredients."]
  }
```

**GET** `/api/v1/drinks` _Find all drinks


**GET** `/api/v1/drinks/drink/:drinkId` _Find a specific drink_


**PUT** `/api/v1/drinks/drink/:drinkId` _Update a specific drink_


**DELETE** `/api/v1/drinks/drink/:drinkId` _Remove a specific drink_
