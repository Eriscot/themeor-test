import React from 'react';
import { Align } from 'themeor';

export const SearchBox = (props) => (
    <>
        <Align hor="center">
            <input
                style={{width: '150px'}}
                type="search"
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
        </Align>
    </>
)