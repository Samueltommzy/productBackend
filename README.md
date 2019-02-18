# productBackend
##Code for product backend 

###Steps To test this API on your local machine

*  Clone this repo 

* navigate to the directory on your local machine and run `npm install` command

*  make sure tto have mongodb service running and replace the database url in the ./config/database.js directory as appropriate

* run `npm start` command

* To List all the available products
  - using curl
    -  `curl -H 'Content-Type: application/json' http://localhost:3000/Products`
* To create a product
  - using curl
    `curl -X POST --header "Content-Type: application/json" -d '{"Name":"gucci Sneakers","Description":"This is a white Sneakers","Price":"$200","Category":"Men wears",Image":"https://github/Samueltommzy","Color":"White"}' http://localhost:3000/Product`
* To view a particular product
  - using curl
    - `curl -H 'Content-Type: application/json' http://localhost:3000/product/_id`


###STeps to test the hosted API

* To view all the available products visit [Product Backend] (https://product-ch-backend.herokuapp.com/Products)
*To view a particular product visit `https://product-ch-backend.herokuapp.com/product/_id`
    

