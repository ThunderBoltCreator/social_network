import {createPaginate} from './createPaginate'

interface PaginationProps {
  onClick: (num: number) => void
  countPage: number
  currentPage: number
}

export function Pagination({onClick, countPage, currentPage}: PaginationProps) {
  const pageNumbers = createPaginate(currentPage, 5, countPage)

  const mapped = pageNumbers.map(el => (
    <button
      key={el}
      className={currentPage === el ? 'text-red-300 p-0.5' : 'p-0.5'}
      onClick={() => onClick(el)}
    >{el}</button>
  ))
  return (
    <div>
      {currentPage > pageNumbers.length && (
        <button onClick={() => onClick(1)}>1...</button>
      )}
      {mapped}
      {currentPage < countPage - pageNumbers.length && (
        <button onClick={() => onClick(countPage)}>...{countPage}</button>
      )}
    </div>
  )
}