package org.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;

	public static void browserLaunch() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	public static void getUrl(String url) {

		driver.get(url);

	}

	public static void maximize() {

		driver.manage().window().maximize();
	}

	public static String getCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		return currentUrl;

	}

	public static void browserClose() {
		driver.close();

	}

	public static String getTitle() {
		String title = driver.getTitle();
		System.out.println(title);
		return title;

	}

	public static void getAttribute(WebElement element) {

		String attri = element.getAttribute("value");
		System.out.println(attri);
	}

	public static void sendValue(WebElement element, String value) {

		element.sendKeys(value);
	}

	public static void btnClick(WebElement element) {
		element.click();

	}

}
