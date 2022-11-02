import React from "react";
import styles from "./Pagenator.module.css";
import { useState } from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChenged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1 ) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize
  return <div className={styles.paginator}>
    {portionNumber > 1 &&
    <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
    {pages
    .filter(p => p  >= leftPortionNumber && p <=rightPortionNumber)
    .map((p) => {
      return <span className={({
        [styles.selectedPage]: currentPage === p
      }, styles.pageNumber)}
      key={p}
      onClick={(e) => {
        onPageChenged(p)
      }}>{p}</span>
    })}
    {portionCount > portionNumber &&
    <button onClick={()=> {setPortionNumber(portionNumber + 1 )}}>Next</button>}
  </div>
  }
export default Paginator; 










/*
<div>
      {pages.map(p => {
        return (
          <span
            className={currentPage === p && styles.selectedPage}
            onClick={() => {
              onPageChenged(p);
            }}
          >
            {p}
          </span>
        );
      })}
 </div>
*/

























/*
let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChenged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  return <div>
    {slicedPages.map((p) => {
      return (
        <span
          className={currentPage === p && styles.selectedPage}
          onClick={() => {
            onPageChenged(p);
          }}
        >
          {p}
        </span>
      );
    })}
 </div>
}
export default Paginator;
*/