package spartaglobalcontact;

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
import static org.junit.Assert.*;

public class spartaglobalcontactsteps
{
	private WebDriver driver;
    private String firstName;
    private String lastName;
    private String companyName;
    private String emailAddress;
    private String telephoneNumber;
    private String contactMessage;

	@Before
	public void Setup() throws BiffException, IOException
	{
	    FileInputStream fi = new FileInputStream("c:\\selenium\\SpartaGlobalContactUsPage.xls");
	    Workbook w = Workbook.getWorkbook(fi);
	    Sheet s = w.getSheet(0);

	    firstName = s.getCell(0, 0).getContents(); // Column 1 Row 1
	    lastName = s.getCell(1, 0).getContents(); // Column 2 Row 1
	    companyName = s.getCell(2, 0).getContents(); // Column 3 Row 1
	    emailAddress = s.getCell(3, 0).getContents(); // Column 4 Row 1
	    telephoneNumber = s.getCell(4, 0).getContents(); // Column 5 Row 1
	    contactMessage = s.getCell(5, 0).getContents(); // Column 6 Row 1
    }
	
	@Given("^I am on the sparta global contact us page \"([^\"]*)\"$")
	public void I_am_on_the_sparta_global_contact_us_page(String webURL) throws Throwable
	{
		System.setProperty("webdriver.chrome.driver", "c:\\selenium\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
	    driver.get(webURL);
	}

	@Given("^I enter my first name \"([^\"]*)\"$")
	public void I_enter_my_first_name(String firstNameTxtbox) throws Throwable
	{
	    driver.findElement(By.id(firstNameTxtbox)).sendKeys(firstName);
	}

	@Given("^I enter my last name \"([^\"]*)\"$")
	public void I_enter_my_last_name(String lastNameTxtbox) throws Throwable
	{
	    driver.findElement(By.id(lastNameTxtbox)).sendKeys(lastName);
	}

	@Given("^I enter my company name \"([^\"]*)\"$")
	public void I_enter_my_company_name(String companyNameTxtbox) throws Throwable
	{
	    driver.findElement(By.id(companyNameTxtbox)).sendKeys(companyName);
	}

	@Given("^I enter my email address \"([^\"]*)\"$")
	public void I_enter_my_email_address(String emailAddressTxtbox) throws Throwable
	{
	    driver.findElement(By.id(emailAddressTxtbox)).sendKeys(emailAddress);
	}

	@Given("^I enter my telephone number \"([^\"]*)\"$")
	public void I_enter_my_telephone_number(String telephoneNumberTxtbox) throws Throwable
	{
	    driver.findElement(By.id(telephoneNumberTxtbox)).sendKeys(telephoneNumber);
	}

	@Given("^I enter my contact message \"([^\"]*)\"$")
	public void I_enter_my_contact_message(String contactMessageTxtbox) throws Throwable
	{
	    driver.findElement(By.id(contactMessageTxtbox)).sendKeys(contactMessage);
	}

	@When("^I click the submit button \"([^\"]*)\"$")
	public void I_click_the_submit_button(String submitMsgBtn) throws Throwable
	{
	    driver.findElement(By.xpath(submitMsgBtn)).click();
	}

	@Then("^I should see the thank you message displayed$")
	public void I_should_see_the_thank_you_message_displayed() throws Throwable
	{
	    assertEquals(true, driver.getPageSource().contains("Thank You"));
	    driver.quit();
	}
}