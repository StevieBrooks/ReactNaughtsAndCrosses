export default function Button( { btnTitle, btnFunction } ) {
    return (<>
        <button onClick={btnFunction}>{btnTitle}</button>
    </>)
}