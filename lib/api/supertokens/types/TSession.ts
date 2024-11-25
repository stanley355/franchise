export type TSession = {
    handle: string
    userId: string
    recipeUserId: string
    userDataInJWT: Record<string, any>
    tenantId: string
}
