const user = require('./../app/user')
describe("verificar creacion de ususarios", () => {
    test('Case: creacion de usuario1', () => {
        // codigo que se desea probar
        const user = new user(1, "ThatMan", "Gabriel", "Bio", "dateCreated", "lastUpdated")
            // Resultado que se espera de las pruebas
        expect(user.id).toBe(1);
        expect(user.username).toBe("ThatMan");
        expect(user.name).toBe("Gabriel");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.dateUpdated).toBe("lastUpdated");
    });
})