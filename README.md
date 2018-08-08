# Schema.io Data Tool

Unofficial tool to inflate custom data models as well as append fields to existing models from a JSON file.

Built with:
* Node.js v8.11.3
* Babel Node v6.26
* Schema NODE client v3.0.11

Additional Dependencies:
* DOTENV v6
* Load-JSON-File v5
* Babel-Preset-Env v1.7
* Babel-Plugin-Transform-Object-Rest-Spread v6.26

## Useage

* clone repository
* npm i
* cp .env.example .env
* Add CLIENT_ID, CLIENT_KEY fields
* Modify schema.json to include your custom fields
* npm run setup
* done

## Schema.JSON

```
{
  "update": {
    <models to update as objects>,

    "pages": {
      "extraFields": {
        "field_name": {
          ...<see schema.io docs>
        }
      }
    }
  },
  "create": [
    <models to create>

    "vendor": {
      "name": "vendor",
      "label": "Vendor",
      "fields": {
        ...<see schema.io docs>
      }
    }
  ]
}
```