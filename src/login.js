import {
    users as sampleUsers,
    breaches as sampleBreaches,
    response as sampleResponse
  } from "./sample";
  
  function authenticate(email, password) {
    const account = sampleUsers.find(a => a.email === email);
    if (account && account.password === password) {
      return account;
    } else {
      return null;
    }
  }
  
  async function login(email, password) {
    const account = authenticate(email, password);
    if (account) {
      // A new breach was detected!
      if (sampleResponse.length > 0) {
        return {
          success: true,
          meta: {
            suggestPasswordChange: true,
            // hardcoded for now...
            breachedAccounts: sampleBreaches
          }
        };
      } else {
        return { success: true };
      }
    } else {
      return {
        success: false,
        message: "The username or password you entered is invalid."
      };
    }
  }
  
  export default login;
  