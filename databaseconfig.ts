
interface Config {
  databaseURL: string;
}

const productionConfig: Config = {
  databaseURL:
    process.env.DATABASE_URL ?? `postgresql://postgres:${process.env.LOCAL_DB_PASSWORD}@localhost:5432/pawprint2`, //fallback db is the test db in case DATABASE_URL is not set
};

const testConfig: Config = {
  databaseURL: process.env.TEST_DATABASE_URL ?? `postgresql://postgres:${process.env.LOCAL_DB_PASSWORD}@localhost:5432/pawprint2`,
};

export const getConfig = (): Config => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.LOCAL_DB_PASSWORD)
  if (process.env.NODE_ENV === "production") {
    return productionConfig;
  } else {
    return testConfig;
  }
};
