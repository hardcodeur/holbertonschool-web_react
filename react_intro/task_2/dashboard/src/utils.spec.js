import { getCurrentYear,getFooterCopy,getLatestNotification } from "./utils";

describe('Test utils.js', () => {
    
    describe('getCurrentYear()', () => {
        it('should return the current years', () => {
            const expectValue = new Date().getFullYear();
            const funcValue = getCurrentYear();
            expect(funcValue).toBe(expectValue);
        });
    });

    describe('getFooterCopy()', () => {
        it('Should return "Holberton School" value with true argument', () => {
            const expectValue = /Holberton School/;
            const funcValue = getFooterCopy(true)
            expect(funcValue).toMatch(expectValue);
        });
        it('Should return "Holberton School" value with false argument', () => {
            const expectValue = /Holberton School main dashboard/;
            const funcValue = getFooterCopy(false)
            expect(funcValue).toMatch(expectValue);
        });
    });

    describe('getLatestNotification()', () => {
        it('should return the good value', () => {
            const expectValue = '<strong>Urgent requirement</strong> - complete by EOD';
            const funcValue = getLatestNotification(false)
            expect(funcValue).toMatch(expectValue);
        });
    });

});