import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../modules/fetch";

const RegisterCard = (props) => {
  const { title } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(name, email, password);
      window.alert("registered success");
      navigate("/");
    } catch (e) {
      //   console.log(e);
      window.alert("erro saat register");
      throw e;
    }
  };

  return (
    <Card className="w-96">
      <CardHeader className="mb-4 grid h-28 place-items-center">
        <Typography variant="h3" color="black">
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          type="text"
          value={name}
          name="name"
          label="Enter your name"
          size="lg"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          value={email}
          name="email"
          label="Email"
          size="lg"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          value={password}
          name="password"
          label="Password"
          size="lg"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" onClick={handleSubmit} fullWidth>
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
