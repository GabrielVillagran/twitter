const User = require('./../app/user')
describe("verificar creacion de ususarios", () => {
    test('Case: creacion de usuario1', () => {
        // codigo que se desea probar
        const user1 = new User(1, "ThatMan", "Gabriel", "Bio", "dateCreated", "lastUpdated")
            // Resultado que se espera de las pruebas
        expect(user1.id).toBe(1);
        expect(user1.username).toBe("ThatMan");
        expect(user1.name).toBe("Gabriel");
        expect(user1.bio).toBe("Bio");
        expect(user1.dateCreated).toBe("dateCreated");
        expect(user1.lastUpdated).toBe("lastUpdated");
    });
})