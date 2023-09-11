require('../src/db/mongoose')
const Task = require('../src/models/task');

// Task.findByIdAndDelete('64d1ca08df25b32ce068be66',{completed:false}).then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:true}).then((result)=>{
//         console.log(result);
//     }).catch((err)=>{
//     console.log(err); 
//     });
// })

const deleteTaskAndCount = async (id,completed) =>{
     const task = await Task.findByIdAndDelete(id)
     const count = await Task.countDocuments({completed})
     return count
}

deleteTaskAndCount('64d1ca08df25b32ce068be66',false).then((count)=>{
    console.log(count)
}).catch((err) =>{
    console.log(err)
})