package org.stepdefinition;

import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before(order = 10)
	public void openBrowser() {
		browserLaunch();
		System.out.println("Browser Open");
	}

	@After(order = 1)
	public void closeBrowser() {

		browserClose();
		System.out.println("Browser Close");

	}

	@Before(order = 100,value="@smoke")
	public void takeScreenShot() {
		System.out.println("Before ScreenShot");

	}

	@Before(order = 20)
	public void maximizeBrowser() {
		maximize();
		System.out.println("Maximize the Browser");

	}

	@After(order = 1000)
	public void afterScreenShot(Scenario s) {
		
		if (s.isFailed()) {
			
			TakesScreenshot tk = (TakesScreenshot)driver;
			byte[] screenshotAs = tk.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshotAs, "image/png");
			
			
		}

	}

}
