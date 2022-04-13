package org.stepdefinition;

import org.base.BaseClass;
import org.junit.Assert;
import org.pojo.AmezonLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AmezonStepDefinition extends BaseClass {

	AmezonLoginPojo a;

	@Given("user has to launch the chromebrowser and hit the Amezon url")
	public void userHasToLaunchTheChromebrowserAndHitTheAmezonUrl() {

		getUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("user has to pass the invaild emailId to userName text box")
	public void userHasToPassTheInvaildEmailIdToUserNameTextBox() {

		a = new AmezonLoginPojo();
		sendValue(a.getAmezonUserName(), "karuppasamy1798@gmail.com");

	}

	@When("To click the continue button")
	public void toClickTheContinueButton() {
		a = new AmezonLoginPojo();
		btnClick(a.getConBtn());
	}

	@When("user has to pass the invaild password to password text box")
	public void userHasToPassTheInvaildPasswordToPasswordTextBox() {
		Assert.assertTrue(false);
		a = new AmezonLoginPojo();
		sendValue(a.getAmezonPaswrd(), "sinamika");
	}

	@When("user has to click the sign button")
	public void userHasToClickTheSignButton() {
		a = new AmezonLoginPojo();
		btnClick(a.getSingnIn());
	}

}
