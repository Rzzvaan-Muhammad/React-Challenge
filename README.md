# Coding Challenge

# Goals/Outcomes

- To test knowledge of consuming APIs and handling responses
- To test the knowledge of onChange handlers
- Loading state and knowing how to handle props

# Requirements

- Pass id to UserDetails component to Fetch and display User details
- Make the search in Top Menu functional (Search by User name)

# Think about

- Take a look at Apollo client documentation

#### How to pass props to child/sister components?

- Answer: Best approach is lifting state up to their parent component, like I have did in the Users.js and UsersDetails.js.

#### How much logic do you offload out of the UI components?

- Answer: We can offload logic by removing new request to the server side to get details by passing the selected item from sister component in UserDetails.js.

#### How can you Imporove the UI

- Answer: We can Improve UI by decreasing the size of list Cards to 1/4th and also by managing number of card to show in single page by added pages functionality into Users.js

# What's Already Been Done

- UI/UX for all elements, including previews (mobile responsive)
- GraphQl Client connected
- list of Users displayed in Users.js

# Setup

- Run `node index.js` to start the server on localhost:8000/graphql
