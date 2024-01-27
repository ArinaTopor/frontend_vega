import { UseSelector, useSelector } from 'react-redux';
export function useAuth() {
    const { email, token, id } = useSelector(
        (state: { user: { email: string; token: string; id: number } }) =>
            state.user
    );
    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}
