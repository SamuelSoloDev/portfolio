

export function Card({name, logo}) {
  return(
    <div className=" max-h-50 max-w-50 gap-5
    group flex flex-col items-center justify-center
    rounded-xl border border-slate-200 dark:border-slate-800
     bg-white dark:bg-slate-900 p-6 transition-all
     hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">

      <img src={logo} alt=""
      className="min-h-20 min-w-15" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-primary group-hover:bg-primary/10 transition-colors">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{name}</h3>
      </div>
    </div>
  )
}