## Installation

`npm i @sapioweb/authentication`

index.ts
```typescript
const app = express();

app.use(json()); // Include body parser

// Conntect DB 
connect('mongodb+srv://sapiobeasley:2wsxzaq1@cluster0-4ppdq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected'))
  .catch(() => console.log('Error connecting DB'));


app.use('', router);

app.listen(3000, () => console.log('http://localhost:3000'));
```

router.ts
```typescript
const router = Router();

// Mount routes
router.post('/login', login);
router.post('/register', register);

export { router }
```

Register and Login Object
```typescript
interface IUser {
  email: string;
  password: string;
}
```
