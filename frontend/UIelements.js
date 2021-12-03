import styled from "styled-components";

export const Container = styled.div `
    width:100%;
    height:100%;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    background: linear-gradient(180deg, rgba(148,46,126,1)0%, rgba(128,430,250,1)100%);
`;

export const FormWrap = styled.div `
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;

    @media screen and (max-width: 480px){
        height:80%;
    }
`

export const Icon = styled.div`
    color:#fff;
    font-size:40px;
    align-items:center;
    font-weight:bold;
    text-decoration:none;
    float:left;
    padding:5px;
    max-width: 500px;
    margin-top:30px;

     @media screen and (max-width:480px){
        display:none;
    } 
`;

export const FormContent = styled.div `
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width: 480px){
        padding:10px;
    }
`

export const Form = styled.form `
    background:white;
    max-width:800px;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:50px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 480px){
        padding:30px 25px;
    }
`;

export const FormH1 = styled.h1 `
    margin-bottom: 48px;
    color: #010101;
    font-size:40px;
    font-weight: 500;
    text-align: center;
    top:5px;

    @media screen and (max-width:480px){
        font:size:10px;
    }
`;

export const FormLabel = styled.label `
    margin-bottom:8px;
    font-size:20px;
    color:#010101;
`;

export const FormInput = styled.input `
    padding:16px 16px;
    margin-bottom:32px;
    border-radius: 4px;
    font-size:20px;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 15px;
    }
`;

export const FormButton = styled.button`
    background: linear-gradient(270deg, rgba(148,46,126,1)50%, rgba(128,430,250,1)100%);
    padding:16px 0;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-size:28px;
    cursor:pointer;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 0px;
    }
`;


export const TextArea = styled.textarea `
    padding:16px 20px;
    margin-bottom:32px;
    border:none;
    border-radius: 4px;
    rows:"40"; 
    cols:"100";
    font-size:20px;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 15px;
    }
`;

export const SuccessText = styled.p `
    color:white;
    text-align:center;
    justify-content:center;
    font-size:10px;
    margin-top:10px;

    @media screen and (max-width:480px){
        font:size:5px;
    }
`