import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="container text-center">
      <h1 className="display-1 fw-bolder">:(</h1>
      <p className="display-5 text-break">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage