###Deploying on heroku
`heroku create smoothie-node-api`

###Add DB
goto: https://elements.heroku.com/addons/heroku-postgresql

###Add heroku remote and push to deploy
`heroku git:remote -a smoothie-node-api`
`git push heroku master`


