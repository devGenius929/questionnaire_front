import { GetServerSideProps } from 'next';
import auth0 from './auth0';

const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const session = await auth0.getSession(context.req);

    if (session) {
      return {
        props: {
          session,
        },
      };
    }

    if (!session || !session.user) {
      context.res.writeHead(302, {
        Location: '/api/login',
      });
      context.res.end();
      return;
    }
  } catch (_error) {
    return { props: {} };
  }
};

export default getServerSideProps;
