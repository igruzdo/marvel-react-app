import { useCallback, useState } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setLoading(true)

        try {
            const response = await fetch(url, { method, body, headers })
            const data = response.json()

            if(!response.ok) {
                throw new Error('error in useHttp')
            }
            setLoading(false)
            return data

        } catch(err) {
            setLoading(false)
            setError(err.message)
            throw err
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])
    return { loading, request, error, clearError }
}