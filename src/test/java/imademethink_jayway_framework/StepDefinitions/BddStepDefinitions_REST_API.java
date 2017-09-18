package imademethink_jayway_framework.StepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import imademethink_jayway_framework.StepImplimentations.BddStepImplimentation_REST_API;

public class BddStepDefinitions_REST_API {

	BddStepImplimentation_REST_API handle = null;

	@Given("^General init$")
	public void general_init(){
		handle = new BddStepImplimentation_REST_API();
	}
	
	@Given("^Basic web application endpoint url is \"(.*?)\"$")
	public void basic_web_application_endpoint_url_is(String webAppEndpoint) {
		handle.webAppEndpoint = webAppEndpoint;
	}

	@Given("^Basic user details are$")
	public void basic_user_details_are(DataTable userDetailDataTable) {
		handle.ParseBasicUserDetails(userDetailDataTable);
	}

	@Given("^Valid simple user management application is running$")
	public void valid_simple_user_management_application_is_running() throws Throwable{
		handle.GET_Documentation();
	}

	@When("^User performs GET signup parameters$")
	public void user_performs_GET_signup_parameters() throws Throwable {
		handle.GET_signup_details();
	}

	@When("^User performs POST signup with email id \"(.*?)\" to create account$")
	public void user_performs_POST_signup_with_email_id_to_create_account(String emailId) throws Throwable {
		handle.POST_signup_actual(emailId); 
	}

	@When("^User performs GET to activate account$")
	public void user_performs_GET_to_activate_account() throws Throwable {
		handle.GET_activate_basic_account(); 
	}

	@When("^User performs POST to signin account$")
	public void user_performs_POST_to_signin_account() throws Throwable {
		handle.POST_signin_actual(); 
	}

	@When("^User performs DELETE to signout account$")
	public void user_performs_DELETE_to_signout_account() throws Throwable {
		handle.DELETE_signout_basic_account(""); 
	}

	@When("^User performs GET account profile$")
	public void user_performs_GET_account_profile() throws Throwable {
		handle.GET_basic_account_profile_detail(); 
	}

	@When("^User performs PUT to modify account profile with first name \"(.*?)\" and last name \"(.*?)\" and \"(.*?)\"$")
	public void user_performs_PUT_to_modify_account_profile_with_first_name_and_last_name(
																																		String firstName, 
																																		String lastName, 
																																		String whichScenario) throws Throwable {
		handle.PUT_modify_basic_account_profile_detail(firstName,lastName, whichScenario);
	}

	@When("^User performs GET account profile to match updated account profile$")
	public void user_performs_GET_account_profile_to_match_updated_account_profile() throws Throwable {
		handle.GET_basic_account_profile_detail(); 
	}

	@When("^User performs GET forget password to get secret questions$")
	public void user_performs_GET_forget_password_to_get_secret_questions() throws Throwable {
		handle.GET_forget_password_get_secret_question(); 
	}

	@When("^User performs PUT to reset password$")
	public void user_performs_PUT_to_reset_password() throws Throwable {
		handle.PUT_reset_password();
	}

	@When("^User performs DELETE to signout account with fake session id and \"(.*?)\"$")
	public void user_performs_DELETE_to_signout_account_with_fake_session_id(String whichScenario) throws Throwable {
		handle.DELETE_signout_basic_account(whichScenario);
	}

	@When("^User performs GET account profile with content type as XML$")
	public void user_performs_GET_account_profile_with_content_type_as_XML() throws Throwable {
		handle.GET_basic_account_profile_detail_special();
	}

	@When("^User performs DELETE to signout account with acceptable content type as XML$")
	public void user_performs_DELETE_to_signout_account_with_acceptable_content_type_as_XML() throws Throwable {
		handle.DELETE_signout_basic_account_special();
	}
    
	@Then("^Each user action should be successful$")
	public void each_user_action_should_be_successful() throws Throwable {
		handle.ValidateEachUserAction(); 
	}
    
}

