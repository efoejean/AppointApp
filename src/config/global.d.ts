declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      DB_NAME: string;
      DB_URL: string;
      NODE_ENV?: 'development' | 'production' | 'test';
      PORT?: string;
    }
  }
}

export {};
