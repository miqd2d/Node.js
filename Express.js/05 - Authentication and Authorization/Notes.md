## Authentication and Authorization

### Authentication : 
- This is the step where we check the user that is trying to access the data is actually who he says he is.
- To validate this we ask them to enter their credentials (Username/email and password).
- We check in the database if the credentials are true and hence find out if the User is truely who he says he is.

### Authorization
- This is the step where we know the User is who he says he is but does he have the privilege to access the data. 
- To check this we validate their **role** and check if they have the authorization to open/view/manage/modify the data in question.
- It is done using checking the token that is assigned to them while they validate their credentials. That token also contains their roles which is later used in validating their access to the data.