import CONFIG from "./config.ts";

export type Configuration = {
  DATABASE: {
    HOST: string;
    PORT: number;
    USERNAME: string;
    PASSWORD: string;
    NAME: string;
  };
};

export default CONFIG as Configuration;
