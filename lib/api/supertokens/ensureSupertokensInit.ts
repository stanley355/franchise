import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import SuperTokens from "supertokens-node";
import SessionNode from "supertokens-node/recipe/session";
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword'
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/constant";
import {supertokensAppInfo} from "@/lib/api/supertokens/supertokensAppInfo";
import {TypeInput} from "supertokens-node/lib/build/types";

export const supertokensConfig: TypeInput =  {
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: SUPERTOKENS_API_URL,
            apiKey: SUPERTOKENS_API_KEY,
        },
        appInfo: supertokensAppInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: [SessionNode.init(), Dashboard.init(), UserRoles.init(), EmailPasswordNode.init()],
        isInServerlessEnv: true,
        framework: "custom",
};

let initialized = false;
export function ensureSuperTokensInit() {
    if (!initialized) {
        console.log(supertokensConfig)
        SuperTokens.init(supertokensConfig);
        initialized = true;
    }
}
