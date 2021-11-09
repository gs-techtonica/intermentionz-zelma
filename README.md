# InterMention

## Capstone Project for Techtonica

InterMention is a an application that utilizes the Cognitive Restructuring technique to Reinforce, Remind, and Redirect the user's thought process by having positive affirmations available at their fingertips. Users can add quotes and affirmations to their table, and remove quotes. In addition, InterMention will display a Quote of the Day from the Affirmations API.

<h3>View on Heroku: <a href='https://intermentionz.herokuapp.com/'>InterMention</a><h3>

## Technologies

- React.js
- PostgreSQL
- Express.js
- Raw CSS ('cuz I :heart: CSS)

## Running Locally

1. Install & run <a href='https://www.docker.com/'>Docker</a>
2. Fork & clone this repo
3. Create a `.env` file in the `app/` directory & add these lines:

```
REACT_APP_TITLE=Super Useful Title
REACT_APP_SUBTITLE=Super Useful Subtitle
REACT_APP_AUTH0_DOMAIN=dev-p-oh8rv8.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=nuL0OYwWbzT6s6jlbkfVtHrqGdX2E050
REACT_APP_AUTH0_AUDIENCE=http://api.tt-express.example
REACT_APP_TWILIO_ACCOUNT_SID=ACabe64e7537e1279539d654c48fae1774
REACT_APP_TWILIO_AUTH_TOKEN=533a9e3f87ebb7f53ee129739f4faf56
```

4. In your CLI, from the root directory, run `npm install`
5. Navigate into /app with `cd app` & run `npm install`
6. Navigate back to the root directory & run `npm run db:init`
7. Also from the root directory, run `npm start`
8. InterMention will be running on `localhost:3000`

## MVP (Minimal Viable Product)

- The user can add affirmations to their list and view them at any given time
- Applications uses an Affirmations API to consume a new affirmation/quote every call, which I am calling Quote of the Day
- User can also add Quote of the Day to their Affirmations List

send that quote to the user via push notifications (Twilio SMS API)

## Mockup/Wireframe

Landing Page
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/landing.png" width="300px">

Dream Dashboard
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/dashboard.png" width="300px">

## Addons

Use Twilio SMS Push Notifications to send a default quote to the user's phone number
