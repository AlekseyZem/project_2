describe('Проверка авторизации', function () {
//1
//Напиши проверку на позитивный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик
    it('Правильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверили Цфет

         cy.get('#mail').type('german@dolnikov.ru');//Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');//Ввели пароль
         cy.get('#loginButton').click();//Нажали войти

         cy.wait(5000)

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что после авт.успешна
         cy.get('#messageHeader').should('be.visible');//Авторизация прошла успешно видно пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click();// Клик по крестику
        })
//2
//Напиши автотест на проверку логики восстановления пароля:
//а) Нажать «Забыли пароль»
//б) Ввести любой имейл
//в) Проверка, что получили нужный текст и есть кнопка крестика 
it('Напиши автотест на проверку логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    cy.get('#forgotEmailButton').click(); //Нажать «Забыли пароль»
    cy.get('#mailForgot').type('gerеman@dolnikov.ru');//Ввести любой имейл
    cy.get('#restoreEmailButton').click();//Нажали отправить код

   })
//3
//Напиши проверку на негативный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести НЕправильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик
it('Правильный логин и НЕ правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    
    cy.get('#mail').type('german@dolnikov.ru');//Ввели верный логин
    cy.get('#pass').type('iLoveq5astudio1');//Ввести НЕправильный пароль
    cy.get('#loginButton').click();//Нажали войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверить нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие кнопки крестик

})
//4
//Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик
it('НЕправильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт

    cy.get('#mail').type('germOan@dolnikov.ru');//Ввести НЕправильный логин
    cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
    cy.get('#loginButton').click();//Нажали войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверить нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Наличие кнопки крестик
    cy.get('#exitMessageButton > .exitIcon').click();// Клик по крестику

    
   })
//5
//Напиши проверку на негативный кейс валидации:
//а) Ввести логин без @
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что получаем текст с ошибкой
it('Логин без @ и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт

    cy.get('#mail').type('germandolnikov.ru');//Ввести логин без @
    cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
    cy.get('#loginButton').click(); //Нажали войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //Проверить нужный текст
    
})
//6
//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
//Важно: Разработчик допустил баг в этом месте и не реализовал пункт #2 из требований.
//Тест должен упасть — и это ок (то есть мы этим тестом поймали баг, который допустил разработчик)

//Все работает корректно, дефекта нент, есть соответсвующая надпись'Такого логина или пароля нет', ошибка в доке)


it('Строчные буквы в логине', function () {
    cy.visit('https://login.qa.studio/'); //Зашли на сайт
    
    cy.get('#mail').type('GErMan@Dolnikov.ru');//Ввести логин GerMan@Dolnikov.ru
    cy.get('#pass').type('iLoveqastudio1');//Ввели пароль
    cy.get('#loginButton').click();//Нажали войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})

//npm install --save-dev cypress@12.7.0
//npm i
//  npx cypress open    