export default function Button( { btnTitle, btnFunction, btnType } ) {
    return (<>
        <button className={btnType == "submit" && "border border-orange bg-darkblue font-bold text-xl rounded-full m-3 py-1"} type={btnType} onClick={btnFunction}>{btnTitle}</button>
    </>)
}