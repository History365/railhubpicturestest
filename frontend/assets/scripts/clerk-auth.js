// Clerk Authentication Handler
window.addEventListener("load", async () => {
  try {
    // Wait for Clerk to load
    await Clerk.load();
    
    // Get the auth buttons container
    const authButtonsContainer = document.getElementById("auth-buttons");
    
    if (Clerk.user) {
      // User is logged in
      authButtonsContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div id="user-button"></div>
          <button onclick="Clerk.signOut()" style="color: #444; text-decoration: none; font-weight: 500; padding: 0.7em 1.4em; border-radius: 6px; background: #f5f5f5; font-size: 0.95em; border: 1px solid #eee; cursor: pointer;">Log Out</button>
        </div>
      `;
      
      // Mount the user button
      const userButtonElement = document.getElementById("user-button");
      if (userButtonElement) {
        Clerk.mountUserButton(userButtonElement, {
          userProfileMode: 'navigation',
          userProfileUrl: '/userprofile.html',
          appearance: {
            elements: {
              rootBox: {
                boxShadow: 'none'
              },
              avatarBox: {
                width: '32px',
                height: '32px'
              }
            }
          }
        });
      }
      
      console.log("User is signed in:", Clerk.user.firstName);
    } else {
      // User is not logged in
      authButtonsContainer.innerHTML = `
        <button onclick="Clerk.openSignIn()" style="color: #444; text-decoration: none; font-weight: 500; padding: 0.7em 1.4em; border-radius: 6px; background: #f5f5f5; font-size: 0.95em; border: 1px solid #eee; cursor: pointer;">Log In</button>
        <button onclick="Clerk.openSignUp()" style="color: #fff; text-decoration: none; font-weight: 500; padding: 0.7em 1.4em; border-radius: 6px; background: #444; font-size: 0.95em; cursor: pointer;">Register</button>
      `;
      
      console.log("User is not signed in");
    }
  } catch (error) {
    console.error("Error initializing Clerk:", error);
    
    // Fallback to regular links if there's an error
    const authButtonsContainer = document.getElementById("auth-buttons");
    if (authButtonsContainer) {
      authButtonsContainer.innerHTML = `
        <a href="login.html" style="color: #444; text-decoration: none; font-weight: 500; padding: 0.7em 1.4em; border-radius: 6px; background: #f5f5f5; font-size: 0.95em; border: 1px solid #eee;">Log In</a>
        <a href="register.html" style="color: #fff; text-decoration: none; font-weight: 500; padding: 0.7em 1.4em; border-radius: 6px; background: #444; font-size: 0.95em;">Register</a>
      `;
    }
  }
});