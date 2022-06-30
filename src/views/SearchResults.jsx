import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Searchitems from '../components/Searchitems';
import { useSearch } from '../utils/hooks/useSearch';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')
  const [currentPage, setCurrentPage] = useState(1);
  const {results, isLoading, totalPages} = useSearch(query, currentPage);

  return (
    <div className='mx-4'>
      {
        isLoading && <div className="d-flex justify-center">
          <div className='loader' />
        </div>
      }
      {
        results.length === 0 && <p>No results for your search</p>
      }
      {
        results.length > 0 && <Searchitems
          results={results}
          totalPages={totalPages}>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </Searchitems>
      }
    </div>
  )
}

export default SearchResults