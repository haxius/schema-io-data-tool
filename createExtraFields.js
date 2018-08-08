export default ({ update = {}, create = [] }, client) => {
  for(let modelKey in update) {
    const { extraFields } = update[modelKey];

    if (!!extraFields) {
      const path = `/:models/${modelKey}`;
      const data = { fields: { ...extraFields } };

      console.log(`ADDING fields to: ${modelKey}`);
      client.put(path, data);
    }
  }

  create.map(model => {
    const path = '/:models';
    const data = { api: "com", ...model };

    console.log(`CREATING model: ${model.label}`);
    client.post(path, data);
  });
};
