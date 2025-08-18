import { AddressElement } from "@stripe/react-stripe-js"

export const AddressForm = () => {
    return (
        <div className="flex flex-col gap-2">
            <h3>Address</h3>
            <AddressElement
            options={{
                mode:'shipping'
            }}
            onChange={(event) => {
                if(event.complete){
                    const address = event.value.address
                }
            }}
            />
        </div>
    )
}