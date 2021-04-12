// src/app/basics.spec.ts

// Prüfling
const add = (a: number, b: number) => a + b;

// Testsuite
fdescribe('Add', () => {

    // Dieser Handler kommt vor jedem Testfall zur Ausführung
    beforeEach(() => {
        console.log('Vorbereitungsaufgaben ...');
    });

    // Testfall
    it('correctly adds 1 and 2', () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const c = add(a, b);

        // Assert
        expect(c).toBe(3);
        expect(c).not.toBe(4);
        expect(c).not.toBeNull();
        expect(c).toBeGreaterThan(0);

        const str = 'Result: ' + c;
        expect(str).toContain('Result');
        expect(str).toMatch(/Result/);

    });

});
