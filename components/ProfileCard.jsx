export const ProfileCard = ({ firstName, gridTemplateArea, lastName }) => {
    // Since the `borderRadius` value is the same in the `InfoCard` component and the `ProfileCard` component,
    // then in theory we could create a global variable and use it everywhere in our site.
    const borderRadius = 16;
    const padding = 24;
    return (
        <>
            <div className="card stack v">
                <div className="content">
                    <div className="profile-picture">
                        <img src="../images/image-jeremy.png" />
                    </div>

                    <div className="stack v g-1">
                        <p className="alt">Report for</p>
                        <h1>{`${firstName} ${lastName}`}</h1>
                    </div>
                </div>
                <div className="filters stack v g-3">
                    <p className="alt">Daily</p>
                    <p>Weekly</p>
                    <p className="alt">Monthly</p>
                </div>
            </div>
            <style jsx>{`
                h1 {
                    font-size: 32px;
                }
                .alt {
                    color: #b5b5b5;
                }
                .card {
                    background-color: rgb(30, 32, 71);
                    border-radius: ${borderRadius}px;
                    color: #fff;
                    grid-area: ${gridTemplateArea};
                    overflow: hidden;
                }
                .content {
                    background-color: rgb(84, 70, 225);
                    border-radius: ${borderRadius}px;
                    flex-grow: 1;
                    flex-shrink: 0;
                    padding: ${padding}px;
                    z-index: 5;
                }
                .filters {
                    flex-grow: 0;
                    flex-shrink: 1;
                    justify-content: space-between;
                    padding: ${padding}px;
                    z-index: 0;
                }
                .profile-picture {
                    height: 4rem;
                    margin-bottom: 30px;
                    width: 4rem;
                }
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 2px solid white;
                }

                @media (max-width: 375px) {
                    .filters {
                        flex-direction: row;
                    }
                }
            `}</style>
        </>
    );
};
