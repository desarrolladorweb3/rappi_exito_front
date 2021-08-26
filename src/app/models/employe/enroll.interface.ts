declare module enrolls {

    export interface Employed {
        document_number: string;
        device_custom_id?: any;
        manual_custom_id?: any;
        an8_jde: string;
        employed_name: string;
        employed_appointment: string;
        employed_appointment_code: string;
        employed_email: string;
        employed_phone: string;
        employed_is_enable?: boolean;
        contracting_party: string;
        created_at?: Date;
        update_at?: any;
    }

    export interface DeviceEnrroll {
        device_id: number;
        id_employed: string;
        finger_index: number;
        finger_print: string;
        privilegie: number;
    }

    export interface EmployEnrolls {
        employed: Employed;
        device_Enrroll: DeviceEnrroll;
    }
    
    export interface ReportObject {
        TotalRecordsFind: number;
        registers: Report[];
    }

    export interface Report {
        device_id: number;
        employed_id: string;
        record_time: Date;
        record_type_id: number;
        is_reported: boolean;
        register_read_time: Date;
    }

}

