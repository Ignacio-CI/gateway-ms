export default function makeProtectedRoutes({ getCache, makeInputObj }) {

    return Object.freeze({ protectedRoutes })

    async function protectedRoutes({ token, data, cacheConfig }) {
        try {
            const tokenFactory = makeInputObj({ params: { token } });
            const bearerToken = tokenFactory.token()
            const cachedData = await getCache({ cacheKey: bearerToken, config: cacheConfig});
            
            if (!cachedData) throw new Error ('Unauthorized')

            return ({
                error: 0,
                data: {
                  ok: true
                }
              })
        } catch (err) {
            throw err
        }

    }
}