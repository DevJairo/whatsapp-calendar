export interface ICustomer {
    id?: string;
    name: string;
    phone: string;
    estado: string;
}

export interface ICustomerData {
    id: string;
    data: ICustomer;
}