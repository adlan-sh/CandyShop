import { PropsWithChildren, useState } from 'react'
import "./popover.scss";


const Popover = ({ children, trigger: Trigger }: PropsWithChildren<{ trigger: any }>) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Trigger onClick={() => setIsOpen(state => !state)}></Trigger>
            {isOpen && <>{children}</>
            }
        </>
    )
}

export default Popover



