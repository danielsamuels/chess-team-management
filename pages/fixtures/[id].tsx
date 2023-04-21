import {useRouter} from "next/router";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import {Fixture, getFixtures} from "@/lib/fixtures";


export default function FixtureDetail({fixture}: {fixture: Fixture}) {
    const router = useRouter();
    const {id} = router.query;

    return <main>
        <h1>{fixture.homeTeam} vs {fixture.awayTeam}</h1>
        <p>Date: {fixture.date} at {fixture.time}</p>
        <p>Location: {fixture.location}</p>
        <Link href="/">Back home</Link>
    </main>
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const fixtures = getFixtures();
    const fixture = fixtures.find(event => event.id === params.id);
    return {
        props: {fixture},
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    // Return a list of available IDs to be used in routing
    const fixtures = getFixtures();
    return {
        paths: fixtures.map(({id}) => ({
            params: {
                id,
            },
        })),
        // If an ID is requested that doesn't exist in the ICS, show a 404 page
        fallback: false,
    }
}