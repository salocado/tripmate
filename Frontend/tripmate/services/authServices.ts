// Author: Salome Schmied

const decodeToken = (token: string): { [key: string]: any } | null => {
    try {
        const payload = token.split('.')[1];
        const decodedPayload = atob(payload);
        return JSON.parse(decodedPayload);
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};

const isTokenExpired = (token: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) {
        return true;
    }
    const currentTime = Math.floor(Date.now() / 1000); // Time in seconds
    return decoded.exp < currentTime;
};

export const getToken = (): string | null => {
    const token = localStorage.getItem('token');
    if (token && isTokenExpired(token)) {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
        return null;
    }
    if (!token) {
        window.location.href = '/sign-in';
        return null;
    }
    return token;
};