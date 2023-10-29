import { InfoCard } from "../components/InfoCard";
import { ProfileCard } from "../components/ProfileCard";

/**
 * ----- IMPORTANT -----
 * The `.stack`, `.v`, and other flat CSS was added in the `_app.js` page. These are
 * global styles used accross the entire site. It is always a good idea to flatten
 * and re-use your code, including CSS, as much as possible. The implementation could've
 * been tremendously more flat, but I didn't want to make it a minefield.
 */

export default function Home() {
    // Array of cards to `.map` over dynamically. This data can come from a database.
    const cards = [
        {
            activity: "Work",
            backgroundColor: "hsl(15, 100%, 70%)",
            image: "images/icon-work.svg",
            duration: {
                current: 32,
                last: 36,
            },
            gridTemplateArea: "a",
        },
        {
            activity: "Play",
            backgroundColor: "hsl(195, 74%, 62%)",
            image: "images/icon-play.svg",
            duration: {
                current: 10,
                last: 8,
            },
            gridTemplateArea: "b",
        },
        {
            activity: "Study",
            backgroundColor: "hsl(348, 100%, 68%)",
            image: "images/icon-study.svg",
            duration: {
                current: 4,
                last: 7,
            },
            gridTemplateArea: "c",
        },
        {
            activity: "Exercise",
            backgroundColor: " hsl(145, 58%, 55%)",
            image: "/images/icon-exercise.svg",
            duration: {
                current: 4,
                last: 5,
            },
            gridTemplateArea: "d",
        },
        {
            activity: "Social",
            backgroundColor: "hsl(264, 64%, 52%)",
            image: "images/icon-social.svg",
            duration: {
                current: 5,
                last: 10,
            },
            gridTemplateArea: "e",
        },
        {
            activity: "Self Care",
            backgroundColor: "hsl(43, 84%, 65%)",
            image: "images/icon-self-care.svg",
            duration: {
                current: 2,
                last: 2,
            },
            gridTemplateArea: "f",
        },
    ];
    return (
        <>
            {/**
             * The `.container` div is ONLY used to center the `.grid` in the page. Check the CSS down below.
             */}
            <div className="container stack v">
                <div className="grid">
                    <ProfileCard
                        firstName="Jeremy"
                        gridTemplateArea="profile"
                        lastName="Robson"
                    />
                    {cards.map((c, i) => {
                        return (
                            /**
                             * ----- NOTE -----
                             * The `currentDuration` and `lastWeekDuration` props could have been
                             * grouped in a single object called, for example, `duration`, which
                             * would typically look like this:
                             *
                             * duration={{
                             *  current: 32,
                             *  last: 36,
                             * }}
                             *
                             * However, keeping your props flat is almost always better.
                             */
                            <InfoCard
                                activity={c.activity}
                                backgroundColor={c.backgroundColor}
                                image={c.image}
                                currentDuration={c.duration.current}
                                gridTemplateArea={c.gridTemplateArea}
                                lastWeekDuration={c.duration.last}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                .container {
                    align-items: center;
                    height: 100vh;
                    justify-content: center;
                    width: 100vw;
                }
                .grid {
                    display: grid;
                    grid-gap: 12px;
                    grid-template-areas:
                        "profile a b c"
                        "profile d e f";
                    grid-template-columns: 220px 220px 220px 220px;
                    grid-template-rows: 200px 200px;
                }

                /******media query **************/

                @media (max-width: 375px) {
                    .container {
                        width: 100%;
                        height: 100%;
                    }
                    .grid {
                        grid-template-areas:
                            "profile"
                            "a"
                            "b"
                            "c"
                            "d"
                            "e"
                            "f";
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr repeat(6, 0.5fr);
                    }
                }
            `}</style>
        </>
    );
}
