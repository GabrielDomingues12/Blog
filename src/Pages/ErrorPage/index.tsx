import { useRouteError } from "react-router-dom"

const Index = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <>
            {error && (
                <div>
                    <h1>Ops...!</h1>
                </div>
            )}
        </>
    )
}

export default Index