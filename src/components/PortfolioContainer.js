import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
  // Defaulting to 'Work' as home page? What does the parameter mean? delete
  const [currentPage, setCurrentPage] = useState('About');

  // Return corresponding page component depending on value of currentPage
  const renderPage = () => {
    if (currentPage === 'Work') {
      return <Work />;
    } else if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Resume') {
      return <Resume />;
    } else {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id='flex-parent'>
      <Header handlePageChange={handlePageChange} />
      <main className='color-secondary'>{renderPage()}</main>
      <Footer />
    </div>
  );
}
