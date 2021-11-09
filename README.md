# InterMention

## Capstone Project for Techtonica

InterMention is a an application that utilizes the Cognitive Restructuring technique to Reinforce, Remind, and Redirect the user's thought process by having positive affirmations available at their fingertips. Users can add quotes and affirmations to their table, and remove quotes. In addition, InterMention will display a Quote of the Day from the Affirmations API.

<h3>View on Heroku: <a href='https://intermentionz.herokuapp.com/'>InterMention</a><h3>

## Technologies

- React.js
- PostgreSQL
- Express.js
- Raw CSS ('cuz I :heart: CSS)
- Twilio SMS API
- Auth0 API

## Running Locally

1. Install & run <a href='https://www.docker.com/'>Docker</a>
2. Fork & clone this repo
3. Create a `.env` file in the `app/` directory & add these lines:

```

```

4. In your CLI, from the root directory, run `npm install`
5. Navigate into /app with `cd app` & run `npm install`
6. Navigate back to the root directory & run `npm run db:init`
7. Also from the root directory, run `npm start`
8. InterMention will be running on `localhost:3000`
9. If you would like to receive a Mention via text simply add a new Mention to your table, enter your phone number (click 'Enter Phone'), and click 'Get SMS' button

## MVP (Minimal Viable Product)

- The user can log in with their Google account
- The user can add affirmations to their list and view them at any given time
- Applications uses an Affirmations API to consume a Quote of the Day
- User can delete affirmations from table

## Stretch Goal

- Send their favorite Mention/Affirmation to the user via text (Twilio SMS API)

## Mockup/Wireframe

Landing Page
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/landing.png" width="300px">

Dream Dashboard
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/dashboard.png" width="300px">
