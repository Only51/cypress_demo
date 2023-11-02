/// <reference types="cypress" />
class SurveyPage {

  enterURL() {
    cy.visit("https://raksul.github.io/recruit-qa-engineer-work-sample/");
  }

  selectAboutUsItem(strItem) {
    if (strItem.length !== 0) {
      cy.log('Start executing com_select_aboutus_cobobox');
      cy.xpath("//div[@id='field_infoSource']//div[contains(.,'Where did you hear about us?')]/following-sibling::div").click();
      cy.xpath("//div[contains(@class,'ant-select-item-option-content') and text()= '" + strItem + "']", { timeout: 12000 }).should('be.visible');
      cy.xpath('//div[contains(@class,"ant-select-item-option-content") and text()= "Recommended by friend"]').click();
      cy.log('End executing com_select_aboutus_cobobox');
    }
  }

  checkMultipleServices(services) {
    if (services.length !== 0) {
      const servicesArr = services.split(",");
      for (let i = 0; i < servicesArr.length; i++) {
        cy.xpath("(//div[@id='form_item_servicesOfInterest']//span[text()='" + servicesArr[i] + "'])/parent::label//input").check();
      }
    }

  }

  inputSurveyInfos(email, lname, fname, hearAboutUs, servicesOfInterest, association, explaination) {
    cy.get('#form_item_email').type(email);
    cy.get('#form_item_lastName').type(lname);
    cy.get('#form_item_firstName').type(fname);
    this.selectAboutUsItem(hearAboutUs);
    this.checkMultipleServices(servicesOfInterest);
    if (association.length !== 0) {
    cy.xpath("(//div[@id='field_typeOfAssociation']//span[text()='" + association + "'])/parent::label//input").check();
    }
    cy.get('#form_item_explanation').type(explaination);
  }

  clickSubmitButton() {
    cy.get('[type="submit"]').eq(0).click();
  }

  verifySuccessMessage() {
    cy.fixture('message').then((message)  => {
      cy.get('div.ant-alert-message').should('have.text', message.msgSuccess);
    })
  }
  verifyErrorMessage(){
    cy.fixture('message').then((message)  => {
      cy.xpath('//div[@id="field_email"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorEmailinvalid);
      cy.xpath('//div[@id="field_lastName"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorLname);
      cy.xpath('//div[@id="field_firstName"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorFname);
      cy.xpath('//div[@id="field_infoSource"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorInfoSource);
      cy.xpath('//div[@id="field_servicesOfInterest"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorServices);
      cy.xpath('//div[@id="field_typeOfAssociation"]//div[@class="ant-form-item-explain-error"]').should('have.text', message.msgErrorAssociation);
    });
  }

}
const survey = new SurveyPage();
export default survey;