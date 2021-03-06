var uuid = require('uuid');

var responder = {
    createErrorResponse:function(error) {
        var operationOutcome = this.createOperationOutcome(error);
        var httpStatusError = this.createHttpErrorStatus(error);
        
        return {
            operationOutcome,
            httpStatusError
        }
    },
    createOperationOutcome:function(error) {
        return {
            resourceType: 'OperationOutcome',
            id: uuid.v4(),
            issue: [
              {
                code: error.code || 'processing',
                severity: error.severity || 'fatal',
                diagnostics: error.diagnostics || error.stack
              }
            ]
        };
    },
    createHttpErrorStatus:function(error) {
        return {
            error: error.text,
            status: { code: error.status }
        };
    }
}

module.exports = {
    responder
}