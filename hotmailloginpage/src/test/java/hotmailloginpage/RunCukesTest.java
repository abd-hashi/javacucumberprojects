package hotmailloginpage;

import cucumber.api.CucumberOptions;  
import cucumber.api.junit.Cucumber;  
import org.junit.runner.RunWith;  

//Associates Cucumber-JVM with the JUnit runner  
@RunWith(Cucumber.class)  
 
@CucumberOptions(features = "src/test/resources", format = {"pretty","html:target/cucumber-html-report", "json:target/cucumberjsonreport.json"}) 

public class RunCukesTest {  }