import Container from '../../../components/container';

const ShowArticle = (props) => {


    return (
        <Container>
            <div className="row">
                <div className="com-titleWithfollow hlp-marginBottom-15">
                    <h1 className="com-title-section-xl hlp-marginBottom-40">Headlines de la Receta</h1>
                    <h2 class="com-title --threexl">Subtitle de la Receta</h2>
                </div>
            </div>

            
            <img src="https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg" width="600"/>
        </Container>
    )
}

export default ShowArticle;