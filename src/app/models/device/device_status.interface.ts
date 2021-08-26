declare module StatusDevice {

    export interface Device {
        id: number;
        device_ip: string;
        device_name: string;
        device_status: boolean;
        device_description: string;
        device_port: string;
        device_created_at: Date;
        device_update_at?: any;
    }

    export interface RootObject {
        Device: Device;
        DeviceConnected: boolean;
        DevicePing: boolean;
        DateTimeRecord: string;
        DeviceMacAddress: string;
        DeviceSeralNumber: string;
        DeviceSdkVersion: string;
        AttendanceCapacity: number;
        AttendanceRecords: number;
    }

}

