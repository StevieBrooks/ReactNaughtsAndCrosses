import Button from "./Button"

export default function DashBoard() {

    const resetFunc = () => {

    }

    return (

        <div className="dashboard w-96 m-auto bg-slate-300 flex justify-center">
            <Button btnTitle="Reset" btnFunction={resetFunc} />
        </div>

    )
}

