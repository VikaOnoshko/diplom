// import { useState } from 'react';
// import './index.less';

// export const Sort = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(0);
//   const list = ['популярности', 'цене'];

//   return (
//     <div className="sort">
//       <div className="sort__label">
//         <svg
//           width="20"
//           height="20"
//           viewBox="0 0 16 16"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M8 10L4.5 6h7L8 10z" fill="#000"></path>
//         </svg>
//         <b onClick={() => setOpen(!open)}>Сортировка по:</b>
//         <span>цене</span>
//         <div className="sort__nav"></div>
//       </div>
//       {open && (
//         <div className="sort__popul">
//           <ul>
//             {list.map((name, i) => (
//               <li
//                 key={i}
//                 onClick={() => setSelected(i)}
//                 className={selected === i ? 'active' : ''}
//               >
//                 {name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
