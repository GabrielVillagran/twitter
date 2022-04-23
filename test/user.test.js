// Importamos la clase que vamos a probar
const User = require('./../app/user')
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
})