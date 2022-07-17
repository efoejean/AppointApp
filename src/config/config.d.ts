export interface Config {
  baseUrl: string;
  db: {
    name: string;
    url: string | undefined;
  };
  port: number;
}
