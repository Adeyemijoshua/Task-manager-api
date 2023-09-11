const options = {
    definition:{
        openapi:"3.0.0",

        info:{
            title:'Task-manager API',
            version:'1.0.0',
            description:'A simple Express task-manager API'
        },
        servers:[
            {
                url: 'http://localhost:3000',
                description:'dvelopment server'
            }
        ],
         tags: [
            {
            name: "User CRUD operations", // name of a tag
            },
        ],
        components:{
            schemas:{
                user:{
                    type:'object',
                    require:['name','password','email','age'],
                    properties:{
                        name:{
                            type:'string',
                            description:'name of user'
                        },
                        password:{
                            type:'string',
                            description:'A string which allow a user to gain access'
                        },
                        email:{
                            type:'string',
                            description:'',
                            example:'adeyemi1234@gmail.com'
                        },
                        age:{
                            type:'integer',
                            description:'Age of the user in Years '
                        }
                    }

                }
            },
            responses:{
                400:{
                    description:'Missing API Key include it in the authorization server',
                    contents:'application/json'
                },
                401:{
                    description:'Unauthorized Key - incorrect API key or incorrect format',
                    contents:'application/json'
                },
                404:{
                    description:'Not Found',
                    contents:'application/json'
                },
            
            },
        }
    },
    apis:["./routers/*.js"],
}

module.exports = options
