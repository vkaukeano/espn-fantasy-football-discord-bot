describe('empty spec', () => {
    const getIframeDocument = () => {
      return cy.get('iframe').its('0.contentWindow.document').should('be.visible').then(cy.wrap);
    }

    it('gets the post', () => {
      cy.visit('https://www.espn.com/fantasy/');
      cy.get('button[data-affiliatename="espn"]').last().click({force:true});
      getIframeDocument().get('form').find('input').first().click({ force: true }).type('test', { force: true });
      getIframeDocument().get('div[class="btn-group touch-print-btn-group-wrapper"]').find('button[class="btn btn-primary btn-submit ng-isolate-scope"]').click({ force: true });
    })
})