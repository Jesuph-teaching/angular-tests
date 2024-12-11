describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('increment work flow', () => {
    cy.get('#increment').click().click();
    cy.get('#counterInput')
      .invoke('val')
      .then((val) => {
        expect(val).to.equal('2');
      });
  });
  it('increment and decrement works at the same time', () => {
    cy.get('#decrement').click().click().click();
    cy.get('#increment').click().click();
    cy.get('#counterInput')
      .invoke('val')
      .then((val) => {
        expect(val).to.equal('-1');
      });
  });
});
