//import { dbConnect } from "../../utils/DB/ConnectDB"
//dbConnect();
export default function handlerSign_up(req, res) {
  const { body, method } = req;
  if (method == "POST") {
    const { name, email, password } = body;
    console.log(name, email, password);
    res.status(200).json({ name: 'John Doe' })
  }


}