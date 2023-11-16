import React, { useState, useEffect } from 'react';
import UserModal from '../components/UserModal';

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        // Simulating fetching user data from a placeholder database (JSON file)
        const fetchData = async () => {
          try {
            // Fetch data from a local JSON file (replace with your API endpoint)
            const response = await fetch('/data/users.json');
            const userData = await response.json();
            setUsers(userData);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      

  
     
      const currentUsers = users
      .filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery.toLowerCase()) ||
        String(user.id).includes(searchQuery.toLowerCase())
      )
      
  
      // Change page
    
      const currentDate = new Date().toLocaleString();
      
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Reset to the first page when the search query changes
      };
      const openModal = (user) => {
        setSelectedUser(user);
      };
      const closeModal = () => {
        setSelectedUser(null);
      };
      const generateReport = (user) => {
        // Implement your report generation logic here
        
        console.log(`Generating report for user: ${user.username}`);
    console.log(`User ID: ${user.id}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}`);
      };    
    return (
        <>
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
             <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
             <div className="flex flex-wrap items-center">
             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <div className='flex flex-row'>
            
            <input type="text" id="first_name" value={searchQuery}
                      onChange={handleSearchChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Name, UserName, email" required/>
        </div>
        </div>
       
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center  w-full border-collapse  ">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Id
                        </th>
          <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                          UserName
                        </th>
           <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                          Email
                        </th>
          <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                         Phone
                        </th>
                        <th className="px-6 text-black font-bold bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left">
                         Creation Date
                        </th>
          </tr>
        </thead>

        <tbody>
        {currentUsers.map((user) => (
          <tr key={user.id} onClick={() => openModal(user)} style={{ cursor: 'pointer' }}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0    text-left text-black ">
            {user.id}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0    text-left text-black ">
            {user.username}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0    text-left text-black ">
            {user.email}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0    text-left text-black">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              {user.phone}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i> {currentDate}
            </td>
            </tr>
            ))}
            </tbody>
            </table>
        </div>
        </div>
        {selectedUser && (
        <UserModal user={selectedUser} onClose={closeModal} onGenerateReport={generateReport} />
      )}
        </div>
      </section>
    
    </>
    
    );
};

export default UserDetails;