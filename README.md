## Installation

`npm i @sapioweb/authentication --save`

Basic authentication for a very simple use of logging in and registering users with their email and password. Currently there is no expansion of schemas but there are a few required validation checks baked in which are listed below.  

validateEmail()
```text
Must be an email format
```
uniqueEmail()
```text
Email will be required to be unique
```
validatePassword()
 ```
Must contain at least 1 lowercase alphabetical character.
Must contain at least 1 uppercase alphabetical character.
Must contain at least 1 numeric character.
Must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict.
Must be eight characters or longer.
```

### Setup
Wherever you may be including you environment variables, you will need to add `JWT_SECRET` with any random value you prefer.

First things first, be sure you have a connection to mongoDB already established as well as body parser to handle incoming json payloads. All other configuations you may think of are to your liking.
```typescript
config();

app.use(json());

connect(<string>process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected'))
  .catch(() => console.log('Error connecting DB'));

app.use('', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }

  return res.json({
    success: false,
    message: err.message,
    payload: req.body
  })
});

app.listen(3000, () => console.log('http://localhost:3000'));

```

You may name your routes however you may please, however be mindful of the usage of the two authentication methods for logging in and registering.
```typescript
const router = Router();

// Mount routes
router.post('/login', login);
router.post('/register', register);

export { router }
```

Following objcet displays the only allowed keys in order for requests to work.
```typescript
interface IUser {
  email: string;
  password: string;
}
```
