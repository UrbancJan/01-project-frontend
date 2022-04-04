import Quote from "./quote";

interface User {
  id: number;
  email: string;
  name: string;
  lastname: string;
  password: string;
  quote_id: number;
  quote: Quote;
}
export default User;
