declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_ENDPOINT: string;
      API_KEY: string;
      dataSource: string;
      database: string;
      collection: string;
      NODE_ENV?: 'development' | 'production' | 'test';
      PORT?: string;
    }
  }
}

export {};
