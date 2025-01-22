export const SectionBanner = ({children, desc}) => {
    return (
        <div className=' bg-dark m-5 p-5 rounded border border-primary'>
            <h2 className=' h1'>{children}</h2>
            <p className='text-info' >{desc}</p>

        </div>
    )
}