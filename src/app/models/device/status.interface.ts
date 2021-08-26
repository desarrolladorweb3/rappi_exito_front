import { Device } from './device.interface';

export interface DevicesStatus {
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

