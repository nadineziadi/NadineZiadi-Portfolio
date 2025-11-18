import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    const handleMouseMove = (e) => {
      if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (cursor && cursorFollower) {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      if (cursor && cursorFollower) {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default Cursor;