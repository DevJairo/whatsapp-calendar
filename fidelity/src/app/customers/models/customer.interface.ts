export interface ICustomer {
    $key?: string; //Angular necesita este campo.
    id: number;
    name: string;
    phone: string;
    estado: string;
}