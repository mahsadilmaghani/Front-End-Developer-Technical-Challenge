# Front-End-Developer-Technical-Challenge


# Mahsa Dilmaghani

Here are my solutions and changes to fix the bugs along with their corresponding file names:

# Bug 1 - The page is not scaling correctly on mobile or tablet devices

‘index.html’

In order to match the design and fix the layout issue on mobile and tablet, I changed the col-sm-6 to col-sm-12, so that each division takes up one full column for any screen width equals to 768px or smaller.

# Bug 2 - Logo does not appear in the header

‘index.html' and '_content.scss’

The page wasn’t using the right logo, so I found the right logo from the design folder and updated the path. Also, I applied a fix to the size of the logo in the SASS file so it always fits within the size of the screen by adding this following snippet of CSS:

max-width: 100%;
height: auto !important; 

# Bug 3 - Heart icon should change color on click

‘_content.scss’ and ‘_card.js’

I added a hover effect on the heart icon so it becomes red on mouse hover. On click event, I wrote a jQuery function so that it fills the favourite heart icon with red by adding the class named ‘on’ and also removing ‘on’ by clicking again so it becomes black again.

# Bug 4 - User should be able to delete cards

‘index.html ‘ and ‘_content.scss’ and ‘_card.js’

I added a new modal message box devision in HTML file and styled it in the SASS file and wrote a couple of functions in the JS file to remove the corresponding item when user clicks on 'delete' button, and wrote other more functions to cancel or close the modal.

# Bug 5 - Cards should be the same height as per design

‘_content.scss’ and ‘_card.scss’

I fixed the height of the cards to be equal by using the ‘flexbox’ idea. I applied the ‘display: flex’ to the classname ‘.row’ and added ‘flex-wrap: wrap’ so cards get wrapped when there is no more space. I also fixed the height of cards to %95.

# Bug 6 The side navigation shouldn't be displayed for screens under 480px

‘_content.scss’

I used media query and applied ‘display: none’ property to the side navigation when the device width equals to 480px or smaller.

# Bug 7 - Links in the side navigation do not work

‘index.html’ and ‘smoothScrolling.js’

I fixed this issue by pointing the anchor links to the ID of each section in the HTML file. I also found a useful snippet code from w3school.com for smooth scrolling. This JS file uses the jQuery animate function and applied 800 milliseconds to smooth the scrolling.

I also created the two extra blocks for ‘Staff’ and ‘Register’.

# Bug 8 - Website is broken on IE11

Unfortunately, I don’t have access to IE11 as I've been using a MacBook. But I understand that flexbox is not fully supported in IE11. There are some good resources and discussions in the following example websites about how to fix the layout and flexbox issues in IE11 or use alternative solutions:

https://caniuse.com/#feat=flexbox

https://medium.com/css-mine/flexbox-how-to-deal-with-older-browsers-fbf6eb8c7a65
