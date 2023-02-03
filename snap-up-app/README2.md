# Crackle-Pop

In the vein of _Marvel Snap_, **_Crackle-Pop_** is a **React**-based, two-player, online, digital card battle game. Whew.

Players are able to generate a **'play' deck** of cards to use (for a given match) by selecting from 2 of our pre-existing themed decks; the **'play' deck** will be a combination of cards from the 2 selected themed decks, shuffled randomly. This mix-n-match deck approach provides replayability and allows for varied strategy without needing to implement an entire card-by-card deck building approach, which is outside of the scope for this project.

Each card depicts a character matching the theme of the deck they came from, with an **energy cost**⚡, **power level**💪 , and **special ability**✨(if the card has one) listed, along with some flavor text. Once both players have created a **'play' deck** to use, the game begins. Players are presented with a top-down view of the game-area, with 3 lanes they are able to play their cards onto (left, middle, right), each lane represented by a **location**🏔️ card. No locations are visible at the start of the game, they are revealed one-by-one over the course of the first three turns. **Location** cards are randomized each game and have their own **special abilities** which impact any cards played into that lane.

Matches last a total of 6 turns. At the start of each match, players begin with a hand of 3 drawn cards. At the start of each turn, players will draw an additional card, and can place one or more cards face-down onto a **location(s)** of their choice. The amount of cards they can play is determined by the player's **energy level** for that turn, and the **energy cost** of their available cards. Energy begins at 1 for turn 1, and increases by 1 for each subsequent turn. Each player's **power level** for a **location** is based on the combined total of any cards they have played there.

The concept of the game is to try and "win" at least 2 of the lanes by having a higher total **power level** than your opponent in those lanes.

This app was built as the final project during the **_Lighthouse Labs Web Development Bootcamp_**. It was created primarily using **Create React App**, along with **Node.js** and **Express** connected to a **PostgreSQL** database.

## Screenshots

!["Screenshot 1 text"](link to follow)

!["Screenshot 2 text"](link to follow)

!["Screenshot 3 text"](link to follow)

## Setup

### Dependencies
