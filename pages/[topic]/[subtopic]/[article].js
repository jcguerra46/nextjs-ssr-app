import Container from '../../../components/container';

const ShowArticle = (props) => {


    return (
        <Container>
            <div className="row">
                <div className="row com-titleWithfollow hlp-marginBottom-15">
                    <h1 className="com-title-section-xl hlp-marginBottom-40">Headlines de la Receta</h1>
                </div>
                <div className="com-titleWithfollow hlp-marginBottom-15">
                    <p><h2 className="com-title --threexl">Subtitle de la Receta</h2></p>
                </div>
            </div>
            <img src="https://via.placeholder.com/366x177?text=?" />
        </Container>
    )
}

export default ShowArticle;