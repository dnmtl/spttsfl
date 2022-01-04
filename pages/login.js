import { getProviders } from "next-auth/react";

function Login({ providers }) {

  console.log('providers: ', providers);
  return (
    <div>
      <h1>This is login page</h1>
    </div>
  );
}

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
