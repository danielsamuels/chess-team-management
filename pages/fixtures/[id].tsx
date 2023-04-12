import {useRouter} from "next/router";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import ical, {VEvent} from 'node-ical';

const eventIdSuffix = '@ecflms.org.uk'

export default function FixtureDetail(event) {
    const router = useRouter();
    const {id} = router.query;

    console.log({event});

    return <main>
        <h1>{event.title}</h1>
        <p>Date: {event.startDate} {event.startTime}</p>
        <p>Location: {event.location}</p>
        <Link href="/">Back home</Link>
    </main>
}

interface Event extends VEvent {
    summary: string;
    uid: string;
    time: string;
    categories: string[];
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const events = ical.sync.parseFile('data/fixtures.ics');
    const event = events[params.id + eventIdSuffix] as Event;
    return {
        props: {
            id: params.id,
            title: event.summary,
            startDate: event.start.toISOString(),
            startTime: event.time,
            location: event.location,
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    // Parse the fixtures.ics file and return a list of available IDs to be used in routing
    const events = ical.sync.parseFile('data/fixtures.ics');
    return {
        paths: Object.keys(events).filter(e => e !== 'vcalendar').map(e => ({
            params: {
                id: e.replace(eventIdSuffix, ''),
            },
        })),
        // If an ID is requested that doesn't exist in the ICS, show a 404 page
        fallback: false,
    }
}