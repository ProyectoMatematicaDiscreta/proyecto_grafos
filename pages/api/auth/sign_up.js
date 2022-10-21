//import { dbConnect } from "../../utils/DB/ConnectDB"
//dbConnect();
import joi from "@hapi/joi";
const schemaRegister = joi.object({
  name: joi.string().min(3).max(255).required(),
  email: joi.string().min(6).max(255).required().email(),
  name: joi.string().min(8).max(1024).required(),
})
export default function handlerSign_up(req, res) {
  const { body, method } = req;
  if (method == "POST") {
    const { name, email, password } = body;
    console.log(name, email, password);
    res.status(200).json({ name, email, password })
  }


}