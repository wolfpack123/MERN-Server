import React,{useRef,useState} from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,TextArea,SuccessText} from "../components/UIelements"
import{FaPaperPlane} from "react-icons/fa"

const Result = () =>{
    return <h1>Sent Successfully!</h1>
}
const ContactPage = () => {
    // const [result,showResult] = useState(false);
    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_oa9ohen', 'template_398n3gi', form.current, 'user_mVjaxwbe0g7r65vGy3BSY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     e.target.reset();
    //     showResult(true);
    // };
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">SAR Server</Icon>
                <FormContent>
                <Form>
                    {/* <Form ref={form} onSubmit={sendEmail}> */}
                        <FormH1>Insert the Data</FormH1>
                        <FormLabel >Pressure</FormLabel>
                        <FormInput type='text' name="name" placeholder= "enter pressure..." required />
                        <FormLabel >Humidity</FormLabel>
                        <FormInput type='text' name="name" placeholder= "enter humidity..." required />
                        <FormLabel >Vibration</FormLabel>
                        <FormInput type='text' name="name" placeholder= "enter vibrations..." required />
                        <FormLabel >Voltage</FormLabel>
                        <FormInput type='text' name="name" placeholder= "enter voltage..." required />
                        <FormLabel >Current</FormLabel>
                        <FormInput type='text' name="name" placeholder= "enter current..." required />
                        <FormButton type="submit" value="Send">Send to database <FaPaperPlane/></FormButton>
                        {/* <SuccessText>{result ? <Result/> : null}</SuccessText> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default ContactPage
