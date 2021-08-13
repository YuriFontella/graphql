## REST

GET 
```bash
http get http://localhost:4000/api/users
```

POST
```bash
http post http://localhost:4000/api/users name="email" email="email@email.com" age=100
```

## GRAPHQL

```bash
http://localhost:4000/graphiql
```

QUERY
```bash
query {
  users {
    name
    email
    age
  }
}
```

MUTATION
```bash
mutation ($user: InputUser) {
  addUser(user: $user) {
    name
  }
}
```
```
{
  "user": {
    "name": "email",
    "email": "email@email.com",
    "age": 100
  }
}
```