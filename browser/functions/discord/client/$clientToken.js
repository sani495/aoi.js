import { escapeResult } from "../../../util/transpilerHelpers.js";
export const $clientToken = {
    name: "$clientToken",
    type: "getter",
    brackets: false,
    optional: false,
    fields: [],
    version: "7.0.0",
    default: [],
    returns: "string",
    description: "Returns the token of client",
    code: (data, scope) => {
        // Getting the current scope
        const currentScope = scope[scope.length - 1];
        // Getting the client token
        const clientToken = "__$DISCORD_DATA$__.client?.token";
        // Returning the result
        const res = escapeResult(clientToken);
        currentScope.update(res, data);
        return {
            code: res,
            scope,
        };
    }
};
//# sourceMappingURL=$clientToken.js.map