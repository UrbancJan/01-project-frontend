import Quote from "./quote";

interface User {
  id: number;
  email: string;
  name: string;
  lastname: string;
  password: string;
  quote_id: number;
  quote: Quote;
  //votestatus rabimo da nastavimo pravilno barvo upvota in downvota
  votestatus?: number;
}
export default User;
