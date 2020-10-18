export interface User
{

  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
  };
  company: {
    name: string;
  };
}

