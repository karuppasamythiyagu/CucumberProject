package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.pojo.LoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;


public class StepDefinition extends BaseClass {

	LoginPojo l;

	@Given("To launch the chrome browser and hit the facebook url")
	public void to_launch_the_chrome_browser_and_hit_the_facebook_url() {
		
		getUrl("https://en-gb.facebook.com/");
	}

	@When("To pass the invaild user name to username text box")
	public void to_pass_the_invaild_user_name_to_username_text_box(DataTable d) {
		l = new LoginPojo();
		Map<String, String> mp = d.asMap(String.class, String.class);
		String data = mp.get("email1");
		sendValue(l.getUserName(),data );
	}

	@When("To pass the invaild password to password text box")
	public void to_pass_the_invaild_password_to_password_text_box(DataTable d) {
		l = new LoginPojo();
		List<Map<String, String>> mp = d.asMaps();
		String data = mp.get(0).get("password2");
		sendValue(l.getPaswrd(), data);
	}

	@When("user has to click the continue button")
	public void user_has_to_click_the_continue_button() throws InterruptedException {
		Assert.assertTrue(false);
		l = new LoginPojo();
		btnClick(l.getBtnclk());
	}

	@Then("user has to close the browser")
	public void user_has_to_close_the_browser() {
		
	}

}
