// Importamos la clase que vamos a probar
const userService = require('./../app/UserService')
    // creacion de los casos a probar
describe("verificar creacion de ususarios", () => {
    // Prueba de caso 1
    test('Case1: creacion de usuarios con datos (id, username y name)', () => {
        // codigo que se desea probar
        const user = new userService(1, "ThatMan", "Gabriel")

        // Resultado que se espera de las pruebas
        expect(user.id).toBe(1);
        expect(user.username).toBe("ThatMan");
        expect(user.name).toBe("Gabriel");
        expect(user.bio).not.toBeUndefined();
        console.log(user.bio)
        console.log(user.dateCreated)
        console.log(user.lastUpdated)
    });
})