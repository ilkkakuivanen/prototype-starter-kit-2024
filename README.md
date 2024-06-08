# prototype-starter-kit-2024

## The purpose

An easy-to-use starting point for web-based prototyping projects. It is flexible and fast enough for simple cases while being robust enough to support further development.

- No JS bundler for the backend
- Minimal dependencies, with balanced tradeoffs
- Easy to read, modify, and clean up as needed
- Includes simple examples
- Uses ESM over CommonJS

## Main features

- [x] NodeJS (Typescript) backend
- [x] Routes with simple placeholder auth middleware
- [x] SQLite (better-sqlite3)
- [ ] Socket.io
- [ ] Angular frontend
- [ ] Threejs setup
- [ ] Vanilla CSS

## Get started

### Pre-requisites

- Latest Node JS LTS installed (this guide uses v20.14.0) (tip: use nvm)

###

### Install and run backend

`npm install`
`npm run dev`

## Endpoints

### Testing with curl

**Get token**

```bash
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"username":"user","password":"pass"}'
```

**Store token to variable**

```bash
TOKEN=$(curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"username":"user","password":"pass"}' | sed -n 's/.*"token":"\([^"]*\)".*/\1/p')
echo "Extracted Token: $TOKEN"
```

**POST new user (with authorization header)**

```bash
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $TOKEN" \
     -d '{"name": "John Doe", "email": "john.doe@example.com"}'
```

**POST new user**

```bash
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john.doe@example.com"}'
```

**GET users (with authorization header)**

```bash
curl -X GET http://localhost:3000/api/users -H "Authorization: Bearer $TOKEN"
```

**GET users**

```bash
curl -X GET http://localhost:3000/api/users
```

**DELETE users (with authorization header)**

```bash
curl -X DELETE http://localhost:3000/api/users -H "Authorization: Bearer $TOKEN"
```

**DELETE users**

```bash
curl -X DELETE http://localhost:3000/api/users
```

## Tests

Uses Node's built-in test runner: https://nodejs.org/api/test.html

`npm run test`
