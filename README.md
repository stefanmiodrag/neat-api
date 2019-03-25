# node-api

[![CircleCI](https://circleci.com/gh/stefanmiodrag/node-api.svg?style=svg)](https://circleci.com/gh/stefanmiodrag/node-api)


**POST** `/api/v1/auth/signup` _Create new user_

```
name: {
  type: String,
  required: true
},
 
email: {
  type: String,
  unique: true,
  required: true

age: {
  type: Number,
  required: true
  min: 16
}
```

**GET** `/api/v1/users/user` _Find all users_


**GET** `/api/v1/users/user/:userId` _Find a specific user_


**PUT** `/api/v1/users/user/:userId` Update a specific user_


**DELETE** `/api/v1/users/user/:userId` Remove a specific user_
