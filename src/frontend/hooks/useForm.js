import { useState } from 'react';

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    function updateForm(key, value) {
        setForm({...form, [key]: value});
    }

    return {
        form,
        updateForm,
    }
};

export default useForm;