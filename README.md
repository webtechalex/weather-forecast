#Weather Forecast
A weather forecast application using the [openweathermap API](https://openweathermap.org/)

###Installation
Node 8.12.0 and NPM 6.4.1 are recommended to run this app.

Clone and run:
```
npm install
```

You will need to create a `.env` file at the project root to store your API key. Your `.env` file should contain your API key in the format:
```
API_KEY=myAPIkey
```

See the openweathermap documentation via the above link for information on how to obtain an API key.

To run the project unit tests:
```
npm run test:all
```
If you prefer, you can run the unit tests to watch for uncommitted file changes:
```
npm run test
```
To run the project in a browser:
```
npm run dev
```