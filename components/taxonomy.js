import Tag from './tag';

const Taxonomy = (props) => {
    return (
        <div>
            <div className="row">
                <div className="com-titleWithfollow hlp-marginBottom-15">
                    <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
                </div>
            </div>
            <div className="row">
                <div className="cont_tags com-secondary-tag hlp-marginBottom-20">                
                    {
                    props.tags.map((tag, i) => (
                        <Tag tag={tag} key={i}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Taxonomy;