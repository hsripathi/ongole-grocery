export class OgProduct
{
    private id: string;
    private name: string;
    private price: string;
    private quantity:any;

    public setProductId (_id: string)
    {
        this.id = _id;
    }

    public getProductId ()
    {
        return this.id;
    }

    public setProductName (_name: string)
    {
        this.id = _name;
    }

    public getProductName ()
    {
        return this.name;
    }

    public setProductPrice (_price: string)
    {
        this.price = _price;
    }

    public getProductPrice ()
    {
        return this.price;
    }

    public setProductQuantity (_quantity: string)
    {
        this.quantity = _quantity;
    }

    public getProductQuantity ()
    {
        return this.quantity;
    }

    constructor () { }
}
