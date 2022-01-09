# Rock Paper Scissors

Rock Paper Scissors is an online game made to draw users in using eye-catching colors and lets the players try their luck
against a computer that chooses its options randomly. The first to get 5 points wins the match! Compete against friends or family members to see who can beat the computer! Do you feel lucky?

![Looking good on different devices](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Responsive%20design%20image.jpeg)

## Features 

### Existing Features

- __Header__

    - The Header displays the games name: ROCK PAPER SCISSORS

![Header](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/header.jpeg)

- __The Game options__

    - The game clearly states that the first to 5 wins the match and urges the player to choose one of the images.

    - The ROCK PAPER SCISSORS buttons have hover effects so as soon as the player hovers over one of them it reacts and temps the player to press on it.


![Game options](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/game%20options%20hover%20effect.jpeg)

- __Game Results__

    - The score is updated according to who wins a round. Either 1 point to the player or 1 point to the computer

![Computer score](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Computer%20wins.jpeg)

![Player score](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Player%20wins.jpeg)

- The game displays who the winner is when one of them has reached 5 points

![Player wins](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Player%20wins%20the%20match.jpeg)

![Computer wins](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Computer%20wins%20the%20match.jpeg)


- __The Footer__ 

    - Contains only the RULES button which when pressed upon shows the basic rules of the game and after a fixed amount of seconds disappears until pressed upon again.

![Footer](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Rules%20button.jpeg)



### Features Left to Implement

- A future idea to implement would be Spock and Lizard. The images are already added and a function could be made so that after reaching 5 points the SPOCK button gets added, then when the player reaches 10 points the LIZARD button also gets added and the game continues to 20 points before resetting again.

## Testing 

- I have tested the site on Chrome, Safari, and Firefox, both on my laptop and my iPhone 12 Pro Max. The game works as it should on all of them, the score updates as it should, game shows winner or tie of each round as its supposed to do, and game resets when a player or the computer reaches 5 points.

- Also, the game looks good and all functions work on Ipad Pro, iPhone 12 pro-Max, iPhone X, and MacBook Pro 15´.

- Using the Devstools I can confirm this website is responsive, looks good, and functions on all standard screen sizes.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeagustinchristian.github.io%2FRock-Paper-Scissors%2F)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdeagustinchristian.github.io%2FRock-Paper-Scissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

- Javascript
    - No errors were found when passing through the official [JSHint validator](https://jshint.com/)
  

- Lighthouse

![Lighthouse result](https://raw.githubusercontent.com/deagustinchristian/Rock-Paper-Scissors/main/assets/images/readme%20images/Lighthouse%20RPS%20game.jpeg)

###  Bugs
- One bug that kept bothering me was when I pressed a button and the results was shown, it was possible to press on the buttons still and the game would register it. Solved it by using the following code
    - if (gameArea.classList.contains("results-shown")){ 
        return;

- Not a bug but I did forget to properly git push alot in the begining which resulted in nothing was saved. Lesson learned.

As far as I know, there are no unfixed bugs. 

## Deployment
 
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - Go to Github and choose the correct repository, in this case, it was ROCK-PAPER-SCISSORS
  - Then go to the SETTINGS tab
  - Then scroll down to where it says PAGES click on it
  - Here you go to SOURCE then select the MAIN or MASTER branch and press SAVE

The live link can be found here - https://deagustinchristian.github.io/Rock-Paper-Scissors/ 


## Credits 


### Content 

- All text on the website was made up by me. I did use Grammarly on this ReadMe file just so the grammar and spelling was as correct as it could be.

- I have used different sources to learn and understand the coding and the concepts of JS, to better understand the concepts of the game and how to make it I studied the following websites and how they did it.

    - The linear gradient effect code I got from this website
        - (https://www.sliderrevolution.com/resources/css-animated-background)

    - This website was really good to get a sense of how the game is built
        - (https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/)
    
    - I used code from this website for the compareInput parts and also for the game-ending when the points reach 5
        - (https://sebhastian.com/rock-paper-scissors-javascript/)

    - I learned more about the classList and how to use it via this website
        - (https://www.w3schools.com/jsref/prop_element_classlist.asp)

    - I learned how to hide and show elements via these websites
        - (https://www.geeksforgeeks.org/hide-or-show-elements-in-html-using-display-property/)
        - (https://linuxhint.com/show-or-hide-an-element-on-website-using-javascript/)
        - (https://allyjs.io/tutorials/hiding-elements.html)


### Media

- The images used for the ROCK PAPER SCISSORS SPOCK LIZARD buttons I found here (https://icon-library.com/icon/rock-paper-scissors-icon-5.html) and are free to use.

- The short cut image/icon used is the same image as used for the game button SCISSORS and converted to a short icon by using the following website [Favicon](https://favicon.io/)