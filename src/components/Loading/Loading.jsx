import "./Loading.css"

function Loading() {
  return (
    <span 
      className={` loader dark:after:border-white after:border-solid dark:before-border-white before:border-2 before:border-solid after:border-black before:border-black`}
    />
  )
}

export default Loading