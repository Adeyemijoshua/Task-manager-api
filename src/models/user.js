const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{useNewUrlParser:true,useCreateIndex :true,useUnifiedTopology: true})

//defining User schema 
const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        trim:true
    },
    password:{
        type: 'string',
        trim:true,
        required: true,
        minLength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot include password ')
            }
        }
    },
    email:{
        unique: true,
        type:'String',
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    age:{
        type:'Number',
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
});

userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({ email})
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch =  await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('unable to login')
    }
    return user
}

//Hash plain text passwords before saving 
userSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
});

const User = mongoose.model('User',userSchema);

module.exports = User