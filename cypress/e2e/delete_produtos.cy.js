describe('Feature Delete Produtos', () => {
    
    beforeEach(() => {

        cy.login('bootcamp2@teste.com', 'boot2')
      
      })
      
  
    it('Delete de produtos', () => {

      cy.productRegistration('Baixo Fender', 3750, 'Squier Fender Jass Bass', 36)
      cy.visit('https://front.serverest.dev/admin/listarprodutos')
      cy.get("h1").contains('Lista dos Produtos')
      // passos para achar o Skate e excluir 
      cy.get("tbody").should('be.visible')
      cy.get("tr").each(($row)  => {
        if($row.find("td").eq(0).text() === 'Baixo Fender'){
          $row.find("td").eq(5).children("div").children('.btn-danger').click()
        }
      })
      cy.get('td').should('not.include.text', 'Baixo Fender')
     
    })
})