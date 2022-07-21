import config from '../config/config';

import got from 'got';
import {
  Appointment,
  AppointmentFilter,
  deleteAppointment,
  NewAppointment,
} from './appointment';

const apiEndPoint = config.api.apiEndpoint;
const headers = {
  'api-key': config.api.apiKey,
};

const dbConfig = {
  dataSource: config.db.dataSource,
  database: config.db.database,
  collection: config.db.collection,
};

export default {
  find(filter: AppointmentFilter = {}): Promise<Appointment[]> {
    return got
      .post(`${apiEndPoint}/action/find`, {
        headers,
        json: {
          ...dbConfig,
          filter,
        },
      })
      .json();
  },

  create(newAppointment: NewAppointment): Promise<Appointment> {
    return got
      .post(`${apiEndPoint}/action/insertOne`, {
        headers,
        json: {
          ...dbConfig,
          newAppointment,
        },
      })
      .json();
  },

  update(id: string, updateApp: NewAppointment): Promise<Appointment> {
    return got
      .post(`${apiEndPoint}/action/updateOne`, {
        headers,
        json: {
          ...dbConfig,
          filter: { _id: { $oid: id } },
          update: { $set: updateApp },
        },
      })
      .json();
  },

  delete(id: string): Promise<deleteAppointment> {
    return got
      .post(`${apiEndPoint}/action/deleteOne`, {
        headers,
        json: {
          ...dbConfig,
          filter: { _id: { $oid: id } },
        },
      })
      .json();
  },
};
