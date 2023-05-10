"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationHandler = (schema) => {
    return (req, res, next) => {
        const options = {
            errors: {
                wrap: {
                    label: '',
                },
            },
        };
        const { error, value } = schema.validate(req.body, options);
        if (!error) {
            req.body = value;
            next();
        }
        else {
            const message = error.details[0].message;
            return res.status(400).json({ success: false, message: message });
        }
    };
};
exports.default = validationHandler;
