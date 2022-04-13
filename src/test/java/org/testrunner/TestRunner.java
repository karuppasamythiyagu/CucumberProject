package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVM;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",glue="org.stepdefinition",monochrome=true,dryRun=false,
snippets=SnippetType.CAMELCASE,plugin= {"html:target","junit:junitreport\\junit.xml","json:JsonReport\\report.json"
		,"rerun:src/test/resources\\failed.txt"})  
public class TestRunner {
	
	@AfterClass
	public static void report() {
		
		JVM.jvmReport("C:\\Users\\Karuppasamy\\eclipse-workspace\\CucumberFastrack6.00PMBatch\\JsonReport\\report.json");
		

	}

}
