import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Please Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
