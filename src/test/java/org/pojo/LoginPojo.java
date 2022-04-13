package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class LoginPojo extends BaseClass {

	// 1.default constructor
	public LoginPojo() {
		
		PageFactory.initElements(driver,this);

	}
	
	//driver.findElement(By.id("email"))
	//2.private ebElement
	@FindBy(id="email")
	private WebElement userName;
	
	@FindBy(id="pass")
	private WebElement paswrd;
	
	@FindBy(name="login")
	private WebElement btnclk;
	
	@FindBys({  
		
		@FindBy(name="login"),
		@FindBy(xpath="//button[@id='u_0_d_WU']"),
		@FindBy(xpath="//button[text()='Log In']"),
		
		
		
	})
	private WebElement oneLogin;
	
	@CacheLookup
	@FindAll({
		
		@FindBy(name="login"),
		@FindBy(xpath="//button[@id='u_0_d_WU']"),
		@FindBy(xpath="//button[text()='Log In']"),
		
		
		
	})
	private WebElement allLogin;
	
	
	
	
	
	
	public WebElement getAllLogin() {
		return allLogin;
	}

	public WebElement getOneLogin() {
		return oneLogin;
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getPaswrd() {
		return paswrd;
	}

	public WebElement getBtnclk() {
		return btnclk;
	}

	

}
