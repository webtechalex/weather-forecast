# Weather Forecast
A weather forecast application using the [openweathermap API](https://openweathermap.org/)

### Installation
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
and navigate to [http://localhost:8080/](http://localhost:8080/)

### Shortcuts
In the interests of delivery speed, I have not included much of the configuration I would expect in a commercial project. I would normally include a lint configuration, pre-commit tool and there would likely be a separate production configuration for webpack. I would also include unit tests in the containers and larger components.

In terms of the user experience, there should be some input validation in the text input and textarea fields to give the user more information when they have typed an invalid input. At the moment, the app just prevents the user from submitting an empty form field and there is no validation of the CSV.

There should be a server to handle uploading and parsing CSV file. I also wanted to use the `city.list.json` provided by the openweathermap website for looking up the city ids, providing a list of suggestions as the user types in the city field, resulting in less ambiguity and a better user experience. However, the JSON file is around 100000 lines long, so this is impractical to handle on the front end only. I wouldn't want to include a file of that size in the front end bundle.

There is no specific responsive design in the project. I have treated it purely as an assessment of my Javascript, React and Redux skills. Although the contents of the form will display in a sensible layout on mobile, their layout could be changed at min-width breakpoints to make better use of bigger screens. I also didn't come up with a way of displaying a two-dimensional structure (the forecast table) in a narrow window. On reflection I could have displayed the information in a list instead of a table on mobile and perhaps used a collapsible structure, such as an accoordion, to make it more viewable. As a Javascript developer, I am always happy to work to the brief of professional digital designers on these matters.