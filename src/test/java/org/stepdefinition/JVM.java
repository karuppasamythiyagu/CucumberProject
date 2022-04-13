package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVM {

	public static void jvmReport(String pathName) {

		// 1.Mention the target folder location - File
		File f = new File("C:\\Users\\Karuppasamy\\eclipse-workspace\\CucumberFastrack6.00PMBatch\\JVM");

		// 2.Add details to the report using Configuration class
		Configuration c = new Configuration(f, "Amezon&FaceBook");
		c.addClassifications("BrowserName", "Chrome");
		c.addClassifications("Version", "98");
		c.addClassifications("platform", "Windows");
		c.addClassifications("version", "10");

		// 3.Add json file paths into List<String>
		List<String> li = new ArrayList<String>();
		li.add(pathName);
		
		//4.Create object for ReportBuilder class
		ReportBuilder r = new ReportBuilder(li, c);
		
		//5.call generateReports() method.
		r.generateReports();

	}

}
