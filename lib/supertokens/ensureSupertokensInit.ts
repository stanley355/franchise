import EmailPasswordNode from "supertokens-node/recipe/emailpassword";
import SessionNode from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import SuperTokens from "supertokens-node";
import { TypeInput } from "supertokens-node/types";
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/supertokens/constant";

const appInfo = {
    appName: "franchise",
    apiDomain: "http://localhost:3000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/supertokens",
    websiteBasePath: "/",
};


const superTokensConfig: TypeInput =  {
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: SUPERTOKENS_API_URL,
            apiKey: SUPERTOKENS_API_KEY,
        },
        appInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: [EmailPasswordNode.init(), SessionNode.init(), Dashboard.init(), UserRoles.init()],
        isInServerlessEnv: true,
        framework: "custom",
};

let initialized = false;
export function ensureSuperTokensInit() {
    if (!initialized) {
        SuperTokens.init(superTokensConfig);
        initialized = true;
    }
}
