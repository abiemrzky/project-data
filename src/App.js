import { Form, Input } from "antd";
import "./App.css";

const { Item } = Form;

function App() {
  return (
    <div className="test">
      <div className="body-form">
        <Form labelCol={{ span: 2 }} wrapperCol={{ span: 16 }}>
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
