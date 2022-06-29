import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Searchitems from '../components/Searchitems';
import { useSearch } from '../utils/hooks/useSearch';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')
  const {results, isLoading} = useSearch(query);
  return (
    <div className='mx-4'>
      {
        isLoading && <p>Searching...</p>
      }
      {
        results.length === 0 && <p>No results for your search</p>
      }
      {
        results.length > 0 && <Searchitems results={results} />
      }
    </div>
  )
}

export default SearchResults