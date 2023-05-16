describe('Login page',()=>{

    beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/');
    });

    it('Open login page',()=>{
    cy.get('form[action="/login/"]').should('exist');
    });

    it('login contain username',()=>{
        cy.get('#id_username').should('exist').should('have.attr','name','username');
        cy.get('#id_username').should('exist').should('have.attr','required');
    });

    it('login page contain password',()=>{
        cy.get('#id_password').should('exist').should('have.attr','name','password');
    });

    it('login page contain login as',()=>{
        cy.get('select[name="login_as"]').should('exist');
        cy.get('select[name="login_as"]').find('option').should(($option)=>{
        expect($option).to.have.length(3);
        expect($option.eq(0)).to.have.value('student');
        expect($option.eq(1)).to.have.value('staff');
        expect($option.eq(2)).to.have.value('admin/admin_dashboard');
        });
        cy.get('form[action="/login/"]> button[type="submit"]').should('exist').should('contain.text','Login');
    });

    it('login works',()=>{
        cy.get('#id_username').type('QAUser');
        cy.get('#id_password').type('TTGGVVDD$%^&');
        cy.get('select[name="login_as"]').select('admin/admin_dashboard');
        cy.get('form[action="/login/"]> button[type="submit"]').click();
    });

    

});

