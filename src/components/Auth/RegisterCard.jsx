import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const RegisterCard = (props) => {
  const { title } = props;
  return (
    <Card className="w-96">
      <CardHeader className="mb-4 grid h-28 place-items-center">
        <Typography variant="h3" color="black">
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Username" size="lg" />
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Confirm Password" size="lg" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Register
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
