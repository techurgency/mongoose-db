const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "No name specified"]
  },
  rating: {
      type: Number,
      min: 1,
      max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Good"
});



const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const mango = new Fruit({
  name: "mango",
  score: 10,
  review: "Unbearable"
});

mango.save();

People.updateOne({name: "john"}, {favFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Success");
  }
});

// const people = new People ({
//   name: "Amy",
//   age: 31,
//   favFruit: pineapple
// });
//
// people.save();
// fruit.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "Great"
// });
//
// const apple = new Fruit({
//   name: "Apple",
//   score: 7,
//   review: "good"
// });

// Fruit.insertMany([apple], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });


// Fruit.deleteMany({ name: 'Apple', }, function(err) {
//     if (!err) {
//             console.log("success");
//     }
//     else {
//             console.log("error");
//     }
// });

// Fruit.updateOne({_id: "5f777144483c520b255e10cb"}, {name: "peach"}, function(err){
//   if(!err){
//     console.log("Success");
//   } else {
//     console.log("Fail");
//   }
// });

// Fruit.deleteOne({name: "peach"}, function(err){
//   if(!err){
//     console.log("Success");
//   } else {
//     console.log("Fail");
//   }
// });

// Fruit.find(function(err, fruits){
//   if (err) {
//     console.log(err);
//   } else {
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// })

// People.deleteMany({name: "john"}, function(err){
//   if(!err){
//     console.log("Success");
//   } else {
//     console.log(err);
//   }
// })

People.find(function(err, people){
  if (!err){
    mongoose.connection.close();
    people.forEach(function(people){
      console.log(people.name);
    });
  } else {
    console.log(err);
  }
});
