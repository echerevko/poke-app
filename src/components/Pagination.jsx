const Pagination = ({ handleNext, handlePrevious, offset, count }) => {
  return (
    <div className='pagination'>
      <button onClick={handlePrevious} disabled={offset <= 0}>
        {'<'} Prev
      </button>
      <button onClick={handleNext} disabled={offset >= count?.count}>
        Next {'>'}{' '}
      </button>
    </div>
  );
};

export default Pagination;
