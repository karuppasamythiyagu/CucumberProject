package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmezonLoginPojo extends BaseClass {
	
	
	public AmezonLoginPojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name="email")
	private WebElement amezonUserName;
	
	@FindBy(id="continue")
	private WebElement conBtn;
	
	@FindBy(name="password")
	private WebElement amezonPaswrd;
	
	@FindBy(id="signInSubmit")
	private WebElement singnIn;

	public WebElement getAmezonUserName() {
		return amezonUserName;
	}

	public WebElement getConBtn() {
		return conBtn;
	}

	public WebElement getAmezonPaswrd() {
		return amezonPaswrd;
	}

	public WebElement getSingnIn() {
		return singnIn;
	}

}
