//service.js

class Service {
    static schemas = {};

    static addSchema(name, schema) {
        this.schemas[name] = schema;
    }

    static getSchema(name) {
        return this.schemas[name];
    }

    async isValidRequestUser(data) {
        const schema = Service.getSchema('requestUser');
        schema.validateSync(data);
    }

    async isValidRequestLogin(data) {
        const schema = Service.getSchema('requestLogin');
        schema.validateSync(data);
    }
}

module.exports = Service;
