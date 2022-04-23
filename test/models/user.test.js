// Importamos la clase que vamos a probar
const User = require('../../app/models/user')
    // creacion de los casos a probar
describe("verificar creacion de ususarios", () => {
    // Prueba de caso 1
    test('Case1: creacion de usuario1', () => {
        // codigo que se desea probar
        const user1 = new User(1, "ThatMan", "Gabriel", "Bio")

        // Resultado que se espera de las pruebas
        expect(user1.id).toBe(1);
        expect(user1.username).toBe("ThatMan");
        expect(user1.name).toBe("Gabriel");
        expect(user1.bio).toBe("Bio");
    });
    // prueba de caso 2
    test('case2: dateCreated y lastUpdated guardan fecha al momento de instanciar', () => {
        // codigo que se desea probar
        const user2 = new User(1, "ThatMan", "Gabriel", "Bio")

        // Resultado que se espera de las pruebas
        expect(user2.dateCreated).not.toBeUndefined();
        expect(user2.lastUpdated).not.toBeUndefined();
    });
    // prueba de caso 3
    test('case3: Uso de  getters', () => {
        // codigo que se desea probar
        const user3 = new User(2, "ClayMorrow", "Ron Pearlman", "Bio")

        // Resultado que se espera de las pruebas
        expect(user3.getID).toBe(2);
        expect(user3.getUsername).toBe("ClayMorrow");
        expect(user3.getName).toBe("Ron Pearlman");
        expect(user3.getBio).toBe("Bio");
        expect(user3.getDateCreated).not.toBeUndefined();
        expect(user3.getLastUpdated).not.toBeUndefined();
    });
    // prueba de caso 4
    test('case4: Uso de setters', () => {
        // codigo que se desea probar
        const user2 = new User(1, "ThatMan", "Gabriel", "Bio")
        user2.setUsername = "That_Man29A"
        user2.setName = "Gabriel Villagran"
            // Resultado que se espera de las pruebas
        expect(user2.username).toBe("That_Man29A");
        expect(user2.name).toBe("Gabriel Villagran");
    });
})