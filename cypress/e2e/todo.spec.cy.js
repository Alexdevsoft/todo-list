describe('To-Do List App', () => {
    beforeEach(() => {
      cy.visit('http://frontend')
    })
  
    it('should display empty task list initially', () => {
      cy.get('#taskList').should('be.empty')
    })
  
    it('should add a new task', () => {
      cy.get('#title').type('Nova tarefa')
      cy.get('#description').type('Descrição da nova tarefa')
      cy.get('#taskForm').submit()
      
      cy.get('.task').should('have.length', 1)
      cy.contains('.task h3', 'Nova tarefa').should('exist')
    })
  
    it('should mark task as completed', () => {
      // First add a task
      cy.get('#title').type('Tarefa para completar')
      cy.get('#taskForm').submit()
      
      cy.get('input[type="checkbox"]').check()
      cy.get('.task').should('have.class', 'completed')
    })
  
    it('should delete a task', () => {
      // First add a task
      cy.get('#title').type('Tarefa para deletar')
      cy.get('#taskForm').submit()
      
      cy.get('.task button').click()
      cy.get('#taskList').should('be.empty')
    })
  })