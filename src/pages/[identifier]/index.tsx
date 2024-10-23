import type {NextPage} from "next"
import { useRouter } from "next/router";

const Move: NextPage = () => {
    const router = useRouter()
    const { query } = router

    return <h1>Test {query.identifier} </h1>
}

export default Move