const  express = require('express');
const app = express();
const port = process.env.PORT || 3000
 require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const options = require('./swagger')
const specs = swaggerJsDoc(options)

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))
app.listen(port,()=>{
    console.log('server is up on port: ' + port)  
})

const jwt = require('jsonwebtoken');
const myFunction = async () =>{
    const token = jwt.sign({_id: 'abc123'},'thisismynewcourse')
    console.log(token)

   const data =  jwt.verify(token,'thisismynewcourse')
   console.log(data)
}
myFunction()