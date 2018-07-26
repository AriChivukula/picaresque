#!/usr/bin/env node

import { readFileSync } from "fs";

interface EnvConfigs {
    [name: string]: EnvConfig;
}

interface EnvConfig {
  description: string;
}

const configs: EnvConfigs = JSON.parse(readFileSync(".picaresque", "ascii"));

Object.keys(configs).map(
  (env_key: string) => {
    if (process.env.hasOwnProperty(env_key)) {
      console.log(`Found ${env_key}`);
    } else {
      throw new Error(`Missing ${env_key} (${configs[env_key].description}`);
    }
  },
);
