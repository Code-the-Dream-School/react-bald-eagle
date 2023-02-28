import React, {useState} from 'react';

const Checkbox = () => {
    const [check, setCheck] = useState(false);
    return (
        <input 
            id="completed"
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
        />
    )
}

export default Checkbox;