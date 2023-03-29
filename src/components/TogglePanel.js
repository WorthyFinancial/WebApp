import { useState } from "react";

const [active, setActive] = useState(`modal`);

const onToggleClick = (e) => {
    let toggleClass = active ? 'active'  : 'modal';
}

export default {onToggleClick, active, setActive};
