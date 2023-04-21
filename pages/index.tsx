import {Fixture, getFixtures} from "@/lib/fixtures";
import {GetStaticProps} from "next";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Link from "next/link";

export default function Home({fixtures}: {fixtures: Fixture[]}) {
    const rows = fixtures.map(f => {
        return ({
            id: f.id,
            date: f.date,
            homeTeam: f.homeTeam,
            awayTeam: f.awayTeam,
        });
    });

    return (<>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Home Team</TableCell>
                        <TableCell>Away Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row =>
                        <TableRow key={row.id}>
                            <TableCell>
                                <Link href={`/fixtures/${row.id}`}>{row.date}</Link>
                            </TableCell>
                            <TableCell>{row.homeTeam}</TableCell>
                            <TableCell>{row.awayTeam}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const fixtures = getFixtures();
    return {
        props: {
            fixtures,
        }
    }
};