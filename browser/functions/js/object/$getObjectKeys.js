import { TranspilerError } from "../../../core/error.js";
import { escapeResult, escapeVars, } from "../../../util/transpilerHelpers.js";
export const $getObjectKeys = {
    name: "$getObjectKeys",
    brackets: true,
    optional: false,
    type: "getter",
    fields: [
        {
            name: "name",
            type: "string",
            required: true,
        }
    ],
    version: "7.0.0",
    description: "returns all the key in the object",
    default: ["void",],
    returns: "void",
    code: (data, scope) => {
        const currentScope = scope[scope.length - 1];
        const name = data.inside;
        if (!name &&
            !currentScope.name.startsWith("$try_") &&
            !currentScope.name.startsWith("$catch_")) {
            throw new TranspilerError(`${data.name}: No name Provided`);
        }
        if (!currentScope.objects[name] &&
            !currentScope.name.startsWith("$try_") &&
            !currentScope.name.startsWith("$catch_")) {
            throw new TranspilerError(`${data.name}: Invalid Object Name Provided`);
        }
        const res = escapeResult(`Object.keys(${escapeVars(name)}).join(", ")`);
        currentScope.update(res, data);
        return {
            code: res,
            scope,
        };
    },
};
//# sourceMappingURL=$getObjectKeys.js.map