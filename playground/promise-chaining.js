require('../src/db/mongoose')
const User = require('../src/models/user');

 //64d2e7817909853ad8957ce1
// User.findByIdAndUpdate('64d2e7817909853ad8957ce1',{age:30}).then((user)=>{
//     console.log(user); 
//     return User.countDocuments({age:30 })
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err); 
// });


const updateAgeAndCount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id,{age})  
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('64d2e7817909853ad8957ce1',23).then((count)=>{
    console.log(count)
}).catch((err)=>{
     console.log(err)
})