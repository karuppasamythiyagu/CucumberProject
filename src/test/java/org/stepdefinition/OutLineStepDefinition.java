package org.stepdefinition;

import org.base.BaseClass;
import org.pojo.LoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class OutLineStepDefinition extends BaseClass {
	
	
	LoginPojo l;

	@When("user has to pass the bulk{string} of datas to userName field")
	public void user_has_to_pass_the_bulk_of_datas_to_userName_field(String data) {
		l = new LoginPojo();
		sendValue(l.getUserName(), data);
	}

	@When("user has to pass the bulk {string}of datas to password field")
	public void user_has_to_pass_the_bulk_of_datas_to_password_field(String data) {
		l = new LoginPojo();
		sendValue(l.getPaswrd(), data);
	}

	@When("user has to click the login button")
	public void user_has_to_click_the_login_button() {
		l = new LoginPojo();
		btnClick(l.getBtnclk());
	}

}
