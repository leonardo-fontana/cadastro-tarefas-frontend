import styled from "styled-components"

const InputField = styled.input`
    width: 100%;
    max-width: 500px;
    border:none;
    background-color: #ffffff;
    padding:10px 5px;
    box-shadow: 1px 1px 1px  #666;
`

const Sign = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:100%;
    min-height:100%;
`

export {
    Sign,
    InputField
}