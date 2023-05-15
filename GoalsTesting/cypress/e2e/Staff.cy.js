describe('Staff page',()=>{

    beforeEach(()=>{
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type('Deema');
        cy.get('#id_password').type('DEEMA_shahwan');
        cy.get('select[name="login_as"]').select('staff');
        cy.get('form[action="/login/"]> button[type="submit"]').click();
        cy.get('a[href="/staff/34"]').click();
        cy.visit('https://goal-dev.mdx.ac.uk/staff/34/staffs/');
        cy.get('input[name="email"].textinput.textInput.form-control').as('Email');
        cy.get('input[name="first_name"].textinput.textInput.form-control').as('FirstName');
        cy.get('input[name="last_name"].textinput.textInput.form-control').as('LastName');
        cy.get('a[onclick="showEditRow(\'Talaa\')"]').as('Edit');
        cy.get('button[type="submit"].btn.btn-primary[onclick="saveEditRow(\'Talaa\')"]').as('Save');
    });

    it('Open staff page',()=>{
        cy.get('#staffs_wrapper').should('exist');
        cy.get('#staffs_filter').should('exist');
        cy.get('.dataTables_scroll').should('exist');
    });

    /*it('Add staff with valid name',()=>{
        cy.get('.toolbar').should('exist');
        cy.get('#new_staff').type('Tala');
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        cy.get('tr#staff_Tala').should('exist');
    });
    
    it('Add staff with not exist name',()=>{
        cy.get('.toolbar').should('exist');
        cy.get('#new_staff').type('Ahmad55');
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        cy.get('tr#staff_Ahmad55').should('exist');
    });

    it('search for valid staff',()=>{
        cy.get('label').contains('Search').should('exist');
        cy.get('input[type="search"]').type('Deema');
        cy.get('tr#staff_Deema').should('exist');
    });

    it('search for invalid staff',()=>{
        cy.get('label').contains('Search').should('exist');
        cy.get('input[type="search"]').type('Ali');
        cy.get('td.dataTables_empty').should('be.visible').and('contain.text', 'No matching records found');
    });

    it('remove a staff',()=>{
        cy.get('a[data-href="didoo"]').click({ force: true });

        cy.get('#confirm-delete')
          .should('be.visible')
          .within(() => {
            cy.get('.btn-default').click(); // Click on the "Cancel" button
            cy.get('.btn-danger').click(); // Click on the "Remove" button
          });
    });*/

  it('search for valid staff according upper case',()=>{
        cy.get('label').contains('Search').should('exist');
        cy.get('input[type="search"]').type('deema');
        cy.get('tr#staff_Deema').should('exist');
    });

      it('Add staff with symbols and numbers',()=>{
        cy.get('.toolbar').should('exist');
        cy.get('#new_staff').type('@@@@');
        cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        cy.get('tr#staff_\\@\\@\\@\\@.odd').should('exist');
    });

   it('edit first name of staff by valid user name',()=>{
        cy.get('@Edit').click({ force: true });
        cy.get('@FirstName')
        .invoke('val', 'tala');
        cy.get('@Save')
        .click({ force: true });
          });
    
          it('edit email of staff by valid user name',()=>{
            cy.get('@Edit').click({ force: true });
            cy.get('@Email')
            .invoke('val', 'tala@gmail.com');
            cy.get('@Save')
            .click({ force: true });
              });

              it('edit last name of staff by valid user name',()=>{
                cy.get('@Edit').click({ force: true });
                cy.get('@LastName').invoke('val', 'barham');
                cy.get('@Save')
                .click({ force: true });
                    }); 

            it('edit email,first name,last name of staff by valid user name',()=>{
            cy.get('@Edit').click({ force: true });
            cy.get('@FirstName').invoke('val', 'tala');
            cy.get('@Email').invoke('val', 't@gmail.com');
            cy.get('@LastName').invoke('val', 'barham');
            cy.get('@Save')
            .click({ force: true });
                });

         it('edit of staff goal permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Goals"][form="form_staff_Talaa"]').select('0', { force: true });
          cy.get('button[type="submit"].btn.btn-primary[form="form_staff_Talaa"][onclick="saveEditRow(\'Talaa\')"]')
            .click({ force: true });
        });
        
        it('edit of staff Observe permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Observe"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Observe"][form="form_staff_Talaa"]').select('1', { force: true });
         cy.get('button[type="submit"].btn.btn-primary[form="form_staff_Talaa"][onclick="saveEditRow(\'Talaa\')"]')
            .click({ force: true });
        });

       it('edit of staff  permission', () => {
          cy.get('@Edit').click({ force: true });
          cy.get('select[name="permissions_Staff"][form="form_staff_Talaa"] option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('0');
            expect($option.eq(1)).to.have.value('1');
            expect($option.eq(2)).to.have.value('2');
          });
          cy.get('select[name="permissions_Staff"][form="form_staff_Talaa"]').select('2', { force: true });
          cy.get('@Save')
            .click({ force: true });
        });

      it('cancel edit',()=>{
       cy.get('@Edit').click({ force: true });
        cy.get('@Email')
        .invoke('val', 'ttt@gmail.com');
         cy.get('button[type="reset"].btn.btn-danger[onclick="cancelEditRow(\'Talaa\')"]')
          .click({ force: true });
            });



});