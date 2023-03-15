import { eOrderStatus } from "./eOrderStatus";

/**
 * Intefaces:
 * Describe the keys and the data types of the values inside a object
 */
export default interface iOrder {
  id: number;
  status: string; // "", " ", "order-info-received", "order-info-receive"
  eta: string;
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  user_phone: string;
  user_name: string;
  notes: string | null;
  last_updated: string;
}
