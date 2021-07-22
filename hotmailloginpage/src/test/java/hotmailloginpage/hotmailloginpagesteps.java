package hotmailloginpage;

import static org.junit.Assert.assertEquals;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

public class hotmailloginpagesteps
{
	private WebDriver driver;
    private String email;
    private String pwd;

	@Before
	public void Setup() throws BiffException, IOException
	{
	    FileInputStream fi = new FileInputStream("c:\\selenium\\Book1.xls");
	    Workbook w = Workbook.getWorkbook(fi);
	    Sheet s = w.getSheet(0);

	    email = s.getCell(0, 0).getContents(); // Column 1 Row 1
	    pwd = s.getCell(1, 0).getContents(); // Column 2 Row 1
    }
	
	@Given("^I am on \"([^\"]*)\"$")
	public void I_am_on(String arg1) throws Throwable
	{
		System.setProperty("webdriver.chrome.driver", "c:\\selenium\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
	    driver.get(arg1);
	}

	@When("^I click the Sign In button$")
	public void I_click_the_Sign_In_button() throws Throwable
	{
		driver.findElement(By.xpath("/html/body/header/div/aside/div/nav/ul/li[2]/a")).click();
	}

	@When("^I enter the User Name \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_enter_the_User_Name_on(String arg1, String arg2) throws Throwable
	{
		driver.findElement(By.id(arg2)).sendKeys(email);
	}

	@When("^I click the button \"([^\"]*)\"$")
	public void I_click_the_button(String arg1) throws Throwable
	{
		driver.findElement(By.id(arg1)).click();
		Thread.sleep(3000);
	}

	@When("^I enter the password \"([^\"]*)\"$")
	public void I_enter_the_password(String arg1) throws Throwable
	{
		driver.findElement(By.id("i0118")).sendKeys(pwd);
	}

	@When("^I click the sign in button \"([^\"]*)\"$")
	public void I_click_the_sign_in_button(String arg1) throws Throwable
	{
		driver.findElement(By.id(arg1)).click();
	}

	@Then("^I should be logged in$")
	public void I_should_be_logged_in() throws Throwable
	{
		assertEquals(true, driver.getPageSource().contains("null"));
		driver.quit();
	}
}