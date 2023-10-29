export const InfoCard = ({
    activity,
    backgroundColor,
    image,
    currentDuration,
    gridTemplateArea,
    lastWeekDuration,
}) => {
    // Create a `borderRadius` constant to control the border radius of both the `.card` and `.content` using the same value.
    const borderRadius = 16;
    return (
        <>
            <div className="card stack v g-0">
                <div className="backdrop"></div>
                <div className="content stack v">
                    <h4>{activity}</h4>
                    <div className="stack v g-3">
                        <h1>{`${currentDuration}hrs`}</h1>
                        <p className="alt">{`Last Week – ${lastWeekDuration}hrs`}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                h1 {
                    font-size: 44px;
                    font-weight: 300;
                }
                h4 {
                    font-size: 16px;
                    font-weight: 500;
                }
                .alt {
                    color: #b5b5b5;
                }
                .backdrop {
                    background-color: ${backgroundColor};
                    background-image: url(${image});
                    background-repeat: no-repeat;
                    background-position: right 2% top 0%;
                    flex-grow: 0;
                    flex-shrink: 1;
                    height: ${40 + borderRadius}px;
                }
                .card {
                    border-radius: ${borderRadius}px;
                    grid-area: ${gridTemplateArea};
                    overflow: hidden;
                }
                .content {
                    background-color: rgb(30, 32, 71);
                    border-radius: ${borderRadius}px;
                    color: #fff;
                    flex-grow: 1;
                    flex-shrink: 0;
                    justify-content: space-between;
                    margin-top: -${borderRadius}px;
                    padding: 24px;
                }
            `}</style>
        </>
    );
};
