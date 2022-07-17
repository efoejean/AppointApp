export interface Appointment {
  id: number;
  name: string;
  dateAndTime: Date;
  phoneNumber: string;
  deposit: string;
  price: number;
  status: string;
  style: string;
  stylist: string;
  whenCreated: Date;
}

export type newAppointment = Omit<Appointment, 'id' | 'whenCreated'>;

export type AppointmentFilter =
  | Partial<Appointment>
  | {
      id: number;
    };

// - want to have a default value for whenCreated and status and role
// export type createAppointment = Omit<Appointment, 'id'>;

// export type defaultAppointment = Pick<Appointment, 'deposit' | 'whenCreated'>;

// const  defaultAppointment = Partial<createAppointment> {
//   const defaultOptions = {
//     name: '',
//     dateAndTime: new Date(),
//     phoneNumber: '',
//     deposit: 'Yes',
//     price: 0,
//     status: 'Scheduled',
//     style: '',
//     stylist: '',
//     whenCreated: new Date(),
//   };
//   return { ...defaultOptions, ...options };
// }
