// CRUD create read update delete 
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const options = {
  useNewUrlParser: true,
};

MongoClient.connect(connectionURL,options,(error,client)=>{
    if(error){
    return console.log('unable to connect to database!');
    
    }
    console.log('connecting to database...');
     const db = client.db(databaseName)
    // db.collection('users').findOne({name:'joshua'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age:23}).toArray((error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)   
    // })
    // db.collection('users').find({age:23}).count((error, count)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(count)   
    // })
    // db.collection('task').findOne({_id:new ObjectID('64c9a656f7278043d8d20de0')},(error,task)=>{
    //      if(error){
    //          return console.log('Unable to fetch')
    //      }
    //      console.log(task)
    // })
    // db.collection('task').find({completed:false}).toArray((error,task)=>{
    //     if(error){
    //          return console.log('Unable to fetch')
    //      }
    //      console.log(task)
    // })

    // db.collection('users').updateOne({
    //   _id:new ObjectID("64c9a186fd4de740b47cf4fe")
    // },{
    //   $inc:{
    //     age:1
    //   }
    // }).then((result)=>{
    //   console.log(result)
    // }).catch(err=>{
    //   console.log(err)
    // })

    // db.collection('task').updateMany({
    //    completed:false
    // },{
    //   $set:{
    //     completed:true
    //   }
    // }).then((result)=>{
    //   console.log(result.modifiedCount)
    // }).catch((err)=>{
    //   console.log(err)
    // })

    // db.collection('users').deleteMany({
    //   age: 23
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((err)=>{
    //   console.log(err)
    // });

    // db.collection('task').deleteOne({
    //   description:"Learn and understand javaScript"
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((err)=>{
    //   console.log(err)
    // });

  });


 

 


















// const { MongoClient } = require('mongodb');
// const databaseName = 'task-manager';
// const url =  'mongodb://127.0.0.1:27017'; // Replace this with your actual MongoDB server URL
// const client = new MongoClient(url);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to the database');
//      const db = client.db(databaseName)
//     db.collection('users').insertOne({
//         name:'josh',
//         age: 36
//     })
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//   }
// }

// connectToDatabase();
