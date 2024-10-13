import React, { useRef, useEffect } from 'react';

function Navbar() {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  function handleNav() {
    hamburgerRef.current.classList.toggle('active');
    navMenuRef.current.classList.toggle('active');
  }

  function closeNav() {
    hamburgerRef.current.classList.remove('active');
    navMenuRef.current.classList.remove('active');
  }

  // Close nav if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeNav();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <p><a href="/">Resume Generator</a></p>
      <div className="nav-menu" ref={navMenuRef}>
        <li><a onClick={closeNav} href="#">Templates</a></li>
        <li><a onClick={closeNav} href="#">Github</a></li>
        <li><a onClick={closeNav} href="#">Feedback</a></li>
      </div>
      <div onClick={handleNav} className="hamburger" ref={hamburgerRef}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
