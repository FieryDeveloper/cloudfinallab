import React from 'react';

// Import images from your local directory
import Image1 from 'C:\\Users\\Amogh\\Desktop\\Picture1.jpg';
import Image2 from 'C:\\Users\\Amogh\\Desktop\\Picture2.jpg';
import Image3 from 'C:\\Users\\Amogh\\Desktop\\Picture3.jpg';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Single Sign On</h1>
      <p className='mb-4 text-slate-700'>Single Sign-On addresses these challenges by providing a unified authentication mechanism that allows users to access multiple applications and services with a single set of login credentials. Instead of requiring users to authenticate separately for each platform, SSO streamlines the authentication process, enabling users to authenticate once and seamlessly access all authorized applications. </p>
      <p className='mb-4 text-slate-700'>
        Single Sign-On functions through a trusted partnership between two core entities: the Service Provider and the Identity Provider, exemplified by platforms like OneLogin. This trust is cemented through the exchange of a certificate, ensuring that identity information relayed from the IdP to the SP is authenticated and originates from a reliable source. Within the SSO framework, user identity is encapsulated within tokens, housing pivotal user details such as email addresses or usernames. The login process unfolds systematically: users begin by navigating to the desired application or website, commonly referred to as the Service Provider. Subsequently, the SP transmits a token containing user-specific data, like an email address, to the SSO system, represented by the Identity Provider, as part of an authentication request. The IdP then assesses to ascertain if the user has been previously authenticated. If authentication has been established, access to the SP application is granted without necessitating further authentication steps. However, if the user remains unauthenticated, they are prompted to furnish credentials, such as a username and password, to the IDP. Additional authentication methods like One-Time Passwords may also be utilized.
      </p>
      <p className='mb-4 text-slate-700'>SSO mitigates the temptation to reuse weak passwords across applications. Enforcing strong password policies on the IdP strengthens the overall security posture. SSO centralizes user authentication and access control, allowing for better monitoring and detection of suspicious activity.
        Reduced Attack Surface: With fewer login points on individual applications, SSO minimizes potential entry points for cyberattacks.
        Streamlined Administration: Centralized user management through SSO saves IT teams significant time and resources compared to managing individual application accounts.
        Reduced Help Desk Tickets: Simpler login processes lead to fewer password-related help desk requests, freeing up IT staff to focus on more strategic tasks.
      </p>

      {/* Add the three images below the existing content */}
      <div className='mt-8 grid grid-cols-3 gap-4'>
        <img src={Image1} alt='' className='w-full h-auto' />
        <img src={Image2} alt='' className='w-full h-auto' />
        <img src={Image3} alt='' className='w-full h-auto' />
      </div>
    </div>
  );
}
