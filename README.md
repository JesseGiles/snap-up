# Snap-Up

Combining inspirations from the popular board game _Smash Up_, and the mobile game _Marvel Snap_, **_Snap-Up_** is a **React**-based, two-player, online digital card battle game with a Multiverse theme. Whew.

Players are able to generate a **'play' deck** of cards to use (for a given match) by selecting from 2 of our pre-existing themed decks; the **'play' deck** will be a combination of cards from the 2 selected themed decks, shuffled randomly. This mix-n-match deck approach provides replayability and allows for varied strategy without needing to implement an entire card-by-card deck building approach, which is outside of the scope for this project.

Each card depicts a character matching the theme of the deck they came from, with an **energy cost**⚡, **power level**💪 , and **special ability**✨(if the card has one) listed, along with some flavor text. Once both players have created a **'play' deck** to use, the game begins. Players are presented with a top-down view of the game-area, with 3 lanes they are able to play their cards onto (left, middle, right), each lane represented by a **location**🏔️ card. **Locations** are randomized each game, and every deck has a signature **location** associated with it - if you play a card onto its matching **location**, the card will receive a bonus +1 power.

Matches last a total of 6 turns. At the start of each match, players begin with a hand of 3 drawn cards. At the start of each turn, players will draw an additional card, and can place one or more cards face-down onto a **location(s)** of their choice. The amount of cards they can play is determined by the player's **energy level** for that turn (blue icon to the left of your hand), and the **energy cost** of their available cards (number in blue in the top right corner of the cards). Energy begins at 1 for turn 1, and increases by 1 for each subsequent turn. Each player's **power level** for a **location** is based on the combined total of any cards they have played there (each card's individual power can be seen at the bottom of the card).

The concept of the game is to try and "win" at least 2 of the lanes by having a higher total **power level** than your opponent in those lanes.

This app was built as the final project during the **_Lighthouse Labs Web Development Bootcamp_**. The front-end was built entirely with React, with additional libraries **React-Router-Dom**, **React-Transition-Group**, and **React-DND**, with **React-Bootstrap** and custom CSS for styling.

Our back-end stack is **Express** along with **Socket.IO** to allow for multiplayer capability and real-time connectivity. **_Snap-Up_** is deployed on Railway (https://snap-up-app.up.railway.app/), try it out for yourself or with a friend!

**_Get Snapping!_**

## Screenshots

!["Splash Screen"](https://github.com/JesseGiles/snap-up/blob/master/docs/splash-page.PNG?raw=true)

!["Home Page"](https://github.com/JesseGiles/snap-up/blob/master/docs/home-screen.PNG?raw=true)

!["Select Screen"](https://github.com/JesseGiles/snap-up/blob/master/docs/selection-screen.PNG?raw=true)

!["Game View"](https://github.com/JesseGiles/snap-up/blob/master/docs/game-view.PNG?raw=true)

!["Card Preview"](https://github.com/JesseGiles/snap-up/blob/master/docs/card-preview.png?raw=true)

!["Game Over"](https://github.com/JesseGiles/snap-up/blob/master/docs/game-over.PNG?raw=true)

## Setup

1. Clone your own copy of this repo using the `<> Code` button, then copy the SSH link for use in terminal on your dev machine.
2. Inside of the 'snap-up-app' folder in terminal, install the required dependencies with: `npm i`
3. Inside of the server folder in terminal, install the required dependencies with: `npm i`
4. Start the server with command `npm start` inside the server folder. Additionally, start the client inside of the snap-up-app folder with the same command `npm start`
5. A browser window should now open with the app running inside; you can either copy the link into another browser tab to play locally, or send a friend the link below to play against them (just make sure you both choose the same room # to connect!):
   https://snap-up-app.up.railway.app/

### Dependencies

bootstrap: ^5.2.3,
react: ^18.2.0,
react-bootstrap: ^2.7.1,
react-dnd: ^16.0.1,
react-dnd-html5-backend: ^16.0.1,
react-dom: ^18.2.0,
react-router-dom: ^6.8.1,
react-scripts: 5.0.1,
react-transition-group: ^4.4.5,
socket.io-client: ^4.6.0
