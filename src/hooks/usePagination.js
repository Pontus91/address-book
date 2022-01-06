import { useState } from 'react';

/**
 * @param itemAmount - number
 * @param itemsPerpage - number
 */
const usePagination = ({ itemsPerPage, itemAmount }) => {
  const savedPage = localStorage.getItem('savedPage')
  const [currentPage, setCurrentPage] = useState(parseInt(savedPage) || 1);

  const totalPages = Math.ceil(itemAmount / itemsPerPage);
  const lastPageIndex = currentPage * itemsPerPage;
  const firstPageIndex = lastPageIndex - itemsPerPage;

  const nextPage = () => {
    if (currentPage === totalPages) return;
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    localStorage.setItem('savedPage', newPage.toString());
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    localStorage.setItem('savedPage', newPage.toString());
  };

  return {
    currentPage,
    totalPages: totalPages,
    firstPageIndex,
    lastPageIndex,
    nextPage,
    prevPage,
  };
};

export default usePagination;
