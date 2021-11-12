# InterMention - Change How You Think!

InterMention is a an application that utilizes Psychology's Repetition and Reminding technique (Cognitive Restructuring) to Reinforce and Redirect the user's thought process by having positive affirmations available at their fingertips. Users can add quotes and affirmations to their table, remove quotes, and even text them to themselves using SMS. In addition, InterMention will display a Quote of the Day from the Affirmations API.

## Upcoming Additions:

Sending users their favorite Mention on a schedule so that they are reminded of something positive throughout their day, which can slowly over time counteract negative thought patterns.

<h3><a href='https://intermentionz.herokuapp.com/' target='_blank'>View InterMention on Heroku</a><h3>

<img src="./serene.png">

## Running Locally

1. Install & run <a href='https://www.docker.com/'>Docker</a>
2. Fork & clone this repo
3. Create a `.env` file in the `app/` directory & add these lines:

```
REACT_APP_AUTH0_DOMAIN=<copy/paste your api key here>
REACT_APP_AUTH0_CLIENT_ID=<copy/paste your api key here>
REACT_APP_AUTH0_AUDIENCE=<copy/paste your api key here>
REACT_APP_TWILIO_ACCOUNT_SID=<copy/paste your api key here>
REACT_APP_TWILIO_AUTH_TOKEN=<copy/paste your api key here>
```

4. In your CLI, from the root directory, run `npm install`
5. Navigate into /app with `cd app` & run `npm install`
6. Navigate back to the root directory & run `npm run db:init`
7. Also from the root directory, run `npm start`
8. InterMention will be running on <a href='https://www.localhost:3000'>localhost:3000</a>

<!-- ## Receiving A Mention as SMS Text

If you would like to receive a Mention via text:

1. Add a new Mention to your table
2. Enter your phone number (click 'Enter Phone')
3. Click 'Get SMS' button - _et voila_! -->

## Technologies

InterMention utilizes the MVC Model, View, Control design pattern using 3 main technologies:
Model = PostgreSQL, View = React.js, Control = Express.js

- PostgreSQL
- React.js
- Express.js
- Raw CSS ('cuz I :heart: CSS)
- Auth0 API
- Twilio SMS API
- They Said So API

## MVP (Minimal Viable Product)

- The user can login using Auth0 (additions: Google Login Feature)
- The user can add affirmations to their list and view them at any given time
- User can delete affirmations from table
- Consume a Quote of the Day API

## Stretch Goals

- Send their favorite Mention/Affirmation to the user via text (Twilio SMS API) - ACHIEVED!
  \*\*Although SMS is implemented and Zelma upgraded to a premium account, texts to unverified numbers is still not working, so only able to send texts to Zelma's number as of 11/12/21
- Send the user's SMS on a schedule (added as an OpenSource Issue)

## Mockups & WireFrames

Landing Page
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/landing.png" width="300px">

Dashboard
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/dashboard.png" width="300px">

### :dizzy: See Zelma's Other Projects <a href='https://portfolio-zvs.herokuapp.com/'>Here!</a>

## Contributors:

<table>
  <tr>
    <td align="center"><a href="https://github.com/gsong"><img src="https://avatars.githubusercontent.com/u/607420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Song</b></sub></br></a></td>
    <td align="center"><a href="https://github.com/brenthaas"><img src="https://avatars.githubusercontent.com/u/1712361?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brent Haas</b></sub></br></a></td>
    <td align="center"><a href="https://github.com/margaretgeary"><img src="https://avatars.githubusercontent.com/u/68314320?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Margaret Geary</b></sub></br></a></td>
    <td align="center"><a href="https://github.com/nbrengle"><img src="https://avatars.githubusercontent.com/u/3836628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nate Mooney</b></sub></br></a></td>
    <td align="center"><a href="https://github.com/tabbykatz"><img src="https://avatars.githubusercontent.com/u/55110763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabitha O'Melay</b></br></sub></td>

  </tr>
<table>
