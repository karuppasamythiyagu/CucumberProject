package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@C:\\Users\\Karuppasamy\\eclipse-workspace\\CucumberFastrack6.00PMBatch\\src\\test\\resources\\failed.txt",
glue = "org.stepdefinition", monochrome = true)
public class TestRerun {

}
