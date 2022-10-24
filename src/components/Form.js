import styled from "styled-components"


const Form = ()=> {

    const FormContainer = styled.form`
        display: flex;
        align-items: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 0px #ccc;
        border-radius: 5px;
    `

    const InputArea = styled.div` 
        dispay: flex;
        flex-direction: column;
    `

    return (
        <FormContainer>

        </FormContainer>
    )
}

export { Form }