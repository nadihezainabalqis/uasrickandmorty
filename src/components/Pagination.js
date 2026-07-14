function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-4">

      <button
        className="btn btn-secondary"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span className="btn btn-dark">
        {page} / {totalPages}
      </span>

      <button
        className="btn btn-secondary"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;