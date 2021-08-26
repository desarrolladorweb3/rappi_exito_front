declare module OrderResponse {

    export interface OrderItem {
        sku: string;
        qty: number;
        unit_price: number;
        aviable: boolean;
        qty_aviable: number;
    }

    export interface Order {
        order_number: string;
        purchase_order?: any;
        name: string;
        last_name: string;
        document_type: string;
        document_number: string;
        email: string;
        address_invoice: string;
        phone: string;
        celphone: string;
        divipobla_invoice?: any;
        address_dispatch: string;
        name_dispatch: string;
        last_name_dispatch: string;
        davipobla_dispatch: string;
        phone_dispatch?: any;
        celphone_dispatch: string;
        tax_percentaje: number;
        origin: string;
        total_price: number;
        total_tax: number;
        date_created: Date;
        date_update: Date;
        user: number;
        isRapiTendero: string;
        orderItems: OrderItem[];
    }

    export interface Response {
        InvoiceGenerate: boolean;
        Message: string;
        invoiceNumber: string;
        orderNumber: string;
        order: Order;
    }

}