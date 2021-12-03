import react from "react"
import './App.css';
import axios from "axios"
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,TextArea,SuccessText} from "./components/UIelements"
import{FaPaperPlane} from "react-icons/fa"
// import Look from "./components/UI"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends react.Component{
    constructor(){
      super()
      this.state={
        pressure:'',
        humidity:'',
        vibration:'',
        voltage:'',
        current:'',
      }
      // this.componentDidMount=()=>{
      //   this.getServerData();
      // }

      // this.getServerData=()=>{
      //   axios.get('/backend/server/upload/:id')
      //   .then((response)=>{
      //     const data = response.data;
      //     this.setState =({posts:data});
      //     console.log("data has been received");
      //   })
      //   .catch(()=>{alert("Error receiving data")})
      // }
      
      this.changePressure = this.changePressure.bind(this)
      this.changeHumidity = this.changeHumidity.bind(this)
      this.changeVibration = this.changeVibration.bind(this)
      this.changeVoltage = this.changeVoltage.bind(this)
      this.changeCurrent = this.changeCurrent.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
    }

    changePressure(event){
      this.setState({
        pressure:event.target.value
      })
    }
    changeHumidity(event){
      this.setState({
        humidity:event.target.value
      })
    }
    changeVibration(event){
      this.setState({
        vibration:event.target.value
      })
    }
    changeVoltage(event){
      this.setState({
        voltage:event.target.value
      })
    }
    changeCurrent(event){
      this.setState({
        current:event.target.value
      })
    }

    onSubmit(event){
        event.preventDefault()

        const sensor= {
          pressure: this.state.pressure,
          humidity: this.state.humidity,
          vibration: this.state.vibration,
          voltage: this.state.voltage,
          current: this.state.current,
         }
         axios.post('http://localhost:5000/backend/server/upload',sensor)
              .then(response => console.log(response.data))
          
          this.setState({
            pressure:'',
            humidity:'',
            vibration:'',
            voltage:'',
            current:'',
          })
      }

    render(){
      return(
        <>
          <Container>
            <FormWrap>
            <Icon to="/">SAR Server</Icon>
              <FormContent>
              <Form onSubmit={this.onSubmit}>
              <FormH1>Insert the Data</FormH1>
              <FormLabel >Pressure</FormLabel>
                <FormInput type="text" 
                placeholder="enter pressure"
                onChange={this.changePressure}
                value={this.state.pressure}
                className="form-control form-group"  
                />
                <FormLabel >Humidity</FormLabel>
                <FormInput type="text" 
                placeholder="enter humidity"
                onChange={this.changeHumidity}
                value={this.state.humidity}
                className="form-control form-group"  
                />
                <FormLabel >Vibration</FormLabel>
                <FormInput type="text" 
                placeholder="enter vibration"
                onChange={this.changeVibration}
                value={this.state.vibration}
                className="form-control form-group"  
                />
                <FormLabel >Voltage</FormLabel>
                <FormInput type="text" 
                placeholder="enter voltage"
                onChange={this.changeVoltage}
                value={this.state.voltage}
                className="form-control form-group"  
                />
                <FormLabel >Current</FormLabel>
                <FormInput type="text" 
                placeholder="enter current"
                onChange={this.changeCurrent}
                value={this.state.current}
                className="form-control form-group"  
                />

                <FormButton type="submit" value='Submit'>Send To Database <FaPaperPlane/> </FormButton>
              </Form>
              </FormContent>
            </FormWrap>
          </Container>
        </>
      )
    }
}

export default App;
