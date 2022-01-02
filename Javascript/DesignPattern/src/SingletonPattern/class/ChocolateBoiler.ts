export default class ChocolateBoiler {
    private static _instance: ChocolateBoiler;

    private constructor() {
    }

    static getInstance() {
        if (ChocolateBoiler._instance) {
            console.log('Chocolate Instance exists.');
            return ChocolateBoiler._instance;
        }
        console.log('Chocolate Instance does not exist.');
        ChocolateBoiler._instance = new ChocolateBoiler();
        return ChocolateBoiler._instance;
    }

    static getInstanceWithThis() {
        if (this._instance) {
            console.log('Chocolate Instance exists.');
            return this._instance;
        }
        console.log('Chocolate Instance does not exist.');
        this._instance = new this();
        return this._instance;
    }
}