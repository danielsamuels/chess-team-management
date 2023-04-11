import {useRouter} from "next/router";
import Link from "next/link";

export default function OrganisationDetail() {
    const router = useRouter();
    const {id} = router.query;

    return <main>
        <h1>How is it going {id}</h1>
        <Link href="/">Back home</Link>
    </main>
}