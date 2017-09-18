package imademethink_jayway_framework.MasterRunnerMaven;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources",
        glue = "imademethink_jayway_framework.StepDefinitions",
		dryRun = false,
		strict = false,
		monochrome = true,
		//tags 			= {"@tag1"},
        plugin = {
                    "pretty",
                    "html:target/cucumber",
                    "json:target/cucumber/cucumber.json",
                } 
        )
public class MasterRunnerForCucumber {
	@BeforeClass
	public static void beforeClass() {
		System.out.println("*************************************************");		
	}
	
	@AfterClass
	public static void afterClass() {
		System.out.println("*************************************************");		
	}
	
}

