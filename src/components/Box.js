import { useState } from 'react';

export default function Box({ className, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${className} box`}>
      <button className="btn-toggle" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}
