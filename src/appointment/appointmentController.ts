import config from '../config/config';

import got from 'got';
import { Appointment, AppointmentFilter } from './appointment';

export default {
  find(filter: AppointmentFilter = {}): Promise<Appointment[]> {
    return got
      .post(`${config.api.apiEndpoint}/action/find`, {
        headers: {
          'api-key': config.api.apiKey,
        },
        json: {
          dataSource: config.db.dataSource,
          database: config.db.database,
          collection: config.db.collection,
          filter,
        },
      })
      .json();
  },
};
