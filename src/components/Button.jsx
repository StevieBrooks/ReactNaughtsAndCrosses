export default function Button( { btnTitle, btnFunction, btnType } ) {
    return (<>
        <button type={btnType} onClick={btnFunction}>{btnTitle}</button>
    </>)
}