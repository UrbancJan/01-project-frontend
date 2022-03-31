import Quote from "./quote";

interface User {
  id: number;
  email: string;
  name: string;
  lastnae: string;
  password: string;
  quote_id: number;
  quote: Quote;
}
export default User;
