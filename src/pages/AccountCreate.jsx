import React ,{useState}from 'react';
import axios from 'axios';
const AccountCreate = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = async(e) => {
        e.preventDefault();
       
        try {
          const response = await axios.post('https://assignment-kody.onrender.com/api/create-account', {
            username,
            password,
          });
          alert("Account created successfully",response.data)
          console.log('Account created successfully:', response.data);
          // You can add further logic here based on your actual requirements
        } catch (error) {
          console.error('Error creating account:', error.message);
        }
      };
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
         
        UserAccount Creation    
      </h2>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="text" className="bg-gray-50 border
                       border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block
                         w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white
                           dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username"
                            value={username} onChange={(e) => setUsername(e.target.value)} required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"
                       name="password" id="password" placeholder="Password" 
                       className="bg-gray-50 border border-gray-300
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={password} onChange={(e) => setPassword(e.target.value)} required=""/>
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default AccountCreate;