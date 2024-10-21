# Print.com Code Challenge

## Going over the assignment
- As a first step I made a small sketch of what I think the page should look like. After that, I thought about how to use the time as wisely as possible, and decided that for now I would skip the validation part as that would be the most time consuming for me, quality > quantity. 
- Since there is no specific design or UX requirements, I made the decision to use Vuetify as I am somewhat familiar with it and it helps with UX decisions (animations, etc)
- As a first commit I decided to clone the project and have a clean installation of Vue
- I continued with making use of Vuetify's app-bar to quickly implement a navigation bar. I set up the routes for the 3 types of products and created 3 separate views for them that only included the name of the product so far. 
- I also added a shopping cart that opens up a mocked list of items when clicked. This is temporary as I will replace it wtith the actual products added :)
- Next step is to go over the data for the products and display it on the views I created per product. 
- I added a v-select where I go over all the properties of a product and display the title of the property as the label and the names of the options as the item titles.
- I wrapped the v-select in a form and display the selected values underneath it.




## Next steps
Here I define some things I thought of doing, but ran out of time for.

- The routing is dynamic by using a `:type`. Navigating to a `:type` we do not have a JSON for shows an error page, but the page does not provide a way forward for the user. Ideally I want to redirect the user to a page I know exists.


## Learnings
I always try to consiously reflect on my work and projects. Below there is a list of things that could/should have gone better, at the risk of casting a shade on my own assignment.

- I should have taken better care of my TypeScript implementations along te way. I felt quite time-pressure so I cut some corners, for those corners to only come back and bite me. By having to fix up my TypeScript later on in the project I got none of the benefits of it as I barely iterated after the fixes, while fixing it took quite some effort.

