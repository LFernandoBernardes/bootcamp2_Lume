beforeEach(() => {

  cy.login('bootcamp2@teste.com', 'boot2')

})


describe('Feature Produtos', () => {

  it('Cadastro produtos - Skate', () => {

    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')
    cy.get("h1").contains('Cadastro de Produtos')
    cy.get("[data-testid='nome']").type('Skate')
    cy.get("[data-testid='preco']").type('2000')
    cy.get("[data-testid='descricao']").type('Novo com shape dos Ramones e truck com elevação, Rodas em gel')
    cy.get("[data-testid='quantity']").type('10')
    cy.get("[data-testid='cadastarProdutos']").click()
    cy.get("h1").contains('Lista dos Produtos')
    // passos para achar o Skate e excluir 
    cy.get("tbody").should('be.visible')
    cy.get("tr").each(($row)  => {
      if($row.find("td").first().text() === "Skate"){
        $row.find("td").eq(5).children("div").children('.btn-danger').click()
      }
    })
    cy.get('td').should('not.include.text', 'Skate')
  
  })

  it('Cadastro produtos - Prancha', () => {

    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')
    cy.get("h1").contains('Cadastro de Produtos')
    cy.get("[data-testid='nome']").type('Prancha')
    cy.get("[data-testid='preco']").type('2000')
    cy.get("[data-testid='descricao']").type('Nova,  desenho dos Ramones')
    cy.get("[data-testid='quantity']").type('10')
    cy.get("[data-testid='cadastarProdutos']").click()
    cy.get("h1").contains('Lista dos Produtos')
    // passos para achar o Skate e excluir 
    cy.get("tbody").should('be.visible')
    cy.get("tr").each(($row)  => {
      if($row.find("td").first().text() === "Prancha"){
        $row.find("td").eq(5).children("div").children('.btn-danger').click()
      }
    })
    cy.get('td').should('not.include.text', 'Prancha')
  
  })

})

// bootcamp2@teste.com
// boot2