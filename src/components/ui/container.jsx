export default function Container({children, ...props}){
    return(
        <section {...props}>
            {children}
        </section>
    )
}