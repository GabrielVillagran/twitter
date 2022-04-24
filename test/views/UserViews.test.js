const UserView = require('../../app/views/UserView')
    // pruebas que se realizaran
describe("Tests para UserView", () => {
    // Prueba de caso 1
    test('Case1: Obtencion de objeto con la llave "error" indicando que el payload no existe ', () => {
        // codigo que se desea probar
        const payload = null
        const result = UserView.createUser(payload)

        // Resultado que se espera de las pruebas
        expect(result.error).toMatch(/payload no existe/);
    });
    // Prueba de caso 2
    test('Case2: Validar que un payload contenga username o name o id, en caso de encontrar null el payload arrojara `necesitan tener un valor válido', () => {
        // codigo que se desea probar
        const payload = { username: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)

        // Resultado que se espera de las pruebas
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    // Prueba de caso 3
    test('Case3: un payload creado regresa una llave error indicando que se necesita un valor valido cuando faltan propiedades', () => {
        // codigo que se desea probar
        const payload = { username: "username" }
        const result = UserView.createUser(payload)

        // Resultado que se espera de las pruebas
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    // Prueba de caso 4
    test('Case4: se debe crear un objeto user al enviar un payload con los datos username, id y name', () => {
        // codigo que se desea probar
        const payload = { username: "username", id: 1, name: "name" }
        const result = UserView.createUser(payload)

        // Resultado que se espera de las pruebas
        expect(result.username).toBe("username");
        expect(result.id).toBe(1);
        expect(result.name).toBe("name");
    });
})