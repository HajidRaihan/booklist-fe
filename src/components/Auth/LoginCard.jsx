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

const LoginCard = (props) => {
  const { title, emailValue, passwordValue, passwordOnChange, emailOnChange, loginHandler } = props;
  return (
    <Card className="w-96">
      <CardHeader className="mb-4 grid h-28 place-items-center">
        <Typography variant="h3" color="black">
          {title}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" type="email" size="lg" value={emailValue} onChange={emailOnChange} />
        <Input
          label="Password"
          type="password"
          size="lg"
          value={passwordValue}
          onChange={passwordOnChange}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={loginHandler}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/register"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
