export default function Button( { btnTitle, btnFunction, btnType } ) {
    return (<>
        <button className={btnType == "submit" && "border border-orange bg-darkblue font-bold text-xl rounded-full m-5 py-1 transition-colors hover:text-yellow hover:border-yellow"} type={btnType} onClick={btnFunction}>{btnTitle}</button>
    </>)
}