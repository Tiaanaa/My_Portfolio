import React from 'react'

const Footer = () => {
  return (

     <footer className=" px-4 sm:px-6 lg:px-8 bg-purple-300 dark:bg-gray-800 py-8 ">
          
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Omonola Christiana. All rights reserved.
              </p>
            </div>
          
        </footer> 

  )
}

export default Footer
