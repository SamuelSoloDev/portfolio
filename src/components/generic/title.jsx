


export function Title({classes}) {
  return (
    <div className= {`${classes} text-2xl items-center  gap-4 flex p-4 w-full m-0`} >
      <svg className="w-10 h-10 rounded-md"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="4" fill="#f8fafc"/>


  <path d="M6 8L10 12L6 16" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>


  <line x1="12" y1="16" x2="18" y2="16" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
</svg>
      <h1 className={` font-bold p-1 text-slate-900 dark:text-slate-100`}>Dev Portfolio</h1>
    </div>
  )
}