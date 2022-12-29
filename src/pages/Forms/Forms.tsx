import React,{ useState } from "react";
import { Button, Form, Input, Radio, DatePicker, Space, Modal} from 'antd';
import type { DatePickerProps } from 'antd';
import './Forms.css';
const onChange: DatePickerProps['onChange'] = (date:any, dateString:any) => {
    console.log(date, dateString);
  };

function Forms(){
  const[msg,setMsg]=useState('');

    const [currentValueRadio, setcurrentValueRadio] = React.useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleKeyDown = (event:any) => {

      var value:string=event.target.value;
     console.log("hi");
     if (event.key === 'Enter') {
       console.log('do validate',value)
       if(/^[0-9]{10}$/.test(value)==true){
         console.log("ghjj")
         setMsg("valid");
       
        //  alert("ok");
       }
       else{
        //  alert("not valid");
         setMsg("Not valid");
       }
     }
   };
   
    return(
        <div className="Formpage">
            <Button className="bgcolor" style={{display: 'inline-flex',justifyContent: 'center',alignItems: 'center',backgroundColor:"pink",marginTop:220}} onClick={() => {
          setIsModalVisible(true);
        }}>
          Let's fill the details to order
      </Button>
            <Modal title="Make an Order..!"
          open={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <Form>
                <Form.Item name="full name" label="Full Name">
                <Input placeholder="type your name"/>
                </Form.Item>
                <Form.Item name="last name" label="Last Name">
                <Input placeholder="type your name"/>
                </Form.Item>
                <Form.Item name="gender" label="Gender">
                <Radio.Group
                onChange={(e:any) => {
                console.log("radio checked", e.target.value);
                setcurrentValueRadio(e.target.value);
                }}
                value={currentValueRadio}
                >
                <Radio value={1}>Female</Radio>
                <Radio value={2}>Male</Radio>
                </Radio.Group>
                </Form.Item>
                <Form.Item name="dob" label="DOB">
                <Space direction="vertical">
                <DatePicker onChange={onChange} />
                </Space>
                </Form.Item>
                {/* <Form.Item name="phone no" label="Phone Number">
                <Input placeholder="type your name"/>
                </Form.Item> */}
                <Form.Item name="phone no" label="Phone Number">
                <Input style={{ width: '100%' }} onKeyDown={handleKeyDown} />
                <span style={{color:"#C5C5C5"}}>{msg}</span>
                

                </Form.Item>

                <Form.Item name="city" label="City"><Input placeholder="type your city"/></Form.Item>
                
            </Form>
  
        </Modal>

        </div>
    )

}
export default Forms;