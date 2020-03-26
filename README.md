## Installation

`npm i @sapioweb/authentication`

index.ts
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
