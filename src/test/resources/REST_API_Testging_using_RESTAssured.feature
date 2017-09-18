Feature: REST API testing framework using Java REST Assured or JayWay Libraries 
	Raise request(s) using REST Assured library
	Validate HTTP response code and parse JSON response using REST Assured library
	Cross check the server logs for each REST API request
	Make sure to run the intended REST API based web application as pre-condition

Background: 
	Given General init 
	And Basic web application endpoint url is "http://localhost:8080/imademethink/restfulapi/account_basic/" 
	And Basic user details are 
		| particular                      | value           |
		| password                        | d9aPass         |
		| first_name                      | Sheldon         |
		| last_name                       | Cooper          |
		| gender                          | m               |
		| signup_secret_question_1_answer | Tokyo           |
		| signup_secret_question_2_answer | Toystory        |
		
Scenario: Valid scenario 1 
	Given Valid simple user management application is running 
	When User performs GET signup parameters 
	And User performs POST signup with email id "Happy01@aaa.com" to create account 
	And User performs GET to activate account 
	And User performs POST to signin account 
	And User performs DELETE to signout account 
	Then Each user action should be successful 
	
Scenario: Valid scenario 2 
	Given Valid simple user management application is running 
	When User performs GET signup parameters 
	And User performs POST signup with email id "Happy02@aaa.com" to create account 
	And User performs GET to activate account 
	And User performs POST to signin account 
	And User performs GET account profile 
	And User performs PUT to modify account profile with first name "Jack" and last name "Black" and "valid scenario 2" 
	And User performs GET account profile to match updated account profile 
	And User performs DELETE to signout account 
	Then Each user action should be successful 
	
Scenario: Valid scenario 3 
	Given Valid simple user management application is running 
	When User performs GET signup parameters 
	And User performs POST signup with email id "Happy03@aaa.com" to create account 
	And User performs GET to activate account 
	And User performs POST to signin account 
	And User performs GET forget password to get secret questions 
	And User performs PUT to reset password 
	And User performs DELETE to signout account 
	And User performs POST to signin account 
	Then Each user action should be successful 
	
Scenario: Invalid scenario 1 
	Given Valid simple user management application is running 
	When User performs GET signup parameters 
	And User performs POST signup with email id "Sad01@aaa.com" to create account 
	And User performs POST to signin account 
	And User performs DELETE to signout account with fake session id and "invalid scenario 1" 
	Then Each user action should be successful 
	
Scenario: Invalid scenario 2 
	Given Valid simple user management application is running 
	When User performs GET signup parameters 
	And User performs POST signup with email id "Sad02@aaa.com" to create account 
	And User performs GET to activate account 
	And User performs POST to signin account 
	And User performs GET account profile with content type as XML 
	And User performs DELETE to signout account with acceptable content type as XML 
	Then Each user action should be successful 
