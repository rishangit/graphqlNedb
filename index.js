const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');



const app = express();


app.use(bodyParser.json());



const testSchema1 =
`type User {
    id: String
    name: String
}`

const testSchema2 =
`type Pages {
    world: String
}`

// const resultSchema = mergeStrings([testSchema1, testSchema2])


// console.log(resultSchema)



var root = {
    user: ({id}) => {
      return {};
    }
  };


app.use('/graphql', graphqlHttp({
    schema: testSchema1,
    rootValue: root,
    graphiql: true
}))


app.listen(4000, () => {
    console.log('server run on port 3000')
});
