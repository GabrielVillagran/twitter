// Importamos la clase que vamos a probar
const userService = require('../../app/services/UserService')
    // creacion de los casos a probar
describe("pruebas para clase UserService", () => {

    // Prueba de caso 1
    test('Case1: creacion de usuarios con datos (id, username y name)', () => {
        // codigo que se desea probar
        const user = userService.create(1, "ThatMan", "Gabriel")

        // Resultado que se espera de las pruebas
        expect(user.id).toBe(1);
        expect(user.username).toBe("ThatMan");
        expect(user.name).toBe("Gabriel");
        expect(user.bio).not.toBeUndefined();
    });
    // Prueba de caso 2
    test('Case2: metodo que recibe la clase user y me regresa una lista con todos los valores de los atributos', () => {
        // codigo que se desea probar
        const user = userService.create(1, "ThatMan", "Gabriel")
        const userList = userService.getInfo(user)

        // Resultado que se espera de las pruebas
        expect(userList[0]).toBe(1);
        expect(userList[1]).toBe("ThatMan");
        expect(userList[2]).toBe("Gabriel");
        expect(userList[3]).toBe("user 26757213");
    });
    // // Prueba de caso 3
    // test('Case3: actualizar el valor del atributo username', () => {
    //     // codigo que se desea probar
    //     const user = new userService(1, "ThatMan", "Gabriel")

    //     // actualizacion del valor

    //     user.setUsername = "Villagran29A"

    //     // Resultado que se espera de las pruebas
    //     expect(user.username).toBe("Villagran29A");
    // });
    // // Prueba de caso 4
    // test('Case4: lista de atributos de usuarios', () => {
    //     // codigo que se desea probar
    //     const user1 = userService.create(1, "ThatMan", "Gabriel")
    //     const user2 = userService.create(2, "Villagran29A", "Gabriel Villagran")
    //     const user3 = userService.create(3, "CausableMass4", "MeAndThatMan")
    //     const usernames = userService.getAllUsernames([user1, user2, user3])
    //         // Resultado que se espera de las pruebas
    //     expect(usernames).toContain("ThatMan");
    //     expect(usernames).toContain("Villagran29A");
    //     expect(usernames).toContain("MeAndThatMan");
    // });
})