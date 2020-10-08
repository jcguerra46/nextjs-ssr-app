const Tag = (props) => {
    let ref = '/recetas/' + props.tag.slug;
    return (
        <a href={ref}>{props.tag.text} {props.tag.count}</a>
    )
}

export default Tag;