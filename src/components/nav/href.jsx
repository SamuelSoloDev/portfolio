import { textFormat } from "../../utils/textRefFormat";

export function ButtonRef({refer}) {
  return(
    <a
    className="text-slate-600 dark:text-slate-400
    hover:text-[#13ec6d] dark:hover:text-primary text-md font-medium transition-colors"
    href={`#${textFormat(refer)}`}>
      {refer}
    </a>
  )
}