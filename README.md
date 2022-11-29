# AmongusDB-API

BASE Link:

https://amongus-db-api.herokuapp.com/


GET Methods:

1. /group - Retrieves all groups

GET( https://amongus-db-api.herokuapp.com/group )

2. /group/:id - Retrieves a particular group by ID

GET( https://amongus-db-api.herokuapp.com/group/ABC001 )

3. /user - Retrieves the main user ( first user )

GET( https://amongus-db-api.herokuapp.com/user )


REMEMBER! For POST and PUT methods, you must include two things in the REQUEST:
FIRST, add the header "Content-type": "application/json"
SECOND, add the object to be posted in the body

POST Methods:

1. /group - Post group

POST( https://amongus-db-api.herokuapp.com/group )

2. /user - Post user

POST( https://amongus-db-api.herokuapp.com/user )


PUT Methods:

1. /group/:id - Updates group of particular id

PUT( https://amongus-db-api.herokuapp.com/group/ABC001 )

2. /user/:id - Updates user of particular id

PUT( https://amongus-db-api.herokuapp.com/user/USR044 )
