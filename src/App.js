import { Form, Input } from "antd";
import "./App.css";

const { Item } = Form;

function App() {
  return (
    <div className="forms-bg">
      <div className="forms">
        <Form
          layout="horizontal"
          labelCol={{ span: 3 }}
          // wrapperCol={{ span: 16 }}
        >
          <Item label="Nama" name="name">
            <Input size="small" />
          </Item>
          <Item label="Jabatan" name="jabatan">
            <Input size="small" />
          </Item>
        </Form>
      </div>
    </div>
  );
}

export default App;
