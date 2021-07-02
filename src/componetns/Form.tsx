import React, { FormEvent } from "react";

const Form = () => {
    let userRef:React.RefObject<HTMLInputElement> = React.createRef();
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log('submit')
        console.log('--------', userRef.current?.value)
        console.log('--------', userRef.current!.value)
        console.log('--------', (userRef.current as HTMLInputElement).value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            username: <input ref={userRef}/>
            password: <input />
            <button type="submit" > 提交 </button>
        </form>
    )
}

export default Form;