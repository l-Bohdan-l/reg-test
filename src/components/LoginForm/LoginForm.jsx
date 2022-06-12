import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => { 
        switch (name) { 
            case 'email': 
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    return (
        <>
            
        </>
    )
}