import * as React from 'react';

export interface NameProps {
    salutation: string;
    firstname: string;
    lastname: string;
}

export const Name = (props:NameProps) =>  (
    <>{props.salutation} {props.firstname} {props.lastname}</>
)