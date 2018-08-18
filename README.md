# Odd Squad Hangman Game
-----------------------------------------

[Odd Squad Hangman Game](
https://raywon123.github.io/Word-Guess-Game/ )

[My Portfolio Page](
https://raywon123.github.io/portfolio.html )

#### How It Works:
* Like a hangman game, user will press any key from a to z to guess what the word would be. User will have 15 tries to guess the correct word.


#### How It Is Built: 
* It is built using HTML/CSS and JavaScript. It also utilizes Bootstrap framework for responsive page. To test out the algorithm, I first wrote in Python and then port it to JavaScript. I was testing out the differences of the two languages on handling the array or list. There are minor differnces in doing the slicing. It is a neat project to encounter some moments like "I wish this language would have method like this."  The function in both language is pretty much alike. I did not use object (or class) in this project. I did not use jQuery. That would be something to explore in the next project especially for ES6. In Javascript, I used a random generator to generate the guessing word. And the key thing for this project is to use querySelector to bind the JavaScript content to the DOM. If you are interested, you can see the different check-ins on the progress I was making along the way. 

#### How To Test:
* I have not explore the right framework to do unit test. I kept some of testing skeletons in the comment. That might not be the right way to do since it becomes a little clutter. Sometimes, I put extra function to help testing like the showAnswer function and extra placeholder in HTML. I will explore Selenium for the automation testing but that will be in another project.   

#### What Needs To Be Done:
* This project is done with time constrain. I only have about 15 hours to finish from scratch. The coding is a little sloppy. Next step would be:
  * Refactor code: I encounter some test cases failed after I already done most of my code. So the final product seems not well thought out.
  * Scoping problem: I encouter some scoping problems for some of variables I am not sure how to access properly. I ended up put a lot of them as "global".
  * Need to figure out the unit test part.
