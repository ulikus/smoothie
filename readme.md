### API is available at:
`https://smoothie-node-api.herokuapp.com/smoothie`

###API for smoothies like example:
```[
       {
           "id": "5e40498f330000d842b04da7",
           "name": "Strawberry Banana Smoothie",
           "ingredients": "Banana, Strawberry, Milk",
           "price": "10 Euro",
           "status": "In Stock"
       },
       {
           "id": "5e40498f330000d843b04da7",
           "name": "Peachy Oat Smoothie",
           "ingredients": "Peach, Oat, Milk",
           "price": "10 Euro",
           "status": "In Stock"
       },
       {
           "id": "5e40498f330000d844b04da7",
           "name": "Endless Summer",
           "ingredients": "Banana, Strawberry, Watermelon, Milk, Plain Yoghurt, Protein powder",
           "status": "In Stock",
           "price": "12 Euro",
       },
       {
           "id": "5e40498f330000d845b04da7",
           "name": "Orange Crush",
           "ingredients": "Orange, Strawberry, Watermelon, Milk, Plain Yoghurt, Protein powder",
           "price": "10 Euro",
           "status": "Out of Stock"
       }
   ]
```

### Assumptions made:
- No relational data for ingredients and currency and statuses.
- Just a simple flat table with data.


### Local devolopment
- Use provided docker-compose.yml
- local.env contains all configuration for DB.