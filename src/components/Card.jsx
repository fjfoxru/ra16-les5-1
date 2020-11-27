function Card (props) {

    return (
        <article className="card">
            {props.item.img_url && <img className="card__img" src={props.item.img_url} />}
            <header className="card__header">
                <div className="card__title">{props.item.title}</div>
            </header>
            <div className="card__content">
                {props.children}
            </div>
            <footer className="card__footer">
                <a href={props.item.url} className="card__button">Go somewhere</a>  
            </footer>
        </article>

    );

}



export default Card;