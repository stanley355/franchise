
export  const checkApiSessionExpired = (apiResponse: any) => {
    return apiResponse?.statusCode === 401 && apiResponse?.message === "Access token expired";
}