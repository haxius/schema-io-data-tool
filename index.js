import Schema from 'schema-client';
import dotenv from 'dotenv';
import loadJsonFile from 'load-json-file';
import createExtraFields from './createExtraFields.js';

// Load .env
dotenv.config();

const {
  CLIENT_ID,
  CLIENT_KEY,
  SCHEMA_FILE
} = process.env;

// Initialize Schema.io
const client = new Schema.Client(CLIENT_ID, CLIENT_KEY);

// Parse Model Changes
loadJsonFile(SCHEMA_FILE)
  .then(json => createExtraFields(json, client));
