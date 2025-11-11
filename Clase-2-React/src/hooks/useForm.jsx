import { useState } from "react"


//CUSTOM HOOK
function useForm(initial_form_state, onSubmit) {
    const [form_state, setFormState] = useState(
        initial_form_state
    )

    function handleChange(event) {
        const { name, value } = event.target
        setFormState(
            (prevState) => {
                return { ...prevState, [name]: value }
            }
        )
    }

    function handleSubmit(event) {
        //Evitamos que se recarge la pagina (Comportamiento por defecto del form)
        event.preventDefault()
        onSubmit(form_state)
    }

    return { 
        form_state, 
        handleChange, 
        handleSubmit 
    }
}

export default useForm