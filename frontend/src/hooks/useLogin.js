import { useState } from 'react';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        var json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save user to localstorage
            var user = {user: json.user, timestamp: new Date().getTime() }
            localStorage.setItem('user', JSON.stringify(user))

            // // update auth context
            // dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}