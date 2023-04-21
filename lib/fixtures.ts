import ical, {VCalendar, VEvent} from 'node-ical';

const eventIdSuffix = '@ecflms.org.uk'


interface Event extends VEvent {
    summary: string;
    uid: string;
    time: string;
    categories: string[];
}

export interface Fixture {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    location: string;
}

const getAllFixtures = (): Fixture[] => {
    const calendar = ical.sync.parseFile('data/fixtures.ics');
    const events = Object.values(calendar).filter(e => e.type === 'VEVENT') as Event[];
    return events.map((event: Event, index, array): Fixture => {
        const [homeTeam, awayTeam] = event.summary.split(' v ');
        return ({
            id: event.uid.replace(eventIdSuffix, ''),
            homeTeam,
            awayTeam,
            date: formattedDate(event.start),
            time: event.time,
            location: event.location,
        });
    });
};

const getFixturesForTeams = (teams: Array<string>): Fixture[] => {
    return getAllFixtures().filter(f => {
        const inter = [f.homeTeam, f.awayTeam].filter(t => teams.includes(t))
        return inter.length > 0;
    })
}

export const getFixtures = (): Fixture[] => {
    return getFixturesForTeams(['Ely Beet Rooks']);
}

const formattedDate = (date: Date): string => {
    const formatter = new Intl.DateTimeFormat('default', {
        dateStyle: 'full',
    });
    return formatter.format(date);
}