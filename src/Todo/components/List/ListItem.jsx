import React from 'react';
import './ListItem.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

library.add ( faTrash );
library.add ( faCheck );

const ListItem = ({ item, onDelete, onSwitch, onItemChange }) => {
    return (
        <div className="list">
            <div className="listItem">
                <input onChange={(event) => onItemChange ( item.id, event.target.value )} value={item.name}/>
                <div onClick={() => onSwitch ( item.id )}><FontAwesomeIcon className="faicons check-mark" icon="check"/>
                </div>
                <div onClick={() => onDelete ( item.id )}><FontAwesomeIcon className="faicons trash-can" icon="trash"/>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
