#!/usr/bin/env node

import { readFileSync } from "fs";

interface EnvConfigs {
    [name: string]: EnvConfig;
}

interface EnvConfig {
  description: string;
}

const configs: EnvConfigs = JSON.parse(readFileSync(".picturesque", "ascii"));

Object.keys(configs).map(
  (env_key: string) => {
    if (process.env[env_key] === undefined || process.env[env_key].length < 1) {
      throw new Error(`Missing ${env_key} (${configs[env_key].description}`);
    }
  },
);
