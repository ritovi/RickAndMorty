import "./Base.css"

export const Base = ({ data }) => {

    return (
        <article className="base">
            <h2 className="base__name">{data?.name}</h2>
            <ul className="base__lista">
                <li className="base__item">
                    <span className="base__label">Type</span>
                    <span className="base__value">{data?.type}</span>
                </li>
                <li className="base__item">
                    <span className="base__label">Dimension</span> 
                    <span  className="base__value">{data?.dimension}</span>
                </li>
                <li className="base__item"> 
                    <span className="base__label">Population</span> 
                    <span className="base__value">{data?.residents.length}</span>
                </li>
            </ul>

        </article>
    )

}

export default Base