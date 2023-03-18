class House {
    id: number;
    address: string;
    country: string;
    price: number;
    photo?: string;
    description?: string;

    constructor(id:number, address: string, country: string, price:number) {
        this.id = id;
        this.address = address;
        this.country = country;
        this.price = price;
    }
}


export {House};